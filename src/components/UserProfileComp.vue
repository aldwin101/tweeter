<!-- This component goes into the UserProfileList.vue in components folder -->
<template>
    <div>
        <div>
            {{bannerUrl}}
            <div>
                {{imageUrl}}
                <h2>{{username}}</h2>
                <p>{{bio}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'UserProfileComp',
        props: {
                username: String,
                bio: String,
                imageUrl: String,
                bannerUrl: String
            },
        }
</script>

<style scoped>
div {
    background-color: #f3e1c1;
    width: 50vw;
    height: 20vh;
    margin: 0 auto;
}
</style>