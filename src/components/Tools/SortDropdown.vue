<template>
  <q-select
    filled
    dense
    v-model="sortBy"
    :options="options"
    emit-value
    map-options
    class="q-mb-md"
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
      ...mapActions('tasksStore', ['setSort']),
    },
    computed: {
      ...mapState('tasksStore', ['sort']),
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
    width: 112px
  }
</style>
