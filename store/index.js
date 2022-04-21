export const state = () => ({
  banks: [],
  bankIcons: {
    bbl: {
      code: '002',
      color: '#1e4598',
      official_name: 'BANGKOK BANK PUBLIC COMPANY LTD.',
      official_name_thai: 'ธนาคารกรุงเทพ',
      nice_name: 'Bangkok Bank',
      short_name: 'bbl',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/bbl.svg',
    },
    kbank: {
      code: '004',
      color: '#138f2d',
      official_name: 'KASIKORNBANK PUBLIC COMPANY LTD.',
      official_name_thai: 'ธนาคารกสิกรไทย',
      nice_name: 'Kasikornbank',
      short_name: 'kbank',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/kbank.svg',
    },
    rbs: {
      code: '005',
      color: '#032952',
      official_name: 'THE ROYAL BANK OF SCOTLAND PLC',
      nice_name: 'Royal Bank of Scotland',
    },
    ktb: {
      code: '006',
      color: '#1ba5e1',
      official_name: 'KRUNG THAI BANK PUBLIC COMPANY LTD.',
      official_name_thai: 'ธนาคารกรุงไทย',
      nice_name: 'Krungthai Bank',
      short_name: 'ktb',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/ktb.svg',
    },
    jpm: {
      code: '008',
      color: '#321c10',
      official_name: 'JPMORGAN CHASE BANK, NATIONAL ASSOCIATION',
      nice_name: 'J.P. Morgan',
    },
    mufg: {
      code: '010',
      color: '#d61323',
      official_name: 'THE BANK OF TOKYO-MITSUBISHI UFJ, LTD.',
      nice_name: 'Bank of Tokyo-Mitsubishi UFJ',
    },
    tmb: {
      code: '011',
      color: '#1279be',
      official_name: 'TMB BANK PUBLIC COMPANY LIMITED.',
      official_name_thai: 'ธนาคารทหารไทย',
      nice_name: 'TMB Bank',
      short_name: 'tmb',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/tmb.svg',
    },
    scb: {
      code: '014',
      color: '#4e2e7f',
      official_name: 'SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.',
      official_name_thai: 'ธนาคารไทยพาณิชย์',
      nice_name: 'Siam Commercial Bank',
      short_name: 'scb',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/scb.svg',
    },
    citi: {
      code: '017',
      color: '#1583c7',
      official_name: 'CITIBANK, N.A.',
      nice_name: 'Citibank',
    },
    smbc: {
      code: '018',
      color: '#a0d235',
      official_name: 'SUMITOMO MITSUI BANKING CORPORATION',
      nice_name: 'Sumitomo Mitsui Banking Corporation',
    },
    sc: {
      code: '020',
      color: '#0f6ea1',
      official_name: 'STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED',
      nice_name: 'Standard Chartered (Thai)',
    },
    cimbt: {
      code: '022',
      color: '#7e2f36',
      official_name: 'CIMB THAI BANK PUPBLIC COMPANY LTD.',
      official_name_thai: 'ธนาคารซีไอเอ็มบี',
      nice_name: 'CIMB Thai Bank',
      short_name: 'cimbt',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/cimb.svg',
    },
    uobt: {
      code: '024',
      color: '#0b3979',
      official_name: 'UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED',
      official_name_thai: 'ธนาคารยูโอบี',
      nice_name: 'United Overseas Bank (Thai)',
      short_name: 'uobt',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/uob.svg',
    },
    bay: {
      code: '025',
      color: '#fec43b',
      official_name: 'BANK OF AYUDHYA PUBLIC COMPANY LTD.',
      official_name_thai: 'ธนาคารกรุงศรีอยุธยา',
      nice_name: 'Krungsri',
      short_name: 'bay',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/bay.svg',
    },
    mega: {
      code: '026',
      color: '#815e3b',
      official_name:
        'MEGA INTERNATIONAL COMMERCIAL BANK PUBLIC COMPANY LIMITED',
      nice_name: 'Mega International Commercial Bank',
    },
    boa: {
      code: '027',
      color: '#e11e3c',
      official_name: 'BANK OF AMERICA, NATIONAL ASSOCIATION',
      nice_name: 'Bank of America',
    },
    cacib: {
      code: '028',
      color: '#0e765b',
      official_name: 'CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK',
      nice_name: 'Crédit Agricole',
    },
    gsb: {
      code: '030',
      color: '#eb198d',
      official_name: 'THE GOVERNMENT SAVINGS BANK',
      official_name_thai: 'ธนาคารออมสิน',
      nice_name: 'Government Savings Bank',
      short_name: 'gsb',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/gsb.svg',
    },
    hsbc: {
      code: '031',
      color: '#fd0d1b',
      official_name: 'THE HONGKONG AND SHANGHAI BANKING CORPORATION LTD.',
      nice_name: 'Hongkong and Shanghai Banking Corporation',
    },
    db: {
      code: '032',
      color: '#0522a5',
      official_name: 'DEUTSCHE BANK AG.',
      nice_name: 'Deutsche Bank',
    },
    ghb: {
      code: '033',
      color: '#f57d23',
      official_name: 'THE GOVERNMENT HOUSING BANK',
      official_name_thai: 'อาคารสงเคราะห์',
      nice_name: 'Government Housing Bank',
      short_name: 'ghb',
      image: '/images/banks/ghb.png',
    },
    baac: {
      code: '034',
      color: '#4b9b1d',
      official_name: 'BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES',
      official_name_thai: 'ธนาคารเพื่อการเกษตร',
      nice_name: 'Bank for Agriculture and Agricultural Cooperatives',
      short_name: 'baac',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/baac.svg',
    },
    mb: {
      code: '039',
      color: '#150b78',
      official_name: 'MIZUHO BANK, LTD.',
      nice_name: 'Mizuho Bank',
    },
    bnp: {
      code: '045',
      color: '#14925e',
      official_name: 'BNP PARIBAS',
      nice_name: 'BNP Paribas',
    },
    tbank: {
      code: '065',
      color: '#fc4f1f',
      official_name: 'THANACHART BANK PUBLIC COMPANY LTD.',
      official_name_thai: 'ธนาคารธนชาติ',
      nice_name: 'Thanachart Bank',
      short_name: 'tbank',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/tbank.svg',
    },
    isbt: {
      code: '066',
      color: '#184615',
      official_name: 'ISLAMIC BANK OF THAILAND',
      official_name_thai: 'อิสลามแห่งประเทศไทย',
      nice_name: 'Islamic Bank of Thailand',
      short_name: 'isbt',
      image: '/images/banks/isbt.png',
    },
    tisco: {
      code: '067',
      color: '#12549f',
      official_name: 'TISCO BANK PUBLIC COMPANY LIMITED',
      official_name_thai: 'ทิสโก้',
      nice_name: 'Tisco Bank',
      short_name: 'tisco',
      image: '/images/banks/tisco.png',
    },
    kkp: {
      code: '069',
      color: '#199cc5',
      official_name: 'KIATNAKIN BANK PUBLIC COMPANY LIMITED',
      official_name_thai: 'ธนาคารเกียรตินาคิน',
      nice_name: 'Kiatnakin Bank',
      short_name: 'kkp',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/kk.svg',
    },
    icbct: {
      code: '070',
      color: '#c50f1c',
      official_name:
        'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
      official_name_thai: 'ธนาคารไอซีบีซี',
      nice_name: 'Industrial and Commercial Bank of China (Thai)',
      short_name: 'icbct',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/icbc.svg',
    },
    tcd: {
      code: '071',
      color: '#094ab3',
      official_name: 'THE THAI CREDIT RETAIL BANK PUBLIC COMPANY LIMITED',
      official_name_thai: 'ไทยเครดิตเพื่อรายย่อ',
      nice_name: 'Thai Credit Retail Bank',
      short_name: 'tcd',
      image: '/images/banks/tcd.jpeg',
    },
    lhfg: {
      code: '073',
      color: '#6d6e71',
      official_name: 'LAND AND HOUSES BANK PUBLIC COMPANY LIMITED',
      official_name_thai: 'ธนาคารแลนด์ แอนด์ เฮ้าส์ ',
      nice_name: 'Land and Houses Bank',
      short_name: 'lhfg',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/lhb.svg',
    },
    ttb: {
      code: '074',
      color: '#fff',
      official_name: 'TMB THANACHART BANK PUBLIC COMPANY LIMITED',
      official_name_thai: 'ธนาคารทหารไทยธนชาต',
      nice_name: 'TMB Thanachart Bank',
      short_name: 'ttb',
      image:
        'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/ttb.svg',
    },
    exim: {
      code: '074',
      color: '#ee871e',
      official_name: 'Export-Import Bank of Thailand',
      official_name_thai: 'เพื่อการส่งออกและนำเข้าแห่งประเทศไทย',
      nice_name: 'TMB Thanachart Bank',
      short_name: 'exim',
      image: '/images/banks/exim.png',
    },
  },
  references: [],
  promotions: [],
  isPhoneNumber: false,
})

export const mutations = {
  setBanks(state, banks) {
    state.banks = banks
  },
  setReferences(state, references) {
    state.references = references
  },
  setPromotions(state, promotions) {
    state.promotions = promotions
  },
}

export const actions = {
  async getBanks({ commit }) {
    try {
      const loadBanks = await this.$axios.$get('auth/load-banks')
      if (loadBanks.status) {
        commit('setBanks', loadBanks.data.load_banks)
      }
    } catch (error) {}
  },
  async getReferences({ commit }) {
    try {
      const references = await this.$axios.$get('auth/references')
      if (references.status) {
        commit('setReferences', references.data.references)
      }
    } catch (error) {}
  },
  async getPromotions({ commit }) {
    try {
      const promotions = await this.$axios.$get('auth/promotions')
      if (promotions.status) {
        commit('setPromotions', promotions.data.promotions)
      }
    } catch (error) {}
  },
}
