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

                <div>
                    <UserComments :tweetId="tweetId"/>
                    <CommentList :tweetId="tweetId"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserTweetListComp',
        props: {
            imgUrl: String,
            username: String,
            created: String,
            tweets: String
        },
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
}

</style>