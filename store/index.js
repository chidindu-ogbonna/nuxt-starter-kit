import { userRef, auth } from '@/services/firebase'

/**
 * Get user data from database
 * When an 'authentication/setUser' commit is triggered
 */
const getUserDataPlugin = (store) => {
  store.subscribe(async (mutation, state) => {
    const { type } = mutation

    if (type === 'authentication/setUser') {
      const currentUser = auth.currentUser
      if (currentUser) {
        const { uid } = currentUser
        const userDb = userRef.doc(uid)
        const snapshot = await userDb.get()
        const userData = snapshot.data()
        store.commit('authentication/setUserData', { data: userData })
      }
    }
  })
}

export const plugins = [getUserDataPlugin]
