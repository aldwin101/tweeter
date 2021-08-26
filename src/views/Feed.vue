<template>
    <div>
        <v-container>
            <v-textarea v-model="post" name="input-7-4" label="What's on your mind?"></v-textarea>
            <v-btn>Post</v-btn>
        </v-container>
        {{post}}
    </div>
</template>

<script>
    export default {
        name:'Feed',
        data() {
            return {
                post: ''
            }
        },
    }
</script>

<style scoped>

</style>