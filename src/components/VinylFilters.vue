<template>
    <div class="filters">
      <input 
        v-model="localSearchQuery" 
        type="text" 
        placeholder="Pesquisar por item..." 
        class="search-bar" 
        @input="updateSearchQuery" 
      />
      <select 
        v-model="localGenreFilter" 
        class="genre-filter" 
        @change="updateGenreFilter"
      >
        <option value="">Filtrar por Estilo</option>
        <option value="Rock">Rock</option>
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="Indie">Indie</option>
        <option value="Jazz">Jazz</option>
        <option value="Pop">Pop</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  
  const props = defineProps({
    searchQuery: String,
    genreFilter: String
  });
  
  
  const localSearchQuery = ref(props.searchQuery);
  const localGenreFilter = ref(props.genreFilter);
  
  
  const emit = defineEmits(['update-search-query', 'update-genre-filter']);
  
  const updateSearchQuery = () => {
    emit('update-search-query', localSearchQuery.value);
  };
  
  const updateGenreFilter = () => {
    emit('update-genre-filter', localGenreFilter.value);
  };
  
  
  watch(() => props.searchQuery, (newVal) => {
    localSearchQuery.value = newVal;
  });
  
  watch(() => props.genreFilter, (newVal) => {
    localGenreFilter.value = newVal;
  });
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .search-bar {
    padding: 5px;
    font-size: 16px;
    width: 200px;
  }
  
  .genre-filter {
    padding: 5px;
    font-size: 16px;
  }
  </style>
  