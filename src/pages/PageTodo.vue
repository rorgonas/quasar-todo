<template>
  <q-page class="q-pa-md">
    <q-list v-if="Object.keys(tasks).length" separator>
      <q-item-label header>Todo List</q-item-label>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>

    <q-dialog v-model="showAddTask" transition-show="scale" transition-hide="scale" persistent>
      <add-task @on-close="showAddTask = false"></add-task>
    </q-dialog>


    <div
      class="absolute-bottom q-pa-md"
      :class="$q.platform.is.mobile ? 'text-center' : 'text-right'"
    >
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodoPage',
  data() {
    return {
      showAddTask: false,
    }
  },
  computed: {
   ...mapGetters('tasksStore', ['tasks'])
  },
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/AddTask.vue').default
  },
}
</script>

<style scoped>

</style>
