<template>
 <div class="q-pa-md select" style="width: 11rem">
    <div class="q-gutter-md">
      <q-select filled dense outlined 
        v-model="searchWith" emit-value
        label="Search By" label-color="negative"
        color="negative" bg-color="blue-grey-3"
        menu-anchor="bottom right"
        :options="options"  map-options 
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      options: [
        { label: 'Name',       value: 'device_name' },
        { label: 'Plate',      value: 'plate_number' },
        { label: 'Confidence', value: 'confidence_number' },
        { label: 'Brand',      value: 'brand' }
      ]
    }
  },
  methods: {
    ...mapActions('generic', ['defineSearch'])
  },
  computed: {
    ...mapState('generic', ['searchBy']),
    searchWith: {
      get() {
        if(!this.searchBy) {
          this.searchBy = 'device_name'
        }
        return this.searchBy
      },
      set(value) {
       this.defineSearch(value)
      }
    }
  },
}
</script>

<style lang="scss"> 
/// when add scoped properety the style can't applied to the icon so take care when add styles in this page
    div.select i.q-select__dropdown-icon{
        color: $negative !important;
    }
  .q-select {
    flex: 0 0 112px;
  }
</style>