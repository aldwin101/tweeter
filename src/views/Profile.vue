<template>
  <div>
    <LogoutComp />
    <v-col>
      <v-btn @click="closeEditProfile">X</v-btn>
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field v-model="email" label="E-mail"></v-text-field>
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field v-model="username" label="Username"></v-text-field>
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field v-model="bio" label="Bio" ></v-text-field>
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field v-model="birthdate" label="Birth date"></v-text-field>
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field v-model="imageUrl" label="Profile picture" ></v-text-field>
    </v-col>
    <v-col cols="12" md="3">
      <v-text-field v-model="bannerUrl" label="Banner"></v-text-field>
    </v-col>
    <v-col>
      <v-btn @click="updateProfile">Save profile</v-btn>
    </v-col>
  </div>
</template>

<script>
import LogoutComp from '../components/LogoutComp.vue'
import axios from 'axios'
import cookies from 'vue-cookies'
  export default {
    name: 'Profile',
    components: {
      LogoutComp
    },
    data() {
      return {
        token: '',
        email: '',
        username: '',
        bio: '',
        birthdate: '',
        imageUrl: '',
        bannerUrl: ''
      }
    },
    methods: {
      updateProfile() {
          axios.request({
          url : 'https://tweeterest.ml/api/users',
          method : 'PATCH',
          headers : {
            'Content-Type': 'application/json',
            'X-Api-Key' : process.env.VUE_APP_API_KEY
          },
          data: {
            'loginToken': this.token,
            'email': this.email,
            'username': this.username,
            'bio': this.bio,
            'birthdate': this.birthdate,
            'imageUrl': this.imageUrl,
            'bannerUrl': this.bannerUrl
          }
        }).then((response) => {
          // this.$router.push({name: 'Feed'});
          console.log(response.data);

        }).catch((error) => {
          console.log(error.response);
        })
      },
      closeEditProfile(){
        this.$router.push({name: 'Feed'});
      }
    },
    mounted () {
      this.token = cookies.get('token');
      console.log(this.token);
    },
  }
</script>

<style scoped>

</style>