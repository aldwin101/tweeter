<template>
    <div>
        <v-container>
            <v-row>
            <v-textarea v-model="post" name="input-7-4" label="What's on your mind?"></v-textarea>
            </v-row>
            <v-row>
                <v-col><v-btn>Post</v-btn></v-col>
            
                <v-col><v-btn @click="editProfile">Edit Profile</v-btn></v-col>
            </v-row>
            
        </v-container>
        {{post}}
    </div>
</template>

<script>
// import cookies from 'vue-cookies'
    export default {
        name:'Feed',
        data() {
            return {
                post: ''
            }
        },
        methods: {
            editProfile() {
                this.$router.push({name: 'Profile'});
                // cookies.get('token', this.token);
                // console.log(this.token);
            }
        },
    }
</script>

<style scoped>

</style>