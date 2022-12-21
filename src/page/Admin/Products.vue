<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headerproductstitle" :items="productstitle">
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editproductstitle(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deleteproductstitle(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Products Title</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogproductstitle" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit Products Title</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Nama Produk" v-model="formproductstitle.name"></v-text-field>
                                    <v-text-field label="Kategori" v-model="formproductstitle.subtitle">
                                    </v-text-field>
                                    <v-file-input accept="image/*" v-model="formproductstitle.image" label="Image">
                                    </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogproductstitle = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="saveproductstitle">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>

        <v-card class="my-16">
            <v-data-table :headers="headerproducts" :items="products">
                <template v-slot:item.keterangan="data">
                    <span v-html="limitText(data.item.keterangan, 50)"></span>
                </template>
                <template v-slot:item.image="{item}">
                    <v-img :src="`${assets}${item.image}`" width="100"></v-img>
                </template>
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editproducts(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deleteproducts(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Products</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogproducts" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit About</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Nama" v-model="formproducts.name"></v-text-field>
                                    <v-select label="Kategori" v-model="formproducts.category" :items="kategoripilihan">
                                    </v-select>
                                    <v-select label="Status" v-model="formproducts.status" :items="itemspilihan">
                                    </v-select>
                                    <v-select label="Odm" v-model="formproducts.isOdm" :items="odmPilihan">
                                    </v-select>
                                    <v-select label="Odm" v-model="formproducts.isBerita" :items="odmPilihan">
                                    </v-select>
                                    <v-tiptap v-model="formproducts.keterangan" label="keterangan"
                                        :toolbar="['bold', 'italic', 'underline','strike', '|', 'bulletList', 'orderedList','h1','h2','h3','p']"></v-tiptap>
                                    <v-tiptap v-model="formproducts.deskripsi" label="Deskripsi"
                                        :toolbar="['bold', 'italic', 'underline','strike', '|', 'bulletList', 'orderedList','h1','h2','h3','p']"></v-tiptap>
                                    <v-file-input accept="image/*" v-model="formproducts.image" label="Image">
                                    </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogproducts = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="saveproducts">Save</v-btn>
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
    import mix from '@/mixins/mix'
    import NavigationAdmin from '@/components/Admin/Navigation.vue'
    import axios from 'axios'
    export default {
        mixins: [mix],
        components: {
            NavigationAdmin
        },
        data() {
            return {
                // API About Title
                dialogproductstitle: false,
                productstitle: [],
                headerproductstitle: [{
                        text: 'Title',
                        value: 'title'
                    },
                    {
                        text: 'Subtitle',
                        value: 'subtitle'
                    },
                    {
                        text: 'Action',
                        value: 'action'
                    },
                ],
                formproductstitle: {
                    judul: '',
                    subtitle: ''
                },

                // API About
                dialogproducts: false,
                products: [],
                headerproducts: [{
                        text: 'Image',
                        value: 'image'
                    },
                    {
                        text: 'Nama',
                        value: 'name'
                    },
                    {
                        text: 'Kategori',
                        value: 'category'
                    },
                    {
                        text: 'Status',
                        value: 'status'
                    },
                    {
                        text: 'Keterangan',
                        value: 'keterangan'
                    },
                                        {
                        text: 'Deskripsi',
                        value: 'deskripsi'
                    },
                    {
                        text: 'Action',
                        value: 'action'
                    },
                ],
                formproducts: {
                    name: '',
                    category: '',
                    status: '',
                    keterangan: '',
                    deskripsi: '',
                    isOdm: null,
                    isBerita: null,
                    image: [],
                },
                itemspilihan: ['Terakuisisi', 'Tersedia'],
                kategoripilihan: ['Kecerdasan Artifisial', 'IoT', 'Laptop', 'Development Kit', 'Kendaraan Listrik', 'Perangkat lainnya'],
                odmPilihan: [true, false],
            }
        },
        created() {
            this.getproductstitle();
            this.getproducts();
        },
        methods: {
            // API About Title

            async getproductstitle() {
                await axios.get(`${this.apibe}productsTitle`)
                    .then(res => {
                        this.productstitle = res.data
                    })
            },
            async editproductstitle(index) {
                this.dialogproductstitle = true
                this.formproductstitle = this.productstitle[index]
            },
            async deleteproductstitle(index) {
                try {
                    await axios.delete(`${this.apibe}productsTitle/${this.productstitle[index].id}`)
                    .then(res => {
                        this.getproductstitle();
                    })
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Gagal menghapus data', 'error')
                }
            },
            async saveproductstitle() {
                try {
                    if (this.formproductstitle.id != undefined) {
                        await axios.put(`${this.apibe}productsTitle/${this.formproductstitle.id}`, this
                                .formproductstitle, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                        Authorization: `Bearer ${this.$store.state.token}`
                                    },
                                })
                            .then(res => {
                                this.getproductstitle();
                                this.dialogproductstitle = false
                                this.$swal('Berhasil', 'Data berhasil diubah', 'success')
                            })
                    } else {
                        await axios.post(`${this.apibe}productsTitle`, this.formproductstitle, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getproductstitle();
                                this.dialogproductstitle = false
                                this.$swal('Success', 'Data Berhasil Ditambahkan', 'success')
                            })
                    }
                    this.formproductstitle = {
                        judul: '',
                        subtitle: ''
                    }
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Terjadi Kesalahan', 'error')
                }
            },

            // API About
            async getproducts() {
                await axios.get(`${this.apibe}product`)
                    .then(res => {
                        this.products = res.data
                    })
            },
            async editproducts(index) {
                this.dialogproducts = true
                this.formproducts = this.products[index]
            },
            async deleteproducts(index) {
                try {
                    await axios.delete(`${this.apibe}product/${this.products[index].id}`, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${this.$store.state.token}`
                        },
                    })
                    .then(res => {
                        this.getproducts();
                        this.$swal('Success', 'Data Berhasil Dihapus', 'success')
                    })
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Data Gagal Dihapus', 'error')
                }
            },
            async saveproducts() {
               try {
                    if (this.formproducts.id != undefined) {
                        await axios.put(`${this.apibe}product/${this.formproducts.id}`, this.formproducts, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getproducts();
                                this.dialogproducts = false
                                this.$swal('Success', 'Data Berhasil Diubah', 'success')
                            })
                    } else {
                        await axios.post(`${this.apibe}product`, this.formproducts, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getproducts();
                                this.dialogproducts = false
                                this.$swal('Success', 'Data Berhasil Ditambah', 'success')
                            })
                    }
                    this.formproducts = {
                        name: '',
                        category: '',
                        status: '',
                        keterangan: '',
                        isOdm: null,
                        image: [],
                    }
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Gagal Menambahkan Data', 'error')
                }
            }
        },
    }
</script>