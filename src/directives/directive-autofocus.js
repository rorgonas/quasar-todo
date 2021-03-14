// Fix autofocus delay on mobile.
// Note: This was causing Add task dialog to be overlapped by keyboard on mobile. Please note that this might have been fixed by Quasar already.

import { Platform } from "quasar";

export const autofocus = {
  bind(el, binding) {
    let input = el.querySelector('.q-field__native')
    let delay = 0

    // Overwrite delay on mobile
    if (Platform.is.cordova) {
      delay = binding.value && binding.value.delayCordova ? binding.value.delayCordova : 700
    }
    setTimeout(() => {
      input.focus()
    }, delay)
  }
}
