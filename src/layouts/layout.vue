<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar color="primary">
        <q-toolbar-title>Awesome <strong>Todo</strong></q-toolbar-title>
        <div class="row q-pa-md q-gutter-sm">
          <search />

          <q-btn
            v-if="!loggedIn"
            to='/auth'
            icon-right="account_circle"
            label="Login" />

          <q-btn
            v-else
            @click="logoutUser"
            icon-right="account_circle"
            label="Logout" />
        </div>
      </q-toolbar>
    </q-header>

    <navigation-panel v-if="!$q.platform.is.mobile"/>

    <q-footer v-if="$q.platform.is.mobile" reveal elevated>
      <tab-panel />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Layout',
    components: {
      'search': require('components/tools/Search.vue').default,
      'navigation-panel': require('components/shared/navigation-panel.vue').default,
      'tab-panel': require('components/shared/tab-panel.vue').default,
    },
    computed: {
      ...mapState('authStore', ['loggedIn'])
    },
    methods: {
      ...mapActions('authStore', ['logoutUser'])
    }
  }
</script>

<style lang="scss">
  .q-drawer, .q-footer {
    .q-router-link--exact-active {
      color: black !important;
    }
  }
</style>
