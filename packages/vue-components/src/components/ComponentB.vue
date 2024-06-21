<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div>
    <label>Counter:</label>
    <button @click="count++"></button>
    <span>{{ count }}</span>
    <button @click="count--"></button>
  </div>
</template>

<style scoped></style>
