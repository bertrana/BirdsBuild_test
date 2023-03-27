<script setup lang="ts">

interface FilterTypes {
  title: string
  id: string
}

const filters: FilterTypes[] = [
  {
    title: 'Все типы',
    id: 'all',
  },
  {
    title: 'Прямые продажи',
    id: 'direct-sales',
  },
  {
    title: 'Аукцион',
    id: 'auction',
  }
]
</script>

<template>
  <fieldset class="filter">
    <legend class="visually-hidden">Выберите тип предложения</legend>
    <div v-for="(filter, i) in filters" :key="i" class="filter__wrapper">
      <input 
        type="radio"
        name="offer-type"
        class="visually-hidden"
        :id="filter.id"
        :value="filter.id"
        >
      <label :for="filter.id">{{ filter.title }}</label>
    </div>
  </fieldset>
</template>

<style>
  fieldset.filter {
    display: flex;
    gap: 12px;

    margin: 0;
    padding: 12px;
    width: max-content;

    background: #F4F5F9;

    border: 1px solid #E0E3EE;
    border-radius: 10px;

    font-size: 15px;

  }

  .filter__wrapper {

    color: #969DC3;
  }

  .filter__wrapper:hover,
  .filter__wrapper:active {
    color: #2D3B87;
  }
</style>