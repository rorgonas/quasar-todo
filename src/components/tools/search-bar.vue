<template>
    <q-input
      v-model="searchField"
      @keyup.esc="searchField = ''"
      label="Search"
      class="col"
      v-select-all
      outlined
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
      ...mapState('storeTasks', ['search']),
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
      ...mapActions('storeTasks', ['setSearch']),
    },
    directives: {
      selectAll
    }
  }
</script>
