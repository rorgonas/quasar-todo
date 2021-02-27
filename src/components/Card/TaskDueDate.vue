<template>
  <div class="q-mb-md">
    <q-input
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      label="Due Date"
      outlined
      clearable>

      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
              :value="dueDate"
              @input="$emit('update:dueDate', $event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

    </q-input>
  </div>
</template>

<script>
export default {
  name: 'TaskDueDate',
  props: ['dueDate']
}
</script>

<style>

</style>
