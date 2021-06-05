<template>
  <ion-item v-if="result" :routerLink="'/result/' + result.id" :detail="false" class="list-item">
    
    <ion-label class="ion-text-wrap">
          <ion-thumbnail slot="start">
      <ion-img :src="result.thumbnail"></ion-img>
    </ion-thumbnail>
      

      <h2>
        {{ result.title }}
        
          
          <ion-icon :icon="chevronForward" size="small" v-if="isIos()"></ion-icon>
        
      </h2>
      <h3>{{ result.ingredients }}</h3>
      <ion-button :href="result.href" color="secondary"  >Przepis</ion-button>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RecipeListItem',
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    
  },
  props: {
    result: Object,
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === 'ios';
    }
  },
  data() {
    return { chevronForward }
  }
});
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item  h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}



.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}


</style>