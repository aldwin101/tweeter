<template>
    <div>
        <v-text-field
            v-model="content"
            label="Solo"
            solo
            dense
          ></v-text-field>
        <v-btn @click="commentTweet">Send</v-btn>
        <div>
            
        </div>
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

</style>