import axios from 'axios'
import '@/request/index'
export default {
  namespaced: true,
  state: {
    allData: {}/* 定义获取头条内容的数据{id:[新闻头条内容]} */
  },
  mutations: {
    // 定义更新头条内容的同步方法
    // payload载荷 {1:[],2:[],3:[],4:[],5:[]}
    updateList (state, { currentCatagtory, list }) {
      // state.allData[currentCatagtory]=list 这样做大错特错,感觉不到变化就不会通知组件更新
      state.allData = {
        ...state.allDate, [currentCatagtory]: list
      }/* 这句代码的含义 就相当于 在一个新的对象后面追加了一个属性,更新某个属性的内容  */
    }
  },
  actions: {
    async getNewList (context, getId) {
      const { data: { data: { results } } } = await axios.get(`/v1_0/articles?channel_id=${getId}&timestamp=${Date.now()}&with_top=1`)
      // results是新闻列表
      context.commit('updateList', {
        currentCatagtory: getId,
        list: results
      })
    }
  }
}
