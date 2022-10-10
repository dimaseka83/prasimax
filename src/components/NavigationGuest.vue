<template>
    <div>
        <v-container>
            <v-card flat class="d-flex">
                <v-card flat class="mr-auto pa-2">
                    <a href="/">
                        <v-img src="@/assets/images/logo.png" max-width="300"></v-img>
                    </a>
                </v-card>
                <v-card flat class="pa-2">
                    <v-text-field dense rounded outlined class="rounded-xl" label="Masukkan kata yang dicari"
                        prepend-inner-icon="mdi-magnify">
                    </v-text-field>
                </v-card>
                <v-card flat class="pa-2">
                    <v-dialog v-model="dialog" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" class="rounded-xl" v-on="on">
                                <v-icon left>mdi-import</v-icon>
                                Login
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Login Prasimax</span>
                            </v-card-title>
                            <v-card-text>
                                <v-text-field label="Username" prepend-icon="mdi-email" v-model="formlogin.username">
                                </v-text-field>
                                <v-text-field label="Password" type="password" prepend-icon="mdi-lock"
                                    v-model="formlogin.password"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="dialog = false">Batal</v-btn>
                                <v-btn color="primary" text @click="login">Masuk</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-btn color="white" class="ml-2 rounded-xl blue--text">
                        <v-icon left>mdi-import</v-icon>
                        Register
                    </v-btn>
                </v-card>
            </v-card>
        </v-container>
        <v-app-bar dense flat dark src="@/assets/images/dummy/rectangle.svg">
            <div v-for="(nav, idx) in menu" :key="idx + 'nav'">
                <v-hover v-slot="{hover}">
                    <v-btn text v-if="nav.submenu == undefined" :style="{'background-color': hover ? '#03A9F4' : ''}"
                        :disabled="disableButton(nav.link)" @click="route(nav.link)">{{ nav.name }}</v-btn>
                </v-hover>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
    import axios from 'axios'
    import mixin from '../mixins/mix';
    export default {
        name: 'NavigationGuest',
        mixins: [mixin],
        data() {
            return {
                formlogin: {
                    username: '',
                    password: '',
                },
                dialog: false,
            }
        },
        methods: {
            disableButton(link) {
                if (link == this.$route.path) {
                    return true;
                }
            },
            async login() {
                try {
                    await axios.post('https://prasimax.com/company-be/auth/login', {}, this.formlogin).then((
                        response) => {
                            console.log(response.data);
                            localStorage.setItem('token', response.data.token);
                            alert('Login Berhasil');
                        });
                } catch (error) {
                    console.log(error);
                }
                this.dialog = false;
            }
        },
    };
</script>
<style scoped>
    .v-text-field--outlined>>>fieldset {
        border-color: #2196F3;
    }

    .v-text-field--outlined>>>label {
        color: #2196F3;
    }

    .v-text-field--outlined>>>.v-icon {
        color: #2196F3 !important;
    }

    button.v-btn[disabled] {
        background-color: #03A9F4 !important;
        color: white !important;
    }
</style>