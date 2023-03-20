<template>
    <div class="car">
      <!-- <h3>{{ car.name }}</h3> -->
      <Card>
        <template #header>
          <img :src="car.url" alt="Car" />
        </template>
        <template #title>
          {{ car.name }}
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
            @click="onRemove(car.id)"
            icon="pi pi-times"
            label="Remove"
            class="p-button-danger"
            style="margin-right: 4em"
          />
          <Button
            @click="$emit('add-favorite', car.id)"
            icon="pi pi-heart"
            :class="[
              car.isFavorite ? '' : 'p-button-outlined',
              'p-button-rounded',
              'p-button-danger',
            ]"
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
        onRemove(id){
        //    console.log("clicked!", id);
           this.$emit("remove-car", id);
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