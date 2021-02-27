<template>
  <q-input
    :value="name"
    ref="name"
    @input="$emit('update:name', $event)"
    label="Task Name"
    autofocus
    outlined
    clearable
    :rules="[val => !!val || 'Field is required']"
  />
</template>

<script>
export default {
  name: 'TaskFieldName',
  props: ['name']
}
</script>

<style>

</style>
