<!-- This component goes into the FollowedUserTweets in components folder -->
<template>
    <div>
        <div id="tweetContainer">
        <div id='userTweets'>
            <h2>{{username}}</h2>
            <p>{{created}}</p>
            <h3>{{tweets}}</h3>
            <div id="likeCommentContainer">
                <p @click="likeComment">Like</p>
                <p @click="unlikeComment">Unlike</p>
                
                <UserComments :tweetId="tweetId"/>
                <CommentList :tweetId="tweetId"/>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import CommentList from './CommentList.vue'
    import UserComments from './UserComments.vue'
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name : 'FollowedUser',
        props: {
            username: String,
            tweets: String,
            created: String,
            imageUrl: String,
            tweetId: Number //assigned a prop for the tweetId to get the value of the tweetId
        },
        data() {
            return {
                getTweetId: this.tweetId
            }
        },
        components: {
            CommentList,
            UserComments
        },
        methods: {
            likeComment(){
                axios.request({
                url:'https://tweeterest.ml/api/tweet-likes',
                method:'POST',
                headers: {
                'Content-Type': 'application/json',
                'X-Api-Key' : process.env.VUE_APP_API_KEY
                },
                data: {
                    'loginToken': this.token,
                    'tweetId' : this.getTweetId
                }
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error.response);
            })
            },
            
            unlikeComment() {
                axios.request({
                    url: 'https://tweeterest.ml/api/tweet-likes',
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'loginToken': this.token,
                        'tweetId': this.getTweetId
                    }
                }).then((response) => {
                    console.log(response + ' Unliked');
                }).catch((error) => {
                    console.log(error.response);
                })
            }
        },
        mounted () {
            this.token = cookies.get('token');
            console.log(this.tweetId);
        }
    }
    
</script>

<style scoped>
#tweetContainer {
    padding: 2vh;
    text-align: center;
}
#userTweets {
    background-color: rgb(235, 235, 235);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    border-radius: 20px;
    white-space: normal;
    width: 50vw;
    margin: 0 auto;
}

h3{
    grid-column: 1 / 3;
}

h2 {
    text-align: left;
    margin-left: 2vw;
}

p {
    text-align: right;
    margin-right: 2vw;
}

#likeCommentContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 10vw;
    background-color: rgb(235, 235, 235);
    margin-left: 1vw;
}
</style>