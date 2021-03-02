<template>
  <q-drawer
    v-model="leftDrawerOpen"
    :breakpoint="768"
    :width="250"
    show-if-above
    bordered
    content-class="bg-primary"
  >
    <q-list dark>
      <q-item-label header>
        Navigation
      </q-item-label>
      <q-item
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        exact
        clickable
        class="text-grey-4"
      >
        <q-item-section avatar>
          <q-icon :name="nav.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ nav.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
  import { navs } from 'src/components/common/nav-tabs'

  export default {
   name: 'NavigationPanel',
   data () {
     return {
       leftDrawerOpen: false,
       navs: navs
     }
   }
 }
</script>
