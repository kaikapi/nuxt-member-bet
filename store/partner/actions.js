export default {
  async changeIp({ commit }) {
    try {
      const ip = await this.$axios.$get('http://icanhazip.com')
      commit('setIp', ip.split('\n')[0])
    } catch (error) {}
  },
  changePrefix({ commit }, prefix) {
    commit('setPrefix', prefix)
  },
}
