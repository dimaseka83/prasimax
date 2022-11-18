<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headercarousel" :items="carousel">
                <template v-slot:item.image="data">
                    <v-img :src="`${assets}${data.item.image}`" width="100"></v-img>
                </template>
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editcarousel(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deletecarousel(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Carousel <span class="subtitle-2 text-disabled">(Gambar harus svg)</span>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogcarousel" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat Carousel Baru</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Title" v-model="formcarousel.title"></v-text-field>
                                    <v-text-field label="Description" v-model="formcarousel.subtitle"></v-text-field>
                                    <v-file-input accept="image/*" v-model="formcarousel.image" label="Image">
                                    </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogcarousel = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="savecarousel">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>


        <v-card class="my-16">
            <v-data-table :headers="headersmitra" :items="mitra">
                <template v-slot:item.image="data">
                    <v-img :src="`${assets}${data.item.image}`" width="100"></v-img>
                </template>
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editmitra(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deletemitra(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Mitra</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogmitra" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit Partnership</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Link" v-model="formmitra.link"></v-text-field>
                                    <v-file-input accept="image/*" v-model="formmitra.image" label="Image">
                                    </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogmitra = false">Cancel</v-btn>
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
                dialogcarousel: false,
                carousel: [],
                headercarousel: [{
                        text: 'Title',
                        value: 'title'
                    },
                    {
                        text: 'Subtitle',
                        value: 'subtitle'
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
                formcarousel: {
                    title: '',
                    subtitle: '',
                    image: [],
                },


                mitra: [],
                formmitra: {
                    link: '',
                    image: ''
                },
                dialogmitra: false,
                headersmitra: [{
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
            this.getCarousel()
        },
        methods: {
            async getCarousel() {
                try {
                    await axios.get(`${this.apibe}carousel`)
                        .then(res => {
                            this.carousel = res.data
                        })

                        await axios.get(`${this.apibe}mitra`).then(res => {
                    this.mitra = res.data
                })
                } catch (error) {
                    console.log(error)
                }
            },
            async savecarousel() {
                try {
                    if(this.formcarousel.id != undefined){
                        await axios.put(`${this.apibe}carousel/${this.formcarousel.id}`, this.formcarousel, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                        .then(res => {
                            console.log(res)
                            this.dialogcarousel = false
                            this.getCarousel()
                        })
                    }else{
                        await axios.post(`${this.apibe}carousel`, this.formcarousel, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                        .then(res => {
                            if (res.status == 200) {
                                this.dialogcarousel = false
                                this.getCarousel()
                            }
                        })
                    }
                                                    this.formcarousel = {
                                    title: '',
                                    subtitle: '',
                                    image: [],
                                }
                } catch (error) {
                    console.log(error)
                }
            },
            async editcarousel(index) {
                this.formcarousel = null
                this.formcarousel = this.carousel[index];
                this.dialogcarousel = true
            },
            async deletecarousel(index){
                try {
                    await axios.delete(`${this.apibe}carousel/${this.carousel[index].id}`, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                    .then(res => {
                        this.getCarousel()
                    })
                } catch (error) {
                    console.log(error)
                }
            },

            editmitra(index) {
                this.formmitra = this.mitra[index]
                this.dialogmitra = true
            },

            deletemitra(index) {
                axios.delete(`${this.apibe}mitra/${this.mitra[index].id}`, {
                    headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                }).then(res => {
                    this.getCarousel()
                    this.dialogmitra = false
                })
            },

            async savemitra(){
                if(this.formmitra.id){
                    try {
                        await axios.put(`${this.apibe}mitra/${this.formmitra.id}`, this.formmitra, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.getCarousel()
                        this.dialogmitra = false
                    })
                    } catch (error) {
                        console.log(error)
                    }
                }else{
                    try {
                        await axios.post(`${this.apibe}mitra`, this.formmitra, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.getCarousel()
                        this.dialogmitra = false
                    })
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        },
    }
</script>