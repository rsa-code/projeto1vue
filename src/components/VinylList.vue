<template>
    <ul class="items-list">
      <li 
        v-for="item in filteredItems" 
        :key="item.id" 
        :class="{ 'high-priority': item.highPriority, 'purchased': item.purchased }">
        
        <img :src="item.cover" alt="Capa do Álbum" class="album-cover" />
        <span>{{ item.label }} - <strong>{{ item.genre }}</strong></span>
  
        <button class="btn purchase-btn" @click="togglePurchased(item.id)">
          {{ item.purchased ? "❌" : "✔️" }}
        </button>
      </li>
    </ul>
  </template>
  
  <script setup>
 
  defineProps({
    filteredItems: Array,
    togglePurchased: Function
  });
  </script>
  
  <style scoped>
  .items-list {
    list-style: none;
    padding: 0;
  }
  
  .items-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .items-list li.purchased {
    text-decoration: line-through;
    opacity: 0.6;
  }
  
  .album-cover {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  </style>
  