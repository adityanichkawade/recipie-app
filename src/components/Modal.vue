<script setup>
import { reactive, ref } from 'vue';

const emit = defineEmits(['onClose', 'onSave']);
const state = reactive({
    name: '',
    description: '',
    ingredients: [],
    steps: [],
})

const ingredient = ref('');
const method = ref('');

const onModalClose = () => emit('onClose');
const onSaveModal = () => {
    if (!state.id) {
        state.id = Date.now();
    }
    emit('onSave', state);
}
const onAddIngredient = () => ingredient.value && state.ingredients.push({ id: Date.now(), name: ingredient.value })
const onAddMethod = () => method.value && state.steps.push({ id: Date.now(), name: method.value })
const onDeleteIngredient = (id) => state.ingredients = state.ingredients.filter(item => item.id !== id);
const onDeleteStep = (id) => state.steps = state.steps.filter(item => item.id !== id);

</script>
<template>
    <div class="app-overlay">
        <form v-on:submit.prevent="onSaveModal" class="app-modal">
            <div class="app-modal__header">
                <button type="button" v-on:click="onModalClose" class="app-modal__closebtn">&#10006;</button>
            </div>
            <p class="app-modal__group">
                <label class="app-label" for="recipie-name">Name</label>
                <input v-model="state.name" class="app-input" id="recipie-name" name="recipie-name" />
            </p>
            <p class="app-modal__group">
                <label class="app-label" for="recipie-description">Description</label>
                <textarea v-model="state.description" rows="5" class="app-textarea" id="recipie-description"
                    name="recipie-description"></textarea>
            </p>
            <p class="app-modal__group">
                <label class="app-label" for="recipie-ingredients">Ingredients</label>
            <div class="app-modal__inputbtngroup">
                <input v-model="ingredient" class="app-modal__ingredientsinput" id="recipie-ingredients"
                    name="recipie-ingredients" />
                <button v-on:click="onAddIngredient" type="button"
                    class="app-modal__ingredientsbtn app-button">Add</button>
            </div>
            <ul v-if="state.ingredients.length" class="app-modal__ingredientstaglist app-list">
                <li v-for="item in state.ingredients" v-bind:key="item.id" class="app-modal__ingredientstaglistitem">{{
                        item.name
                }}<button type="button" v-on:click="onDeleteIngredient(item.id)"
                        class="app-modal__ingredientstaglistbtn">X</button>
                </li>
            </ul>
            </p>
            <p class="app-modal__method">
                <label class="app-label" for="recipie-method">Method (Steps)</label>
                <textarea v-model="method" rows="5" class="app-textarea" id="recipie-description"
                    name="recipie-description"></textarea>
            <div class="app-modal__methodbtncontainer">
                <button type="button" v-on:click="onAddMethod" class="app-button app-modal__methodbtn">Add</button>
            </div>
            <ol type="1" v-if="state.steps.length" class="app-modal__stepslist">
                <li v-for="step in state.steps" v-bind:key="step.id" class="app-modal__steplistitem">
                    <span>{{ step.name }}</span>
                    <button v-on:click="onDeleteStep(step.id)" type="button"
                        class="app-button app-modal__deletebtn">Delete</button>
                </li>
            </ol>
            </p>
            <button class="app-modal__btnsave app-button" type="submit">Save</button>
        </form>
    </div>
</template>
<style>
.app-overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(108, 122, 137, 0.5);
}

.app-modal {
    background-color: #DAE8FC;
    width: 800px;
    margin: 1em auto;
    padding: 0 1em;
    padding-bottom: 1em;
    overflow-y: auto;
}

.app-modal__header {
    display: flex;
    justify-content: flex-end;
}

.app-modal__closebtn {
    border: none;
    padding: 0.3em;
    font-size: 1.5rem;
    background: none;
    cursor: pointer;
}

.app-modal__group {
    margin-top: 0;
}

.app-modal__group+.app-modal__group {
    margin-top: 2em;
}

.app-modal__ingredientsinput {
    padding: 0.7em 0.5em;
    flex: 1;
}

.app-modal__ingredientsbtn {
    padding: 0.5em 2em;
    margin-left: 1em;
}

.app-modal__inputbtngroup {
    display: flex;
}

.app-modal__ingredientstaglist {
    display: flex;
    margin-top: 0.5em !important;
    flex-wrap: wrap;
    max-height: 50px;
    overflow-y: auto;
}

.app-modal__ingredientstaglistitem {
    background-color: #FAD9D5;
    margin-right: 0.5em;
    border-radius: 5px;
    padding-left: 1em;
    margin-bottom: 0.5em;
}

.app-modal__ingredientstaglistbtn {
    background-color: #ec9085;
    border: none;
    padding: 0.7em;
    margin-left: 1em;
    text-align: center;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.app-modal__method {
    margin-top: 1em;
}

.app-modal__methodbtncontainer {
    text-align: right;
}

.app-modal__methodbtn {
    text-align: right;
    padding: 0.7em 2em;
}

.app-modal__stepslist {
    padding: 0.5;
    margin: 0;
    margin-top: 1em !important;
    max-height: 50px;
    overflow-y: auto;
}

.app-modal__deletebtn {
    padding: 0.7em 2em;
    background-color: red !important;
}

.app-modal__steplistitem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 0.5em;
}

.app-modal__btnsave {
    width: 100%;
    margin-top: 1em;
    padding: 1em;
}
</style>