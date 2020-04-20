import firebase from '@/plugins/firebase'

function auth(input, callback) {
  firebase.auth().signInWithEmailAndPassword(input.email, input.password).then(user => {
    callback(true)
  }).catch(err => {
    callback(false)
  })
}

export default auth