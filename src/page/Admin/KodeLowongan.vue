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
            kodeLowonganStaff: [],
            kodeLowonganMagang: [],
            department: [],

            form_lowongan: {
                id: '',
                kode: '',
                divisi: '',
            },

            headers: [
                { text: 'Kode', value: 'kode' },
                { text: 'Divisi', value: 'divisi' },
                { text: 'Action', value: 'action' },
            ],
            
            dialog: false,
            titleDialog: '',
            tipe_lowongan: '',
        }
    },
    created() {
        this.getKode()
    },
    methods: {
        async getKode() {
            await axios.get(`${this.apibe}lowongan_staff/kode-lowongan`).then(res => {
                this.kodeLowonganStaff = res.data
            })

            await axios.get(`${this.apibe}lowongan_magang/kode-lowongan`).then(res => {
                this.kodeLowonganMagang = res.data
            })
        },
        createKodeStaff() {
            this.titleDialog = 'Tambah Kode Staff'
            this.tipe_lowongan = 'staff'
            this.dialog = true
        },
        createKodeMagang() {
            this.titleDialog = 'Tambah Kode Magang'
            this.tipe_lowongan = 'magang'
            this.dialog = true
        },
        editKodeStaff(item) {
            this.titleDialog = 'Edit Kode Staff'
            this.tipe_lowongan = 'edit_staff'
            const { id, kode, divisi } = item
            this.form_lowongan = { id, kode, divisi }
            this.dialog = true
        },
        editKodeMagang(item) {
            this.titleDialog = 'Edit Kode Magang'
            this.tipe_lowongan = 'edit_magang'
            const { id, kode, divisi } = item
            this.form_lowongan = { id, kode, divisi }
            this.dialog = true
        },
        async deleteKodeStaff(item) {
            const { id } = item
            try {
                    await axios.delete(`${this.apibe}lowongan_staff/kode-lowongan/${id}`, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                    }).then(res => {
                    this.$swal('Berhasil', 'Kode Lowongan Staff berhasil dihapus', 'success')
                    this.getKode()
                    this.dialog = false
                })
            } catch (error) {
                console.log(error)
            }
        },
        async deleteKodeMagang(item) {
            const { id } = item
            try {
                    await axios.delete(`${this.apibe}lowongan_magang/kode-lowongan/${id}`, {
                        headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                    }).then(res => {
                    this.$swal('Berhasil', 'Kode Lowongan Magang berhasil dihapus', 'success')
                    this.getKode()
                    this.dialog = false
                })
            } catch (error) {
                console.log(error)
            }
        },
        async save() {
            const checkSameLowongan = (this.tipe_lowongan == 'staff' || this.tipe_lowongan == 'edit_staff') ? this.kodeLowonganStaff : this.kodeLowonganMagang
            const checkSame = checkSameLowongan.filter(item => item.kode == this.form_lowongan.kode)
            if (checkSame.length > 0) {
                this.$swal('Gagal', 'Kode Lowongan sudah ada', 'error')
                return
            }

            try {
                switch (this.tipe_lowongan) {
                case 'staff':
                    await axios.post(`${this.apibe}lowongan_staff/kode-lowongan`, this.form_lowongan, {
                        headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                    }).then(res => {
                        this.$swal('Berhasil', 'Kode Lowongan Staff berhasil ditambahkan', 'success')
                        this.getKode()
                        this.dialog = false
                    })
                    break;
                case 'magang':
                    await axios.post(`${this.apibe}lowongan_magang/kode-lowongan`, this.form_lowongan, {
                        headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                    }).then(res => {
                        this.$swal('Berhasil', 'Kode Lowongan Magang berhasil ditambahkan', 'success')
                        this.getKode()
                        this.dialog = false
                    })
                    break;
                case 'edit_staff':
                    await axios.put(`${this.apibe}lowongan_staff/kode-lowongan/${this.form_lowongan.id}`, this.form_lowongan, {
                        headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                    }).then(res => {
                        this.$swal('Berhasil', 'Kode Lowongan Staff berhasil diubah', 'success')
                        this.getKode()
                        this.dialog = false
                    })
                    break;
                case 'edit_magang':
                    await axios.put(`${this.apibe}lowongan_magang/kode-lowongan/${this.form_lowongan.id}`, this.form_lowongan, {
                        headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                    }).then(res => {
                        this.$swal('Berhasil', 'Kode Lowongan Magang berhasil diubah', 'success')
                        this.getKode()
                        this.dialog = false
                    })
                    break;
            }
            } catch (error) {
                console.log(error)   
            }
        },
    },
}
</script>
<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-card-title>
                <h2 class="headline">Kode Lowongan Staff</h2>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark @click="createKodeStaff">Tambah Kode</v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="kodeLowonganStaff">
                <template v-slot:item.action="{ item }">
                    <v-icon small class="mr-2" @click="editKodeStaff(item)">mdi-pencil</v-icon>
                    <v-icon small @click="deleteKodeStaff(item)">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>

        <v-card class="my-16">
            <v-card-title>
                <h2 class="headline">Kode Lowongan Magang</h2>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark @click="createKodeMagang">Tambah Kode</v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="kodeLowonganMagang">
                <template v-slot:item.action="{ item }">
                    <v-icon small class="mr-2" @click="editKodeMagang(item)">mdi-pencil</v-icon>
                    <v-icon small @click="deleteKodeMagang(item)">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>

        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-card-title>
                    <h2 class="headline">{{ titleDialog }}</h2>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Kode" v-model="form_lowongan.kode"></v-text-field>
                        <v-text-field label="Divisi" v-model="form_lowongan.divisi"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="red" dark @click="dialog = false">Batal</v-btn>
                    <v-btn color="primary" dark @click="save">Simpan</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>