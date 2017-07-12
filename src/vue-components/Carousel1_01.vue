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
    data () {
      return {
        items: store.items,
        cIndex: 0
      }
    },
    mounted: function () {
    },
    methods: {
      nextItem: function () {
      this.cIndex = this.cIndex + 1;
      this.cIndex = this.cIndex % this.items.length; // go to first
      return this.items[this.cIndex];
      // this.refresh();
    },
    prevItem: function () {
      if (this.cIndex === 0) {
      this.cIndex = this.items.length; // go to last
      }
      this.cIndex = this.cIndex - 1;
      return this.items[this.cIndex];
      // this.refresh();
      },
    customPage: function(index) {
      console.log(index);
    }
    } 
  }
</script>