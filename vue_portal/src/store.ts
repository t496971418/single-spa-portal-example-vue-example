import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 防抖时间
let timer: NodeJS.Timeout
export default new Vuex.Store({
  state: {
    loginToken: 'sss',
    subMenuStatus: true,
    dataList: [
      {
        name: 'App 1 (React)',
        title: 'React',
        url: '#/app1',
        id: '11233543',
        icon: '1',
        status: false
      },
      {
        name: 'App 2 (Angular 6)',
        title: 'Angular 6',
        url: '#/app2',
        id: '112337656',
        icon: '2',
        status: true
      },
      {
        name: 'App 3 (Angular 1)',
        title: 'Angular 1',
        url: '#/app3',
        id: '11236781',
        icon: '3',
        status: false
      },
      {
        name: 'App 4 (Vue)',
        title: 'Vue',
        url: '#/app4',
        id: '11238901',
        icon: '4',
        status: false
      },
      {
        name: 'App 5 (Angular 6)',
        title: 'Angular 6',
        url: '#/app5',
        id: '11267891',
        icon: '5',
        status: true
      }
    ]
  },
  mutations: {
    /**
     * 设置可选菜单状态
     * @param state dataList
     * @param payload index
     */
    setDataListStatus(state: any, payload: number) {
      state.dataList[payload].status = !state.dataList[payload].status
    },

    /**
     * 设置左侧菜单排序
     */
    setDataListOrder(state: any, payload: number) {
      console.table(state.dataList)
      console.table(payload)
    },
    setSubMenu(state: any, paylaod: boolean) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        state.subMenuStatus = paylaod
      }, 300)

    }
  },
  actions: {

  }
})
