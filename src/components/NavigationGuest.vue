<template>
    <div>
        <v-container v-show="nosm">
            <v-card flat class="d-flex">    
                <v-card flat class="mr-auto pa-2">
                    <a href="/">
                        <v-img src="@/assets/images/logo.png" max-width="300"></v-img>
                    </a>
                </v-card>
                <v-card flat class="pa-2">
                    <v-text-field v-model="$store.state.search" @keyup.enter="searchProduct"
                    dense rounded outlined class="rounded-xl" label="Masukkan kata yang dicari"
                        prepend-inner-icon="mdi-magnify">
                    </v-text-field>
                </v-card>
                <v-card flat class="pa-2" v-if="!$store.state.isLogged">
                    <v-dialog v-model="dialoglogin" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" class="rounded-xl" v-on="on">
                                <v-icon left>mdi-import</v-icon>
                                Login
                            </v-btn>
                        </template>
                        <v-card>
                            <v-progress-linear indeterminate color="blue" :active="loadinglogin"></v-progress-linear>
                            <v-card-title>
                                <span :class="nosm ? 'headline' : 'body-1'">Login Prasimax</span>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="dialoglogin = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="formlogin" v-model="formvalidationlogin.valid" lazy-validation>
                                    <v-text-field label="Username / Email" prepend-icon="mdi-email"
                                        v-model="formlogin.username" :rules="formvalidationlogin.username">
                                    </v-text-field>
                                    <v-text-field label="Password" type="password" prepend-icon="mdi-lock"
                                        v-model="formlogin.password" :rules="formvalidationlogin.password">
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-dialog v-model="dialogchangepassword" width="500">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" text v-on="on" v-if="nosm">
                                            <v-icon left>mdi-lock-reset</v-icon>
                                            Lupa Password
                                        </v-btn>
                                        <v-btn color="primary" text v-on="on" v-else x-small>
                                            <v-icon left>mdi-lock-reset</v-icon>
                                            Lupa Password
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-progress-linear indeterminate color="blue" :active="loadingchangepassword">
                                        </v-progress-linear>
                                        <v-card-title>
                                            <span :class="nosm ? 'headline' : 'body-1'">Lupa Password</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-form ref="formchangepassword"
                                                v-model="formvalidationchangepassword.valid" lazy-validation>
                                                <v-text-field label="Email" prepend-icon="mdi-email"
                                                    v-model="formchangepassword.email"
                                                    :rules="formvalidationchangepassword.email">
                                                </v-text-field>
                                            </v-form>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" text @click="dialogchangepassword = false">
                                                <v-icon left>mdi-close</v-icon>
                                                Batal
                                            </v-btn>
                                            <v-btn color="primary" text @click="changepassword">
                                                <v-icon left>mdi-send</v-icon>
                                                Kirim
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="dialoglogin = false" v-show="nosm">Batal</v-btn>
                                <v-btn color="primary" text @click="login" v-if="nosm">Masuk</v-btn>
                                <v-btn color="primary" text @click="login" x-small v-else>Masuk</v-btn>
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
                            <v-progress-linear indeterminate color="blue" :active="loadingregister"></v-progress-linear>
                            <v-card-title>
                                <span :class="nosm ? 'headline' : 'body-1'">Register User Prasimax</span>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="dialogregister = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-form ref="formregister" v-model="formvalidation.valid" lazy-validation>
                                <v-card-text>
                                    <v-text-field label="Nama Lengkap" prepend-icon="mdi-account"
                                        v-model="formregister.fullname" :rules="formvalidation.fullname">
                                    </v-text-field>
                                    <v-text-field label="Username" prepend-icon="mdi-account-edit"
                                        v-model="formregister.username" :rules="formvalidation.username">
                                    </v-text-field>
                                    <v-text-field label="Email" prepend-icon="mdi-email" v-model="formregister.email"
                                        :rules="formvalidation.email">
                                    </v-text-field>
                                    <v-text-field label="Password" type="password" prepend-icon="mdi-lock"
                                        v-model="formregister.password" :rules="formvalidation.password"></v-text-field>
                                    <v-text-field label="Konfirmasi Password" type="password" prepend-icon="mdi-lock"
                                        v-model="formregister.password_confirmation"
                                        :rules="formvalidation.password_confirmation"></v-text-field>
                                    <v-text-field label="Nomor Telepon" v-model.number="formregister.phoneNumber"
                                        prepend-icon="mdi-phone" type="number" :rules="formvalidation.phoneNumber">
                                    </v-text-field>
                                    <v-text-field label="Perusahaan" v-model="formregister.perusahaan"
                                        prepend-icon="mdi-office-building" :rules="formvalidation.perusahaan">
                                    </v-text-field>
                                    <v-text-field label="Profesi" v-model="formregister.profesi"
                                        prepend-icon="mdi-account-tie" :rules="formvalidation.profesi"></v-text-field>
                                    <v-textarea label="Alamat" v-model="formregister.alamat" prepend-icon="mdi-home"
                                        :rules="formvalidation.alamat" auto-grow></v-textarea>
                                    <v-switch v-model="formregister.isSubscribe"
                                        label="Langganan Informasi tentang Perusahaan Kami"></v-switch>
                                </v-card-text>
                            </v-form>
                            <v-card-actions>
                                <v-dialog v-model="dialogresendemail" width="500">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" text v-on="on" v-if="nosm">
                                            <v-icon left>mdi-email-check</v-icon>
                                            Kirim Ulang Email
                                        </v-btn>
                                        <v-btn color="primary" text v-on="on" v-else x-small>
                                            <v-icon left>mdi-email-check</v-icon>
                                            Kirim Ulang Email
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-progress-linear indeterminate color="blue" :active="loadingresendemail">
                                        </v-progress-linear>
                                        <v-card-title>
                                            <span class="headline">Kirim Ulang Email</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-form ref="formresendemail"
                                                v-model="formvalidationresendemail.valid" lazy-validation>
                                                <v-text-field label="Email" prepend-icon="mdi-email"
                                                    v-model="formresendemail.email"
                                                    :rules="formvalidationresendemail.email">
                                                </v-text-field>
                                            </v-form>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" text @click="dialogresendemail = false">
                                                <v-icon left>mdi-close</v-icon>
                                                Batal
                                            </v-btn>
                                            <v-btn color="primary" text @click="resendemail">
                                                <v-icon left>mdi-send</v-icon>
                                                Kirim
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="dialogregister = false" v-show="nosm">Batal</v-btn>
                                <v-btn color="primary" text @click="register" v-if="nosm">Daftar</v-btn>
                                <v-btn color="primary" text @click="register" v-else x-small>Daftar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
                <v-card v-else flat class="pa-2">
                    <v-btn color="primary" class="rounded-xl"
                    @click="route('/admin')"
                     v-show="buttonAdmin">
                        <v-icon left>mdi-account-cog</v-icon>
                        Admin
                    </v-btn>
                    <v-btn color="primary" class="ml-2 rounded-xl">
                        <v-icon left>mdi-account</v-icon>
                        {{ $store.state.user.fullname }}
                    </v-btn>
                    <v-btn color="white" class="ml-2 rounded-xl blue--text" @click="logout">
                        <v-icon left>mdi-logout</v-icon>
                        Logout
                    </v-btn>
                </v-card>
            </v-card>
        </v-container>
        <v-app-bar dense flat dark src="@/assets/images/dummy/rectangle.svg" v-show="nosm">
            <div v-for="(nav, idx) in menu" :key="idx + 'nav'">
                <v-hover v-slot="{hover}">
                    <v-btn text v-if="nav.submenu == undefined" :style="{'background-color': hover ? '#03A9F4' : ''}"
                        :disabled="disableButton(nav.link)" @click="route(nav.link)">{{ nav.name }}</v-btn>
                </v-hover>
            </div>
        </v-app-bar>
        <v-app-bar v-show="sm">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-img src="@/assets/images/logo.png" max-width="100"></v-img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="draweruser = !draweruser">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon @click="draweruser = !draweruser">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item-group>
                    <v-list-item v-for="(nav, idx) in menu" :key="idx + 'nav'">
                        <v-list-item-content>
                            <v-list-item-title v-if="nav.submenu == undefined" @click="route(nav.link)">
                                {{ nav.name }}
                            </v-list-item-title>
                            <v-list-item-group v-else>
                                <v-list-item v-for="(subnav, idx) in nav.submenu" :key="idx + 'subnav'">
                                    <v-list-item-content>
                                        <v-list-item-title @click="route(subnav.link)">
                                            {{ subnav.name }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer v-model="draweruser" app right>
            <v-list dense>
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field v-model="$store.state.search" @keyup.enter="searchProduct" outlined placeholder="Cari Produk"></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                <v-list-item-group v-if="!$store.state.isLogged">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title @click="dialoglogin = true">
                                Login
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title @click="dialogregister = true">
                                Register
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                <v-list-item-group v-else>
                    <v-list-item >
                        <v-list-item-content>
                            <v-list-item-title @click="dialogprofile = true">
                                {{ $store.state.user.fullname }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title @click="logout">
                                Logout
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
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
                drawer: false,
                draweruser: false,
                drawersearch: false,
                formlogin: {
                    username: '',
                    password: '',
                },
                formchangepassword: {
                    email: '',
                },
                formresendemail: {
                    email: '',
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
                        v =>
                        /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!yahoo\.co.id)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!yandesk\.com)(?!mail\.com)(?!rocketmail\.com)([\w-]+.)+[\w-]{2,4})?$/
                        .test(v) || 'Email harus menggunakan email perusahaan',
                    ],
                    password: [
                        v => !!v || 'Password tidak boleh kosong',
                        v => (v && v.length >= 8) || 'Password minimal 8 karakter',
                    ],
                    password_confirmation: [
                        v => !!v || 'Konfirmasi Password tidak boleh kosong',
                        v => (v && v.length >= 8) || 'Konfirmasi Password minimal 8 karakter',
                        v => (v && v == this.formregister.password) ||
                        'Konfirmasi Password tidak sama dengan Password',
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
                formvalidationchangepassword: {
                    valid: false,
                    email: [
                        v => !!v || 'Email tidak boleh kosong',
                        v => /.+@.+\..+/.test(v) || 'Email harus valid',
                        v =>
                        /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!yahoo\.co.id)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!yandesk\.com)(?!mail\.com)(?!rocketmail\.com)([\w-]+.)+[\w-]{2,4})?$/
                        .test(v) || 'Email harus menggunakan email perusahaan',
                    ],
                },
                formvalidationresendemail: {
                    valid: false,
                    email: [
                        v => !!v || 'Email tidak boleh kosong',
                        v => /.+@.+\..+/.test(v) || 'Email harus valid',
                        v =>
                        /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!yahoo\.co.id)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!yandesk\.com)(?!mail\.com)(?!rocketmail\.com)([\w-]+.)+[\w-]{2,4})?$/
                        .test(v) || 'Email harus menggunakan email perusahaan',
                    ],
                },
                dialogregister: false,
                dialogresendemail: false,
                dialoglogin: false,
                dialogchangepassword: false,
                loadinglogin: false,
                loadingregister: false,
                loadingchangepassword: false,
                loadingresendemail: false,
            }
        },
        methods: {
            disableButton(link) {
                if (link == this.$route.path) {
                    return true;
                }
            },
            async login() {
                if (this.$refs.formlogin.validate()) {
                    try {
                        this.loadinglogin = true;
                        await axios.post(`${this.apiauth}login`, {
                            withCredentials: true,
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            }
                        }, {
                            auth: this.formlogin
                        }).then((
                            response) => {
                            console.log(response.data);
                            if (response.data.error != undefined) {
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
                            } else if (response.data.token == undefined) {
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
                            } else {
                                localStorage.setItem('token', response.data.token);
                                localStorage.setItem('user', JSON.stringify(response.data.user));
                                this.$store.commit('setToken', response.data.token);
                                this.$store.commit('setUser', response.data.user);
                                switch (response.data.role) {
                                    case "admin":
                                        localStorage.setItem('role', 'admin');
                                        break;
                                    default:
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
                                        break;
                                }
                                this.$router.push({
                                    name: 'HomeAdmin',
                                }); 
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                    this.dialoglogin = false;
                    this.loadinglogin = false;
                }
            },
            async changepassword() {
                if (this.$refs.formchangepassword.validate()) {
                    this.loadingchangepassword = true;
                    try {
                        await axios.post(
                                `${this.apibe}user/forgot/${this.formchangepassword.email}`)
                            .then((response) => {
                                if (response.data.message != 'Email not found') {
                                    this.$swal({
                                        title: 'Berhasil',
                                        text: 'Silahkan cek email anda untuk mereset password',
                                        icon: 'success',
                                        timer: 2000,
                                        timerProgressBar: true,
                                        showConfirmButton: false,
                                    }).then(() => {
                                        this.dialogchangepassword = false;
                                        this.dialoglogin = false;
                                        this.formchangepassword = {
                                            email: '',
                                        }
                                    });
                                } else {
                                    this.$swal({
                                        title: 'Gagal',
                                        text: response.message,
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                    })
                                    this.dialogchangepassword = false;
                                    this.dialoglogin = false;
                                    this.formchangepassword = {
                                        email: '',
                                    }
                                }
                            });
                    } catch (error) {
                        console.log(error);
                    }
                    this.loadingchangepassword = false;
                }
            },
            async register() {
                if (this.$refs.formregister.validate()) {
                    try {
                        this.loadingregister = true;
                        await axios.post(`${this.apibe}user/signup`, this.formregister).then(
                            (
                                response) => {
                                console.log(response.data);
                                if (response.data.message == 'Ok') {
                                    this.$swal({
                                        title: 'Berhasil',
                                        text: 'Pendaftaran Berhasil',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    });
                                } else {
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
                    this.loadingregister = false;
                }
            },
            async resendemail(){
                if(this.$refs.formresendemail.validate()){
                    try {
                        this.loadingresendemail = true;
                        await axios.post(`${this.apibe}user/resend-email/${this.formresendemail.email}`).then(
                            (response) => {
                                if(response.data.message != 'Email tidak valid'){
                                    this.$swal({
                                        title: 'Berhasil',
                                        text: 'Silahkan cek email anda untuk aktivasi ulang',
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
                                this.dialogresendemail = false;
                                this.loadingresendemail = false;
                                this.dialogregister = false;
                                this.formresendemail = {
                                    email: '',
                                }
                            }
                        );
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            searchProduct(){
                this.$router.push({
                    name: 'ProdukGuest',
                    params: {
                        search: this.$store.state.search
                    }
                });
            },
        },
        computed: {
            buttonAdmin(){
                return localStorage.getItem('role') == 'admin' ? true : false;
            }
        }
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