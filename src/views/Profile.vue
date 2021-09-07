<template>
  <div id="gridContainer">
    <div id="sideBtns">
    <SideButtons />
    </div>

    <div id="editProfile">
      <v-app>
      <v-container>
        
        <v-col>
          <v-btn class="orange white--text" rounded @click="closeEditProfile">X</v-btn>
        </v-col>
        <v-col>
          <v-text-field class="orange white--text" rounded v-model="email" label="E-mail"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field class="orange white--text" rounded v-model="username" label="Username"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field class="orange white--text" rounded v-model="bio" label="Bio" ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field class="orange white--text" rounded v-model="birthdate" label="Birth date"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field class="orange white--text" rounded v-model="imageUrl" label="Profile picture" ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field class="orange white--text" rounded v-model="bannerUrl" label="Banner"></v-text-field>
        </v-col>
        
          <v-col>
            <v-btn class="orange white--text" rounded @click="updateProfile">Save profile</v-btn>
          </v-col>
          <DeleteProfileComp />
      </v-container>
      </v-app>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import DeleteProfileComp from '../components/DeleteProfileComp.vue'
import SideButtons from '../components/SideButtons.vue'
  export default {
    name: 'Profile',
    components: {
      SideButtons,
        DeleteProfileComp
    },
    data() {
      return {
        token: '',
        email: '',
        username: '',
        bio: '',
        birthdate: '',
        imageUrl: '',
        bannerUrl: '',
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
          this.$router.push({name: 'Feed'});
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


/*tablet*/
@media only screen and (min-width: 426px) {
  #gridContainer {
      display: grid;
      grid-template-columns: fit-content(100%) 1fr;
    }
    #sideBtns {
      background-color:#F19953;
    }
    #editProfile {
      margin: auto;
      width: 30vw;
    }
}

/*desktop*/
@media only screen and (min-width: 769px) {
  #gridContainer {
    display: grid;
    grid-template-columns: fit-content(100%) 1fr;
  }
  #sideBtns {
    background-color:#F19953;
  }
  #editProfile {
    margin: auto;
    width: 30vw;
  }
}

</style>