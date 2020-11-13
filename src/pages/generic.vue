<template>
  <div 
  class="main q-pa-md col items-start q-gutter-md"
  :class="{'back-white': !Object.keys(generic).length }"
  
  >
    <div 
      style="background-color: #f3eded"
      :class="{'q-pa-md row relative-position': Object.keys(generic).length,'back-white': !Object.keys(generic).length}">
       
    <!-- serarch bar and toggel button-->
      <search></search>
      <toggle v-if="Object.keys(generic).length"></toggle>

    </div>
    <!-- a paragraph to show when no search result -->
    <p class="q-pl-lg" v-if="!Object.keys(generic).length">
      Sorry! Your Search Value Not Match!
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
    "generic-card": require("src/components/generic-card.vue").default
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

.q-select {
  background-color: white !important;
  border: solid 1px rgb(54, 15, 15);
  border-radius: 0.6rem;
  .q-field__label {
    color: red !important;
  }
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
}
</style>
