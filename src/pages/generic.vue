<template>
  <div class="main q-pa-md col items-start q-gutter-md">

    <div style="background-color: #f3eded; " class="q-pa-md row relative-position">
      <q-select
        clearable
        filled
        v-model="multiple"
        multiple
        :options="options"
        label="Multiple"
        style="width: 250px"
        color="negative"
      />
      <q-toggle
        v-model="value"
        color="negative"
        label="Auto Update"
        class="absolute-top-right"
        left-label
      />
    </div>

    <div class="row q-mt-xs items-start q-gutter-md">
      <q-card class="my-card "
      v-for="data of generic"
      v-bind:key="data.id" >
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom text-h6">{{ data.plate_number }}</div>
      </q-img>
      <q-card-section>
        <div class="absolute-center text-h6">{{ data.device_name}}</div>
      </q-card-section>

        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
        >
          <q-card>
            <q-list dense>
              <q-item style="background-color: $bg-main !important" >
                <q-item-section>
                  <q-item-label>Speed</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ data.speed }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item >
                <q-item-section>
                  <q-item-label>Confidence</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ data.confidence_number }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item >
                <q-item-section>
                  <q-item-label>Date&Time</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ data.date_time }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>

    </q-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      value: true,
      multiple: null,
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
    }
  },
  computed: {
    ...mapGetters('generic', ['generic'])
  }
}
</script>

<style lang="scss" scoped>
.main {
    background-color: $bg-main !important;
}

.q-select {
  background-color: white !important;
  border: solid 1px rgb(54, 15, 15);
  border-radius: .6rem;
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
</style>
