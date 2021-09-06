<template>
    <div>
        <div id="gridContainer">
            <div id="sideBtn"><SideButtons  /></div>
            <div><UserTweet /></div>
            <div>
                <div><UserTweetList /></div>
                <div><FollowedUserTweets /></div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserTweetList from '../components/UserTweetList.vue'
    import SideButtons from '../components/SideButtons.vue'
    import FollowedUserTweets from '../components/FollowedUserTweets.vue'
    import UserTweet from '../components/UserTweet.vue'
    export default {
        name:'Feed',
        components: {
            UserTweet,
            FollowedUserTweets,
            SideButtons,
            UserTweetList
        },
        methods: {
        },
    }
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    #gridContainer {
        display: grid;
        grid-template-rows: repeat(3, fit-content(100%));
        justify-items: center;
    }
}

/*tablet*/
@media only screen and (min-width: 600px) {
    #gridContainer {
        display: grid;
        grid-template-columns: fit-content(100%) 1fr;
        grid-template-rows: repeat(2, fit-content(100%));
    }
    #sideBtn {
        grid-row: 1 / 3;
        background-color: #F19953;
        z-index: 0;
    }
}
/*desktop*/
@media only screen and (min-width: 820px) {
    #gridContainer {
        display: grid;
        grid-template-columns: fit-content(100%) 1fr;
        grid-template-rows: repeat(2, fit-content(100%));
    }
    #sideBtn {
        grid-row: 1 / 3;
        background-color: #F19953;
        z-index: 0;
    }
}
</style>