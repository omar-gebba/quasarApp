<template>
   <q-input
        clearable
        filled
        v-model="searchField"
        label="Search"
        style="width: 250px"
        color="negative"
      />
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
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

<style>

</style>