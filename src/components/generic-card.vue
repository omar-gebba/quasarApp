<template>
<div class="row items-start q-gutter-md" style="margin-top: -25px">
  <q-card class="my-card" v-for="(data, key) of generic" :key="key">
    <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
      <div class="absolute-bottom text-h6">{{ data.plate_number }}</div>
    </q-img>
    <q-card-section>
      <div class="absolute-center text-h6">{{ data.device_name }}</div>
    </q-card-section>

    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
      <q-card class="small-card">
        <q-list dense>
          <q-item>
            <q-item-section>
              <q-item-label>Speed</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>{{ data.speed }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label>Confidence</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>{{ data.confidence_number }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
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
</template>

<script>
export default {
  props: ['generic']
};
</script>

<style lang="scss" scoped>
.small-card {
  background-color: $bg-main;
}
</style>></style>
