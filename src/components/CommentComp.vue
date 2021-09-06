<!-- This component goes into the CommentList.vue in components folder -->
<template>
<div id="container">
    <div id="content">
        <h2>{{username}}</h2>
        <p>{{created}}</p>
        <h3>{{comment}}</h3>

        <div>
            <button @click="likeComment">like</button>
            <button @click="unlikeComment">unlike</button>
            <button @click="deleteComment">delete</button>
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name : 'CommentComp',
        props: {
            username: String,
            comment: String,
            created: String,
            getCommentId: Number // assign props to get the value of the commentId in CommentList component
        },
        data() {
            return {
                commentId: this.getCommentId 
            }
        },
        methods: {
                // like comment
            likeComment() {
                axios.request({
                    url:'https://tweeterest.ml/api/comment-likes',
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key' : process.env.VUE_APP_API_KEY
                },
                data: {
                    'loginToken': this.token,
                    'commentId': this.commentId
                }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            },

            unlikeComment() {
                axios.request({
                    url:'https://tweeterest.ml/api/comment-likes',
                    method: 'DELETE',
                    headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key' : process.env.VUE_APP_API_KEY
                },
                data: {
                    'loginToken': this.token,
                    'commentId': this.commentId
                }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            },
                // delete comment
            deleteComment() {
                axios.request({
                    url:'https://tweeterest.ml/api/comments',
                    method: 'DELETE',
                    headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key' : process.env.VUE_APP_API_KEY
                },
                data: {
                    'loginToken': this.token,
                    'commentId': this.commentId
                }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        mounted () {
                // get token
            this.token = cookies.get('token');
        },
    }
</script>

<style scoped>
#content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
    row-gap: 2vh;
    width: 30vw;
}
h3 {
    grid-column: 1 / 3;
}
h2 {
    text-align: left;
}
</style>