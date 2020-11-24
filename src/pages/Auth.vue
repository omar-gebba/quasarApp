<template>
  <div class="q-pa-md ">
    <div class="q-gutter-y-md auth-page" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
          class="bg-blue-grey-4 text-negative"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-grey-3 text-center">
          <q-tab-panel name="login">
            <!-- Login page -->
            <login-register :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="register" class="bg-grey-4">
            <!-- Register page -->
            <login-register :tab="tab" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
import loginRegister from '../components/Auth/loginRegister.vue'
export default {
  components: { loginRegister },
  data () {
    return {
      tab: 'register'
    }
  }
}
</script>
<style lang="scss" scoped>
.auth-page {
    margin: auto !important
}
</style>