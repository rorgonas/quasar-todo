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
import { selectAll } from "src/directives/directive-select-all";

export default {
  name: 'TaskFieldName',
  props: ['name'],
  directives: {
    selectAll
  }
}
</script>

<style>

</style>
