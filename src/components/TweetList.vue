<template>
    <div>
        <!-- for loop to display all the tweets of a specific user -->
        <TweetComp v-for='tweet in tweets' :key='tweet.tweetId' 
        :username='tweet.username'
        :tweets='tweet.content'
        :created='tweet.createdAt' />
    </div>
</template>

<script>
    import TweetComp from './TweetComp.vue'
    import axios from 'axios'
    export default {
        name: 'TweetList',
        components: {
            TweetComp,
        },
        data() {
            return {
                userId: this.$route.params.userId,
                tweets: [],
            }
        },
        mounted () {
                // Getting all tweets for a specific user
            axios.request({
                url: 'https://tweeterest.ml/api/tweets',
                method: 'GET',
                headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    params: {
                        userId: this.userId,
                    }
                }).then((response) => {
                    this.tweets = response.data
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error.response);
                })
            }
        }
</script>

<style scoped>

</style>