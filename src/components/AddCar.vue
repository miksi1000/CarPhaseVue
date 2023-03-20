<template>
    <div style="margin-top: 30px"></div>
    <form @submit="onSubmit" class="formgroup-inline">
        <div class="field">
            <label for="name" class="p-sr-only">Navn</label>
            <input v-model="name" id="name" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Name">
        </div>
        <div class="field">
            <label for="serialnumber" class="p-sr-only">serialnumber</label>
            <input v-model="serialnumber" id="serialnumber" type="number" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Registeringsnummer">
        </div>
        <!-- <div class="field">
            <label for="url" class="p-sr-only">Billede</label>
            <input v-model="url" id="url" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Image URL">
        </div> -->
        <div class="field">
            <label for="phasestart" class="p-sr-only">phasestart</label>
            <input v-model="phasestart" id="phasestart" type="date" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Phase Start">
        </div>
        <div class="field">
            <label for="Platenumber" class="p-sr-only">platenumber</label>
            <input v-model="platenumber" id="platenumber" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Plate number">
        </div>
        <div class="field">
            <label for="phasename" class="p-sr-only">phasename</label>
            <input v-model="phasename" id="phasename" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Phase name">
        </div>
        <div class="field">
            <label for="departmentaddress" class="p-sr-only">departmentaddress</label>
            <input v-model="departmentaddress" id="departmentaddress" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" placeholder="Department address">
        </div>
        <button v-tooltip.right="'Tryk for at gemme'" type="submit" class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Save</button>
        
    </form>
    
    
    </template>
    
    <script>
    export default {
        name: "AddCar",
        data(){
            return {
                name: "",
                serialnumber: "",
                phasestart: "",
                platenumber: "",
                phasename: "",
                departmentaddress: "",
                isFavorite: false,
            }
        },
        emits: ["add-car"],
        methods: {
            onSubmit(e) {
                e.preventDefault();
    
                const newCar = {
                    // id: Math.random(),
                    name: this.name,
                    serialnumber: this.serialnumber,
                    phasestart: this.phasestart,
                    platenumber: this.platenumber,
                    phasename: this.phasename,
                    departmentadress: this.departmentaddress,
                    // isFavorite: false
                }
    
                // console.log("new car", newCar);
                this.$emit("add-car", newCar)
    
                this.name = "";
                this.serialnumber = "";
                this.phasestart = "";
                this.platenumber = "";
                this.phasename = "";
                this.departmentaddress = "";
    
            }
        }
    }
    </script>
    
    <style>
    
    </style>