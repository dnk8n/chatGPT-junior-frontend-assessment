import { reactive } from "vue";

export const store = reactive({
  coffee: {},
  setCoffee(coffee) {
    this.coffee.id = coffee.id;
    this.coffee.name = coffee.name;
    this.coffee.descriptionShort = coffee.description.short;
    this.coffee.descriptionLong = coffee.description.long;
    this.coffee.origin = coffee.origin;
    this.coffee.roastLevel = coffee.roast_level;
  },
});
