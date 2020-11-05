<template>
  <form>
    <v-text-field v-model="memo.title" label="Title"></v-text-field>
    <v-textarea v-model="memo.body" label="Body"></v-textarea>

    <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      memo: {}
    }
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('addMemo', this.memo)
      this.memo.title = ''
      this.memo.body = ''
    }
  }
}
</script>