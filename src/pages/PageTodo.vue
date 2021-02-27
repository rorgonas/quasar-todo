<template>
  <q-page class="q-pa-md">
    <q-list separator>
      <q-item-label header>Todo List</q-item-label>
      <q-item
        v-for="(task, index) in tasks"
        tag="label"
        :key="index"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strike': task.completed}">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end">
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label class="row justify-end">
                <small>{{ task.dueTime}}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodoPage',
  computed: {
   ...mapGetters('tasks', ['tasks'])
  }
}
</script>

<style scoped>

</style>
