<template>
<div>
  <!-- begin vueCarousel104 -->
  <div class="vueCarousel104">
    <div class="vueCarousel104_content">
      {{ items[cIndex].itemName }}<br>
      <span class="vueCarousel104_description">
        {{ items[cIndex].description }}
      </span>
    </div>
    <nav id="vueCarousel104_pagination" class="vueCarousel104_pagination">
      <div class="vueCarousel104_pagebuttons"
        v-for="(i, index) in items"
        @click="customPage(index)"
        :class="{vueCarousel104_active: i.isActive}"
        :aria-selected="i.isActive">
      </div>
    </nav>
    <div class="vueCarousel104_prevnext">
      <button @click="prevItem()" 
      class="vueCarousel104_previous">
      <svg xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
    <span>Previous</span>
    </button>
    <button @click="nextItem()" 
    class="vueCarousel104_next">
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
    </button>
  </div>
</div>
<!-- end vueCarousel104 -->
</div>
</template>
<script>
// import {store} from "../js/store.js";
export default {
  data () {
    return {   
      items: [
      {
        itemName: "item1",
        description: "desc1",
        imgSrc: "",
        isActive: true
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
      cIndex: 0,
      activePageButton: 0,
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    // console.log("vueCarousel104.vue mounted");
  },
  methods: {     
    prevItem: function() {
      let cIndex = this.cIndex;
      let items = this.items;

      if (cIndex === 0) {
      cIndex = items.length; // go to last
      }
      cIndex = cIndex - 1;

      this.cIndex = cIndex;
      this.setActivePageButton(this.cIndex);
    },
    nextItem: function() {
      let cIndex = this.cIndex;
      let items = this.items;

      cIndex = cIndex + 1;
      cIndex = cIndex % items.length; // go to first

      this.cIndex = cIndex;
      this.setActivePageButton(this.cIndex);
    },
    customPage: function(num) {
      this.cIndex = num;
      this.setActivePageButton(num);
    },  
    setActivePageButton: function(index) {
      let activeItem = index;
      let activePageButton = this.activePageButton;

      this.items[activeItem].isActive = true;

      if (activePageButton !== activeItem) {
      this.items[activePageButton].isActive = false;
      
      // set current activePageButton
      this.activePageButton = activeItem;
      }
    }  
  }
}
</script>