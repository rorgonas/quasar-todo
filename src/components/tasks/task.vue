<template>
  <transition
    appear
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeInRight"
  >
    <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed }})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="openEditTask"
    v-touch-swipe.mouse.left="userSwiped"
    clickable
    v-ripple>
    <q-item-section side top>
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{'text-strike': task.completed}"
        v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>
    </q-item-section>

    <q-item-section>
        <div class="column">
          <q-item-label v-show="task.dueDate" class="row justify-end">
            <q-icon name="event" size="18px" class="q-mr-xs" />
            {{ task.dueDate | niceDate}}
          </q-item-label>
          <q-item-label v-show="task.dueTime" class="row justify-end">
            <small>{{ taskDueTime}}</small>
          </q-item-label>
        </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="openEditTask"
          round
          flat
          dense
          color="primary"
          icon="edit"
          size="16px" />
        <q-btn
          @click.stop="promptToDelete()"
          round
          flat
          dense
          color="warning"
          icon="delete"
          size="16px" />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask" transition-show="scale" transition-hide="scale" persistent>
      <edit-task
        :task='task'
        :id="id"
        @close="showEditTask = false" />
    </q-dialog>

  </q-item>
  </transition>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import { date } from 'quasar'

const { formatDate } = date

export default {
  name: 'Task',
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }
  },
  filters: {
    niceDate(value) {
      return formatDate(value, 'MMM D')
    },
    searchHighlight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, (match) => {
          return `<span class="bg-yellow-6">${match}</span>`
        })
      } else {
        return value
      }
    }
  },
  components: {
    'edit-task': require('components/tasks/edit-task.vue').default
  },
  methods: {
    ...mapActions('storeTasks', ['updateTask', 'deleteTask']),
    promptToDelete() {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really want to delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(this.id)
      })
    },
    openEditTask() {
      this.showEditTask = true
    },
    userSwiped() {
      this.promptToDelete()
    }
  },
  computed: {
    ...mapState('storeTasks', ['search']),
    ...mapGetters('settingsStore', ['settings']),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        // date formatter expects: 2019/05/15 16:00
        return formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')
      } else {
        return this.task.dueTime
      }
    }
  }
}
</script>

<style></style>
