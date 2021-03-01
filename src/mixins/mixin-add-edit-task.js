export default {
  methods: {
    validateTask() {
      this.$refs.cardName.$refs.name.validate()
      if (!this.$refs.cardName.$refs.name.hasError) {
        this.submitTask()
      }
    },
  },
  components: {
    'card-task-header': require('components/Card/TaskHeader.vue').default,
    'card-task-field-name': require('components/Card/TaskFieldName.vue').default,
    'card-task-due-date': require('components/Card/TaskDueDate.vue').default,
    'card-task-due-time': require('components/Card/TaskDueTime.vue').default,
    'card-task-actions': require('components/Card/TaskActions.vue').default
  },
}
