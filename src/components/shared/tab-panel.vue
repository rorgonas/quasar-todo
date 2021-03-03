<template>
  <q-tabs align="justify">
    <q-route-tab
      v-for="nav in navs"
      :key="nav.label"
      :to="nav.to"
      :icon="nav.icon"
      :label="nav.label" />
  </q-tabs>
</template>

<script>
  import { navs } from 'src/components/common/nav-tabs'

  export default {
    name: 'TabPanel',
    data () {
      return {
        leftDrawerOpen: false,
        navs: navs
      }
    }
  }
</script>
