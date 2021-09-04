<template>
    <div>
        <DiscoverComp v-for="tweet in tweets" :key="tweet.tweetId"
        :username="tweet.username"
        :createdAt="tweet.createdAt"
        :content="tweet.content "/>
    </div>
</template>

<script>
    import axios from 'axios'
    import DiscoverComp from '../components/DiscoverComp.vue'
    export default {
        name: 'Discover',
        components: { 
            DiscoverComp 
        },
        data() {
            return {
                tweets: []
            }
        },
        methods: {
            displayTweets(){
                axios.request({
                    url: 'https://tweeterest.ml/api/tweets',
                    methods: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    
                    
                }).then((response) => {
                    this.tweets = response.data;
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        mounted() {
            this.displayTweets();
        }
    }
</script>

<style scoped>

</style>