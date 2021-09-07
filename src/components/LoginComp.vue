<!-- This component goes into the Login.vue in view folder -->
<template>
    <div id="container">
        <v-app>
        <v-container >
            <!-- vuetify textfield and button-->
            <v-col >
            <v-text-field  class="orange" rounded v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field class="orange" rounded v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" @click:append="show1 = !show1"></v-text-field>
            </v-col>
            <v-col>
                <v-btn class="orange white--text" rounded @click="logIn" elevation="2" outlined >Log in</v-btn>
            </v-col>
        </v-container>
        </v-app>
        <div id="imgContainer">
            <img src="https://images.unsplash.com/photo-1528290869615-84fe45af6918?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
        </div>
    </div>
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
                // vuetify button and textfield rules
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
            // log in
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
                }).catch ((error) => {
                    console.log(error);
                })
            },
        },
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
    p {
        color: black;
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