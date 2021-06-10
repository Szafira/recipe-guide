<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Recipe Guide</ion-title>
        
      </ion-toolbar>
      <ion-toolbar>
      <ion-label position="floating">Wyszukiwanie</ion-label>
      <ion-input type="text" v-model="inputVal" placeholder="Pick up ingredients"></ion-input>
      <ion-button name="searchButton" v-on:click="getUrl" > Wyszukaj </ion-button>      
      </ion-toolbar>
      
    </ion-header>
        
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Recipe Guide</ion-title>
        </ion-toolbar> 
      </ion-header>
      <ion-list>
        <RecipeListItem v-for="result in results" :key="result.id" :result="result" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar,IonButton,IonInput,IonLabel  } from '@ionic/vue';
import RecipeListItem from '@/components/RecipeListItem.vue';
import { defineComponent } from 'vue';
import { getResults } from '@/data/ApiResults';
const inputVal = ['inputVal'];
const XMLHttpRequest = require("./../../node_modules/xmlhttprequest").XMLHttpRequest;

const request = new XMLHttpRequest()
const urlBase ="http://www.recipepuppy.com/api/?i=";

export default defineComponent({
  name: 'Home',
  props:
    ['value'],
  data() {
    return {
      results: getResults(),  
      inputValue: ['inputVal']
    }
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
      }
      
    },
   getUrl: function(){
  const ingredients = inputVal;
  const fullUrl = urlBase + ingredients;
  const fs = require('fs');
  console.log(fullUrl);

  request.open('GET', fullUrl, true)

  request.onload = function () {
    // Begin accessing JSON data here
    const data = this.responseText;
    const parsed = JSON.parse(data);
    const jsonToString = JSON.stringify(parsed.results)

    console.log(parsed.results);  

  //Zapisanie do pliku
  const readyToFile = "export interface Result {\ntitle: string;\nthumbnail: string;\ningredients: string;\nhref: string;\n} \nconst results: Result[] = \n"+ jsonToString + "\n\nexport const getResults = () => results;";

 fs.writeFile('ApiResults.ts', readyToFile, (err: any) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");

  }); 
  };
  request.send()
  },

    headers: {
    "Access-Control-Allow-Origin": "*",
 },
  
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,

    IonLabel,
    IonInput,
    IonButton,
    
    RecipeListItem
  },
});
</script>
<style scoped>
ion-toolbar {
    --background: var(--ion-color-tertiary);
    --color: var(--ion-color-tertiary-contrast);
  }
</style>