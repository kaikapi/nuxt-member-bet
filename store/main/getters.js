export default {
  credit: (state) => {
    return state.customerMain.credit
  },
  customer: (state) => {
    return state.customerMain ? state.customerMain.customer : null
  },
  news: (state) => {
    return state.customerMain ? state.customerMain.news : null
  },
  new_subs: (state) => {
    return state.customerMain ? state.customerMain.new_subs : null
  },
  promotion_general: (state) => {
    return state.customerMain ? state.customerMain.promotion_general : null
  },
}
