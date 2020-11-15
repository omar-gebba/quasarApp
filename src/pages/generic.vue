<template>
  <div 
  class="main q-pa-md col items-start q-gutter-md"
  :class="{'back-white': !Object.keys(generic).length }"
  
  >
    <div 
      style="background-color: #f3eded; margin-top: 0"
      :class="{'q-pa-md row relative-position': Object.keys(generic).length,'back-white': !Object.keys(generic).length}">

    <!-- Serarch bar  -->
      <search />
    <!-- Search By Select-Box  -->
      <searchBy v-if="Object.keys(generic).length"/>
    <!-- toggel button -->
      <toggle v-if="Object.keys(generic).length"></toggle>
    </div>
    <!-- a paragraph to show when no search result -->
    <p class="q-pl-lg" v-if="!Object.keys(generic).length">
      Sorry! Your Search Value Can't Match.
    </p>
    <!-- generic card -->
    <generic-card :generic="generic" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    'search'      : require("src/components/modals/saerch.vue").default,
    'toggle'      : require("src/components/modals/toggle.vue").default,
    'generic-card': require("src/components/generic-card.vue").default,
    'searchBy'    : require('src/components/modals/searchBy.vue').default,

  },
  computed: {
    ...mapGetters("generic", ["generic"])
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-color: $bg-main !important;
}
.my-card {
  width: 100%;
  max-width: 250px;
  //////////
  .q-item {
    background-color: $bg-main;
  }
  .q-separator {
    background-color: #fff;
  }
}
.back-white {
  background-color: #fff !important;
  margin:17px 0 0 8px;
}
</style>
