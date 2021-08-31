<template>
    <div>
        <!-- vuetify text field and button -->
        <v-container>
        <v-row>
            <v-col><v-text-field v-model="userId" placeholder="Enter user id"></v-text-field></v-col>
            <v-col><v-btn @click="findUser">Search</v-btn></v-col>
        </v-row>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'SearchUser',
        data() {
            return {
                userId: '',
            }
        },
        methods: {
            // Search user function
            findUser() {
                axios.request({
                    url: 'https://tweeterest.ml/api/users',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    params: {
                        userId: this.userId,
                    }
                }).then((response) => {
                    this.$router.push({name: 'UserProfile', params:{userId: this.userId}}).catch(()=>{});
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            },
        },
    }
</script>

<style scoped>

</style>