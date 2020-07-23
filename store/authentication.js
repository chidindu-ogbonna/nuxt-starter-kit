import firebase, { auth, userRef } from '@/services/firebase'
import CustomError from '@/utils/error'

export const state = () => ({
  user: null,
  userData: null,
})

export const getters = {
  isLoggedIn(state) {
    return !!state.user
  },
}

export const mutations = {
  setUser(state, payload) {
    const { user } = payload
    if (user) {
      state.user = buildUserObject(user)
    } else {
      state.user = null
      // XXX: For development
      // state.user = {
      //   displayName: 'Bones Inc',
      //   photoURL: 'https://randomuser.me/api/portraits/men/65.jpg',
      //   email: 'promise.bones@gmail.com',
      //   uid: 'flflflflflflfl',
      // }
    }
  },

  setUserData(state, payload) {
    const { data } = payload
    state.userData = data
  },
}

export const actions = {
  async signUpWithEmail({ commit }, payload) {
    const { email, password, business } = payload
    const result = await auth.createUserWithEmailAndPassword(email, password)
    const { user } = result

    const userDb = userRef.doc(user.uid)
    await userDb.set({
      email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      bio: '',
      displayName: business,
    })

    await user.updateProfile({ displayName: business })

    commit('setUser', { user })
  },

  async loginWithEmail({ commit }, payload) {
    const { email, password } = payload
    const result = await auth.signInWithEmailAndPassword(email, password)
    const { user } = result
    commit('setUser', { user })
  },

  async signOut({ commit }) {
    await auth.signOut()
    commit('setUser', { user: null })
    commit('setUserData', { data: null })
  },

  async authWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    if (process.browser) sessionStorage.setItem('auth', true)
    await auth.signInWithRedirect(provider)
  },

  async getRedirectResult({ commit }) {
    const result = await auth.getRedirectResult()
    const { user } = result
    if (user) {
      commit('setUser', { user })
    } else {
      throw new CustomError('custom-error', 'No account exists')
    }
  },

  async resetPassword({ commit }, payload) {
    const { email } = payload
    await auth.sendPasswordResetEmail(email)
  },
}

/**
 * Return required user fields from the firebase.User object
 *
 * @param {firebase.User} user - The user
 * @return {Object}
 */
const buildUserObject = (user) => {
  const { displayName, email, uid, photoURL } = user
  return { displayName, email, uid, photoURL }
}
