<script>
    import mix from '@/mixins/mix'
    import componentsmix from '@/mixins/componentsmix'
    import FooterGuest from '@/components/FooterGuest.vue'
    import NavigationGuest from '@/components/NavigationGuest.vue'
    import UploadFiles from '@/components/upload-file.vue'
    export default {
        components: {
            FooterGuest,
            NavigationGuest,
            UploadFiles
        },
        mixins: [mix, componentsmix],
        data() {
            return {
                lowongan_staff: [
                    {
                    id: 1,
                    nama_lowongan: 'Staff Marketing',
                    kode_lowongan: 'SMK-001',
                    deskripsi_lowongan: '<p>Deskripsi lowongan</p>',
                    syarat_umum_lowongan: '<p>Syarat umum lowongan</p>',
                    syarat_kualifikasi_lowongan: '<p>Syarat kualifikasi lowongan</p>',
                    },
                    {
                    id: 2,
                    nama_lowongan: 'Staff HRD',
                    kode_lowongan: 'SMK-002',
                    deskripsi_lowongan: '<p>Deskripsi lowongan</p>',
                    syarat_umum_lowongan: '<p>Syarat umum lowongan</p>',
                    syarat_kualifikasi_lowongan: '<p>Syarat kualifikasi lowongan</p>',
                    },
                ],
                lowongan_magang: [
                    {
                    id: 1,
                    nama_lowongan: 'Magang Marketing',
                    kode_lowongan: 'SMK-001',
                    deskripsi_lowongan: '<p>Deskripsi lowongan</p>',
                    syarat_umum_lowongan: '<p>Syarat umum lowongan</p>',
                    syarat_kualifikasi_lowongan: '<p>Syarat kualifikasi lowongan</p>',
                    },
                    {
                    id: 2,
                    nama_lowongan: 'Magang HRD',
                    kode_lowongan: 'SMK-002',
                    deskripsi_lowongan: '<p>Deskripsi lowongan</p>',
                    syarat_umum_lowongan: '<p>Syarat umum lowongan</p>',
                    syarat_kualifikasi_lowongan: '<p>Syarat kualifikasi lowongan</p>',
                    }],
                header_lowongan_staff: [
                    {
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
                        value: 'syarat_kualifikasi_lowongan',
                    },
                    {
                        text: 'Aksi',
                        value: 'action',
                    }
                ],
                header_lowongan_magang: [
                    {
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
                        value: 'syarat_kualifikasi_lowongan',
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
                    id: null,
                    cv: null,
                },
                formMagang: {
                    id: null,
                    cv: null,
                    transkrip_nilai: null,
                },
            }
        },
        methods: {
            // Staff
            submitStaff(id){
                this.dialogstaff = true
                this.formStaff.id = id
                this.lowongan_staff.find((item) => {
                    if(item.id == id){
                        this.titleDialog = `Submit CV Lowongan ${item.nama_lowongan}`
                    }
                })
            },
            uploadCVStaff(files){
                if(files[0].type == 'application/pdf'){
                    this.formStaff.cv = files[0]
                }else{
                    this.$swal('Error', 'File harus berupa PDF', 'error')
                    setTimeout(() => {
                        this.$refs.uploadCVStaff.Imgs = []
                        this.$refs.uploadCVStaff.files = []
                    }, 100);
                }
                console.log(files)
            },
            batalStaff(){
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
            kirimStaff(){
                if(this.formStaff.cv == null){
                    this.$swal('Error', 'CV tidak boleh kosong', 'error')
                }else{
                    this.$swal('Success', 'CV berhasil dikirim', 'success')
                    this.batalStaff()
                }
            },
            // Magang
            submitMagang(id){
                this.dialogmagang = true
                this.formMagang.id = id
                this.lowongan_magang.find((item) => {
                    if(item.id == id){
                        this.titleDialog = `Submit CV & Transkrip Magang ${item.nama_lowongan}`
                    }
                })
            },
            uploadCVMagang(files){
                if(files[0].type == 'application/pdf'){
                    this.formMagang.cv = files[0]
                }else{
                    this.$swal('Error', 'File harus berupa PDF', 'error')
                    setTimeout(() => {
                        this.$refs.uploadCVMagang.Imgs = []
                        this.$refs.uploadCVMagang.files = []
                    }, 100);
                }
                console.log(files)
            },
            uploadTranskripMagang(files){
                if(files[0].type == 'application/pdf'){
                    this.formMagang.transkrip_nilai = files[0]
                }else{
                    this.$swal('Error', 'File harus berupa PDF', 'error')
                    setTimeout(() => {
                        this.$refs.uploadTranskripMagang.Imgs = []
                        this.$refs.uploadTranskripMagang.files = []
                    }, 100);
                }
                console.log(files)
            },
            batalMagang(){
                setTimeout(() => {
                        this.$refs.uploadCVMagang.Imgs = []
                        this.$refs.uploadCVMagang.files = []

                        this.$refs.uploadTranskripMagang.Imgs = []
                        this.$refs.uploadTranskripMagang.files = []
                }, 100);
                this.formMagang = {
                    id: null,
                    cv: null,
                    transkrip_nilai: null,
                },
                this.dialogmagang = false
            },
            kirimMagang(){
                if(this.formMagang.cv == null || this.formMagang.transkrip_nilai == null){
                    this.$swal('Error', 'CV & Transkrip tidak boleh kosong', 'error')
                }else{
                    this.$swal('Success', 'CV & Transkrip berhasil dikirim', 'success')
                    this.batalMagang()
                }
            },
        },
    }
</script>
<template>
    <v-app>
        <navigation-guest />
        <!-- Page 1 -->
        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
            src="@/assets/images/static/tentangkamiheader.svg" :height="nosm ? height : height+500">
            <v-container class="white--text">
                <v-row class="fill-height" :class="nosm ? 'mt-16': 'mt-5'">
                    <v-col :cols="nosm ? '8' : '12'">
                        <h1 class="text-capitalize font-weight-bold text-h3">berkembang bersama kami</h1>
                        <p class="title" :class="nosm ? 'mt-10': 'mt-5'">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolor asperiores odit?
                            Et cumque ipsa esse earum mollitia, officia pariatur vel, laudantium at eligendi, quos
                            quasi? Atque quidem animi possimus.
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
                <v-data-table
                :headers="header_lowongan_staff"
                :items="lowongan_staff"
                class="my-table"
                >
                <template v-slot:item.action="{ item }">
                    <v-btn small color="primary" class="rounded-xl" @click="submitStaff(item.id)">
                        Submit CV
                    </v-btn>
                </template>
                <template v-slot:item.deskripsi_lowongan="{ item }">
                    <div v-html="item.deskripsi_lowongan"></div>
                </template>
                <template v-slot:item.syarat_umum_lowongan="{ item }">
                    <div v-html="item.syarat_umum_lowongan"></div>
                </template>
                <template v-slot:item.syarat_kualifikasi_lowongan="{ item }">
                    <div v-html="item.syarat_kualifikasi_lowongan"></div>
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
                <v-data-table
                :headers="header_lowongan_magang"
                :items="lowongan_magang"
                class="my-table"
                >
                <template v-slot:item.action="{ item }">
                    <v-btn small color="primary" class="rounded-xl" @click="submitMagang(item.id)">
                        Submit CV
                    </v-btn>
                </template>
                <template v-slot:item.deskripsi_lowongan="{ item }">
                    <div v-html="item.deskripsi_lowongan"></div>
                </template>
                <template v-slot:item.syarat_umum_lowongan="{ item }">
                    <div v-html="item.syarat_umum_lowongan"></div>
                </template>
                <template v-slot:item.syarat_kualifikasi_lowongan="{ item }">
                    <div v-html="item.syarat_kualifikasi_lowongan"></div>
                </template>
                </v-data-table>
            </v-card>
        </v-container>
        <v-dialog 
        v-model="dialogstaff"
        max-width="800px"
        persistent
        >
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
                                File harus berupa pdf
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

                <v-dialog 
        v-model="dialogmagang"
        max-width="800px"
        persistent
        >
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
                                File harus berupa pdf
                            </p>
                        </div>
                        <upload-files @changed="uploadTranskripMagang" ref="uploadTranskripMagang" :max="1"></upload-files>
                                                <div class="d-flex">
                            <p class="mr-auto">
                                File Transkrip Nilai
                            </p>
                            <p class="red--text">
                                File harus berupa pdf
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
  &:first-child { border-radius: 15px 0 0 0; }
  &:last-child { border-radius: 0 15px 0 0; }
}
.my-table table tbody tr {
  &:nth-child(odd) { background-color: #F2F2F2; }
  &:nth-child(even) { background-color: #FFFFFF; }
}
.v-data-footer {
  background-color: #F2F2F2;
  border-radius: 0 0 15px 15px;
}
</style>