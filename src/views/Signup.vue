<template>
    <div>
        <SignupComp />
    </div>
</template>

<script>
import SignupComp from '../components/SignupComp.vue'
    export default {
        name: 'Login',
        components: {
            SignupComp
        },
    }
</script>

<style scoped>
div {
        background-color: #F19953;
    }
</style>