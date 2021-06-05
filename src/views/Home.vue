<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Recipe Guide</ion-title>
        
      </ion-toolbar>
      <ion-toolbar>
<<<<<<< Updated upstream
      <ion-searchbar></ion-searchbar>
=======
      <ion-label position="floating">Wyszukiwanie</ion-label>
      <ion-input type="text" v-model="inputVal">{{value}}</ion-input>
      <ion-button name="searchButton"> Wyszukaj </ion-button>      
>>>>>>> Stashed changes
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
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar,  } from '@ionic/vue';
import RecipeListItem from '@/components/RecipeListItem.vue';
import { defineComponent } from 'vue';
import { getResults } from '@/data/ApiResults';

export default defineComponent({
  name: 'Home',
  props:
    ['value'],
  data() {
    return {
      results: getResults()
    }
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    },
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