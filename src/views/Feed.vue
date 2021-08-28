<template>
    <div>
        
        <v-container>
            <v-row>
                <v-col><v-btn @click="discoverPage">Discover</v-btn></v-col>
            </v-row>
            <SearchUser />
            <v-row>
            <v-textarea v-model="content" name="input-7-4" label="What's on your mind?"></v-textarea>
            </v-row>
            <v-row>
                <v-col><v-btn @click="postTweet" >Post</v-btn></v-col>
            
                <v-col><v-btn @click="editProfile">Edit Profile</v-btn></v-col>
            </v-row>
            {{showPost}}
        </v-container>
    </div>
</template>

<script>
import SearchUser from '../components/SearchUser.vue'
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name:'Feed',
        components: {
            SearchUser,
        },
        data() {
            return {
                content: '',
                token: '',
                imageUrl: '',
                showPost: ''
            }
        },
        methods: {
            postTweet(){
                axios.request({
                    url : 'https://tweeterest.ml/api/tweets',
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'content': this.content,
                        'loginToken': this.token,
                        'imageUrl': this.imageUrl
                    }
                }).then((response) => {
                    this.showPost = response.data.content;
                    cookies.set('showPost', response.data.content)
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error.response);
                })
            },
            discoverPage(){
                this.$router.push({name: 'Discover'});
            },

            editProfile() {
                this.$router.push({name: 'Profile'});
            }
        },
        mounted () {
            this.token = cookies.get('token');
            this.showPost = cookies.get('showPost');
            console.log(this.token);
        }
    }
</script>

<style scoped>

</style>