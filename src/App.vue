<template>
  <div class="container">
    <DarkModeToggle />

    <h1>{{ header }}</h1>

    <button v-if="!editing" class="btn add-btn" @click="editing = true">Adicionar Vinil</button>

    <transition name="slide-up">
      <div v-if="editing" class="modal-overlay">
        <VinylForm @close="editing = false" @save="addItem" />
      </div>
    </transition>

    <!-- Passando searchQuery e genreFilter como props -->
    <Filters 
      :searchQuery="searchQuery" 
      :genreFilter="genreFilter" 
      @update-search-query="updateSearchQuery" 
      @update-genre-filter="updateGenreFilter" 
    />

    <VinylList :filteredItems="filteredItems" :togglePurchased="togglePurchased" />

    <p v-if="!items.length" class="empty-message">Nenhum item encontrado!</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import VinylForm from './components/VinylForm.vue';
import Filters from './components/VinylFilters.vue';
import VinylList from './components/VinylList.vue';

const header = ref('Lista de Vinis Para Comprar');
const editing = ref(false);
const searchQuery = ref('');
const genreFilter = ref('');

const items = ref([]);
const savedItems = localStorage.getItem('vinylItems');
if (savedItems) {
  items.value = JSON.parse(savedItems);
}

watch(items, () => {
  localStorage.setItem('vinylItems', JSON.stringify(items.value));
}, { deep: true });

const filteredItems = computed(() => {
  return items.value.filter(item => {
    const matchesSearch = item.label.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesGenre = genreFilter.value ? item.genre === genreFilter.value : true;
    return matchesSearch && matchesGenre;
  });
});

const addItem = (newItem) => {
  const newVinyl = {
    id: items.value.length + 1,
    ...newItem,
    purchased: false
  };
  items.value.push(newVinyl);
  localStorage.setItem('vinylItems', JSON.stringify(items.value));
  editing.value = false;
};

const togglePurchased = (id) => {
  const item = items.value.find(vinyl => vinyl.id === id);
  if (item) {
    item.purchased = !item.purchased;
  }
};

// Funções para atualizar searchQuery e genreFilter
const updateSearchQuery = (newQuery) => {
  searchQuery.value = newQuery;
};

const updateGenreFilter = (newGenre) => {
  genreFilter.value = newGenre;
};
</script>
