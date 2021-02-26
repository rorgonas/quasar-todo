<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar color="primary">
        <q-toolbar-title class="absolute-center">
          Awesome Todo
          <div slot="subtitle">Vue.js Basics</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer reveal elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
      </q-tabs>
    </q-footer>

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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
      }
    }
  .q-drawer, .q-footer {
    .q-router-link--exact-active {
      color: black !important;
    }
}
</style>
