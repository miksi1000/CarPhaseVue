<template>
<div>
    <button v-on:click="addOne()">Click Me!</button>
    <div>{{ numb }}</div>
</div>

</template>


<script>
export default{
    data(){
        return{
            numb: 2,
        }
    },
    methods: {
        addOne(){
            this.numb++;
        }
    }

}


</script>