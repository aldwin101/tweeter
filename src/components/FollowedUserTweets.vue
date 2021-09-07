<!-- This component goes into the Feed in view folder -->
<template>
    <div>
        <!-- for loop to display all tweets of users the userId follows -->
        <FollowedUserComp v-for='tweet in tweets' :key='tweet.tweetId' 
        :username='tweet.username'
        :tweets='tweet.content'
        :created='tweet.createdAt' 
        :tweetId="tweet.tweetId"/>
    </div>
</template>

<script>
    import FollowedUserComp from './FollowedUserComp.vue'
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name: 'FollowedUserTweets',
        components: {
            FollowedUserComp,
        },
        data() {
            return {
                tweets:[]
            }
        },
        mounted () {
            // Getting all users the userId follows
            this.userLoggedinId = cookies.get('userLoggedinId')
            axios.request({
                url:'https://tweeterest.ml/api/follows',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key' : process.env.VUE_APP_API_KEY
                },
                params: {
                    userId: this.userLoggedinId
                }
            }).then((response) => {
                let followedUsers = response.data;
                for (let i = 0; i < followedUsers.length; i++){
                    let followedId = followedUsers[i].userId
                    // Getting all the tweets of users the userId follows
                    axios.request({
                        url: 'https://tweeterest.ml/api/tweets',
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Api-Key' : process.env.VUE_APP_API_KEY
                        },
                        params: {
                            userId: followedId
                        }
                    }).then((response) => {
                        // joining multiple arrays
                        this.tweets = this.tweets.concat(response.data.reverse());
                    }).catch((error) => {
                        console.log(error.response);
                    })
                }
            }).catch((error) => {
                console.log(error.response);
            })
        },
    }
</script>

<style scoped>

</style>