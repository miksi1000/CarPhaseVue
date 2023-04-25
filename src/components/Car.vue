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
          <div>{{ car.phase_name }}</div>
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
          <Button
    @click="onEdit(car.serialnumber)"
    icon="pi pi-pencil"
    label="Edit"
    class="p-button-secondary"
    style="margin-right: 1em"
  />
        </template>
      </Card>
    </div>
  </template>

<script>
export default {
  props: {
    cars: [],
    car: Object,
  },
  data() {
    return {
      isEditing: false // add isEditing as a data property with a default value of false
    }
  },
  methods: {
    onRemove(serialnumber){
      this.$emit("remove-car", serialnumber);
    },
    onEdit(serialnumber){
      this.isEditing = true; // update isEditing property to true
    },
  }
}
</script>

<style>
img {
    height: 250px;
    object-fit: cover;
}

.red-card {
  border: 2px solid red;
}


</style>