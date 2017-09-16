<template>
  <div>
    <div>
      {{ items[cIndex].itemName }}
    </div>
    <span v-for="(i, index) in items">
      <button v-on:click="customPage(index)">{{ index }}</button>
    </span>
    <button v-on:click="prevItem">previous</button>
    <button v-on:click="nextItem">next</button>
  </div>
</template>
<script>
import {store} from "../js/store.js";
  export default {
  data() {
      return {
        items: store.items,
        cIndex: 0
      };
    },
    mounted: function () {},
    methods: {
      nextItem: function () {
        let cIndex = this.cIndex; 
        let items = this.items;
        cIndex = cIndex + 1;
        cIndex = cIndex % items.length; // go to first        
        // return items[cIndex];
        this.cIndex = cIndex;
      },
      prevItem: function () {
        let cIndex = this.cIndex;
        let items = this.items;
        if (cIndex === 0) {
          cIndex = items.length; // go to last
        }
        cIndex = cIndex - 1;
        // return this.items[cIndex];
        this.cIndex = cIndex;
      },
      customPage: function (index) {
        this.cIndex = index;
      }
    }
};
</script>