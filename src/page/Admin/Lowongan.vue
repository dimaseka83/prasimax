<script>
import NavigationAdmin from '@/components/Admin/Navigation.vue'
import mix from '@/mixins/mix'
import axios from 'axios'
export default {
    mixins: [mix],
    components: {
        NavigationAdmin
    },
    data() {
        return {
            lowongan_staff: [],
            lowongan_magang: [],
            kode_lowongan_staff: [],
            kode_lowongan_magang: [],

            form_lowongan: {
                id: '',
                nama_lowongan: '',
                kode_lowongan: '',
                deskripsi_lowongan: '',
                syarat_umum_lowongan: '',
                syarat_kualifikasi: '',
                select_lowongan: '',

            },

            headers: [
                { text: 'Nama Lowongan', value: 'nama_lowongan' },
                { text: 'Kode Lowongan', value: 'kode_lowongan' },
                { text: 'Deskripsi Lowongan', value: 'deskripsi_lowongan' },
                { text: 'Syarat Umum Lowongan', value: 'syarat_umum_lowongan' },
                { text: 'Syarat Kualifikasi', value: 'syarat_kualifikasi' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],

            dialog: false,
            tipe_lowongan: '',
            titleDialog: '',
        }
    },
    created() {
        this.getLowongan()
    },
    methods: {
        async getLowongan(){
            try {
                const { data } = await axios.get(`${this.apibe}lowongan_staff`)
                this.lowongan_staff = data

                await axios.get(`${this.apibe}lowongan_magang`).then(res => {
                    this.lowongan_magang = res.data
                })

                await axios.get(`${this.apibe}lowongan_staff/kode-lowongan`).then(res => {
                    res.data.map(item => {
                        this.kode_lowongan_staff.push({
                            value: `${item.kode}`,
                            text: `${item.divisi}`
                        })
                    })
                })

                await axios.get(`${this.apibe}lowongan_magang/kode-lowongan`).then(res => {
                    res.data.map(item => {
                        this.kode_lowongan_magang.push({
                            value: `${item.kode}`,
                            text: `${item.divisi}`
                        })
                    })
                })
            } catch (error) {
                console.log(error)
            }
        },
        addLowonganStaff() {
            this.tipe_lowongan = 'staff_add'
            this.titleDialog = 'Tambah Lowongan Staff'
            this.form_lowongan = {
                id: '',
                nama_lowongan: '',
                kode_lowongan: '',
                deskripsi_lowongan: '',
                syarat_umum_lowongan: '',
                syarat_kualifikasi: '',
                select_lowongan: '',
            }
            this.dialog = true
        },
        addLowonganMagang() {
            this.tipe_lowongan = 'magang_add'
            this.titleDialog = 'Tambah Lowongan Magang'
            this.form_lowongan = {
                id: '',
                nama_lowongan: '',
                kode_lowongan: '',
                deskripsi_lowongan: '',
                syarat_umum_lowongan: '',
                syarat_kualifikasi: '',
                select_lowongan: '',

            }
            this.dialog = true
        },
        editLowonganStaff(item){
            this.tipe_lowongan = 'staff_edit'
            this.titleDialog = 'Edit Lowongan Staff'
            this.form_lowongan = {
                id: item.id,
                nama_lowongan: item.nama_lowongan,
                kode_lowongan: item.kode_lowongan,
                deskripsi_lowongan: item.deskripsi_lowongan,
                syarat_umum_lowongan: item.syarat_umum_lowongan,
                syarat_kualifikasi: item.syarat_kualifikasi,
                select_lowongan: `${item.kode_lowongan}-${item.nama_lowongan}`,
            }
            this.dialog = true
        },
        editLowonganMagang(item){
            this.tipe_lowongan = 'magang_edit'
            this.titleDialog = 'Edit Lowongan Magang'
            this.form_lowongan = {
                id: item.id,
                nama_lowongan: item.nama_lowongan,
                kode_lowongan: item.kode_lowongan,
                deskripsi_lowongan: item.deskripsi_lowongan,
                syarat_umum_lowongan: item.syarat_umum_lowongan,
                syarat_kualifikasi: item.syarat_kualifikasi,
                select_lowongan: `${item.kode_lowongan}-${item.nama_lowongan}`,
            }
            this.dialog = true
        },
        mappingSelectedLowongan(data){
            this.lowongan.map(item => {
                if(item.value == data){
                    this.form_lowongan.nama_lowongan = item.text
                    this.form_lowongan.kode_lowongan = item.value
                }
            })
        },
        async deleteLowonganStaff(item) {
            const id = item.id
            try {
                const { data } = await axios.delete(`${this.apibe}lowongan_staff/${id}`, {
                     headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                })
                this.$swal('Berhasil', 'Lowongan Staff berhasil dihapus', 'success')
                this.getLowongan()
            } catch (error) {
                console.log(error)
                this.$swal('Gagal', 'Lowongan Staff gagal dihapus', 'error')
            }
        },
        async deleteLowonganMagang(item) {
            const id = item.id
            try {
                const { data } = await axios.delete(`${this.apibe}lowongan_magang/${id}`, {
                     headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                })
                this.$swal('Berhasil', 'Lowongan Magang berhasil dihapus', 'success')
                this.getLowongan()
            } catch (error) {
                console.log(error)
                this.$swal('Gagal', 'Lowongan Magang gagal dihapus', 'error')
            }
        },
        save(){
            const LowonganStaffCreate = async () => {
                try {
                    const { data } = await axios.post(`${this.apibe}lowongan_staff`, this.form_lowongan, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                })
                    this.$swal('Berhasil', 'Lowongan Staff berhasil ditambahkan', 'success')
                    this.getLowongan()
                    this.dialog = false
                } catch (error) {
                    console.log(error)
                    this.$swal('Gagal', 'Lowongan Staff gagal ditambahkan', 'error')
                }
            }

            const LowonganMagangCreate = async () => {
                try {
                    const { data } = await axios.post(`${this.apibe}lowongan_magang`, this.form_lowongan, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                })
                    this.$swal('Berhasil', 'Lowongan Magang berhasil ditambahkan', 'success')
                    this.getLowongan()
                    this.dialog = false
                } catch (error) {
                    console.log(error)
                    this.$swal('Gagal', 'Lowongan Magang gagal ditambahkan', 'error')
                }
            }

            const LowonganStaffEdit = async () => {
                try {
                    const { data } = await axios.put(`${this.apibe}lowongan_staff/${this.form_lowongan.id}`, this.form_lowongan, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                })
                    this.$swal('Berhasil', 'Lowongan Staff berhasil diubah', 'success')
                    this.getLowongan()
                    this.dialog = false
                } catch (error) {
                    console.log(error)
                    this.$swal('Gagal', 'Lowongan Staff gagal diubah', 'error')
                }
            }

            const LowonganMagangEdit = async () => {
                try {
                    const { data } = await axios.put(`${this.apibe}lowongan_magang/${this.form_lowongan.id}`, this.form_lowongan, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                })
                    this.$swal('Berhasil', 'Lowongan Magang berhasil diubah', 'success')
                    this.getLowongan()
                    this.dialog = false
                } catch (error) {
                    console.log(error)
                    this.$swal('Gagal', 'Lowongan Magang gagal diubah', 'error')
                }
            }

            switch (this.tipe_lowongan) {
                case 'staff_add':
                    LowonganStaffCreate()
                    break;
                case 'magang_add':
                    LowonganMagangCreate()
                    break;
                case 'staff_edit':
                    LowonganStaffEdit()
                    break;
                case 'magang_edit':
                    LowonganMagangEdit()
                    break;
                default:
                    break;
            }
        }
    },
    computed: {
        lowongan() {
            switch (this.tipe_lowongan) {
                case 'staff_add':
                    return this.kode_lowongan_staff
                case 'magang_add':
                    return this.kode_lowongan_magang
                case 'staff_edit':
                    return this.kode_lowongan_staff
                case 'magang_edit':
                    return this.kode_lowongan_magang
                default:
                    break;
            }
        },
    }
}
</script>
<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-card-title>
                <h2>Lowongan Staff</h2>
                <v-spacer />
                <v-btn color="primary" @click="addLowonganStaff">Tambah Lowongan</v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="lowongan_staff">
                <template v-slot:item.deskripsi_lowongan="{ item }">
                    <span v-html="limitText(item.deskripsi_lowongan, 50)"></span>
                </template>
                <template v-slot:item.syarat_umum_lowongan="{ item }">
                    <span v-html="limitText(item.syarat_umum_lowongan, 50)"></span>
                </template>
                <template v-slot:item.syarat_kualifikasi="{ item }">
                    <span v-html="limitText(item.syarat_kualifikasi, 50)"></span>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editLowonganStaff(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteLowonganStaff(item)">
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>

        <v-card class="my-16">
            <v-card-title>
                <h2>Lowongan Magang</h2>
                <v-spacer />
                <v-btn color="primary" @click="addLowonganMagang">Tambah Lowongan</v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="lowongan_magang">
                                <template v-slot:item.deskripsi_lowongan="{ item }">
                    <span v-html="limitText(item.deskripsi_lowongan, 50)"></span>
                </template>
                <template v-slot:item.syarat_umum_lowongan="{ item }">
                    <span v-html="limitText(item.syarat_umum_lowongan, 50)"></span>
                </template>
                <template v-slot:item.syarat_kualifikasi="{ item }">
                    <span v-html="limitText(item.syarat_kualifikasi, 50)"></span>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editLowonganMagang(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteLowonganMagang(item)">
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>

        <v-dialog v-model="dialog" max-width="800">
            <v-card>
                <v-card-title>{{ titleDialog }}</v-card-title>
                <v-card-text>
                    <v-select 
                    :items="lowongan" 
                    @change="mappingSelectedLowongan($event)"
                    label="Nama Lowongan" 
                    v-model="form_lowongan.select_lowongan"/>
                    <v-tiptap 
                    label="Deskripsi Lowongan"
                    :toolbar="toolbar" 
                    v-model="form_lowongan.deskripsi_lowongan" />
                    <v-tiptap
                    label="Syarat Umum Lowongan"
                    :toolbar="toolbar"
                    v-model="form_lowongan.syarat_umum_lowongan" />
                    <v-tiptap
                    label="Syarat Kualifikasi"
                    :toolbar="toolbar"
                    v-model="form_lowongan.syarat_kualifikasi" />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>