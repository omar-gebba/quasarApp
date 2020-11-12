<template>
  <div class="row q-mt-xs items-start q-gutter-md">
      <q-card class="my-card">

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
</template>

<script>
export default {

}
</script>

<style>

</style>