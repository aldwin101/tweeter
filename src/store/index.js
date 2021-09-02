import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cookies from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    likeComment(){
      axios.request({
        url:'https://tweeterest.ml/api/tweet-likes',
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key' : process.env.VUE_APP_API_KEY
        },
        data: {
          'loginToken': this.token,
          'tweetId': this.tweetId
        }
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error.response);
      })
    }
  },
  getters: {
    getToken(){
      cookies.get('token')
    }
  }
})
