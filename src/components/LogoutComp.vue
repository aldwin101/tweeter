<template>
    <div>
        <v-btn @click="logOut">Log out</v-btn>
    </div>
</template>

<script>
    import cookies from 'vue-cookies'

    export default {
        name: 'LogoutComp',
        methods: {
            logOut(){
            cookies.remove('token');
            cookies.remove('userLoggedinId');
            this.$router.push({name: 'LoginSignup'});
            }
        }
    }
</script>

<style scoped>

</style>