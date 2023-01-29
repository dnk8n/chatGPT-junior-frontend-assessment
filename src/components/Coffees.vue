<script>
import { ref } from 'vue'
import { store } from '../store.js'
export default ({
  async setup() {
    const res = await fetch(import.meta.env.VITE_COFFEE_API_URL || "http://localhost:8000/api")
    const coffees = await res.json();
    return {
      coffees
    }
  },
  data() {
    return {
      store
    }
  }
})
</script>

<template>
  <div class="container">
    <div v-for="coffee in coffees" class="coffee-wrapper">
      <span class="coffee">
        <router-link :to="{ name: 'Coffee', params: { coffee: `${coffee.name.toLowerCase()}` }}">
          <span @click="store.setCoffee(coffee.name, coffee.description.long)">
            {{coffee.name}}
          </span>
        </router-link>
      </span>
    </div>
  </div>
</template>

<style scoped>
.coffee {
}
.coffee-wrapper {
  display: inline-block;
  margin: 0.15rem 1rem;
  padding: 0.15rem 1rem;
}
.container {
  text-align: left;
}
</style>
