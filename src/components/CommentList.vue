<!-- This component goes into the FollowedUserComp.vue in components folder -->
<template>
    <div>
        <CommentComp v-for="comment in comments" :key="comment.commentId"
        :username="comment.username"
        :created="comment.createdAt"
        :comment="comment.content"
        :getCommentId="comment.commentId" />
    </div>

</template>

<script>
import CommentComp from './CommentComp.vue'
    import axios from 'axios'
    export default {
        name : 'CommentList',
        components: {
            CommentComp,
        },
        props: {
            tweetId: Number
        },
        data() {
            return {
                comments: [],

            }
        },
        mounted () {
            // Get all comments on page load
                axios.request({
                url: 'https://tweeterest.ml/api/comments',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key' : process.env.VUE_APP_API_KEY
                },
                params: {
                    tweetId: this.tweetId
                }
            }).then((response) => {
                this.comments = response.data.reverse();
                console.log(response.data);
            }).catch((error) => {
                console.log(error.response);
            })
        },
    }
</script>

<style scoped>

</style>