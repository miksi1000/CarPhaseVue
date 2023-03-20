<template>
    
        <div><DropDown v-model="selectedcity" :options="cities" optionLabel="name" optionValue="code" placeholder="Vælg Afdeling" /> </div>
        <p></p>
        <div></div>
        <div> Du har valgt afdelingskode: {{ selectedcity }}</div>


</template>





<script>

export default{
data(){
    return{
        selectedcity: null,
        cities: [
			{name: 'Hillerød', code: '3400'},
			{name: 'Odense', code: '5000'},
            {name: 'Kolding', code: '6000'},
    ],
    methods: {
        chooseDepartment(){
            if(selectedcity === 'Hillerød'){
                var textcity = 'Herunder vises alle biler indenfor Hillerød afdeling';

            }
        }
    }


    }
}


}



</script>
