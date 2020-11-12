<template>
  <q-toggle
        v-model="value"
        color="negative"
        label="Auto Update"
        class="absolute-top-right"
        left-label
      />
</template>

<script>
export default {
 data () {
    return {
      value: true,
    }
  },
}
</script>

<style>

</style>