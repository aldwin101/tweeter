<template>
  <div>
    <v-app>
      <v-container>
        <div id="h1Container">
          <h1>Tweeter.</h1>
        </div>
        <v-col>
          <v-btn class="orange white--text" rounded @click="logIn">Log In</v-btn>
        </v-col>
        <v-col>
          <v-btn class="orange white--text" rounded @click="SignUp">Sign Up</v-btn>
        </v-col>
      </v-container>
    </v-app>
    
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
      text-align: center;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    #h1Container{
      padding: 25vh 0 0 0;
      
      width: 60vw;
      margin: auto;
    }
    h1 {
      font-size: 10vw;
      background-color: #F19953;
      border-radius: 15vw 0 15vw 0;
      color: white;
    }
    /* Tablet */
  @media only screen and (min-width: 426px) {

  }
    /* Desktop */
  @media only screen and (min-width: 769px) {

  }
</style>