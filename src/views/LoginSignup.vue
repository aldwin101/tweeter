<template>
  <div>
    <h1>Tweeter.</h1>
    <v-col>
      <v-btn @click="logIn">Log In</v-btn>
    </v-col>
    <v-col>
      <v-btn @click="SignUp">Sign Up</v-btn>
    </v-col>
  </div>
</template>

<script>

  export default {
    name : 'LoginSignup',
    components : {
    },
    methods: {
      logIn(){
        this.$router.push({name: 'Login'});
      },
      SignUp(){
        this.$router.push({name: 'Signup'});
      }
    }
  }
</script>

<style>
    div {
      background-color: rgb(149, 173, 173);
      text-align: center;
      color: rgb(80, 67, 199);
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    h1 {
      font-size: 20vh;
      padding: 25vh 0 0 0;
    }
</style>