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
      ...mapActions('settingsStore', ['getSettings']),
      ...mapActions('authStore', ['handleAuthStateChange'])
    },
    mounted() {
      this.getSettings()
      this.handleAuthStateChange()
    }
  }
</script>
