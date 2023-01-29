<script>
import { store } from '../store.js'
import Coffee from './Coffee.vue';

export default ({
  components: {
    Coffee
  },
  async setup() {
    const res = await fetch(import.meta.env.VITE_COFFEE_API_URL || "http://localhost:8000/api")
    const coffees = await res.json();
    return { coffees }
  },
  data() {
    return { store, showModal: false }
  },
});
</script>

<template>
  <h1>Coffees</h1>
  <div class="coffee-tiles">
    <div class="coffee" v-for="coffee in coffees" :key="coffee.id" @click="store.setCoffee(coffee); showModal = true">
      <div>
        <h3 class="name">{{ coffee.name }}</h3>
        <p class="descriptionShort">{{ coffee.description.short }}</p>
        <p class="origin">{{ coffee.origin.join(" / ") }}</p>
        <p class="roastLevel">{{ coffee.roast_level }}</p>
      </div>
    </div>
      <Coffee v-if="showModal" @close="showModal = false" />
  </div>
</template>
