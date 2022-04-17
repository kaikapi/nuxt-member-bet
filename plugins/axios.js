export default function ({ app, $axios, redirect, store }) {
  const prefix = store.state.prefix.name.toUpperCase()

  $axios.onRequest((config) => {
    const apiKey = store.state.apiKey
    const urlUnsetHeader = ['http://icanhazip.com']

    if (!urlUnsetHeader.includes(config.url)) {
      config.headers.common['API-KEY'] = apiKey
      config.headers.common['X-PREFIX'] = prefix

      if (app.$auth.loggedIn) {
        // const token = app.$auth.getToken('local')
        const token = app.$auth.getToken('local').split(' ')[1]
        config.headers.Authorization = token
      }
    } 
    // else {
    //   // delete config.headers.Authorization
    //   delete $axios.defaults.headers.Authorization
    //   console.log($axios.defaults.headers)
    // }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect(`/login?prefix=${prefix}`)
    }
    if (code === 404) {
      redirect('/404')
    }
  })
}
