<template>
  <div>
    <!-- begin vueCarousel1-02 placeholder -->
    <h2 class="item-id">vueCarousel1-02</h2>
    <div class="row">
      <div class="col-sm-3">
        39
      </div>
      <div class="col-sm-9">
        <!-- begin vueCarousel1-02 -->
        <div id="vuecarousel1-02_mount">
        </div>
        <!-- end vueCarousel1-02 -->
      </div>
    </div>  
    <!-- end vueCarousel1-02 placeholder -->
  </div>
</template>
<script>
// import Vue from "vue";
  export default {
    data () {
      return {
      }
    },
    mounted: function () {
      console.log("App.vue mounted");
      this.loadCarousel1_02();
    },   
    methods: {
      loadCarousel1_02: function() {
        const Carousel1_02 = resolve => {
          require.ensure(['./Carousel1_02.vue'], () => {
            resolve(require('./Carousel1_02.vue'))
          })
        };

        // inject to carousel mount
        new Vue({
          el: '#vuecarousel1-02_mount',
          render: h => h(Carousel1_02)
        })
      }
    } 
  }
</script>