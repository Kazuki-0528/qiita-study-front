<template>
  <div>
    <h1>Memos</h1>
    <v-row>
      <v-col cols="12">
      <form>
        <v-text-field
          v-model="memo.title"
          label="Title"
        ></v-text-field>
        <v-textarea
          v-model="memo.body"
          label="Body"
        ></v-textarea>

        <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
      </form>
      </v-col>
      <v-col cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr v-for="memo in memos" :key="memo.id">
            <td>{{ memo.title }}</td>
            <td>{{ memo.body }}</td>
            <td>SHOW</td>
            <td>EDIT</td>
            <td>DESTROY</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['memos'])
  },
  data() {
    return {
      memo: {}
    }
  },
  methods: {
    onSubmit() {
    }
  }
}
</script> 