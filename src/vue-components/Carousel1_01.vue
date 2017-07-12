<template>
  <div>
    <div>
      {{ items[cIndex].itemName }}
    </div>
  </div>
</template>
<script>
import {store} from "../js/store.js";
  export default {
    data () {
      return {
        items: store.items,
        cIndex: 0
      }
    },
    mounted: function () {
      console.log("Carousel1_01.vue mounted");
      // console.log(this.cIndex);
    } 
  }
</script>