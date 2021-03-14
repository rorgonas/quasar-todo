<template>
  <form @submit.prevent="onSubmit">

    <div class="q-mb-lg">
      <q-banner class="bg-grey-3">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ tab | titleCase }} to access your Todos anywhere!
      </q-banner>
    </div>

    <div class="row q-mb-xs">
      <q-input
        outlined
        autofocus
        v-model="formData.email"
        type="email"
        ref="email"
        class="col"
        label="Email"
        stack-label
        :rules="[val => isValidEmail(val) || 'Please use a valid email address']"
        lazy-rules />
    </div>

    <div class="row q-mb-xs">
      <q-input
        outlined
        v-model="formData.password"
        ref="password"
        type="password"
        class="col"
        label="Password"
        stack-label
        :rules="[val => isValidPassword(val) || 'Please use min 6 characters']"
        lazy-rules />
    </div>

    <div class="row q-mb-md">
      <q-space />
      <q-btn color="primary" :label="tab" type="submit" />
    </div>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
  name: 'LoginRegisterUser',
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  filters: {
    titleCase(val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  },
  methods: {
    ...mapActions('authStore', ['registerUser', 'loginUser']),
    isValidEmail(val) {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return val.match(regexEmail) && !!val
    },
    isValidPassword(val) {
      return val.length >= 6
    },
    validateForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()

      return !this.$refs.email.hasError && !this.$refs.password.hasError
    },
    onSubmit() {
      if (this.validateForm()) {
        if (this.tab === 'login') {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
        }
      }
    }
  }
}
</script>
