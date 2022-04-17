export const state = () => ({
  ip: null,
  name: 'czbet',
  isPromotion: null,
  imageLogo: null,
  liffId: null,
  lineSupport: null,
  promotions: [],
  references: [],
})

export const mutations = {
  setIp(state, ip) {
    state.ip = ip
  },
  setName(state, name) {
    state.name = name
  },
  setIsPromotion(state, isPromotion) {
    state.isPromotion = isPromotion
  },
  setImageLogo(state, imageLogo) {
    state.imageLogo = imageLogo
  },
  setLiffId(state, liffId) {
    state.liffId = liffId
  },
  setLineSupport(state, lineSupport) {
    state.lineSupport = lineSupport
  },
  setPromotions(state, promotions) {
    state.promotions = promotions
  },
  setReferences(state, references) {
    state.references = references
  },
}

export const actions = {
  async changeIp({ commit }) {
    try {
      const ip = await this.$axios.$get('http://icanhazip.com')
      commit('setIp', ip.split('\n')[0])
    } catch (error) {}
  },
  async changePrefix({ commit, dispatch }, name) {
    try {
      const checkPrefix = await this.$axios.$post('check_prefix')
      if (checkPrefix.status) {
        commit('setName', name)
        commit('setIsPromotion', checkPrefix.data.affiliate_new_promotion)
        commit('setImageLogo', checkPrefix.data.image_logo)
        commit('setLiffId', checkPrefix.data.liff_id)
        commit('setLineSupport', checkPrefix.data.line_support)
        commit('setPromotions', checkPrefix.data.promotions)
        commit('setReferences', checkPrefix.data.references)
      }
    } catch (error) {}
  },
}
