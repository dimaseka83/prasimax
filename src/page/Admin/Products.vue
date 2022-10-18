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
                        <v-toolbar-title>About Title</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogproductstitle" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit About Title</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Title" v-model="formproductstitle.judul"></v-text-field>
                                    <v-text-field label="Description" v-model="formproductstitle.subtitle"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogproductstitle = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="saveabouttitle">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>

        <v-card class="my-16">
            <v-data-table :headers="headerabout" :items="about">
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editabout(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deleteabout(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>About Title</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogabout" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit About</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Title" v-model="formabout.title"></v-text-field>
                                    <v-text-field label="Description" v-model="formabout.subtitle"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogabout = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="saveabout">Save</v-btn>
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
                    title: '',
                    subtitle: ''
                },
                
                // API About
                dialogabout: false,
                about: [],
                headerabout: [{
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
                formabout: {
                    title: '',
                    subtitle: ''
                }
            }
        },
        created() {
            this.getproductstitle();
            this.getabout();
        },
        methods: {
                // API About Title
            
            async getproductstitle() {
                await axios.get(`${this.apibe}productsTitle`)
                    .then(res => {
                        this.abouttitle = res.data
                    })
            },
            async editproductstitle(index) {
                this.dialogproductstitle = true
                this.formproductstitle = this.abouttitle[index]
            },
            async deleteproductstitle(index) {
                await axios.delete(`${this.apibe}productsTitle/${this.abouttitle[index].id}`)
                    .then(res => {
                        this.abouttitle();
                    })
            },
            async saveabouttitle() {
                try {
                    if (this.formproductstitle.id != undefined) {
                        await axios.put(`${this.apibe}productsTitle/${this.formproductstitle.id}`, this.formproductstitle, {
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
                } catch (error) {
                    console.log(error)
                }
            },

            // API About
            async getabout() {
                await axios.get(`${this.apibe}about`)
                    .then(res => {
                        this.about = res.data
                    })
            },
            async editabout(index) {
                this.dialogabout = true
                this.formabout = this.about[index]
            },
            async deleteabout(index) {
                await axios.delete(`${this.apibe}about/${this.about[index].id}`, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${this.$store.state.token}`
                        },
                    })
                    .then(res => {
                        this.getabout();
                    })
            },
            async saveabout() {
                try {
                    if (this.formabout.id != undefined) {
                        await axios.put(`${this.apibe}about/${this.formabout.id}`, this.formabout, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getabout();
                                this.dialogabout = false
                            })
                    } else {
                        await axios.post(`${this.apibe}titleAbout`, this.formabout, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getabout();
                                this.dialogabout = false
                            })
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>