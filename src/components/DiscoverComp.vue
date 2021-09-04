<template>
    <div>
        <h2>{{username}}</h2>
        <p>{{createdAt}}</p>
        <h3>{{content}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'DiscoverComp',
        props: {
            username: String,
            createdAt: String,
            content: String
        },
    }
</script>

<style scoped>

</style>