import { reactive } from "vue";

export const store = reactive({
  coffee: {},
  setCoffee(name, description) {
    this.coffee.name = name;
    this.coffee.description = description;
  },
});
