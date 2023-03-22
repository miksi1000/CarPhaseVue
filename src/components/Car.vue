<template>
    <div class="car">
      <!-- <h3>{{ car.name }}</h3> -->
      <Card>
        <template #header>
          <img :src="car.url" alt="Car" />
        </template>
        <template #title>
          {{ car.name }}
          <div>{{ car.department_address }}</div>
        </template>
        <template #subtitle> registreringsnummer: {{ car.serialnumber }} </template>
        <!-- <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam repellat
            libero asperiores earum nam nobis, culpa ratione quam perferendis
            esse, cupiditate neque quas!
          </p>
        </template> -->
        <template #footer>
          <Button
            @click="onRemove(car.serialnumber)"
            icon="pi pi-times"
            label="Remove"
            class="p-button-danger"
            style="margin-right: 4em"
          />
        </template>
      </Card>
    </div>
  </template>

<script>
export default {
    props: {
        car: Object,
    },
    methods: {
        onRemove(serialnumber){
          //  console.log("clicked!", serialnumber);
           this.$emit("remove-car", serialnumber);
        }

    }

}
</script>

<style>
img {
    height: 250px;
    object-fit: cover;
}
</style>