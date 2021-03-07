import { Dark, LocalStorage } from 'quasar'

export default async ({ store }) => {
  const settings = LocalStorage.getItem('settings')

  // Use browser storage settings
  if (settings) {
    Dark.set(settings.showTaskInDarkMode)

  // use store setting  // false, true
  } else {
    const settingsStore = store.getters['settingsStore/settings']
    Dark.set(settingsStore.showTaskInDarkMode)
  }
}
