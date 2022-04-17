export const state = () => ({
  isDrawerVisible: false,
  items: [
    {
      icon: 'mdi-gift',
      title: 'โปรไฟล์',
      to: '/profile',
      isLoggedIn: true,
    },
    {
      icon: 'mdi-gift',
      title: 'เข้าเล่นเกม',
      to: '/games',
      isLoggedIn: true,
    },
    {
      icon: 'mdi-gift',
      title: 'ฝาก',
      to: '/deposit',
      isLoggedIn: true,
    },
    {
      icon: 'mdi-gift',
      title: 'ถอน',
      to: '/withdraw',
      isLoggedIn: true,
    },
    {
      icon: 'mdi-gift',
      title: 'ประวัติ',
      to: '/transaction',
      isLoggedIn: true,
    },
    {
      icon: 'mdi-gift',
      title: 'โปรโมชั่น',
      to: '/promotions',
      isLoggedIn: false,
    },
    {
      icon: 'mdi-gift',
      title: 'กิจกรรม',
      to: '/activity',
      isLoggedIn: true,
    },
    {
      icon: 'mdi-human-greeting-proximity',
      title: 'ติดต่อ',
      to: '/contact',
      isLoggedIn: false,
    },
    {
      icon: 'mdi-account-plus',
      title: 'สมัครสมาชิก',
      to: '/register',
      isLoggedIn: false,
    },
    {
      icon: 'mdi-login-variant',
      title: 'เข้าสู่ระบบ',
      to: '/login',
      isLoggedIn: false,
    },
  ],
})

export const getters = {
  navItems(state) {
    return state.navbar
  },
}

export const mutations = {
  setDrawerVisible(state, drawer) {
    state.isDrawerVisible = drawer
  },
}

export const actions = {
  toggleDrawerVisible({ commit }, drawer) {
    commit('setDrawerVisible', drawer)
  },
}
