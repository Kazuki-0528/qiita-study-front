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
    }
  },
  actions: { 
    async fetchMemos({ commit }) {
      await axios().get('/memos')
        .then(res => {
          commit('FETCH_MEMOS', res.data)
        })
        .catch(error => console.log(error.res))
    }
  }
})
