<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    methods: {
      ...mapActions('settingsStore', ['loadSettings']),
      ...mapActions('authStore', ['handleAuthStateChange'])
    },
    mounted() {
      this.loadSettings()
      this.handleAuthStateChange()
    }
  }
</script>
