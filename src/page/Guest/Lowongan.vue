<script>
    import mix from '@/mixins/mix'
    import componentsmix from '@/mixins/componentsmix'
    import FooterGuest from '@/components/FooterGuest.vue'
    import NavigationGuest from '@/components/NavigationGuest.vue'
    import UploadFiles from '@/components/upload-file.vue'
    import axios from 'axios'
    export default {
        components: {
            FooterGuest,
            NavigationGuest,
            UploadFiles
        },
        mixins: [mix, componentsmix],
        data() {
            return {
                lowongan_staff: [],
                lowongan_magang: [],
                headers: [{
                        text: 'Lowongan',
                        value: 'nama_lowongan',
                    },
                    {
                        text: 'Kode Lowongan',
                        value: 'kode_lowongan',
                    },
                    {
                        text: 'Deskripsi',
                        value: 'deskripsi_lowongan',
                    },
                    {
                        text: 'Syarat Umum',
                        value: 'syarat_umum_lowongan',
                    },
                    {
                        text: 'Syarat Kualifikasi',
                        value: 'syarat_kualifikasi',
                    },
                    {
                        text: 'Aksi',
                        value: 'action',
                    }
                ],
                dialogstaff: false,
                dialogmagang: false,
                titleDialog: 'Lowongan',
                formStaff: {
                    kode: null,
                    cv: null,
                },
                formMagang: {
                    kode: null,
                    cv: null,
                    transkip_nilai: null,
                },
            }
        },
        created() {
            this.getLowongan()
        },
        methods: {
            async getLowongan() {
                try {
                    const {
                        data
                    } = await axios.get(`${this.apibe}lowongan_staff`)
                    this.lowongan_staff = data

                    await axios.get(`${this.apibe}lowongan_magang`).then(res => {
                        this.lowongan_magang = res.data
                    })
                } catch (error) {
                    console.log(error)
                }
            },
            // Staff
            submitStaff(kode) {
                this.dialogstaff = true
                this.formStaff.kode = kode
                this.lowongan_staff.find((item) => {
                    if (item.kode_lowongan == kode) {
                        this.titleDialog = `Submit CV Lowongan ${item.nama_lowongan}`
                    }
                })
            },
            uploadCVStaff(files) {
                if (files[0].type !== 'application/pdf') {
                    this.$swal('Error', 'File harus berupa PDF', 'error')
                    setTimeout(() => {
                        this.$refs.uploadCVStaff.Imgs = []
                        this.$refs.uploadCVStaff.files = []
                    }, 100);
                    return
                }

                if (files[0].size > 5000000) {
                    this.$swal('Error', 'File tidak boleh lebih dari 5MB', 'error')
                    setTimeout(() => {
                        this.$refs.uploadCVStaff.Imgs = []
                        this.$refs.uploadCVStaff.files = []
                    }, 100);
                    return
                }

                this.formStaff.cv = files[0]

            },
            batalStaff() {
                setTimeout(() => {
                    this.$refs.uploadCVStaff.Imgs = []
                    this.$refs.uploadCVStaff.files = []
                }, 100);
                this.formStaff = {
                        id: null,
                        cv: null,
                    },
                    this.dialogstaff = false
            },
            async kirimStaff() {
                if (this.formStaff.cv == null) {
                    this.$swal('Error', 'CV tidak boleh kosong', 'error')
                    return
                }
                this.$swal.showLoading()
                await axios.post(`${this.apibe}lowongan_staff/file`, this.formStaff, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    this.$swal('Success', 'CV berhasil dikirim', 'success')
                    this.dialogstaff = false
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                })
            },
            // Magang
            submitMagang(kode) {
                this.dialogmagang = true
                this.formMagang.kode = kode
                this.lowongan_magang.find((item) => {
                    if (item.kode_lowongan == kode) {
                        this.titleDialog = `Submit CV & Transkrip Magang ${item.nama_lowongan}`
                    }
                })
            },
            uploadCVMagang(files) {
                if (files[0].type !== 'application/pdf') {
                    this.$swal('Error', 'File harus berupa PDF', 'error')
                    setTimeout(() => {
                        this.$refs.uploadCVMagang.Imgs = []
                        this.$refs.uploadCVMagang.files = []
                    }, 100);
                    return
                }

                if (files[0].size > 5000000) {
                    this.$swal('Error', 'File tidak boleh lebih dari 5MB', 'error')
                    setTimeout(() => {
                        this.$refs.uploadCVMagang.Imgs = []
                        this.$refs.uploadCVMagang.files = []
                    }, 100);
                    return
                }

                this.formMagang.cv = files[0]

            },
            uploadTranskripMagang(files) {
                if (files[0].type !== 'application/pdf') {
                    this.$swal('Error', 'File harus berupa PDF', 'error')
                    setTimeout(() => {
                        this.$refs.uploadTranskripMagang.Imgs = []
                        this.$refs.uploadTranskripMagang.files = []
                    }, 100);
                    return
                }

                if (files[0].size > 5000000) {
                    this.$swal('Error', 'File tidak boleh lebih dari 5MB', 'error')
                    setTimeout(() => {
                        this.$refs.uploadTranskripMagang.Imgs = []
                        this.$refs.uploadTranskripMagang.files = []
                    }, 100);
                    return
                }

                this.formMagang.transkip_nilai = files[0]
            },
            batalMagang() {
                setTimeout(() => {
                    this.$refs.uploadCVMagang.Imgs = []
                    this.$refs.uploadCVMagang.files = []

                    this.$refs.uploadTranskripMagang.Imgs = []
                    this.$refs.uploadTranskripMagang.files = []
                }, 100);
                this.formMagang = {
                        id: null,
                        cv: null,
                        transkip_nilai: null,
                    },
                    this.dialogmagang = false
            },
            async kirimMagang() {
                if (this.formMagang.cv == null || this.formMagang.transkip_nilai == null) {
                    this.$swal('Error', 'CV & Transkrip tidak boleh kosong', 'error')
                    return
                }
                this.$swal.showLoading()
                await axios.post(`${this.apibe}lowongan_magang/file`, this.formMagang, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    this.$swal('Success', 'CV & Transkrip berhasil dikirim', 'success')
                    this.dialogmagang = false
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                })
            },
        },
    }
