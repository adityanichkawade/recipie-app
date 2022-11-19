<script setup>
import Modal from "./Modal.vue";
import CardList from "./CardList.vue";
import { useToggle, useRecipie } from "../hooks";

const { state, toggle } = useToggle(false);
const { recipies, onAdd } = useRecipie();
const onCloseModal = () => toggle();
const onShowModal = () => toggle(true);
const onSaveModal = (data) => {
  onAdd(data);
  toggle();
};
</script>
<template>
  <div class="app-container">
    <h1 class="app-container__heading">Recipies</h1>
    <div class="app-container__addrecipie">
      <button type="button" v-on:click="onShowModal" class="app-container__btn app-button">
        Add New Recipie
      </button>
    </div>
    <template v-if="recipies.allIds.length">
      <CardList v-bind:recipies="recipies" />
    </template>
  </div>
  <template v-if="state">
    <Modal v-on:on-close="onCloseModal" v-on:on-save="onSaveModal" />
  </template>
</template>

<style scoped>
.app-container__heading {
  padding-top: 1em;
  text-align: center;
}

.app-container__btn {
  padding: 0.8em;
  font-size: 1rem;
}

.app-container__addrecipie {
  padding-top: 1.5em;
  text-align: center;
  margin-bottom: 3em;
}
</style>
