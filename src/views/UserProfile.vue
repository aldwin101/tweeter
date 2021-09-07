<template>
    <div>
        <div>
            <UserProfileList />
            <TweetList />
            
        </div>
    </div>
</template>

<script>
import UserProfileList from '../components/UserProfileList.vue'
import TweetList from '../components/TweetList.vue'
    export default {
        name : 'UserProfile',
        components: {
            TweetList,
            UserProfileList
        }
    }
</script>

<style scoped>

</style>