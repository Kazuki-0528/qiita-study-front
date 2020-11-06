<template>
  <v-form ref="checkForm"> <!--追加-->
    <v-text-field
      v-model="memo.title"
      label="Title"
      :rules="[required('Title')]"
    ></v-text-field>
    <v-textarea
      v-model="memo.body"
      label="Body"
      :rules="[required('Body')]"
    ></v-textarea>

    <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      memo: {},
      required(propertyType) { 
        return v => v && v.length > 0 || `You must input a ${propertyType}`
      }
    }
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('addMemo', this.memo)
      this.memo.title = '' //追加
      this.memo.body = '' //追加
    }
  }
}
</script>