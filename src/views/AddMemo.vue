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
      const memo = await this.$store.dispatch('addMemo', this.memo) //変更
      this.$router.push({ name: 'show-memo', params: { id: memo.id }}) //追記
    }
  }
}
</script>