<!-- This component goes into the UserProfile in view folder -->
<template>
    <div>
        <!-- used v-for to display all the tweets of a specific user-->
        <UserProfileComp v-for="profile in userProfiles" :key="profile.userId" 
        :imageUrl="profile.imageUrl"
        :username="profile.username"
        :bio="profile.bio"
        :bannerUrl="profile.bannerUrl" />
        <div>
            <!-- getting the userId -->
            <FollowUnfollow :userId="this.$route.params.userId"/>
        </div>
    </div>
</template>

<script>
import FollowUnfollow from '../components/FollowUnfollow.vue'
import UserProfileComp from './UserProfileComp.vue'
import axios from 'axios'
    export default {
        name : 'UserProfileList',
        components: {
            UserProfileComp,
            FollowUnfollow
        },
        data() {
            return {
                userProfiles: {},
            }
        },
        mounted () {
            axios.request({
                url: 'https://tweeterest.ml/api/users',
                method: 'GET',
                headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    params: {
                        userId: this.$route.params.userId,
                    }
                }).then((response) => {
                    this.userProfiles = response.data
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error.response);
                })
            }
        }
</script>

<style scoped>
    #followBtn {
        text-align: right;
        margin-right: 25vw;
        padding: 20px;
    }
</style>