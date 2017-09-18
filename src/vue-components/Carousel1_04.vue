<template>
  <div>
    <!-- begin carousel1-04 -->
    <div class="carousel1-04">
      <div class="carousel1-04_content" id="carousel1-04_content">
        loading...
      </div>
    <nav id="carousel1-04_pagination" class="carousel1-04_pagination"></nav>
    <div class="carousel1-04_prevnext">
      <button id="carousel1_04_previous" class="carousel1_04_previous">
      <svg xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
    <span>Previous</span>
    </button>
    <button id="carousel1_04_next" class="carousel1_04_next">
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
    </button>
    </div>
  </div>
  <!-- end carousel1-04 -->
  </div>
</template>
<script>
export default {
  data () {
    return {   

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
    // console.log("Carousel1_04.vue mounted");
  },
  methods: {        
  }
}
</script>