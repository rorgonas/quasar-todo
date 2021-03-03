import { Notify, Dialog, Loading } from 'quasar'

let showErrorMessage = (message) => {
  Loading.hide()
  Dialog.create({
    title: 'Error',
    message: message
  })
}

let showSuccessMessage = (message) => {
  Notify.create({
    message: message,
    position: 'bottom',
  })
}

export default { showErrorMessage, showSuccessMessage }
export { showErrorMessage, showSuccessMessage }
