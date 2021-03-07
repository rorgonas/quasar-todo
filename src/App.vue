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
      // Platform specific code: get access to electron IPC render module
      if (this.$q.platform.is.electron) {
        require('electron').ipcRenderer.on('show-settings', () => {
          this.$router.push('/settings')
        })
      }

      this.loadSettings()
      this.handleAuthStateChange()
    }
  }
</script>
