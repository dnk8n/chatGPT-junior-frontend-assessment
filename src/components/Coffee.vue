<script>
import { store } from '../store.js';
export default {
  methods: {
    close() {
      this.$emit('close');
    },
  },
  emits: ['close'],
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="coffee-detail-background" @click="$emit('close')">
    <div class="coffee-detail">
      <h3 class="name">{{ store.coffee.name }}</h3>
      <p class="descriptionLong">{{ store.coffee.descriptionLong }}</p>
      <div class="close-button" @click="$emit('close')"></div>
    </div>
  </div>
</template>
