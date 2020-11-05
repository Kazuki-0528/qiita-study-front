<template>
  <div>
    <h1>Memos</h1>
    <v-row>
      <v-col cols="12">
        <AddMemo />  
      </v-col>
      <v-col cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr v-for="memo in memos" :key="memo.id">
            <td>{{ memo.title }}</td>
            <td>{{ memo.body }}</td>  <!-- 追加↓ -->
            <td><router-link :to="{ name: 'edit-memo', params: { id: memo.id }}">EDIT</router-link></td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddMemo from './AddMemo'  

export default {
  components: {  
    AddMemo
  },  
  computed: {
    ...mapState(['memos'])
  }
}
</script> 