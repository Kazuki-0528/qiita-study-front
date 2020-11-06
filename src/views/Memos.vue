<template>
  <div>
    <h1 class="herder"><img class="cat" src="../assets/catblue.gif" />Memos</h1>
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

export default {
  components: {
    AddMemo,
  },
  computed: {
    ...mapState(["memos"]),
  },
  methods: {
    deleteMemo(memo) {
      this.$store.dispatch('deleteMemo', memo)
    }
  }
};
</script>

<style lang="scss">  //追加
.delete-btn {
  &:hover {
    border: 2px solid blue;
    color: rgb(5, 6, 6);
  }
}

.cat {
  padding-right: 8px;
}
</style>
