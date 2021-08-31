<template>
    <div>
        <UserProfileComp v-for="profile in userProfiles" :key="profile.userId" 
        :imageUrl="profile.imageUrl"
        :username="profile.username"
        :bio="profile.bio"
        :bannerUrl="profile.bannerUrl" />
    </div>
</template>

<script>
import UserProfileComp from './UserProfileComp.vue'
import axios from 'axios'
    export default {
        name : 'UserProfileList',
        components: {
            UserProfileComp,
        },
        data() {
            return {
                userProfiles: {}
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

</style>