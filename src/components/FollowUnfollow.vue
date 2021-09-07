<!-- This component goes into the UserProfileList.vue in components folder -->
<template>
    <div>
        <v-app>
        <div id="followBtn">
            <v-btn class="orange white--text" rounded @click="followUnfollow">{{isClick ? 'Follow' : 'Unfollow'}}</v-btn>
        </div>
        </v-app>
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
                followId: this.userId,
                isClick: true
            }
        },
        methods: {
            // follow user
            followUnfollow() {
                if(this.isClick == true){
                    this.isClick = false;
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
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }else if(this.isClick == this.isClick) {
                    this.isClick = true;
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
                    console.log(response);
                }).catch((error) => {
                    console.log(error.response);
                })
            }
        }
    },
    mounted () {
        this.token = cookies.get('token');
    }
}
</script>

<style scoped>
#followBtn {
        text-align: right;
        margin-right: 25vw;
        padding: 20px;
    }
::v-deep .v-application--wrap {
            min-height: fit-content;
        }
</style>