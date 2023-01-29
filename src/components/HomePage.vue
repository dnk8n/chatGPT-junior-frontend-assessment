<script>
import { ref } from 'vue'
import Coffees from './Coffees.vue'
export default {
  components: {
    Coffees
  }
}
</script>

<template>
  <Suspense>
    <template #default>
      <Coffees />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="read-the-docs">Learn more about using Deno and Vite.</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
