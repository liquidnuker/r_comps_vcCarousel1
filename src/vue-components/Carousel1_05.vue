<template>
<div>
  <!-- begin carousel1-05 -->
  <div class="carousel1-05">
    <div class="carousel1-05_content">
      {{ items[cIndex].itemName }}<br>
      <div class="carousel1-05_description">
        {{ items[cIndex].description }}
      </div>
    </div>
    <nav id="carousel1-05_pagination" class="carousel1-05_pagination">
      <div class="carousel1_05_pagebuttons"
        v-for="(i, index) in items"
        @click="customPage(index)"
        :class="{carousel1_05_active: i.isActive}"
        :aria-selected="i.isActive">
      </div>
    </nav>
    <div class="row carousel1-05_prevnext">
      <span @click="prevItem()"
        class="carousel1_05_previous">
        <!-- chevron left -->
        <svg xmlns="http://www.w3.org/2000/svg" class="carousel1_05_chevron">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </span>
      <span @click="nextItem()"
        class="carousel1_05_next">
        <!-- chevron right -->
        <svg xmlns="http://www.w3.org/2000/svg" class="carousel1_05_chevron">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </span>
    </div>
  </div>
  <!-- end carousel1-05 -->
</div>
</template>
<script>
import {
  store
}
from "../js/store.js";
export default {
  data() {
      return {
        items: store.items,
        cIndex: 0,
        isActive: null,
        activePageButton: 0
      }
    },
    watch: {
      // : function () {
      // }
    },
    props: [
      "prName1"
    ],
    components: {},
    mounted: function () {},
    methods: {
      prevItem: function () {
        let cIndex = this.cIndex;
        let items = this.items;

        if (cIndex === 0) {
          cIndex = items.length; // go to last
        }
        cIndex = cIndex - 1;

        this.cIndex = cIndex;
        this.setActivePageButton(this.cIndex);
      },
      nextItem: function () {
        let cIndex = this.cIndex;
        let items = this.items;

        cIndex = cIndex + 1;
        cIndex = cIndex % items.length; // go to first

        this.cIndex = cIndex;
        this.setActivePageButton(this.cIndex);
      },
      customPage: function (num) {
        this.cIndex = num;
        this.setActivePageButton(num);
      },
      setActivePageButton: function (index) {
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