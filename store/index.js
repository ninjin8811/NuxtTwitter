export const state = () => ({
  currentUID: 1,
    userList: [],
    imageList: [
      {id: 1, imageName: "firmino.jpg"},
      {id: 2, imageName: "mane.jpg"},
      {id: 3, imageName: "allison.jpg"}
    ],
    postList: [
      {
        fromUserID: 3,
        toUserID: 1,
        postID: 2,
        message: '2つ目',
        iineCountList: [
          { id: 1, count: 0 },
          { id: 2, count: 0 },
          { id: 3, count: 0 },
        ]
      },
      {
        fromUserID: 2,
        toUserID: 3,
        postID: 1,
        message: '最初の投稿',
        iineCountList: [
          { id: 1, count: 0 },
          { id: 2, count: 0 },
          { id: 3, count: 0 },
        ]
      },
    ]
})

export const getters = {
  currentUser(state) {
    return state.userList.find(user => user.id === state.currentUID) || {}
  }
}

export const mutations = {
  changeUID(state, id) {
    state.currentUID = id
  },
  addPost(state, post) {
    post.iineCountList = [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
    ]
    post.fromUserID = state.currentUID
    post.postID = state.postList.length + 1
    state.postList.unshift(post)
  },
  manipulateIINE(state, postID) {
    //現在のユーザーのいいねを減らす
    state.userList.find(user => user.id === state.currentUID).iine -= 1
    //特定のポストの中の、現在のユーザーのカウントリストの値を増やす
    state.postList.find(post => post.postID === postID).iineCountList.find(user => user.id === state.currentUID).count += 1
  },

  setUsers(state, fetchedUsers) {
    //ユーザーリストを削除
    state.userList.length = 0
    //ユーザーリストにユーザーを追加
    fetchedUsers.forEach(fetchedUser => {
      const path = require('@/assets/' + fetchedUser.avatarPath)
      const user = {
        id: fetchedUser.userId,
        name: fetchedUser.name,
        avatarPath: path,
        iine: fetchedUser.iine
      }
      state.userList.push(user)
    })
  }
}