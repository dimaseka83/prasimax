<template>
    <v-app>
        <navigation-admin />
                <v-card class="my-16">
            <v-data-table :headers="headerssalesdepartment" :items="salesdepartment" :loading="loading">
                <template v-slot:item.detail="data">
                    <span v-html="data.item.detail"></span>
                </template>
                <template v-slot:item.image="data">
                    <v-img :src="`${assets}${data.item.image}`" width="100"></v-img>
                </template>
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editsales(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deletesales(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Sales Departments</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogsales" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit Sales Departments</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Nama" v-model="formsales.name"></v-text-field>
                                    <v-select v-model="formsales.kelompok" :items="department" label="Departement"></v-select>
                                    <v-tiptap v-model="formsales.detail" label="Detail"
                                        :toolbar="['bold', 'italic', 'underline','strike', '|', 'bulletList', 'orderedList','h1','h2','h3','p']"></v-tiptap>
                                    <v-file-input accept="image/*" v-model="formsales.image" label="Image">
                                    </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogsales = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="savesales">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>
    </v-app>
</template>
<script>
    import axios from 'axios'
    import mix from '@/mixins/mix'
    import NavigationAdmin from '@/components/Admin/Navigation.vue'

export default {
            mixins: [mix],
        components: {
            NavigationAdmin
        },
        data() {
            return {
                loading: false,
                dialogsales: false,
                salesdepartment: [],
                headerssalesdepartment: [
                    { text: 'Nama', value: 'name' },
                    { text: 'Departement', value: 'kelompok' },
                    { text: 'Detail', value: 'detail' },
                    { text: 'Image', value: 'image' },
                    { text: 'Action', value: 'action' },
                ],
                formsales: {
                    name: '',
                    detail: '',
                    image: '',
                    kelompok : ''
                },
                department: [
                    'Bagian Penjualan',
                    'Dukungan Teknis',
                    'Keuangan',
                    'Pembelian'
                ]
            }
        },
        created() {
            this.getSales()
        },
        methods: {
            async getSales() {
                this.loading = true
                try {
                                    await axios.get(`${this.apibe}salesdepartment`)
                    .then(res => {
                        this.salesdepartment = res.data
                        this.loading = false
                    })
                } catch (error) {
                    console.log(error)
                    this.loading = false
                }
            },
            editsales(index) {
                this.dialogsales = true
                this.formsales = this.salesdepartment[index]
            },
            async deletesales(index) {
                try {
                    await axios.delete(`${this.apibe}salesdepartment/${this.salesdepartment[index].id}`, {
                    headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${this.$store.state.token}`
                        }
                })
                    .then(res => {
                        this.getSales()
                        this.$swal('Success', 'Data berhasil dihapus', 'success')
                    })
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Data gagal dihapus', 'error')
                }
            },
            async savesales() {
                try {
                    if (this.formsales.id) {
                    await axios.put(`${this.apibe}salesdepartment/${this.formsales.id}`, this.formsales, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${this.$store.state.token}`
                        }
                    })
                        .then(res => {
                            this.getSales()
                            this.dialogsales = false
                            this.$swal('Success', 'Data berhasil diubah', 'success')
                        })
                } else {
                    await axios.post(`${this.apibe}salesdepartment`, this.formsales, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${this.$store.state.token}`
                        }
                    })
                        .then(res => {
                            this.getSales()
                            this.dialogsales = false
                            this.$swal('Success', 'Data berhasil ditambahkan', 'success')
                        })
                }
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Data gagal disimpan', 'error')
                }
                this.formsales = {
                    name: '',
                    detail: '',
                    image: '',
                    kelompok : ''
                }
            }
        },
}
</script>