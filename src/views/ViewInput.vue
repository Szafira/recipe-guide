<template>

  <ion-item>
    <ion-label position="floating">Wyszukiwanie</ion-label>
    <ion-input></ion-input>
  </ion-item>

<div padding>
    <button ion-button round (click)="post()"> Wyszukaj </button>
</div>

</template>


<script>
import { IonLabel, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ViewInput',
  components: { IonLabel, IonInput, IonItem }
});
</script>