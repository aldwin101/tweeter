<template>
    <div>
        <div>
            {{bannerUrl}}
            <div>
                {{imageUrl}}
                {{username}}
                {{bio}}
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
    background-color: rgb(255, 255, 255);
}
</style>