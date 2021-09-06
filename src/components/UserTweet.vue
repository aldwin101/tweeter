
<template>
    <div>
        <div id="container">
            <v-app>
                <v-container>
                    <v-row>
                        <div class="imgContainer">
                            <img src="@/assets/defaultProfilePic.png" alt="user_profile-pic">
                        </div>

                        <v-col>
                            <v-textarea  v-model="content" placeholder="What's on your mind?"></v-textarea>
                            <v-btn class="orange white--text" rounded @click="postTweet" >Post</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-app>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name:'UserTweet',
        data() {
            return {
                content: '',
            }
        },
        methods: {
            // user post/upload tweet
            postTweet(){
                axios.request({
                    url : 'https://tweeterest.ml/api/tweets',
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'content': this.content,
                        'loginToken': this.token,
                    }
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error.response);
                })
            },
            
        },
        mounted () {
            // get token on page load
            this.token = cookies.get('token');
            console.log(this.token);
        }
    }
</script>

<style scoped>
    /* mobile */
    @media only screen and (max-width: 600px) {
        ::v-deep .v-application--wrap {
            min-height: fit-content;
        }

        ::v-deep .imgContainer {
        position: relative;
        top: 5vh;
        width: 20vw;
        height: 20vw;
        overflow: hidden;
        border-radius: 50%;
        border-color: rgb(161, 157, 157);
        border-style: solid;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        #container {
            width: 90vw;
        }
    }
    /* tablet */
    @media only screen and (min-width: 600px) {
        ::v-deep .v-application--wrap {
        min-height: fit-content;
    }

    ::v-deep .imgContainer {
        position: relative;
        top: 5vh;
        width: 15vw;
        height: 15vw;
        overflow: hidden;
        border-radius: 50%;
        border-color: rgb(161, 157, 157);
        border-style: solid;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        #container {
            width: 70vw;
            margin: auto;
        }
    }
    /* desktop */
    @media only screen and (min-width: 820px) {
        ::v-deep .v-application--wrap {
        min-height: fit-content;
        }

        ::v-deep .imgContainer {
            position: relative;
            top: 5vh;
            width: 10vw;
            height: 10vw;
            overflow: hidden;
            border-radius: 50%;
            border-color: rgb(161, 157, 157);
            border-style: solid;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        #container {
            width: 70vw;
            margin: auto;
        }
        .v-textarea {
            font-size: 1.5vw;
        }
    }
</style>