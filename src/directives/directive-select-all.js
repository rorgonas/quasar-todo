export const selectAll = {
  bind(el) {
    let input = el.querySelector('input')
      input.addEventListener('focus', () => {
        if (input.value) {
          input.select()
        }
    })
  }
}
