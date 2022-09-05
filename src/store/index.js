import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from './modules/catag-tory'
import newlist from './modules/new-list'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    catagtory: state => state.catagtory.catagtory, // 频道列表数组
    currentCatagtory: state => state.catagtory.currentCatagtory, /* 当前选中的数组 */
    currentList: state => state.newlist.allData[state.catagtory.currentCatagtory] || []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    catagtory, /* 子模块1 */
    newlist /* 子模块2 */
  }
})
