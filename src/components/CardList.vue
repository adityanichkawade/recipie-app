<script setup>
import CardItem from "./CardItem.vue";
defineProps({ recipies: Array });
</script>
<template>
    <ul class="app-recipie__list">
        <CardItem v-for="recipieId in recipies.allIds" v-bind:key="recipieId"
            v-bind:recipie="recipies.data[recipieId]" />
    </ul>
</template>
<style>
.app-recipie__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}
</style>
