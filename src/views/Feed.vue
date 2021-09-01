<template>
    <div>
        <div id="gridContainer">
            <div>
                <UserTweet />
            </div>
            <div id="sideBtns">
                <v-container>
                    <v-row>
                        <v-col><v-btn @click="discoverPage">Discover</v-btn></v-col>
                    </v-row>
                    <v-row>
                        <v-col><v-btn @click="editProfile">Edit Profile</v-btn></v-col>
                    </v-row>
                </v-container>
            </div>
            <div>
                <FollowedUserTweets />
            </div>
        </div>
    </div>
</template>

<script>
    import FollowedUserTweets from '../components/FollowedUserTweets.vue'
    import UserTweet from '../components/UserTweet.vue'
    export default {
        name:'Feed',
        components: {
            UserTweet,
            FollowedUserTweets
        },
        methods: {
            discoverPage(){
                this.$router.push({name: 'Discover'});
            },

            editProfile() {
                this.$router.push({name: 'Profile'});
            }
        },
    }
</script>

<style scoped>
#gridContainer {
    display: grid;
    grid-template-columns: fit-content(100%) 1fr;
    grid-template-rows: fit-content(100%) 1fr;
}
#sideBtns {
    grid-row: 1 / 3;
    position: relative;
    top: 50vh;
    width: 15vw;
    }
</style>