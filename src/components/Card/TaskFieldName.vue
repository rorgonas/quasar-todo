<template>
  <q-input
    :value="name"
    ref="name"
    @input="$emit('update:name', $event)"
    label="Task Name"
    v-select-all
    autofocus
    outlined
    clearable
    :rules="[val => !!val || 'Field is required']"
  />
</template>

<script>
export default {
  name: 'TaskFieldName',
  props: ['name'],
  directives: {
    selectAll: {
      bind(el) {
        let input = el.querySelector('input')
        input.addEventListener('focus', () => {
          if (input.value) {
            input.select()
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
