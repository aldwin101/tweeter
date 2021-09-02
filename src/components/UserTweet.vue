<template>
    <div>
        <div id="container">
            <v-container>
                <v-row>
                <v-textarea v-model="content" name="input-7-4" placeholder="What's on your mind?"></v-textarea>
                </v-row>
                <v-row>
                    <v-col><v-btn @click="postTweet" >Post</v-btn></v-col>
                </v-row>
            </v-container>
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
                    this.showPost = response.data.content;
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
#container {
    width: 50vw;
    margin: auto;
}
</style>