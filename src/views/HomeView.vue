<template>
  <!-- <Department @fetch-cardepartment="fetchCarDepartment"/> -->
  <!-- <check/> -->
  <AddCar @add-car="addCar"  /> 
  <Cars @remove-car="removeCar"  :cars="cars" />
  
</template>

<script>
import Check from "@/components/Check.vue"
import Cars from "../components/Cars"
import AddCar from "../components/AddCar"
import Department from "../components/Department"

export default {
  name: 'HomeView',
  components: { Cars, AddCar, Department, Check },
  methods: {
    

    async addCar(car) {
      const res = await fetch("http://127.0.0.1:8000/cars/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(car)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
    async removeCar(serialnumber) {
      if (confirm("Are you sure you want to remove this Car?")) {
        const res = await fetch(
          `http://127.0.0.1:8000/cars/${serialnumber}/`,
          {
            method: "DELETE",
          }
        );
        res.status === 204
          ? (this.cars = this.cars.filter((car) => car.serialnumber !== serialnumber))
          : alert("Delete failed!");
      }
    },
    // async addFavorite(id) {
    //   const addFavorite = await this.fetchCar(id);
    //   const updatedFavorite = {
    //     ...addFavorite,
    //     isFavorite: !addFavorite.isFavorite,
    //   };
    //   const res = await fetch(
    //     `https://63f36704fe3b595e2ee11976.mockapi.io/cars/${id}`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify(updatedFavorite),
    //     }
    //   );
    //   const data = await res.json();

    //   this.cars = this.cars.map((car) =>
    //     car.id === id ? { ...car, isFavorite: data.isFavorite } : car
    //   );
    // },
    async fetchCars(){
      const res = await fetch("http://127.0.0.1:8000/cars/")
      const data = await res.json();
      return data
    },
    async fetchCar(serialnumber){
      const res = await fetch(`http://127.0.0.1:8000/cars/${serialnumber}`)
      const data = await res.json();
      return data
    },
    async fetchCarDepartment(selectedcity){
      const res = await fetch(`http://127.0.0.1:8000/cars/department/${selectedcity}/`)
      const data = await res.json();
      return data
    },
    
  },
  data() {
    return {
      cars: [],
    };
  },
  async created() {
    this.cars = await this.fetchCars();

  }
}
</script>