<template>
<!-- vuetify button and text field -->
    <v-app>
        <v-container>
            <v-col cols="12" md="3">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field v-model="username" :rules="[rules.required]" label="Username" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" @click:append="show1 = !show1"></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field v-model="bio" :rules="[rules.required]" label="Bio" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field v-model="birthdate" :rules="[rules.required]" label="Birth Date" required></v-text-field>
            </v-col>
            <v-col cols="12" md="3" align="center">
                <v-btn @click="signUp" elevation="2" outlined> Sign Up</v-btn>
            </v-col>
            <v-row>
                <v-img></v-img>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'SignupComp',
        data() {
            return {
                email: "",
                username: "",
                password: "",
                bio: "",
                birthdate: "",
                valid: false,
                emailRules: [
                    v => !!v || 'Required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                show1: false,
                rules: {
                required: value => !!value || 'Required.', min: v => v.length >= 8 || 'Min 8 characters'
                },
            }
        },
        methods: {
            //
            signUp(){
                axios.request({
                    url: 'https://tweeterest.ml/api/users',
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'X-Api-Key' : process.env.VUE_APP_API_KEY
                    },
                    data: {
                        'email': this.email,
                        'username': this.username,
                        'password': this.password,
                        'bio': this.bio,
                        'birthdate': this.birthdate,
                    }
                }).then((response) => {
                    this.$router.push({name: 'Login'});
                    console.log(response.data);

                }).catch ((error) => {
                    console.log(error);
            })
            },
            // apiKeyCall(){
            //     console.log(process.env.VUE_APP_API_KEY);
            // }
        }
    }
</script>

<style scoped>

</style>