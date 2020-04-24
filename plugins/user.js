import axios from "axios";

export function getUsers(callbackUsers) {
  axios.get("http://localhost:8080/api/users").then(fetchedUsers => {
    callbackUsers(fetchedUsers.data)
  }).catch(err => {
    console.log(err)
    callbackUsers(false)
  })
}

export function putUser(user, callbackUser) {
  const url = "http://localhost:8080/api/users/" + user.userId
  axios.put(url, user).then(updatedUser => {
    callbackUser(updatedUser)
  }).catch(err => {
    console.log(err)
    callbackUser(false)
  })
}