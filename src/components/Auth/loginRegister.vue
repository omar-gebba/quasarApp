<template>
  <form @submit.prevent="submitForm">
    <!-- Heading Banner -->
    <div class="row q-mb-md">
      <q-banner dense class="bg-grey-3 q-pa-md col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="negative" />
          <div class="q-pl-md text-h7">
            {{ tab | titleCase}} to access your todos anywhere.
          </div>
        </template>
      </q-banner>
      </div>
      <!-- Input For Email -->
      <div class="row q-mb-md">
        <q-input 
          outlined lazy-rules required
          v-model="userData.email" 
          type="email" 
          ref="email"
          label="Email" label-color="negative" 
          :rules="[ val => isValidEmailAddress(val)  || 'Please enter a valid e-mail address']"
          color="negative" 
          class="col" />
      </div>
      <!-- Input For Password -->
      <div class="row q-mb-md">
        <q-input
          outlined lazy-rules required
          v-model="userData.password" 
          type="password" 
          ref="password"
          label="Password" label-color="negative" 
          :rules="[ val => val.length >= 6 || 'Password contains not less than 6 characters']"
          color="negative"
          class="col" />
      </div>
      <!-- Submit Button -->
      <div class="row">
        <q-space />
        <q-btn type="submit" color="negative" :label="tab"/>
      </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: ['tab'],
  data () {
    return {
      userData:{
        email: '',
        password: '',
        userName: '',
        isAdmain: false,
        loggedIn: false,
        online: false
      }
    }
  },
  computed: {
    ...mapGetters('Auth', ['users'])
  },
  methods: {
    ...mapActions('Auth', ['registerUser', 'saveUsersToLocalStorage']),

    isValidEmailAddress(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      if (!this.$refs.email.hasError && !this.$refs.password.hasError && this.$refs.email.value && this.$refs.password.value) {
        if (this.tab == 'login') {
         console.log('Login page')
         } 
        else { 
          console.log('register page');
          this.registerUser(this.userData)
        }
      }
    },
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
