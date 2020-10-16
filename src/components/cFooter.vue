<template>
  <q-tabs>
    <q-route-tab class="footer-tabs text-capitalize text-blue-grey-10" :icon="icon" :label="title" :to="link" exact />
  </q-tabs>
</template>
<script>
export default {
 props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss" scoped>  
  .footer-tabs {
    background-color: white;
    border: 1px solid;
    border-radius: .5rem;
    margin-left: 1px;
    margin-right: 1px;
  }
  .q-router-link--active {
    background-color: #f4d5d5ed;
    color: $negative !important;
  }
</style>
