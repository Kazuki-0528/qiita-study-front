<template>
  <div>
    <h2>Editing Memo</h2>
    <form>
      <v-text-field
        v-model="memo.title"
        label="Title"
      ></v-text-field>
      <v-textarea
        v-model="memo.body"
        label="Body"
      ></v-textarea>
      <v-btn class="mr-4" @click="updateMemo">Update</v-btn>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['memos']),
    memo() {
      return this.memos.find(m => m.id == this.$route.params.id) || {}
    }
  },
  methods: {
    async updateMemo() {
      const memo = await this.$store.dispatch('editMemo', this.memo) 
    }
  }
}
</script>