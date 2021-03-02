<template>
  <q-page class="q-ma-md">
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" icon="account_circle" label="Login" />
        <q-tab name="register" icon="how_to_reg" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register-user :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register-user :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    name: 'AuthPage',
    data () {
      return {
        tab: 'register'
      }
    },
    components: {
      'login-register-user': require('components/Auth/LoginRegister.vue').default,
    }
  }
</script>

<style lang="scss">
  .auth-tabs {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
