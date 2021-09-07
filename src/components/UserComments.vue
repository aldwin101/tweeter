<!-- This component goes into the FollowedUserComp in components folder -->
<template>
    <div id="container">
        <v-app>
            <v-row>
                <v-row>
                    <v-text-field class="orange white--text" rounded v-model="content" placeholder="Write comment"></v-text-field>
                </v-row>
                <v-col>
                    <v-btn class="orange white--text" rounded @click="commentTweet">Comment</v-btn>
                </v-col>
            </v-row>
        </v-app>
    </div>
    
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name : 'UserComments',
        props: {
            tweetId: Number
        },
        data() {
            return {
                content: '',
                
            }
        },
        methods: {
            commentTweet() {
                axios.request({
                url: 'https://tweeterest.ml/api/comments',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key' : process.env.VUE_APP_API_KEY
                },
                data: {
                    "loginToken": this.token,
                    "tweetId": this.tweetId,
                    "content": this.content
                }
            }).then((response) => {
                console.log(response.data + 'Success');
            }).catch((error) => {
                console.log(error.response);
            })
            }
        },
        mounted () {
            this.token = cookies.get('token');
        },
    }
</script>

<style scoped>
#container {
    width: 30vw;
    margin: auto;
    background-color: rgb(243, 225, 193);
}
::v-deep .v-application--wrap {
            min-height: fit-content;
            background-color: rgb(243, 225, 193);
        }
</style>