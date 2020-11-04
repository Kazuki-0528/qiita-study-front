<template>
  <div id="app">
    <v-container>
      <router-view/>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchMemos')
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #0680fa;
}
</style>
