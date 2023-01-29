<script>
import { store } from '../store.js';
export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  Name: {{ store.coffee.name }}
  <br />
  Description: {{ store.coffee.description }}
</template>
