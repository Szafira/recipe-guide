<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Recipe Guide</ion-title>
        
      </ion-toolbar>
      <ion-toolbar>
      <ion-label position="floating">Search</ion-label>
      <div id="container">
        <ion-searchbar v-on:keyup.enter="getSearch(inputVal)" color="light" v-model="inputVal" placeholder="Search by ingredients"></ion-searchbar>
        <ion-button v-on:keyup.enter="getSearch(inputVal)" @click="getSearch(inputVal)">Search</ion-button>
      </div>
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
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar,IonButton,IonSearchbar,IonLabel  } from '@ionic/vue';
import RecipeListItem from '@/components/RecipeListItem.vue';
import { defineComponent } from 'vue';
import { getResults } from '@/data/ApiResults';
import ApiCall from '@/data/ApiCall';

//const AddInputValue() = set InputVal;
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
    async getSearch(payload: any) {
      this.ApiCall(this.inputValue);
    },
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

    IonLabel,
    IonSearchbar,
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