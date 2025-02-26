<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['close', 'save']); 

const newVinyl = ref({
  label: '',
  genre: '',
  highPriority: false,
  cover: ''
});

const submitForm = () => {
  if (!newVinyl.value.label || !newVinyl.value.genre) {
    alert('Please fill every field.');
    return;
  }

  emit('save', newVinyl.value);
  newVinyl.value = { label: '', genre: '', highPriority: false, cover: '' };
};

const closeForm = () => {
  emit('close');
};
</script>



<template>
  <div class="form-container">
    <h2>Adicionar Novo Vinil</h2>
    <span class="title">Nome do Vinil:</span>

    <input v-model="newVinyl.label" type="text" placeholder="Ex: Niravna - Nevermind" />

    <label>Gênero:</label>
    <select v-model="newVinyl.genre">
      <option value="">Selecione um gênero</option>
      <option value="Rock">Rock</option>
      <option value="Hip-Hop">Hip-Hop</option>
      <option value="Indie">Indie</option>
      <option value="Jazz">Jazz</option>
      <option value="Pop">Pop</option>
    </select>

    <label>Imagem da Capa (URL):</label>
    <input v-model="newVinyl.cover" type="text" placeholder="URL da capa do álbum" />

    <label class="checkbox-container">
      <input type="checkbox" v-model="newVinyl.highPriority" class="checkbox-input" />
      <span class="checkbox-label">Alta Prioridade</span>
    </label>

    <div class="button-group">
      <button @click="submitForm" class="btn add-btn">Adicionar</button>
      <button @click="closeForm" class="btn cancel-btn">Cancelar</button>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -50px; 
}

.title{
  color: #333;
  font-weight: bold;

}

.input-field, .select-field {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}


.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  accent-color: #007bff;
}

.checkbox-label {
  font-size: 14px;
  color: #333;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.btn {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.add-btn {
  background-color: #007bff;
  color: white;
}

.cancel-btn {
  background-color: #dc3545;
  color: white;
}
</style>
