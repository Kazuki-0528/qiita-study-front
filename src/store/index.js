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
    EDIT_MEMO(state, memo) {
      state.memos.forEach(m => {
        if (m.id === memo.id) {
          m = memo
        }
      })
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
    async editMemo({ commit }, memo) {
      const res = await axios().put(`/memos/${memo.id}`, memo)
      const editedMemo = res.data
      commit('EDIT_MEMO', editedMemo)
      return editedMemo
    }
  }
})
