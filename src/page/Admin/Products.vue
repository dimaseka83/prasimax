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
                <template v-slot:item.image="data">
                    <v-img :src="`${assets}${data.item.image}`" width="100"></v-img>
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
                                    <v-text-field label="Kategori" v-model="formproducts.category"></v-text-field>
                                    <v-select label="Status" v-model="formproducts.status" :items="itemspilihan"></v-select>
                                    <v-text-field label="Keterangan" v-model="formproducts.keterangan"></v-text-field>
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
                        text: 'Action',
                        value: 'action'
                    },
                ],
                formproducts: {
                    name: '',
                    category: '',
                    status: '',
                    keterangan: '',
                    image: [],
                },
                itemspilihan: ['Vanced', 'Buyed'],
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
                await axios.delete(`${this.apibe}productsTitle/${this.productstitle[index].id}`)
                    .then(res => {
                        this.getproductstitle();
                    })
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
                            })
                    }
                    this.formproductstitle = {
                        judul: '',
                        subtitle: ''
                    }
                } catch (error) {
                    console.log(error)
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
                await axios.delete(`${this.apibe}product/${this.products[index].id}`, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${this.$store.state.token}`
                        },
                    })
                    .then(res => {
                        this.getproducts();
                    })
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
                            })
                    }
                    this.formproducts = {
                        name: '',
                        category: '',
                        status: '',
                        keterangan: '',
                        image: [],
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>