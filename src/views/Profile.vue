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
      <v-btn>Save profile</v-btn>
    </v-col>
  </div>
</template>

<script>
import LogoutComp from '../components/LogoutComp.vue'
  export default {
    name: 'Profile',
    data() {
      return {
        email: '',
        username: '',
        bio: '',
        birthdate: '',
        imageUrl: '',
        bannerUrl: ''
      }
    },
    components: {
      LogoutComp
    },
    methods: {
      saveProfile(){
        this.$router.push({name: 'Feed'});
      },
      closeEditProfile(){
        this.$router.push({name: 'Feed'});
      }
    },
  }
</script>

<style scoped>

</style>