<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar color="primary">
        <q-toolbar-title>{{ appName }}</q-toolbar-title>
        <div class="row q-pa-md q-gutter-sm">
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
    data() {
      return {
        appName: this.$q.config.app.name
      }
    },
    components: {
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

  /* Platform specific fix: deprecated fix  */
  //.platform-ios {
  //  .q-header {
  //    padding-top: constant(safe-area-inset-top);
  //    padding-top: env(safe-area-inset-top);
  //  }
  //  .q-footer {
  //    padding-bottom: constant(safe-area-inset-top);
  //    padding-bottom: env(safe-area-inset-top);
  //  }
  //}
</style>
