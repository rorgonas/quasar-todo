<template>
  <q-page class="q-pa-md">

    <no-tasks
      v-if="!Object.keys(tasksTodo).length && !search"
      class="q-mb-md" />

    <div class="row justify-end">
      <sort-dropdown />
    </div>

    <p v-if="!Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length && search">
      No search results
    </p>

    <task-list
      v-if="Object.keys(tasksTodo).length"
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
      <add-task @close="showAddTask = false"></add-task>
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
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'TodoPage',
  data() {
    return {
      showAddTask: false,
    }
  },
  computed: {
    ...mapGetters('tasksStore', ['tasksTodo', 'tasksCompleted']),
    ...mapState('tasksStore', ['search'])
  },
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/AddTask.vue').default,
    'task-list': require('components/List/Tasks.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default,
    'sort-dropdown': require('components/Tools/SortDropdown.vue').default,
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
