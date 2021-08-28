<template>
    <div>
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Discover',
        methods: {
            displayTweets(){
                axios.request({
                    url: 'https://tweeterest.ml/api/tweets',
                    methods: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    
                    
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        mounted() {
            this.displayTweets();
        }
    }
</script>

<style scoped>

</style>