<template>
    <!-- vuetify textfield and button-->
    <v-app>
        <v-container>
            <v-col cols="12" md="3">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" @click:append="show1 = !show1"></v-text-field>
            </v-col>
            <v-col cols="12" md="3" align="center">
                <v-btn @click="logIn" elevation="2" outlined >Log in</v-btn>
            </v-col>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    export default {
        name : 'LoginComp',
        data: () => {
            return {
                email: "",
                password: "",
                // button and textfield rules
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                show1: false,
                rules: {
                required: value => !!value || 'Required.', min: v => v.length >= 8 || 'Min 8 characters'
                },
            }
        },
        methods: {
            // AXIOS POST method call for log in
            logIn(){
                axios.request({
                    url: 'https://tweeterest.ml/api/login',
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'email': this.email,
                        'password': this.password
                    }
                }).then((response) => {
                    cookies.set('token', response.data.loginToken);
                    cookies.set('userLoggedinId', response.data.userId);
                    this.$router.push({name: 'Feed'});
                    console.log(response.data.loginToken);
                    console.log(response.data);
                }).catch ((error) => {
                    console.log(error);
                })
            },
        },
    }
</script>

<style scoped>
    
</style>