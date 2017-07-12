<template>
  <div>
    <!-- begin vueCarousel1-01 placeholder -->
    <h2 class="item-id">vueCarousel1-01</h2>
    <div class="row">
      <div class="col-sm-3">
        39
      </div>
      <div class="col-sm-9">
        <!-- begin vueCarousel1-01 -->
        <div id="vuecarousel1-01_mount">
        </div>
        <!-- end vueCarousel1-01 -->
      </div>
    </div>  
    <!-- end vueCarousel1-02 placeholder -->
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
import {inject} from "../js/componentinjector.js";
  export default {
    data () {
      return {
      }
    },
    mounted: function () {
      console.log("Home.vue mounted");
      this.loadCarousel1_01();
    },   
    methods: {
      loadCarousel1_01: function() {
        const Carousel1_01 = resolve => {
          require.ensure(['./Carousel1_01.vue'], () => {
            resolve(require('./Carousel1_01.vue'))
          })
        };
        inject("#vuecarousel1-01_mount", Carousel1_01);
        this.loadCarousel1_02();
      },
      loadCarousel1_02: function() {
        const Carousel1_02 = resolve => {
          require.ensure(['./Carousel1_02.vue'], () => {
            resolve(require('./Carousel1_02.vue'))
          })
        };
        inject("#vuecarousel1-02_mount", Carousel1_02);
      }
    } 
  }
</script>