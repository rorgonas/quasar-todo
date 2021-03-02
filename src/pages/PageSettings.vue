<template>
  <q-page>
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            color="blue"
            v-model="show12HourTimeFormat"
            val="battery" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'SettingsPage',
    computed: {
      ...mapGetters('settingsStore', ['settings']),
      show12HourTimeFormat: {
        get() {
          return this.settings.show12HourTimeFormat
        },
        set(value) {
          this.setShow12HourTimeFormat(value)
        }
      }
    },
    methods: {
      ...mapActions('settingsStore', ['setShow12HourTimeFormat'])
    },
  }
</script>

<style scoped>

</style>
