<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
      <div class="flex align-items-center">
        <Checkbox
          v-model="pizza"
          inputId="ingredient1"
          name="pizza"
          value="Cheese"
        />
        <label for="ingredient1" class="ml-2"> Cheese </label>
      </div>
      <div class="flex align-items-center">
        <Checkbox
          v-model="pizza"
          inputId="ingredient2"
          name="pizza"
          value="Mushroom"
        />
        <label for="ingredient2" class="ml-2"> Mushroom </label>
      </div>
      <div class="flex align-items-center">
        <Checkbox
          v-model="pizza"
          inputId="ingredient3"
          name="pizza"
          value="Pepper"
        />
        <label for="ingredient3" class="ml-2"> Pepper </label>
      </div>
      <div class="flex align-items-center">
        <Checkbox
          v-model="pizza"
          inputId="ingredient4"
          name="pizza"
          value="Onion"
        />
        <label for="ingredient4" class="ml-2"> Onion </label>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      pizza: null,
    };
  },
};
</script>