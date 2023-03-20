<template>
    <div class="grid">
      <div class="p-col-12 p-md-6 p-lg-3" v-for="car in cars" :key="car.id" style="margin-left: 10px">
        
        <!-- <h3>{{ car.name }}</h3> -->
        <Car
          @remove-car="$emit('remove-car', car.id)"
          @add-favorite="$emit('add-favorite', car.id)"
          :car="car"
        />
      </div>
    </div>
  </template>

<script>
import Car from "./Car"
export default {
    props: {
        cars: Array
    },
    components: { Car },
    emits: ["remove-car", "add-favorite"]
};
</script>

<style>

</style>