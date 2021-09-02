<template>
    <div>
        <div id="followBtn">
            <v-btn @click="followUser">Follow</v-btn>
            <v-btn @click="unfollowUser">Unfollow</v-btn>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name : 'FollowUnfollow',
        props: {
            // assign a prop to get the value of the userId
            userId: String,
        },
        data() {
            return {
                followId: this.userId
            }
        },
        methods: {
            // follow user
            followUser() {
                axios.request({
                    url: 'https://tweeterest.ml/api/follows',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'loginToken': this.token,
                        'followId': this.followId
                    }
                }).then((response) => {
                    console.log(response + ' Followed');
                }).catch((error) => {
                    console.log(error.response);
                })
            },
            unfollowUser() {
                axios.request({
                    url: 'https://tweeterest.ml/api/follows',
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'loginToken': this.token,
                        'followId': this.followId
                    }
                }).then((response) => {
                    console.log(response + ' Unfollowed');
                }).catch((error) => {
                    console.log(error.response);
                })
            }
        },
        mounted () {
            this.token = cookies.get('token');
            console.log(this.userId);
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