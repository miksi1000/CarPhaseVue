import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import DropDown from 'primevue/dropdown';
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext"
import Chart from 'primevue/chart'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'    //icons
import '/node_modules/primeflex/primeflex.css'  



const app = createApp(App);
app.use(PrimeVue,{ripple: true});
app.use(router);
app.use(VueAxios, axios);

app.component('DropDown', DropDown);
app.component("Button", Button);
app.component("Card", Card);
app.component("InputText", InputText);
app.component('Chart', Chart);


app.mount('#app');
