import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memos: []
  },
  mutations: {
    FETCH_MEMOS(state, memos) {
      state.memos = memos
    },
    ADD_MEMO(state, memo) {
      const memos = state.memos.concat(memo)
      state.memos = memos
    },
    DELETE_MEMO(state, memoId) {
      const memos = state.memos.filter(m => m.id != memoId)
      state.memos = memos
    }
  },
  actions: { 
    async fetchMemos({ commit }) {
      await axios().get('/memos')
        .then(res => {
          commit('FETCH_MEMOS', res.data)
        })
        .catch(error => console.log(error.res))
    },
    async addMemo({ commit }, memo) {
      const res = await axios().post('/memos', memo)
      const savedMemo = res.data
      commit('ADD_MEMO', savedMemo)
      return savedMemo
    },
    async deleteMemo({ commit }, memo) { // 追加
      await axios().delete(`/memos/${memo.id}`, memo)
      commit('DELETE_MEMO', memo.id)
    }
  }
})
