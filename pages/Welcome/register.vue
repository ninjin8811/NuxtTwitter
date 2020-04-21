<template>
  <div>
    <input-form v-bind="buttonType" v-on:button-clicked="signUp">
      <template slot="titleSlot">新規登録</template>
      <template slot="pwSlot">パスワードを設定</template>
      <template slot="buttonSlot">登録する</template>
    </input-form>
  </div>
</template>

<script>
import InputForm from '@/components/InputForm.vue'
import {signUp} from '@/plugins/auth.js'

export default {
  name: 'register-view',
  components: {
    'input-form': InputForm
  },
  data() {
    return {
      buttonType: {
        isLogin: false,
        isRegister: true
      },
    }
  },
  methods: {
    signUp(input) {
      signUp(input, (uid) => {
        if (uid) {
          this.$router.push({path: '/main?id', query: {id: uid}})
        } else {
          alert("登録に失敗")
        }
      })
    },
  }
}
</script>