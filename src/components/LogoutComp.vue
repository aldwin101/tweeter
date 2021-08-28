<template>
    <div>
        <v-btn @click="logOut">Log out</v-btn>
    </div>
</template>

<script>
    import cookies from 'vue-cookies'
    import axios from 'axios'

    export default {
        name: 'LogoutComp',
        data() {
            return {
                token: ''
            }
        },
        methods: {
            logOut(){
                axios.request({
                    url : 'https://tweeterest.ml/api/login',
                    method : 'DELETE',
                    headers : {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'loginToken': this.token
                    }
                }).then((response) => {
                    console.log(response);
                    cookies.remove('token');
                    cookies.remove('userLoggedinId')
                    this.$router.push({name: 'LoginSignup'});
                    console.log('Logout successfully');
                }).catch((error) => {
                    console.log(error.response);
                })
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