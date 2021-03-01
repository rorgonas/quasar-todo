<template>
  <q-page class="q-pa-md">
    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
      class="q-mb-md" />
    <task-list
      v-else
      :tasks="tasksTodo"
      title="Todo"
      bgColor="bg-orange"
      class="q-mb-md"/>

    <task-list
      v-if="Object.keys(tasksCompleted).length"
      :tasks="tasksCompleted"
      title="Completed"
      bgColor="bg-green"
      class="q-mb-md"/>

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
   ...mapGetters('tasksStore', ['tasksTodo', 'tasksCompleted'])
  },
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/AddTask.vue').default,
    'task-list': require('components/List/Tasks.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default,
  },
  mounted() {
    // Quasar global even but listener
    // Note: Please consider better using Vuex store. A boolean var named showAddTaskModal is already added.
    this.$root.$on('showAddTask', this.openAddTask)
  },
  methods: {
    openAddTask() {
      this.showAddTask = true
    }
  }
}
</script>

<style scoped>

</style>
