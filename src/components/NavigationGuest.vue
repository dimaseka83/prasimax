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
                <v-card flat class="pa-2"  v-if="!$store.state.isLogged">
                    <v-dialog v-model="dialoglogin" width="500">
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
                                <v-form ref="formlogin" v-model="formvalidationlogin.valid" lazy-validation>
                                <v-text-field label="Username / Email" prepend-icon="mdi-email" v-model="formlogin.username" :rules="formvalidationlogin.username">
                                </v-text-field>
                                <v-text-field label="Password" type="password" prepend-icon="mdi-lock"
                                    v-model="formlogin.password" :rules="formvalidationlogin.password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="dialoglogin = false">Batal</v-btn>
                                <v-btn color="primary" text @click="login">Masuk</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogregister" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn color="white" class="ml-2 rounded-xl blue--text" v-on="on">
                        <v-icon left>mdi-import</v-icon>
                        Register
                    </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Register User Prasimax</span>
                            </v-card-title>
                            <v-form ref="formregister" v-model="formvalidation.valid" lazy-validation>
                            <v-card-text>
                                <v-text-field 
                                label="Nama Lengkap" 
                                prepend-icon="mdi-account" 
                                v-model="formregister.fullname" 
                                :rules="formvalidation.fullname">
                                </v-text-field>
                                <v-text-field 
                                label="Username" 
                                prepend-icon="mdi-account-edit"
                                v-model="formregister.username"
                                :rules="formvalidation.username"
                                >
                                </v-text-field>
                                <v-text-field 
                                label="Email" 
                                prepend-icon="mdi-email"
                                v-model="formregister.email"
                                :rules="formvalidation.email"
                                >
                                </v-text-field>
                                <v-text-field 
                                label="Password" 
                                type="password"
                                prepend-icon="mdi-lock"
                                v-model="formregister.password"
                                :rules="formvalidation.password"
                                ></v-text-field>
                                <v-text-field 
                                label="Konfirmasi Password" 
                                type="password" 
                                prepend-icon="mdi-lock"
                                v-model="formregister.password_confirmation"
                                :rules="formvalidation.password_confirmation"
                                ></v-text-field>
                                <v-text-field
                                label="Nomor Telepon"
                                v-model.number="formregister.phoneNumber"
                                prepend-icon="mdi-phone"
                                type="number"
                                :rules="formvalidation.phoneNumber"
                                ></v-text-field>
                                <v-text-field
                                label="Perusahaan"
                                v-model="formregister.perusahaan"
                                prepend-icon="mdi-office-building"
                                :rules="formvalidation.perusahaan"
                                ></v-text-field>
                                <v-text-field
                                label="Profesi"
                                v-model="formregister.profesi"
                                prepend-icon="mdi-account-tie"
                                :rules="formvalidation.profesi"
                                ></v-text-field>
                                <v-textarea
                                    label="Alamat"
                                    v-model="formregister.alamat"
                                    prepend-icon="mdi-home"
                                    :rules="formvalidation.alamat"
                                    auto-grow
                                ></v-textarea>
                                <v-switch v-model="formregister.isSubscribe" label="Langganan Informasi tentang Perusahaan Kami"></v-switch>
                            </v-card-text>
                            </v-form>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="dialogregister = false">Batal</v-btn>
                                <v-btn color="primary" text @click="register">Daftar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
                <v-card v-else flat class="pa-2">
                    <v-btn color="primary" class="rounded-xl">
                                <v-icon left>mdi-account</v-icon>
                                {{ $store.state.user.fullname }}
                    </v-btn>
                    <v-btn color="white" class="ml-2 rounded-xl blue--text"  @click="logout">
                                <v-icon left>mdi-logout</v-icon>
                                Logout
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
                formregister: {
                    fullname: '',
                    username: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    phoneNumber: '',
                    alamat: '',
                    perusahaan: '',
                    profesi: '',
                    isSubscribe: false,
                },
                formvalidationlogin: {
                    valid: false,
                    username: [
                        v => !!v || 'Username atau Email tidak boleh kosong',
                    ],
                    password: [
                        v => !!v || 'Password tidak boleh kosong',
                    ],
                },
                formvalidation: {
                    valid: false,
                    fullname: [
                        v => !!v || 'Nama Lengkap tidak boleh kosong',
                    ],
                    username: [
                        v => !!v || 'Username tidak boleh kosong',
                    ],
                    email: [
                        v => !!v || 'Email tidak boleh kosong',
                        v => /.+@.+\..+/.test(v) || 'Email harus valid',
                        v => /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!yahoo\.co.id)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!yandesk\.com)(?!mail\.com)(?!rocketmail\.com)([\w-]+.)+[\w-]{2,4})?$/.test(v) || 'Email harus menggunakan email perusahaan',
                    ],
                    password: [
                        v => !!v || 'Password tidak boleh kosong',
                        v => (v && v.length >= 8) || 'Password minimal 8 karakter',
                    ],
                    password_confirmation: [
                        v => !!v || 'Konfirmasi Password tidak boleh kosong',
                        v => (v && v.length >= 8) || 'Konfirmasi Password minimal 8 karakter',
                        v => (v && v == this.formregister.password) || 'Konfirmasi Password tidak sama dengan Password',
                    ],
                    phoneNumber: [
                        v => !!v || 'Nomor Telepon tidak boleh kosong',
                        v => (v && v.toString().length >= 10) || 'Nomor Telepon minimal 10 karakter',
                    ],
                    alamat: [
                        v => !!v || 'Alamat tidak boleh kosong',
                    ],
                    perusahaan: [
                        v => !!v || 'Perusahaan tidak boleh kosong',
                    ],
                    profesi: [
                        v => !!v || 'Profesi tidak boleh kosong',
                    ],
                },
                dialogregister: false,
                dialoglogin: false,
            }
        },
        methods: {
            disableButton(link) {
                if (link == this.$route.path) {
                    return true;
                }
            },
            async login() {
                if(this.$refs.formlogin.validate()){
                    try {
                    await axios.post('https://prasimax.com/company-be/auth/login', {
                        withCredentials: true,
                        headers:{
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    }, {
                        auth: this.formlogin
                    }).then((
                        response) => {
                            console.log(response.data);
                            if(response.data.token == undefined){
                                this.$swal({
                                    title: 'Gagal',
                                    text: 'Username atau Password salah',
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                })
                                this.dialoglogin = false;
                                this.formlogin = {
                                    username: '',
                                    password: '',
                                }
                            }else if(!response.data.user.isActive){
                                this.$swal({
                                    title: 'Gagal',
                                    text: 'Akun anda belum aktif, silahkan cek email anda untuk aktivasi',
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                })
                                this.dialoglogin = false;
                                this.formlogin = {
                                    username: '',
                                    password: '',
                                }
                            }
                            else{
                            this.$store.commit('setToken', response.data.token);
                            this.$store.commit('setUser', response.data.user);
                            this.$swal({
                                title: 'Berhasil',
                                text: 'Anda berhasil login',
                                icon: 'success',
                                timer: 2000,
                                timerProgressBar: true,
                                showConfirmButton: false,
                            }).then(() => {
                                this.dialoglogin = false;
                                this.formlogin = {
                                    username: '',
                                    password: '',
                                }
                            });
                            }
                        });
                } catch (error) {
                    console.log(error);
                }
                this.dialoglogin = false;
                }
            },
            async register(){
                if (this.$refs.formregister.validate()){
                    try {
                        await axios.post('https://prasimax.com/company-be/api/user/signup', this.formregister).then((
                        response) => {
                            console.log(response.data);
                            if(response.data.message == 'Ok'){
                                this.$swal({
                                title: 'Berhasil',
                                text: 'Pendaftaran Berhasil',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                            }else{
                                this.$swal({
                                title: 'Gagal',
                                text: `${response.data.message}`,
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                            }
                            this.dialogregister = false;
                            this.formregister = {
                                fullname: '',
                                username: '',
                                email: '',
                                password: '',
                                password_confirmation: '',
                                phoneNumber: '',
                                alamat: '',
                                perusahaan: '',
                                profesi: '',
                                isSubscribe: false,
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            logout(){
                this.$store.commit('logout');
                this.$swal({
                    title: 'Berhasil',
                    text: 'Anda berhasil logout',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                }).then(() => {
                    this.$router.push('/');
                });
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