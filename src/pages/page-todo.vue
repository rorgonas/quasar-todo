<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">

      <template v-if="taskDownloaded">
        <div class="row q-mb-lg">
          <search-bar />
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
            bgColor="bg-yellow-8" />

          <task-list
            v-if="Object.keys(tasksCompleted).length"
            :tasks="tasksCompleted"
            title="Completed"
            bgColor="bg-light-green-8" />
        </q-scroll-area>
      </template>
      <template v-else>
        <span class="absolute-center">
          <q-spinner
            color="primary"
            size="3em"
          />
        </span>
      </template>

    </div>

    <q-dialog v-model="showAddTask" transition-show="scale" transition-hide="scale" persistent>
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>


    <div
      class="absolute-bottom q-pa-md no-pointer-events add-task"
      :class="$q.platform.is.mobile ? 'text-center' : 'text-right'"
    >
      <q-btn
        @click="showAddTask = true"
        class="all-pointer-events"
        round
        color="accent"
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
    ...mapState('storeTasks', ['search', 'taskDownloaded'])
  },
  components: {
    'task': require('components/tasks/task.vue').default,
    'add-task': require('components/tasks/add-task.vue').default,
    'task-list': require('components/list/tasks-list.vue').default,
    'no-tasks': require('components/tasks/no-tasks.vue').default,
    'sort-dropdown': require('components/tools/sort-dropdown.vue').default,
    'search-bar': require('components/tools/search-bar.vue').default,
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

<style scoped lang="scss">
  .scroll-area-task {
    display: flex;
    flex-grow: 1;

    .mobile & {
      flex-basis: 100px;
    }
  }
  .add-task {
    .mobile & {
      z-index: 3000;
      bottom: -50px;
    }
  }
</style>
