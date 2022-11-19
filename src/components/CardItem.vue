<script setup>
import { useRouter } from 'vue-router';

defineProps({ recipie: Object });

const { push } = useRouter();
const onViewRecipie = (id) => push(`/recipie/${id}`);

</script>
<template>
    <li class="app-recipie__listitem">
        <div class="app-card">
            <h2 class="app-card__heading">{{ recipie.name }}</h2>
            <p class="app-card__description">{{ recipie.description }}</p>
            <button v-on:click="onViewRecipie(recipie.id)" type="button" class="app-card__btnview app-button">
                View Recipie
            </button>
        </div>
    </li>
</template>
<style>
.app-recipie__listitem {
    width: 50%;
    margin-bottom: 1em;
}

.app-card {
    border: 1px solid #b46504;
    background-color: #fad7ac;
    border-radius: 16px;
    padding: 1em;
}

.app-recipie__listitem:nth-child(odd) {
    padding-right: 0.5em;
}

.app-recipie__listitem:nth-child(even) {
    padding-left: 0.5em;
}

.app-card__heading {
    font-size: 1.2rem;
    margin-bottom: 1em;
}

.app-card__description {
    margin-bottom: 1em;
}

.app-card__btnview {
    padding: 0.5em;
    font-size: 1rem;
}
</style>
