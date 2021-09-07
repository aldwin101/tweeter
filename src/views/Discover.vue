<template>
    <div id="gridContainer">
        <div id="sideBtns">
            <SideButtons />
        </div>
        <div>
            <DiscoverComp v-for="tweet in tweets" :key="tweet.tweetId"
            :username="tweet.username"
            :createdAt="tweet.createdAt"
            :content="tweet.content "/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import DiscoverComp from '../components/DiscoverComp.vue'
    import SideButtons from '../components/SideButtons.vue'

    export default {
        name: 'Discover',
        components: { 
            DiscoverComp,
                        SideButtons,

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
                    this.tweets = response.data.reverse();
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
/* mobile */
@media only screen and (min-width: 600px) {
    #gridContainer {
        display: grid;
        grid-template-rows: fit-content(100%) 1fr;
    }
}

/*tablet*/
@media only screen and (min-width: 600px) {
    #gridContainer {
            display: grid;
            grid-template-columns: fit-content(100%) 1fr;
        }
    #sideBtns {
        background-color: #F19953;
    }
}

/*desktop*/
@media only screen and (min-width: 820px) {
    #gridContainer {
            display: grid;
            grid-template-columns: fit-content(100%) 1fr;
        }
    #sideBtns {
        background-color: #F19953;
    }
}

    
</style>