<template>
  <q-card-section class="row">
    <div class="text-h6"><slot>Header Title</slot></div>
    <q-space/>
    <q-btn icon="close" flat rounded dense v-close-popup />
  </q-card-section>
</template>

<script>
export default {
  name: 'TaskHeader'
}
</script>

<style>

</style>
