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
    'card-task-header': require('components/card/task-header.vue').default,
    'card-task-field-name': require('components/card/task-field-name.vue').default,
    'card-task-due-date': require('components/card/task-due-date.vue').default,
    'card-task-due-time': require('components/card/task-due-time.vue').default,
    'card-task-actions': require('components/card/task-actions.vue').default
  },
}
