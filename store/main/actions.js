export default {
  async getCustomerMain({ commit }) {
    try {
      const customerMain = await this.$axios.$post('main', {
        line_token: '',
      })
      if (customerMain.status) {
        commit('setCustomerMain', customerMain.data)
      }
    } catch (error) {}
  },
}
