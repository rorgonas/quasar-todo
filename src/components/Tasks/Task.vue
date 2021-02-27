<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed }})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple>
    <q-item-section side top>
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strike': task.completed}">
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section>
        <div class="column">
          <q-item-label v-show="task.dueDate" class="row justify-end">
            <q-icon name="event" size="18px" class="q-mr-xs" />
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label v-show="task.dueTime" class="row justify-end">
            <small>{{ task.dueTime}}</small>
          </q-item-label>
        </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="promptToDelete(id)" round flat dense color="warning" icon="delete" size="16px" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Task',
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasksStore', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really want to delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    },
  }
}
</script>

<style></style>
