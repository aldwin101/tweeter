<!-- This component goes into the Profile.vue in view folder -->
<template>
    <div> 
        <!-- vuetify button -->
        <v-app>
            <v-col>
                <v-btn class="orange white--text" rounded @click="deleteProfile">Delete Profile</v-btn>
                <v-text-field class="orange white--text" rounded v-model="password" placeholder="Confirm Password" type="password"></v-text-field>
            </v-col>
        </v-app>
    </div>
</template>

<script>

    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name: 'DeleteProfileComp',
        data() {
            return {
                password: ''
            }
        },
        
        methods: {
            // delete profile
            deleteProfile() {
                axios.request({
                    url : 'https://tweeterest.ml/api/users',
                    method : 'DELETE',
                    headers : {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY,
                    },
                    data: {
                        'loginToken' : this.token,
                        'password' : this.password
                    }
                    }).then((response) => {
                        this.$router.push({name: 'LoginSignup'})
                        console.log(response);
                    }).catch((error) => {
                    console.log(error.response);
                })
            },
        },
        mounted () {
            // Get token
            this.token = cookies.get('token');
        },
        
    }
</script>

<style scoped>

</style>