<script>
import Coffees from './Coffees.vue'
export default {
  components: { Coffees }
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
</template>
