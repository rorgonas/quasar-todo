<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row justify-end">
        <sort-dropdown />
      </div>

      <p v-if="!Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length && search">
        No search results
      </p>

      <q-scroll-area class="scroll-area-task">
        <no-tasks
          v-if="!Object.keys(tasksTodo).length && !search && !settings.showTaskInOneList"
          class="q-mb-md" />

        <task-list
          v-if="Object.keys(tasksTodo).length"
          :tasks="tasksTodo"
          title="Todo"
          bgColor="bg-orange" />

        <task-list
          v-if="Object.keys(tasksCompleted).length"
          :tasks="tasksCompleted"
          title="Completed"
          bgColor="bg-green" />
      </q-scroll-area>
    </div>

    <q-dialog v-model="showAddTask" transition-show="scale" transition-hide="scale" persistent>
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>


    <div
      class="absolute-bottom q-pa-md no-pointer-events"
      :class="$q.platform.is.mobile ? 'text-center' : 'text-right'"
    >
      <q-btn
        @click="showAddTask = true"
        class="all-pointer-events"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'TodoPage',
  data() {
    return {
      showAddTask: false,
    }
  },
  computed: {
    ...mapGetters('storeTasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settingsStore', ['settings']),
    ...mapState('storeTasks', ['search'])
  },
  components: {
    'task': require('components/tasks/task.vue').default,
    'add-task': require('components/tasks/add-task.vue').default,
    'task-list': require('components/list/tasks-list.vue').default,
    'no-tasks': require('components/tasks/no-tasks.vue').default,
    'sort-dropdown': require('components/tools/sort-dropdown.vue').default,
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
  .scroll-area-task {
    display: flex;
    flex-grow: 1;
  }
</style>
