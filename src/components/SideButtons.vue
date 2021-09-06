<!-- This component goes into the Feed in view folder -->
<template>
    <div id="container">
            <img src="@/assets/logo.png" alt="">
            <div id="sideBtnsContainer">
                <div id="sideBtns">
                    <p @click="discoverPage">Discover</p>
                    <p @click="editProfile">Edit Profile</p>
                    <p @click="logOut">Logout</p>
                </div>
            </div>
    </div>
</template>

<script>
    import cookies from 'vue-cookies'
    import axios from 'axios'

    export default {
        name: 'SideButtons',
        data() {
            return {
                token: ''
            }
        },
        methods: {
                // logout request
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
            },
                // route to discover page
            discoverPage(){
                this.$router.push({name: 'Discover'});
            },
                // route to profile page
            editProfile() {
                this.$router.push({name: 'Profile'});
            }
        },
        mounted () {
            this.token = cookies.get('token');
            console.log(this.token);
        },
    }
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    #container {
        grid-column: 1 / 3;
        color: white;
        font-size: 5vw;
    }
    img { 
        display: none;
    }
    #sideBtnsContainer {
        margin: auto;
}

    #sideBtns {
        display: grid;
        grid-template-columns: repeat(3, fit-content(100%));
        justify-content: center;
        column-gap: 5vw;
        background-color: #F19953;
        width: 100vw;
    }
}
/*tablet*/
@media only screen and (min-width: 600px) {
    #container {
        background-color: #F19953;
        grid-row: 1 / 3;
        width: 15vw;
        font-size: 2vw;
        color: white;
        }
    #sideBtns {
        position: relative;
        top: 20vh;
    }
    p {
        padding: 1vh;
        cursor: pointer;
    }
    img {
        position: relative;
        top: 5vh;
        width: 10vw;
    }
}

/*desktop*/
@media only screen and (min-width: 820px) {
    #container {
        background-color: #F19953;
        grid-row: 1 / 3;
        width: 15vw;
        font-size: 2vw;
        color: white;
        }
    #sideBtns {
        position: relative;
        top: 20vh;
    }
    p {
        padding: 1vh;
        cursor: pointer;
    }
    img {
        position: relative;
        top: 5vh;
        width: 13vh;
    }
}
</style>