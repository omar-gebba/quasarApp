<template>
   <q-input
        clearable
        filled
        dense
        v-model="searchField"
        label="Search"
        label-color="negative"
        style="width: 250px;padding-left: 0"
        class="q-pl-lg"
        color="negative"
        bg-color="blue-grey-2"
      />
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions('generic', ['setSearch'])
  },
  computed: {
    ...mapState('generic', ['search']),

    searchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>