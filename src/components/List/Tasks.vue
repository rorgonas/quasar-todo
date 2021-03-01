<template>
  <div>
    <list-header :bgColor="bgColor">{{ title }}</list-header>
    <q-list separator>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key">
      </task>
    </q-list>
  </div>
</template>

<script>
  export default {
    name: 'TaskList',
    props: ['tasks', 'title', 'bgColor'],
    components: {
      'task': require('components/Tasks/Task.vue').default,
      'list-header': require('components/Shared/ListHeader.vue').default,
    },
  }
</script>
