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
        <vcCarousel101 />
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
        <vcCarousel102 />
        <!-- end vueCarousel1-02 -->
      </div>
    </div>  
    <!-- end vueCarousel1-02 placeholder -->
    <!-- begin vueCarousel1-03 placeholder -->
    <h2 class="item-id">vueCarousel1-03</h2>
    <div class="row">
      <div class="col-sm-3">
        39
      </div>
      <div class="col-sm-9">
        <!-- begin vueCarousel1-03 -->
        <vcCarousel103 />
        <!-- end vueCarousel1-03 -->
      </div>
    </div>  
    <!-- end vueCarousel1-04 placeholder -->
    <!-- begin vueCarousel1-04 placeholder -->
    <h2 class="item-id">vueCarousel1-04</h2>
    <div class="row">
      <div class="col-sm-3">
        39
      </div>
      <div class="col-sm-9">
        <!-- begin vueCarousel1-04 -->
        <vcCarousel104 />
        <!-- end vueCarousel1-04 -->
      </div>
    </div>  
    <!-- end vueCarousel1-04 placeholder -->
    <!-- begin vueCarousel1-05 placeholder -->
    <h2 class="item-id">vueCarousel1-05</h2>
    <div class="row">
      <div class="col-sm-3">
        39
      </div>
      <div class="col-sm-9">
        <!-- begin vueCarousel1-05 -->
        <vcCarousel105 />
        <!-- end vueCarousel1-05 -->
      </div>
    </div>  
    <!-- end vueCarousel1-05 placeholder -->
  </div>
</template>
<script>
const vcCarousel101 = () => import('./Carousel1_01.vue');
const vcCarousel102 = () => import('./Carousel1_02.vue');
const vcCarousel103 = () => import('./Carousel1_03.vue');
const vcCarousel104 = () => import('./Carousel1_04.vue');
const vcCarousel105 = () => import('./Carousel1_05.vue');

  export default {
    data () {
      return {
      }
    },
    components: {
      vcCarousel101: vcCarousel101,
      vcCarousel102: vcCarousel102,
      vcCarousel103: vcCarousel103,
      vcCarousel104: vcCarousel104,
      vcCarousel105: vcCarousel105
    },
    mounted: function () {
    },   
    methods: {
    } 
  }
</script>