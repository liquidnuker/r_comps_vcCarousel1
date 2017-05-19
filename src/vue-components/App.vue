<template>
<div>
 <div id="carousel-mount-point">
 </div> 
    
</div>
</template>
<script>
import Vue from "vue";
  export default {
    data () {
      return {
      }
    },
    methods: {
      loadCarousel: function() {
        const carousel = resolve => {
          require.ensure(['./Carousel.vue'], () => {
            resolve(require('./Carousel.vue'))
          })
        };

        // inject to carousel mount
        new Vue({
          el: '#carousel-mount-point',
          render: h => h(carousel)
        })
      }
    },
    mounted: function () {
      console.log("App.vue mounted");
      this.loadCarousel();
    }    
  }
</script>