<template>
<div class="vueCarousel101">
  <div class="vueCarousel101_content">
    {{ items[cIndex].itemName }}
  </div>
  <nav class="vueCarousel101_pagination" >
    <button v-for="(i, index) in items" class="vueCarousel101_pagebuttons" v-on:click="customPage(index)">{{ index }}</button>
  </nav>
  <div class="vueCarousel101_prevnext">
    <button class="vueCarousel101_previous" v-on:click="prevItem">
    <svg xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
  </svg>
  <span>Previous</span>
  </button>
  <button class="vueCarousel101_next" v-on:click="nextItem"><span>Next</span>
  <svg xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
  </button>
</div>
</div>
</template>
<script>
// import {store} from "../js/store.js";
  export default {
  data() {
      return {
        items: [
        {
          itemName: "item1",
          description: "desc1",
          imgSrc: "",
          isActive: false
        }, 
        {
          itemName: "item2",
          description: "desc2",
          imgSrc: "",
          isActive: false
        }, 
        {
          itemName: "item3",
          description: "desc3",
          imgSrc: "",
          isActive: false
        }],
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