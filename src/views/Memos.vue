<template>
  <div>  
    <Flash />
    <h1 class="herder">
      <img src="../assets/catblue.gif">
      Memos
    </h1>
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
            <td>{{ memo.body }}</td>
            <td>
              <span class="delete-btn" @click="deleteMemo(memo)">[ DELETE ]</span> <!-- 追加 -->
            </td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddMemo from "./AddMemo";
import Flash from '@/components/Flash.vue'

export default {
  components: {
    AddMemo,
    Flash
  },
  computed: {
    ...mapState(["memos"]),
  },
  methods: {
    deleteMemo(memo) {
      this.$store.dispatch('deleteMemo', memo)
      this.$store.commit('setMessage', {
        status: true,
        message: 'Meeoooooow'
      })
      setTimeout(() => {
        this.$store.commit('setMessage', {})
      }, 2000)
    }
  }
};
</script>

<style lang="scss">  
.delete-btn {
  &:hover {
    border: 2px solid blue;
    color: rgb(5, 6, 6);
  }
}

img {  //追加
  padding-right: 8px;
}
</style>
