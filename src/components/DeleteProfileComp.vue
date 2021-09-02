<template>
    <div> 
        <!-- vuetify button -->
        <v-col>
            <v-btn @click="deleteProfile">Delete Profile</v-btn>
        </v-col>
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name: 'DeleteProfileComp',
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
                        console.log(response);
                    }).catch((error) => {
                    console.log(error.response);
                })
            },
        },
        mounted () {
            // Getting token
            this.token = cookies.get('token');
            console.log(this.token);
        },
    }
</script>

<style scoped>

</style>