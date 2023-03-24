<template>
   <div><DropDown v-model="selectedcity" :options="cities" optionLabel="name" optionValue="code" placeholder="Vælg Afdeling" /> </div>
        <p></p>
        <div v-if="selectedcity === kolding" v-for="car in cars"></div>
    <div class="grid">
      <div class="p-col-12 p-md-6 p-lg-3" v-for="car in cars" :key="car.serialnumber" style="margin-left: 10px">
        
        <!-- <h3>{{ car.name }}</h3> -->
        <Car
          @remove-car="$emit('remove-car', car.serialnumber)"
          :car="car"
        />
      </div>
    </div>
  </template>

<script>
import Car from "./Car"
export default {
  data(){
    return{
      checked: true,
      selectedcity: null,
        cities: [
			{name: 'Hillerød', code: '3400'},
			{name: 'Odense', code: '5000'},
            {name: 'Kolding', code: '6000'},
    ],
    }
  },
    props: {
        cars: Array
    },
    components: { Car },
    emits: ["remove-car"],
    methods: {
      
    }
};
</script>

<style>

</style>