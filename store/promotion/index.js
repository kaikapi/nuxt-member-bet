export const state = () => ({
  promotions: [],
})

export const mutations = {
  setPromotions(state, promotions) {
    state.promotions = promotions
  },
}

export const actions = {
  async getPromotions({ commit }) {
    try {
      const promotionCustomers = await this.$axios.$post('promotions')
      if (promotionCustomers.status) {
        commit('setPromotions', promotionCustomers.data.promotions)
      }
    } catch (error) {}
  },
}
