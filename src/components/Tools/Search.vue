<template>
    <q-input
      v-model="searchField"
      @keyup.esc="searchField = ''"
      placeholer="Search"
      standout="bg-teal text-white"
      v-select-all
      dense>

      <template v-slot:append>
        <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
        <q-icon name="search" />
      </template>

    </q-input>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { selectAll } from "src/directives/directive-select-all";

  export default {
    name: 'Search',
    computed: {
      ...mapState('tasksStore', ['search']),
      searchField: {
        get() {
          return this.search
        },
        set(value) {
          this.setSearch(value)
        }
      }
    },
    methods: {
      ...mapActions('tasksStore', ['setSearch']),
    },
    directives: {
      selectAll
    }
  }
</script>
