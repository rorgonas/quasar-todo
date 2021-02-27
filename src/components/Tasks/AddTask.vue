<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space/>
      <q-btn icon="close" flat rounded dense v-close-popup />
    </q-card-section>

    <form @submit.prevent="addTask">
      <q-card-section class="q-pt-none">
        <q-input v-model="task.name" ref="name" label="Task Name" autofocus outlined clearable :rules="[val => !!val || 'Field is required']"/>
        <div class="q-mb-md">
          <q-input v-model="task.dueDate" ref="dueDate" label="Due Date" outlined clearable>
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="task.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-mb-md">
          <q-input v-if="task.dueDate" v-model="task.dueTime" ref="dueTime" label="Due Time" outlined clearable>
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="task.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTask',
  data() {
    return {
      task: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasksStore', ['createTask']),
    addTask() {
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.createTask(this.task)
      this.$emit('on-close', true)
    }
  }
}
</script>

<style lang="scss"></style>
