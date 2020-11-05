<template>
  <div>
    <h1>Memos</h1>
    <v-row>
      <v-col cols="12">
        <AddMemo />  <!-- 追加 -->
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
import AddMemo from './AddMemo'  //追加

export default {
  components: {  //追加
    AddMemo
  },  //,を忘れがち！
  computed: {
    ...mapState(['memos'])
  }
}
</script> 