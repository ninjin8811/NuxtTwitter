import firebase from '@/plugins/firebase'


export function auth(input, callback) {
  firebase.auth().signInWithEmailAndPassword(input.email, input.password).then(user => {
    console.log(user.user.uid)
    callback(user.user.uid)
  }).catch(err => {
    console.log(err)
    callback(false)
  })
}

export function signUp(input, callback) {
  firebase.auth().createUserWithEmailAndPassword(input.email, input.password).then(user => {
    callback(user.user.uid)
  }).catch(err => {
    console.log(err)
    callback(false)
  })
}