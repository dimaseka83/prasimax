<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headerabouttitle" :items="abouttitle">
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editabouttitle(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deleteabouttitle(data.index)">
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
                        <v-dialog v-model="dialogabouttitle" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit About Title</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Title" v-model="formabouttitle.title"></v-text-field>
                                    <v-text-field label="Description" v-model="formabouttitle.subtitle"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogabouttitle = false">Cancel</v-btn>
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
                dialogabouttitle: false,
                abouttitle: [],
                headerabouttitle: [{
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
                formabouttitle: {
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
            this.getabouttitle();
            this.getabout();
        },
        methods: {
                // API About Title
            
            async getabouttitle() {
                await axios.get(`${this.apibe}titleAbout`)
                    .then(res => {
                        this.abouttitle = res.data
                    })
            },
            async editabouttitle(index) {
                this.dialogabouttitle = true
                this.formabouttitle = this.abouttitle[index]
            },
            async deleteabouttitle(index) {
                try {
                    await axios.delete(`${this.apibe}titleAbout/${this.abouttitle[index].id}`)
                    .then(res => {
                        this.getabouttitle();
                    })
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Gagal menghapus data', 'error')
                }
            },
            async saveabouttitle() {
                try {
                    if (this.formabouttitle.id != undefined) {
                        await axios.put(`${this.apibe}titleAbout/${this.formabouttitle.id}`, this.formabouttitle, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getabouttitle();
                                this.dialogabouttitle = false
                            })
                    } else {
                        await axios.post(`${this.apibe}titleAbout`, this.formabouttitle, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getabouttitle();
                                this.dialogabouttitle = false
                            })
                    }
                                                    this.formabout = {
                                    title: '',
                                    subtitle: ''
                                }
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Gagal menyimpan data', 'error')
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
                try {
                                    await axios.delete(`${this.apibe}about/${this.about[index].id}`, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${this.$store.state.token}`
                        },
                    })
                    .then(res => {
                        this.getabout();
                    })
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Gagal menghapus data', 'error')
                }
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
                        await axios.post(`${this.apibe}about`, this.formabout, {
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
                                                    this.formabout = {
                                    title: '',
                                    subtitle: ''
                                }
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Gagal menyimpan data', 'error')
                }
            }
        },
    }
</script>