import { Notify, Loading } from 'quasar'

let showErrorMessage = (message) => {
  Loading.hide()
  Notify.create({
    type: 'negative',
    message: message,
    position: 'top-right',
  })
}

let showSuccessMessage = (message) => {
  Notify.create({
    type: 'positive',
    message: message,
    position: 'top-right',
  })
}

export default { showErrorMessage, showSuccessMessage }
export { showErrorMessage, showSuccessMessage }
