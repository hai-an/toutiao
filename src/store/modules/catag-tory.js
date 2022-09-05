import axios from 'axios'
import '@/request/index'
export default {
  namespaced: true,
  state: { /* state 中定义分类频道列表和当前激活 */
    catagtory: [],
    currentCatagtory: ''/* 当前激活 */
  },
  mutations: {
    updatdCatagtory (state, payload) {
      state.catagtory = payload /* 更新分类数据 */
    },
    updatdCurrentCatagtory (state, payload) {
      state.currentCatagtory = payload /* 当前更新 */
    }
  },
  actions: {
    // 定义获取频道列表的actions,将第一个频道激活
    async getCatagtory (context) {
      // axios的返回数据的data里面实际的data的channels才是真正的数据
      const { data: { data: { channels } } } = await axios.get('/v1_0/channels')
      // 修改state只能通过mutations的方法
      context.commit('updatdCatagtory', channels)
      context.commit('updatdCurrentCatagtory', channels[0].id)
    }
  }
}
