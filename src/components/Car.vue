<template>
  <div class="car" v-bind:class="{ 'red-card': isEditing }">
    <Card>
      <template #header>
        <img :src="car.url" alt="Car" />
      </template>
      <template #title>
        name: {{ car.name.slice(0, 5) }}
        <div>Address: {{ car.department_address }}</div>
        <div>Phase: {{ car.phase_name }}</div>
      </template>
      <template #subtitle>
        registreringsnummer: {{ car.serialnumber }}
      </template>
      <template #footer>
        <Button
          @click="onRemove(car.serialnumber)"
          icon="pi pi-times"
          label="Remove"
          class="p-button-danger"
          style="margin-right: 4em"
        />
        <Button
          v-if="!isEditing"
          @click="onEdit(car.serialnumber)"
          icon="pi pi-pencil"
          label="Edit"
          class="p-button-secondary"
          style="margin-right: 1em"
        />
        <div v-else>
          <InputText v-model="car.phase_name" />
          <Button
            @click="onSave"
            icon="pi pi-check"
            label="Save"
            class="p-button-success"
            style="margin-right: 1em"
          />
          <Button
            @click="onCancel"
            icon="pi pi-times"
            label="Cancel"
            class="p-button-secondary"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
export default {
  props: {
    car: Object,
  },
  data() {
    return {
      isEditing: false,
      editedCar: null,
    };
  },
  methods: {
    onRemove(serialnumber) {
      this.$emit("remove-car", serialnumber);
    },
    onEdit(serialnumber) {
      this.isEditing = true;
      this.editedCar = { ...this.car };
    },
    onSave() {
      this.$emit("save-car", this.car);
      this.isEditing = false;
    },
    onCancel() {
      // this.car = { ...this.editedCar };
      this.isEditing = false;
    },
  },
};
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