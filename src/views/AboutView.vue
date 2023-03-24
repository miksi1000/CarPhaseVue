<template>
  <div class="about">
<bar/>
  </div>
</template>


<script>

import StatsCar from '@/components/StatsCar.vue';
import Car from '@/components/Car.vue';
import bar from '@/components/bar.vue';
export default{ data(){
  return {
    mikkel: 0,
  }

},
  components: {StatsCar, Car, bar},

  methods:{

    async fetchCars(Save){
      const res = await fetch("http://127.0.0.1:8000/cars/")
      const data = await res.json();
      console.log('Success:', data)
      Save = data.length;
      console.log(chartData)

      return data.length
      
    }
  }
}

//     async created() {
//     await this.fetchCars();
//     }
//   },
//   props: {
//     save: number,
//   }
// }


</script>