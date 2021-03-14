<template>
  <q-input
    :value="name"
    ref="name"
    @input="$emit('update:name', $event)"
    label="Task Name"
    v-select-all
    v-autofocus="{ delayCordova: 700 }"
    outlined
    clearable
    :rules="[val => !!val || 'Field is required']"
  />
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
import { autofocus } from "src/directives/directive-autofocus";

export default {
  name: 'TaskFieldName',
  props: ['name'],
  directives: {
    selectAll,
    autofocus
  }
}
</script>

<style>

</style>
