<template>
    <div>
        <v-container fluid class="white--text background-footer pa-16">
            <v-row>
                <v-col md="2">
                    <v-img src="@/assets/images/white_logo.png"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="subtitle">Kami memberikan solusi, layanan dan produksi bagi Anda yang ingin melengkapi
                        portofolio Anda atau kebutuhan Anda. Bidang teknologi yang kami kuasai adalah embedded system,
                        IoT, Kecerdasan Artifisial, Kendaraan Listrik dan Teknologi Nirkabel lainnya. Kapasitas dan
                        kapabilitas kami didukung oleh penyedia dan prinsipal teknologi global yang sudah sangat dikenal
                        reputasinya.</p>
                    <p class="display-1 font-weight-bold text-uppercase">alamat</p>
                    <div>
                        <span>Perkantoran Taman Melati Margonda</span><br />
                        <span>Jl. Margonda Raya 525A</span><br />
                        <span>Depok 16424</span><br />
                        <span>INDONESIA</span><br /><br />
                        <span>Telp: +6221-7888-0672</span><br />
                    </div>
                </v-col>
                <v-col>
                    <p class="display-1 font-weight-bold text-capitalize">hubungi kami</p>
                    <p>
                        <span>Technical Support: </span><br />
                        <a @click="mailto('contact@prasimax.com','Technical%20Support')"
                            style="color:white">contact@prasimax.com</a><br />
                    </p>
                    <p>
                        <span>Penjualan dan Kerja Sama Bisnis: </span><br />
                        <a @click="mailto('sales@prasimax.com','Penjualan%20dan%20Kerja%20Sama%20Bisnis')"
                            style="color:white">sales@prasimax.com</a><br />
                    </p>
                    <v-row class="mt-16">
                        <v-col md="4" v-for="(social, i) in socials" :key="i + 'social2'">
                            <v-btn text :href="social.link" target="_blank">
                                <v-icon x-large color="white">{{ social.icon }}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <p class="display-1 font-weight-bold text-capitalize">link penting</p>
                    <p>
                        <a @click="navDokumen" style="color:white">Bantuan</a><br />
                        <a @click="navDokumen" style="color:white">Pusat Dokumen</a><br />
                        <a @click="route('/news')" style="color:white">Event dan Kegiatan</a><br />
                    </p>
                </v-col>
                <v-col>
                    <p class="display-1 font-weight-bold text-capitalize">langganan berita dan makalah</p>
                    <p>
                        Dapatkan informasi dan berita terbaru dari perusahaan kami. seperti berita, makalah, dan
                        lain-lain.
                    </p>
                    <v-form ref="formsubscribe" v-model="formvalidation.valid">
                        <v-text-field v-model="mailSubs" :rules="formvalidation.email" dense rounded outlined dark
                            class="rounded-xl" label="alamat email"></v-text-field>
                        <v-btn @click="isSubscribe"
                        :disabled="!formvalidation.valid"
                        class="rounded-xl primary px-16">Langganan</v-btn>
                    <v-checkbox v-model="checked" :rules="formvalidation.checked" dark label="Menerima syarat dan ketentuan kebijakan privasi">
                    </v-checkbox>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        <v-app-bar dense flat dark src="@/assets/images/dummy/rectangle.svg" :height="nosm ? '' : height - 100">
            <div class="d-flex">
                <span class="mr-auto">&copy; PT Prasimax Inovasi Teknologi, 2010 - {{ getYears }}, Hak Cipta dilindungi
                    undang - undang</span>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
    import mix from '@/mixins/mix';
    import axios from 'axios';
    export default {
        mixins: [mix],
        data() {
            return {
                checked: false,
                mailSubs: '',
                formvalidation: {
                    valid: false,
                    email: [
                        v => !!v || 'Email tidak boleh kosong',
                        v => /.+@.+\..+/.test(v) || 'Email harus valid',
                        v =>
                        /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!yahoo\.co.id)(?!hotmail\.com)(?!mail\.ru)(?!yandex\.ru)(?!yandesk\.com)(?!mail\.com)(?!rocketmail\.com)([\w-]+.)+[\w-]{2,4})?$/
                        .test(v) || 'Email harus menggunakan email perusahaan atau institusi',
                    ],
                    checked: [v => !!v || 'Anda harus menyetujui syarat dan ketentuan'],
                },
            }
        },
        computed: {
            getYears() {
                return new Date().getFullYear();
            }
        },
        methods: {
            navDokumen(){
                this.$router.push('/about#dokumen');
            },
            async isSubscribe() {
                if (this.$refs.formsubscribe.validate()) {
                    switch (this.checked) {
                        case true:
                            try {
                                await axios.post(`${this.apibe}user/signup?subscribe=${this.mailSubs}`).then(
                                res => {
                                    console.log(res);
                                    if (res.data.error != undefined) {
                                        this.$swal({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: res.data.message,
                                        })
                                    } else {
                                        this.$swal({
                                            icon: 'success',
                                            title: 'Berhasil',
                                            text: 'Anda berhasil berlangganan',
                                        })
                                    }
                                })
                            } catch (error) {
                                console.log(error);
                            }
                            break;

                        default:
                            this.$swal({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Anda belum menyetujui syarat dan ketentuan kebijakan privasi',
                            })
                            break;
                    }
                }
            }
        },
    }
</script>
<style scoped>
    .background-footer {
        background-color: #2196F3;
    }

    .background-footer-bottom {
        background-color: #64B5F6;
    }

    a:hover {
        text-decoration: underline;
    }

    button.v-btn[disabled] {
        color: white !important;
    }
</style>