</script>
<template>
    <v-app>
        <navigation-guest />
        <!-- Page 1 -->
        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
            src="@/assets/images/static/lowongan.jpg" :height="nosm ? height : height+500">
            <v-container class="white--text">
                <v-row class="fill-height" :class="nosm ? 'mt-16': 'mt-5'">
                    <v-col :cols="nosm ? '8' : '12'">
                        <h1 class="text-capitalize font-weight-bold text-h3">berkembang bersama kami</h1>
                        <p class="title" :class="nosm ? 'mt-10': 'mt-5'">
                            Sebagai entitas bisnis yang selalu bertumbuh dan mengembangkan bisnis dan inovasi baru, kami membuka peluang bagi Anda yang ingin maju dan tumbuh berkembang bersama kami.
                            Beberapa posisi staf dan engineer kami buka untuk talenta muda dan profesional dari bidang tertentu yang kreatif, inovatif, namun berperilaku positif, menyukai tantangan dan pemikiran baru.
                            Kami juga ingin berpartisipasi mengikuti program pemerintah, khususnya kementerian pendidikan kebudayaan dan ristek untuk membuka magang bagi para mahasiswa dan lulusan baru perguruan tinggi dengan syarat minimal kontrak magang selama 5 bulan. Silakan ajukan aplikasi magang Anda. Banyak sekali pengetahuan dan pengalaman industri yang dapat Anda peroleh selama mengikuti magang bersama kami.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
        <!-- Page 2 -->
        <v-container class="mt-8">
            <v-row align="center">
                <p class="text-capitalize blue--text font-weight-bold text-h3">lowongan staff internal
                </p>
                <v-divider></v-divider>
            </v-row>
            <v-card class="rounded-xl mt-10">
                <v-data-table :headers="headers" :items="lowongan_staff" class="my-table">
                    <template v-slot:item.action="{ item }">
                        <v-btn small color="primary" class="rounded-xl" @click="submitStaff(item.kode_lowongan)">
                            Submit CV
                        </v-btn>
                    </template>
                    <template v-slot:item.deskripsi_lowongan="{ item }">
                        <div v-html="item.deskripsi_lowongan"></div>
                    </template>
                    <template v-slot:item.syarat_umum_lowongan="{ item }">
                        <div v-html="item.syarat_umum_lowongan"></div>
                    </template>
                    <template v-slot:item.syarat_kualifikasi="{ item }">
                        <div v-html="item.syarat_kualifikasi"></div>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
        <!-- Page 3 -->
        <v-container class="my-8">
            <v-row align="center">
                <p class="text-capitalize blue--text font-weight-bold text-h3">lowongan kerja magang
                </p>
                <v-divider></v-divider>
            </v-row>
            <v-card class="rounded-xl mt-10">
                <v-data-table :headers="headers" :items="lowongan_magang" class="my-table">
                    <template v-slot:item.action="{ item }">
                        <v-btn small color="primary" class="rounded-xl" @click="submitMagang(item.kode_lowongan)">
                            Submit CV
                        </v-btn>
                    </template>
                    <template v-slot:item.deskripsi_lowongan="{ item }">
                        <div v-html="item.deskripsi_lowongan"></div>
                    </template>
                    <template v-slot:item.syarat_umum_lowongan="{ item }">
                        <div v-html="item.syarat_umum_lowongan"></div>
                    </template>
                    <template v-slot:item.syarat_kualifikasi="{ item }">
                        <div v-html="item.syarat_kualifikasi"></div>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
        <v-dialog v-model="dialogstaff" max-width="800px" persistent>
            <v-card>
                <v-card-title class="blue--text font-weight-bold text-h5">{{ titleDialog }}</v-card-title>
                <v-card-text>
                    <v-form>
                        <upload-files @changed="uploadCVStaff" ref="uploadCVStaff" :max="1"></upload-files>
                        <div class="d-flex">
                            <p class="mr-auto">
                                File CV
                            </p>
                            <p class="red--text">
                                File harus berupa pdf dan ukuran maksimal 5MB
                            </p>
                        </div>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="batalStaff">Batal</v-btn>
                    <v-btn color="primary" text @click="kirimStaff">Kirim</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialogmagang" max-width="800px" persistent>
            <v-card>
                <v-card-title class="blue--text font-weight-bold text-h5">{{ titleDialog }}</v-card-title>
                <v-card-text>
                    <v-form>
                        <upload-files @changed="uploadCVMagang" ref="uploadCVMagang" :max="1"></upload-files>
                        <div class="d-flex">
                            <p class="mr-auto">
                                File CV
                            </p>
                            <p class="red--text">
                                File harus berupa pdf dan ukuran maksimal 5MB
                            </p>
                        </div>
                        <upload-files @changed="uploadTranskripMagang" ref="uploadTranskripMagang" :max="1">
                        </upload-files>
                        <div class="d-flex">
                            <p class="mr-auto">
                                File Transkrip Nilai
                            </p>
                            <p class="red--text">
                                File harus berupa pdf dan ukuran maksimal 5MB
                            </p>
                        </div>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="batalMagang">Batal</v-btn>
                    <v-btn color="primary" text @click="kirimMagang">Kirim</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <footer-guest />
    </v-app>
</template>
<style lang="scss">
    .my-table table thead th {
        background-color: #6DCFF6;

        &:first-child {
            border-radius: 15px 0 0 0;
        }

        &:last-child {
            border-radius: 0 15px 0 0;
        }
    }

    .my-table table tbody tr {
        &:nth-child(odd) {
            background-color: #F2F2F2;
        }

        &:nth-child(even) {
            background-color: #FFFFFF;
        }
    }

    .v-data-footer {
        background-color: #F2F2F2;
        border-radius: 0 0 15px 15px;
    }
</style>