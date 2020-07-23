import { auth } from '@/services/firebase'

export default ({ store }) => {
  // if (process.browser) {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   if (user) {
  //     store.commit('authentication/setUser', { user })
  //   }
  // }

  auth.onAuthStateChanged((user) => {
    if (user) {
      store.commit('authentication/setUser', { user })
    } else {
      store.commit('authentication/setUser', { user: null })
    }
  })
}
