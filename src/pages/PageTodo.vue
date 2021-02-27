<template>
  <q-page class="q-pa-md">
    <q-list separator>
      <q-item-label header>Todo List</q-item-label>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodoPage',
  computed: {
   ...mapGetters('tasksStore', ['tasks'])
  },
  components: {
    'task': require('components/Tasks/Task.vue').default
  },
}
</script>

<style scoped>

</style>
