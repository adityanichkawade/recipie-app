<script setup>
import { useRoute, useRouter } from "vue-router";
import { useRecipie } from "../hooks";

const route = useRoute();
const router = useRouter();

const { getById } = useRecipie();
const data = getById(route.params.id);

const onBackClick = () => {
    router.push('/');
}

</script>
<template>
    <div class="app-container">
        <button class="app-btn-back" v-on:click="onBackClick">Back to main page</button>
        <h1 class="app-heading-main">{{ data.name }}</h1>
        <h2 class="app-subheading">Description</h2>
        <p class="app-description">{{ data.description }}</p>
        <hr />
        <h2 class="app-subheading">Ingredients</h2>
        <ul class="app-ingredientlist">
            <li v-for="ingredient in data.ingredients" v-bind:key="ingredient.id">{{ ingredient.name }}</li>
        </ul>
        <hr />
        <h2 class="app-subheading">Steps</h2>
        <ol class="app-steplist">
            <li v-for="step in data.steps" v-bind:key="step.id">{{ step.name }}</li>
        </ol>
    </div>
</template>
<style>
hr {
    border: 1px solid black;
}

.app-heading-main {
    text-align: center;
    margin: 0;
    margin-top: 1em;
    margin-bottom: 1.5em;
    font-size: 1.5em;
}

.app-subheading {
    font-size: 1.1em;
    margin-top: 1em;
    padding-bottom: 1em;
}

.app-ingredientlist {
    padding: 0;
    margin: 0;
    margin-left: 2em;
    padding-bottom: 1em;
}

.app-steplist {
    margin-left: 2em;
}

.app-description {
    margin-bottom: 1em;
}

.app-btn-back {
    margin-top: 1em;
    background: none;
    color: black;
    border: none;
    font-weight: bold;
    cursor: pointer;
}

.app-btn-back:hover {
    text-decoration: underline;
}
</style>
