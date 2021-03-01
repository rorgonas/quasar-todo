<template>
  <q-banner
    dense
    inline-actions
    class="list-header text-white text-center"
    :class="bgColor">
    <span class="text-bold text-subtitle1">
      <slot>List Banner</slot>
      <slot name="action"></slot>
    </span>
  </q-banner>
</template>

<script>
  export default {
    name: 'ListBanner',
    props: ['bgColor']
  }
</script>

<style lang="scss">
  .list-header {
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
