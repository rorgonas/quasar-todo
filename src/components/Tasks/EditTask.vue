<template>
  <q-card>
    <card-task-header>Edit Task</card-task-header>

    <form @submit.prevent="addTask">
      <q-card-section class="q-pt-none">

        <card-task-field-name
          ref="cardName"
          :name.sync="taskToSubmit.name" />

        <card-task-due-date
          :dueDate.sync="taskToSubmit.dueDate" />

        <card-task-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime" />

      </q-card-section>

      <card-task-actions/>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EditTask',
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  components: {
    'card-task-header': require('components/Card/TaskHeader.vue').default,
    'card-task-field-name': require('components/Card/TaskFieldName.vue').default,
    'card-task-due-date': require('components/Card/TaskDueDate.vue').default,
    'card-task-due-time': require('components/Card/TaskDueTime.vue').default,
    'card-task-actions': require('components/Card/TaskActions.vue').default
  },
  methods: {
    ...mapActions('tasksStore', ['updateTask']),
    addTask() {
      this.$refs.cardName.$refs.name.validate()
      if (!this.$refs.cardName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('on-close', true)
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style lang="scss"></style>
