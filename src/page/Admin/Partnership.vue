<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headerspartnership" :items="partners">
                <template v-slot:item.content="data">
                    <span v-html="data.item.content"></span>
                </template>
                <template v-slot:item.image="data">
                    <v-img :src="`${assets}${data.item.image}`" width="100"></v-img>
                </template>
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editpartnership(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deletepartnership(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Partnership</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogpartnership" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit Partnership</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Nama" v-model="formpartnership.title"></v-text-field>
                                    <v-tiptap v-model="formpartnership.content" label="keterangan"
                                        :toolbar="toolbar"></v-tiptap>
                                    <v-file-input accept="image/*" v-model="formpartnership.image" label="Image">
                                    </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogpartnership = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="savepartnerts">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>


                <v-card class="my-16">
            <v-data-table :headers="headersmitratech" :items="mitratech">
                <template v-slot:item.image="data">
                    <v-img :src="`${assets}${data.item.image}`" width="100"></v-img>
                </template>
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editmitratech(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deletemitratech(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Mitra Teknologi</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogmitratech" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit Partnership</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Link" v-model="formmitratech.link"></v-text-field>
                                    <v-file-input accept="image/*" v-model="formmitratech.image" label="Image">
                                    </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogmitratech = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="savemitra">Save</v-btn>
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
                dialogpartnership: false,
                headerspartnership: [{
                        text: 'Title',
                        value: 'title'
                    },
                    {
                        text: 'Content',
                        value: 'content'
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
                partners: [],
                formpartnership: {
                    title: '',
                    content: '',
                    image: ''
                },

                

                mitratech: [],
                formmitratech: {
                    link: '',
                    image: ''
                },
                dialogmitratech: false,
                headersmitratech: [{
                        text: 'Link',
                        value: 'link'
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
            }
        },
        created() {
            this.init()
        },
        methods: {
            async init() {
                await axios.get(`${this.apibe}kerjasama`).then(res => {
                    this.partners = res.data
                })

                await axios.get(`${this.apibe}mitra-teknologi`).then(res => {
                    this.mitratech = res.data
                })
            },
            editpartnership(index) {
                this.formpartnership = this.partners[index]
                this.dialogpartnership = true
            },
             deletepartnership(index) {
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
                    axios.delete(`${this.apibe}kerjasama/${this.partners[index].id}`, {
                    headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                }).then(res => {
                    this.init()
                    this.$swal('Success', 'Berhasil menghapus data', 'success')
                })
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Gagal menghapus data', 'error')
                }
                    }
                })
            },
            async savepartnerts(){
                if(this.formpartnership.id){
                    try {
                        await axios.put(`${this.apibe}kerjasama/${this.formpartnership.id}`, this.formpartnership, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.init()
                        this.dialogpartnership = false
                        this.$swal('Success', 'Berhasil mengubah data', 'success')
                    })
                    } catch (error) {
                        console.log(error)
                        this.$swal('Error', 'Gagal mengubah data', 'error')
                    }
                }else{
                    try {
                        await axios.post(`${this.apibe}kerjasama`, this.formpartnership, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.init()
                        this.dialogpartnership = false
                        this.$swal('Success', 'Berhasil menambah data', 'success')
                    })
                    } catch (error) {
                        console.log(error)
                        this.$swal('Error', 'Gagal menambah data', 'error')
                    }
                }

                                        this.formpartnership = {
                            title: '',
                            content: '',
                            image: ''
                        }
            },

             editmitratech(index) {
                this.formmitratech = this.mitratech[index]
                this.dialogmitratech = true
            },

            deletemitratech(index) {
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
                    axios.delete(`${this.apibe}mitra-teknologi/${this.mitratech[index].id}`, {
                    headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                }).then(res => {
                    this.init()
                    this.dialogmitratech = false
                    this.$swal('Success', 'Berhasil menghapus data', 'success')
                })
                } catch (error) {
                  console.log(error)
                    this.$swal('Error', 'Gagal menghapus data', 'error')  
                }
                    }
                })
            },

            async savemitra(){
                if(this.formmitratech.id){
                    try {
                        await axios.put(`${this.apibe}mitra-teknologi/${this.formmitratech.id}`, this.formmitra, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.init()
                        this.$swal('Success', 'Berhasil mengubah data', 'success')
                        this.dialogmitratech = false
                    })
                    } catch (error) {
                        console.log(error)
                        this.$swal('Error', 'Gagal menambah data', 'error')

                    }
                }else{
                    try {
                        await axios.post(`${this.apibe}mitra-teknologi`, this.formmitratech, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.init()
                        this.$swal('Success', 'Berhasil menambah data', 'success')
                        this.dialogmitratech = false
                    })
                    } catch (error) {
                        console.log(error)
                        this.$swal('Error', 'Gagal menambah data', 'error')
                    }
                                            this.formmitratech = {
                            link: '',
                            image: ''
                        }
                }
            }
        },
    }
</script>