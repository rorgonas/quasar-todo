<template>
  <q-page class="q-ma-md">
    <q-list class="q-mb-md" bordered padding>
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

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            color="blue"
            v-model="showTaskInOneList"
            val="battery" />
        </q-item-section>
      </q-item>

      <br />
      <q-item-label header>UI Theme</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Activate dark mode</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            color="blue"
            v-model="showTaskInDarkMode"
            val="battery" />
        </q-item-section>
      </q-item>

      <br />
      <q-item-label header>Make your preferences persistent</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Use local storage</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            color="blue"
            v-model="useLocalStorage"
            val="battery" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="q-mb-md" bordered padding>
      <q-item-label header>More</q-item-label>

      <q-item
        to="/settings/help"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>

      <q-item
        @click="visitOurWebsite"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>

      <q-item
        @click="emailUs"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right"/>
        </q-item-section>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { openURL } from 'quasar'

  export default {
    name: 'SettingsPage',
    computed: {
      ...mapGetters('settingsStore', ['settings', 'storage']),
      show12HourTimeFormat: {
        get() {
          return this.settings.show12HourTimeFormat
        },
        set(value) {
          this.setSettings({ show12HourTimeFormat: value })
        }
      },
      showTaskInOneList: {
        get() {
          return this.settings.showTaskInOneList
        },
        set(value) {
          this.setSettings({ showTaskInOneList: value })
        }
      },
      showTaskInDarkMode: {
        get() {
          return this.settings.showTaskInDarkMode
        },
        set(value) {
          this.$q.dark.set(value)
          this.setSettings({ showTaskInDarkMode: value })
        }
      },
      useLocalStorage: {
        get() {
          return this.settings.localStorage
        },
        set(value) {
          this.setSettings({ localStorage: value })
        }
      }
    },
    methods: {
      ...mapActions('settingsStore', ['setSettings']),
      visitOurWebsite() {
        openURL('https://quasar.dev/quasar-cli/developing-mobile-apps')
      },
      emailUs() {
        window.location.href = 'mailto:rorgonas@gmail.com?subject=Awesome Todo Feedback'
      }
    },
  }
</script>

<style scoped>

</style>
