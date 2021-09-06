<template>
<!-- vuetify button and text field -->
    <div id="container">
        <div>
            <img src="https://images.unsplash.com/photo-1528290869615-84fe45af6918?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
        </div>
        <div id="textField">
        <v-app>
            <v-container>
                <v-col>
                    <v-text-field class="orange" rounded v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field class="orange" rounded v-model="username" :rules="[rules.required]" label="Username" required></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field class="orange" rounded v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" @click:append="show1 = !show1"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field class="orange" rounded v-model="bio" :rules="[rules.required]" label="Bio" required></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field class="orange" rounded v-model="birthdate" :rules="[rules.required]" label="Birth Date" required></v-text-field>
                </v-col>
                <v-col>
                    <v-btn class="orange white--text" rounded @click="signUp" elevation="2" outlined> Sign Up</v-btn>
                </v-col>
                <v-col>
                    <v-img src=""></v-img>
                </v-col>
            </v-container>
        </v-app>
        </div>
    </div>
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
                imgUrl:"",
                bannerUrl:"",
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
/* mobile */
img {
        display: none;
    }
    /* tablet */
@media only screen and (min-width: 426px) {
    img {
        display: none;
    }
}

    /* desktop */
@media only screen and (min-width: 769px) {
    #container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    }
    img {
        height: 100%;
        width: 100%;
        display: block;
    }
}
</style>