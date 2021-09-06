<template>
    <div>
        <UserTweetListComp v-for="tweet in tweets" :key="tweet.tweetId"
        :imgUrl='tweet.userImageUrl'
        :username='tweet.username'
        :created='tweet.createdAt'
        :tweets='tweet.content' />
    </div>
</template>

<script>
import UserTweetListComp from './UserTweetListComp.vue'
    import  cookies from 'vue-cookies'
    import axios from 'axios'
    export default {
        name: 'UserTweetList',
        components: {
            UserTweetListComp,
        },
        data() {
            return {
                tweets: [],
            }
        },
        methods: {
            
        },
        mounted () {
            this.userId = cookies.get('userLoggedinId')
            axios.request({
                url: 'https://tweeterest.ml/api/tweets',
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'X-Api-Key' : process.env.VUE_APP_API_KEY
            },
            params: {
                userId: this.userId
            }
            }).then ((response) => {
                this.tweets = response.data.reverse();
                console.log(response.data);
            }).catch ((error) => {
                console.log(error.response);
            })
        },
    }
</script>

<style scoped>

</style>