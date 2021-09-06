<template>
    <div>
        <LoginComp />
    </div>
</template>

<script>
import LoginComp from '../components/LoginComp.vue'
    export default {
        name: 'Login',
        components: {
            LoginComp,
        },
    }
</script>

<style scoped>
    div {
        background-color: #F19953;
    }
</style>