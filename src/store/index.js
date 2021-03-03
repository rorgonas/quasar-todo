import Vue from 'vue'
import Vuex from 'vuex'

import storeTasks from './modules/store-tasks'
import settingsStore from './modules/settings-store'
import authStore from './modules/auth-store'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      storeTasks,
      settingsStore,
      authStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
