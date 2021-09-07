<!-- This component goes into the Discover.vue in view folder -->
<template>
    <div>
        <div id='tweetList'>
            <h2>{{username}}</h2>
            <p>{{createdAt}}</p>
            <h3>{{content}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DiscoverComp',
        components: {
        },
        props: {
            username: String,
            createdAt: String,
            content: String
        },
    }
</script>

<style scoped>
    #tweetList {
    background-color: #f3e1c1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 10vh;
    border-radius: 20px;
    width: 50vw;
    margin: 0 auto;
}
    h3{
    grid-column: 1 / 3;
}

h2 {
    text-align: left;
    margin-left: 2vw;
}

p {
    text-align: right;
    margin-right: 2vw;
}
</style>