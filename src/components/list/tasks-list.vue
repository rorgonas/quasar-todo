<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div :class="{ 'q-mb-md': !settings.showTaskInOneList }">
      <list-header
        v-if="!settings.showTaskInOneList"
        :bgColor="bgColor">{{ title }}
      </list-header>
      <q-list separator>
        <task
          v-for="(task, key) in tasks"
          :key="key"
          :task="task"
          :id="key">
        </task>
      </q-list>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TaskList',
    props: ['tasks', 'title', 'bgColor'],
    components: {
      'task': require('components/tasks/task.vue').default,
      'list-header': require('components/shared/list-header.vue').default,
    },
    computed: {
      ...mapGetters('settingsStore', ['settings'])
    }
  }
</script>

<style lang="scss">
  .q-banner {
    opacity: 0.5;
  }
</style>
