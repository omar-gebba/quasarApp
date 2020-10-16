<template>
  <div class="flex flex-center q-pa-md" style="width: 100%">
    <div style="width: 100%">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab class="text-blue-grey-9" icon="supervisor_account" name="users" label="Users" />
        <q-tab class="text-blue-grey-6" icon="devices" name="devices" label="Devices" />
        <q-tab class="text-blue-grey-6" icon="mail" name="movies" label="Movies" />
        <q-tab class="text-blue-grey-6" icon="mail" name="notifications" label="Notifications" />
        <q-tab class="text-blue-grey-6" icon="mail" name="general" label="General" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-teal text-white text-center"
        >
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="devices">
            <div class="text-h6">Devices</div>
            Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
          </q-tab-panel>

          <q-tab-panel name="notifications">
            <div class="text-h6">Alarms</div>
            Ad molestiae non facere animi nobis, similique nemo velit reiciendis corporis impedit nam in.
          </q-tab-panel>

          <q-tab-panel name="general">
            <div class="text-h6">Movies</div>
            Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
<style scopped>
.q-layout {
    background-color: #f3eded !important;
}

</style>
