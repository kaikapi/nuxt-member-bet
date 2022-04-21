export default function ({ app, $axios, redirect, store }) {
  const prefix = store.state.prefix.name.toUpperCase()

  $axios.onRequest((config) => {
    const urlUnsetHeader = ['http://icanhazip.com']

    if (!urlUnsetHeader.includes(config.url)) {
      config.headers.common.prefix = prefix

      // if (app.$auth.loggedIn) {
      //   // const token = app.$auth.getToken('local')
      //   const token = app.$auth.getToken('local').split(' ')[1]
      //   config.headers.Authorization = token
      // }
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      try {
        app.$auth.logout()
        redirect(`/login?prefix=${prefix}`)
      } catch (error) {}
    }
    if (code === 404) {
      redirect('/404')
    }
  })
}
