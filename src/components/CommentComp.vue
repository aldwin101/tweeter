<!-- This component goes into the CommentList.vue in components folder -->
<template>
<div id="container">
    <div id="content">
        <h2>{{username}}</h2>
        <p>{{created}}</p>
        <h3>{{comment}}</h3>

        <div id="commentContainer">
            <p @click="likeUnlike">{{isClick ? 'Like' : 'Liked'}}</p>
            <p @click="deleteComment">delete</p>
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
                commentId: this.getCommentId,
                isClick: true
            }
        },
        methods: {
                // like/unlike comment
            likeUnlike() {
                if(this.isClick == true){
                    this.isClick = false;
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

                }else if(this.isClick == this.isClick) {
                    this.isClick = true
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
                    }
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
    width: 60vw;
}
h3 {
    grid-column: 1 / 3;
}
h2 {
    text-align: left;
    margin-left: 2vw;
}

p {
    text-align: right;
    margin-right: 2vw;
    cursor: pointer;
}

#commentContainer {
    display: grid;
    grid-template-columns: repeat(3, fit-content(100%));
}
</style>