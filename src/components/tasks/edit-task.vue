<template>
  <q-card>
    <card-task-header>Edit Task</card-task-header>

    <form @submit.prevent="validateTask">
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
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  name: 'EditTask',
  props: ['task', 'id'],
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  created() {
    // Copy task into a new object
    this.taskToSubmit = Object.assign({}, this.task)
  },
  methods: {
    ...mapActions('storeTasks', ['updateTask']),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close', true)
    }
  }
}
</script>
