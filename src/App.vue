<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #BAC8D3;
}

.app-container {
  margin: 0 auto;
  max-width: 980px;
}

.app-button {
  font-weight: bold;
  border-radius: 10px;
  color: white;
  background: #6D8764;
  text-align: center;
  border: none;
  cursor: pointer;
}

.app-label {
  font-size: 0.9rem;
  font-weight: bold;
}

.app-input {
  width: 100%;
  padding: 0.7em 0.5em;
}

.app-textarea {
  width: 100%;
  resize: none;
}

.app-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
