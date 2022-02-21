export const state = () => ({
  isDrawerVisible: false,
  items: [
    {
      icon: 'mdi-account-plus',
      title: 'สมัครสมาชิก',
      to: '/register',
    },
    {
      icon: 'mdi-login-variant',
      title: 'เข้าสู่ระบบ',
      to: '/login',
    },
    {
      icon: 'mdi-gift',
      title: 'โปรโมชั่น',
      to: '/promotions',
    },
    {
      icon: 'mdi-human-greeting-proximity',
      title: 'ติดต่อพนักงาน',
      to: '/contact',
    },
  ],
  itemsTemp: [
    {
      icon: 'mdi-account-plus',
      title: 'สมัครสมาชิก',
      to: '/register',
    },
    {
      icon: 'mdi-login-variant',
      title: 'เข้าสู่ระบบ',
      to: '/login',
    },
    {
      icon: 'mdi-gift',
      title: 'โปรโมชั่น',
      to: '/promotions',
    },
    {
      icon: 'mdi-human-greeting-proximity',
      title: 'ติดต่อพนักงาน',
      to: '/contact',
    },
  ],
})

export const getters = {
  getDrawerVisible: (state) => state.isDrawerVisible,
  getNavItems: (state) => state.items,
}

export const mutations = {
  setDrawerVisible(state, drawer) {
    state.isDrawerVisible = drawer
  },
  setNavTo(state, prefix) {
    state.items.forEach((item, index) => {
      state.items[index].to = state.itemsTemp[index].to + `?prefix=${prefix}`
    })
  },
}

export const actions = {
  toggleDrawerVisible({ commit }, drawer) {
    commit('setDrawerVisible', drawer)
  },
  changeNavTo({ commit, rootState }) {
    commit('setNavTo', rootState.partner.prefix)
  },
}
