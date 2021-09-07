<!-- This component goes into the UserTweetList.vue in components folder -->
<template>
    <div>
        <div id="tweetContainer">
            <div id='userTweetsContainer'>
                <div id="userTweets">
                    <div>
                        <img src="" alt="">
                        <h2>{{username}}</h2>
                    </div>
                    <p>{{created}}</p>
                    <h3>{{tweets}}</h3>
                </div>
                    <div id="likeCommentContainer">
                    <p @click="likeUnlike">{{isClick ? 'Like' : 'Liked'}}</p>
                    <p @click="deleteTweet">Delete</p>
                </div>
                <div>
                    <UserComments :tweetId="tweetId"/>
                    <CommentList :tweetId="tweetId"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    import CommentList from './CommentList.vue'
    import UserComments from './UserComments.vue'
    export default {
        name: 'UserTweetListComp',
        components: {
            CommentList,
            UserComments,
        },
        props: {
            username: String,
            tweets: String,
            created: String,
            imageUrl: String,
            tweetId: Number //assigned a prop for the tweetId to get the value of the tweetId
        },
        data() {
            return {
                getTweetId: this.tweetId,
                isClick: true
            }
        },
        methods: {
            // like/unlike comment
            likeUnlike() {
                if(this.isClick == true){
                    this.isClick = false;
                    console.log(this.isClick);
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
                }else if(this.isClick == this.isClick) {
                    console.log('Like');
                    this.isClick = true
                    console.log(this.isClick);
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
                        console.log(response.data);
                    }).catch((error) => {
                        console.log(error.response);
                    })
                    }
                },
                deleteTweet() {
                    axios.request({
                        url: 'https://tweeterest.ml/api/tweets',
                        method:'DELETE',
                        headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                        },
                        data: {
                            "loginToken": this.token,
                            "tweetId": this.tweetId
                        }
                    }).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
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
#userTweetsContainer {
    background-color: rgb(243, 225, 193);
    display: grid;
    grid-template-rows: repeat(3, fit-content(100%));
    border-radius: 20px;
    white-space: normal;
    width: 80vw;
    margin: 0 auto;
}

#userTweets {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
    cursor: pointer;
    background-color: rgb(243, 225, 193);
}

#likeCommentContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 10vw;
    margin-left: 1vw;
}

</style>