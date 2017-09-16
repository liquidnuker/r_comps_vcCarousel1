<template>
<div>
<!-- siema -->
<div class="col-sm-12 main_carousel">
  <template v-for="i in categories">
  <!-- siema row -->
  <div class="row">    
    <div class="col-sm-4">
      <p class="main_carousel_title">
        {{ i.title }}
      </p>
      <p>{{ i.description }}</p>
    </div>
    <div class="col-sm-8 main_carousel--right">
      <img v-bind:src="'img/' + i.preview">
    </div>    
  </div>
  <!-- siema row -->
  </template>
</div>
<!-- /siema -->  
</div>
</template>
<script>
import Siema from '../js/vendor/siema.min.js';
import {jsonLoader} from "../js/jsonloader.js";
import {shuffleCategories} from "../js/shuffle.js";
export default {
  data () {
    return {
      categories: ""
    }
  },
  methods: {
    loadCategories: function() {
      let jsonUrl = "./src/js/ajax/catdesc.json";
      let self = this;
      jsonLoader.getJSON(jsonUrl).then(function (response) {
        
        // shuffle then inject to categories
        self.categories = shuffleCategories(response.catdesc);
      }).then(function () {
        self.activateCarousel();      
      });
    },
    activateCarousel: function() {
      const topCarousel = new Siema({
      selector: '.main_carousel',
      duration: 600,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
      onInit: () => {    
      },
      onChange: () => {},
      });
      // setInterval(() => topCarousel.next(), 2600)
    }
  },
  mounted: function () {
    console.log("Carousel1-02.vue mounted");
    this.loadCategories();
  }
}
</script>