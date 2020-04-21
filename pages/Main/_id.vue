<template>
  <div>
    <header-component class="header"></header-component>
    <p>{{id}}</p>
    <post-component></post-component>
    <post-list v-for="post in postList" v-bind:prop-post="post" :key="post.postID"></post-list>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Post from '../../components/Post.vue'
import PostList from '../../components/PostList.vue'

export default {
  name: 'main-view',
  components: {
    'header-component': Header,
    'post-component': Post,
    'post-list': PostList
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    postList() {
      return this.$store.state.postList
    }
  }
}
</script>