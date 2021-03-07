<template>
  <q-select
    filled
    dense
    v-model="sortBy"
    :options="options"
    emit-value
    map-options
    class="col q-ml-sm"
    label="Sort By"
    stack-label />

</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'SortDropdown',
    data() {
      return {
        options: [
          {
            label: 'Name',
            value: 'name'
          },
          {
            label: 'Date',
            value: 'dueDate'
          }
        ]
      }
    },
    methods: {
      ...mapActions('storeTasks', ['setSort']),
    },
    computed: {
      ...mapState('storeTasks', ['sort']),
      sortBy: {
        get() {
          return this.sort
        },
        set(value) {
          this.setSort(value)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .q-select {
    flex: 0 0 112px;
  }
</style>
