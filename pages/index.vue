<template>
  <div class="main">
    <img src="@/assets/logo.png" class="l-logoImage">
    <nuxt-link to="/register" class="l-register register button">新規登録</nuxt-link>
    <nuxt-link to="/login" class="l-login login button">ログイン</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    // axios.get("http://localhost:8080/api/users")
    // .then(response => {console.log(response)})
    // axios.get("http://localhost:8080/api/posts")
    // .then(response => {console.log(response)})
    // axios.get("http://localhost:8080/api/countlists")
    // .then(response => {console.log(response)})

    // //成功
    // axios.put("http://localhost:8080/api/users/1", {userId: 1, name: "Firmino", avatarPath: "aaa.jpg", iine: 20}).then(response => {
    //   console.log(response)
    // })
    // //成功
    // axios.post("http://localhost:8080/api/posts", {postId: 4, fromUserId: 3, toUserId: 1, message: "ポスト"}).then(response => {
    //   console.log(response)
    // })
    // //成功
    // axios.put("http://localhost:8080/api/countlists/1", {postId: 1, iine1: 2, iine2: 4, iine3: 1}).then(response => {
    //   console.log(response)
    // })
    // //成功
    // axios.post("http://localhost:8080/api/countlists", {postId: 3, iine1: 2, iine2: 4, iine3: 1}).then(response => {
    //   console.log(response)
    // })

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/prepends.scss";

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
}
.l-logoImage {
  width: 300px;
  height: 300px;
  margin-top: 100px;
}
//ボタンの共通設定
.button {
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 50px;
}
//新規登録ボタン
.l-register {
  width: 300px;
  height: 50px;
  margin-top: 70px;
}
.register {
  background-color: $green;
  &:hover {
    background-color: $green-hover;
  }
  &:active {
    background-color: $green-active;
    color: $text-active;
  }
}
//ログインボタン
.l-login {
  position: relative;
  width: 300px;
  height: 50px;
  margin-top: 20px;
}
.login {
  background-color: $gray;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: $gray-hover;
  }
  &:active {
    background-color: $gray-active;
    color: $text-active;
  }
}
</style>