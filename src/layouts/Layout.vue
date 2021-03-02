<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar color="primary">
        <q-toolbar-title class="col-4">Awesome <strong>Todo</strong></q-toolbar-title>
        <search class="col-8" />
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
  export default {
    name: 'Layout',
    components: {
      'search': require('components/Tools/Search.vue').default,
      'navigation-panel': require('components/Shared/NavigationPanel.vue').default,
      'tab-panel': require('components/Shared/TabPanel.vue').default,
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
