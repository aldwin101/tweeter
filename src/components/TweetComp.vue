<!-- This component goes into the TweetList.vue in components folder -->
<template>
    <div id="tweetContainer">
        <div id='userTweets'>
            <h2>{{username}}</h2>
            <p>{{created}}</p>
            <h3>{{tweets}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TweetComp',
        props: {
                username: String,
                tweets: String,
                created: String,
                imageUrl: String
            }
        }
</script>

<style scoped>
#tweetContainer {
    padding: 2vh;
    text-align: center;
}
#userTweets {
    background-color: #f3e1c1;
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