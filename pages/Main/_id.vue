<template>
  <div>
    <header-component class="header"></header-component>
    <post-component></post-component>
    <post-list v-for="post in postList" v-bind:prop-post="post" :key="post.postID"></post-list>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Post from '../../components/Post.vue'
import PostList from '../../components/PostList.vue'
import { getUsers } from '@/plugins/user.js'

export default {
  name: 'main-view',
  components: {
    'header-component': Header,
    'post-component': Post,
    'post-list': PostList
  },
  mounted() {
    getUsers((callbackUsers) => {
        if (callbackUsers) {
          console.log("取得したユーザーリスト")
          console.log(callbackUsers)
          this.$store.commit('setUsers', callbackUsers)
        } else {
          console.log("ユーザーの取得に失敗")
        }
      })
  },
  computed: {
    postList() {
      return this.$store.state.postList
    }
  },
}
</script>