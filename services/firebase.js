import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const stagingConfig = {
  // Config from firebase
}

const productionConfig = {
  // Config from firebase
}

if (!firebase.apps.length) {
  process.env.APP_MODE === 'production'
    ? firebase.initializeApp(productionConfig)
    : firebase.initializeApp(stagingConfig)
}

const auth = firebase.auth()
const db = firebase.firestore()

const userRef = db.collection('shops')

export { userRef, auth }
export default firebase
