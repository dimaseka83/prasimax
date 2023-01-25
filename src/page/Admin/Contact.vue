<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headersdeparment" :items="department" :loading="loading">
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editdepartment(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deletedepartment(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template #top>
                    <v-toolbar>
                        <v-toolbar-title>Departments</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogdepartment" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-on="on" v-bind="attrs" @click="newDepartment">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-form lazy-validation ref="form">
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="formdepartment.nama" label="Nama">
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model.number="formdepartment.urutan" label="Urutan"
                                                        ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-form>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="dialogdepartment = false">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="saveDepartment">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>
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
                        <v-toolbar-title>Contacts</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogsales" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit Contacts</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Nama" v-model="formsales.name"></v-text-field>
                                    <v-select v-model="formsales.kelompok" :items="mapDepartment" label="Departement">
                                    </v-select>
                                    <v-tiptap v-model="formsales.detail" label="Detail"
                                        :toolbar="toolbar">
                                    </v-tiptap>
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
                headerssalesdepartment: [{
                        text: 'Nama',
                        value: 'name'
                    },
                    {
                        text: 'Departement',
                        value: 'kelompok'
                    },
                    {
                        text: 'Detail',
                        value: 'detail'
                    },
                    {
                        text: 'Image',
                        value: 'image'
                    },
                    {
                        text: 'Action',
                        value: 'action'
                    },
                ],
                formsales: {
                    name: '',
                    detail: '',
                    image: '',
                    kelompok: ''
                },
                department: [],
                dialogdepartment: false,
                headersdeparment: [{
                        text: 'Nama',
                        value: 'nama'
                    },
                    {
                        text: 'Urutan',
                        value: 'urutan'
                    },
                    {
                        text: 'Action',
                        value: 'action'
                    },
                ],
                formdepartment: {
                    nama: '',
                    urutan: ''
                },
                formTitle: '',
                formvalidation: {
                    urutan: [
                        v => !!v || 'Urutan tidak boleh kosong',
                        v => !isNaN(v) || 'Urutan harus angka',
                        v => !v || v > 0 || 'Urutan harus lebih besar dari 0',
                        v => !this.checkSameUrutan || 'Urutan tidak boleh sama'
                    ]
                }
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
                        })
                    const {
                        data
                    } = await axios.get(`${this.apibe}department`)
                    this.department = data
                    this.loading = false
                } catch (error) {
                    console.log(error)
                    this.loading = false
                }
            },
            newDepartment() {
                this.formTitle = 'Tambah Departement'
                this.dialogdepartment = true
                this.formdepartment = {
                    nama: '',
                    urutan: ''
                }
            },
            editsales(index) {
                this.dialogsales = true
                this.formsales = this.salesdepartment[index]
            },
            editdepartment(index) {
                this.dialogdepartment = true
                this.formTitle = 'Edit Departement'
                const { id, nama, urutan } = this.department[index]
                this.formdepartment = {
                    id,
                    nama,
                    urutan
                }
            },
            deletesales(index) {
                                this.$swal({
                    title: 'Are you sure to delete this data?',
                    text: 'You will not be able to recover this data!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                try {
                    axios.delete(`${this.apibe}salesdepartment/${this.salesdepartment[index].id}`, {
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
                    }
                })
            },
             deletedepartment(index) {
                                this.$swal({
                    title: 'Are you sure to delete this data?',
                    text: 'You will not be able to recover this data!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                try {
                    const id = this.department[index].id
                    const {
                        data
                    } = axios.delete(`${this.apibe}department/${id}`, {
                        headers: {
                            Authorization: `Bearer ${this.$store.state.token}`
                        }
                    })
                    this.$swal('Success', 'Data berhasil dihapus', 'success')
                    this.getSales()
                    console.log(data)
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Data gagal dihapus', 'error')
                }
                    }
                })
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
                    kelompok: ''
                }
            },
            async saveDepartment() {
                if (this.$refs.form.validate()) {
                    try {
                        if (this.formdepartment.id) {
                            await axios.put(`${this.apibe}department/${this.formdepartment.id}`, this
                                    .formdepartment, {
                                        headers: {
                                           Authorization: `Bearer ${this.$store.state.token}`
                                        }
                                    })
                                .then(res => {
                                    this.getSales()
                                    this.dialogdepartment = false
                                    this.$swal('Success', 'Data berhasil diubah', 'success')
                                })
                        } else {
                            await axios.post(`${this.apibe}department`, this.formdepartment, {
                                        headers: {
                                           Authorization: `Bearer ${this.$store.state.token}`
                                        }
                                    })
                                .then(res => {
                                    this.getSales()
                                    this.dialogdepartment = false
                                    this.$swal('Success', 'Data berhasil ditambahkan', 'success')
                                })
                        }
                    } catch (error) {
                        console.log(error)
                        this.$swal('Error', 'Data gagal disimpan', 'error')
                    }
                }
                this.formdepartment = {
                    nama: '',
                    urutan: ''
                }
            }
        },
        computed: {
            checkSameUrutan() {
                const urutan = this.formdepartment.urutan
                const check = this.department.filter(item => item.urutan == urutan)
                if (check.length > 0) {
                    return true
                } else {
                    return false
                }
            },
            mapDepartment() {
                return this.department.map(item => {
                    return item.nama
                })
            }
        }
    }
</script>