<template>
  <div>
    <input-form v-bind="buttonType" :error="error" v-on:button-clicked="checkInfo">
      <template slot="titleSlot">ログイン</template>
      <template slot="pwSlot">パスワード</template>
      <template slot="buttonSlot">ログイン</template>
    </input-form>
  </div>
</template>

<script>
import InputForm from '@/components/InputForm.vue'
import auth from '@/plugins/auth.js'
import firebase from '@/plugins/firebase'

export default {
  name: 'login-view',
  components: {
    'input-form': InputForm
  },
  data() {
    return {
      buttonType: {
        isLogin: true,
        isRegister: false
      },
      error: false
    }
  },
  methods: {
    checkInfo(input) {
      auth(input, (isLogin) => {
        if (isLogin) {
          this.$router.push('/main')
        } else {
          this.error = true
        }
      })
    }
  }
}
</script>