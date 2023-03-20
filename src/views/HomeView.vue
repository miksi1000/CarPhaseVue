<template>
  <Department/>
  <AddCar @add-car="addCar"  /> 
  <Cars @remove-car="removeCar" @add-favorite="addFavorite" :cars="cars" />
</template>

<script>
import Cars from "../components/Cars"
import AddCar from "../components/AddCar"
import Department from "../components/Department"
export default {
  name: 'HomeView',
  components: { Cars, AddCar, Department },
  methods: {
    async addCar(car) {
      const res = await fetch("http://127.0.0.1:8000/car/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(car)
      })

      const data = await res.json();
      this.cars = [...this.cars, data]
    },
    async removeCar(id) {
      if (confirm("Are you sure you want to remove this Car?")) {
        const res = await fetch(
          `https://63f36704fe3b595e2ee11976.mockapi.io/cars/${id}`,
          {
            method: "DELETE",
          }
        );

        res.status === 200
          ? (this.cars = this.cars.filter((car) => car.id !== id))
          : alert("Delete failed!");
      }
    },
    async addFavorite(id) {
      const addFavorite = await this.fetchCar(id);
      const updatedFavorite = {
        ...addFavorite,
        isFavorite: !addFavorite.isFavorite,
      };
      const res = await fetch(
        `https://63f36704fe3b595e2ee11976.mockapi.io/cars/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedFavorite),
        }
      );
      const data = await res.json();

      this.cars = this.cars.map((car) =>
        car.id === id ? { ...car, isFavorite: data.isFavorite } : car
      );
    },
    async fetchCars(){
      const res = await fetch("http://127.0.0.1:8000/car/")
      const data = await res.json();
      return data
    },
    async fetchCar(id){
      const res = await fetch(`https://63f36704fe3b595e2ee11976.mockapi.io/cars/${id}`)
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