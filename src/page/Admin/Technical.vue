<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headertechnical" :items="technical">
                <!-- <template v-slot:item.image="data">
                    <v-img :src="`${assets}${data.item.image}`" width="100"></v-img>
                </template> -->
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editTechnical(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deleteTechnical(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Technical
                            <!-- <span class="subtitle-2 text-disabled">(Gambar harus svg)</span> -->
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogtechnical" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat Technical Baru</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Title" v-model="formtechnical.title"></v-text-field>
                                    <v-text-field label="Description" v-model="formtechnical.subtitle"></v-text-field>
                                    <!-- <v-file-input accept="image/*" v-model="formtechnical.image" label="Image"> -->
                                    <!-- </v-file-input> -->
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialogtechnical = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="saveTechnical">Save</v-btn>
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
                dialogtechnical: false,
                technical: [],
                headertechnical: [{
                        text: 'Title',
                        value: 'title'
                    },
                    {
                        text: 'Subtitle',
                        value: 'subtitle'
                    },
                    // {
                    //     text: 'Image',
                    //     value: 'image'
                    // },
                    {
                        text: 'Action',
                        value: 'action'
                    },
                ],
                formtechnical: {
                    title: '',
                    subtitle: '',
                    image: [],
                }
            }
        },
        created() {
            this.getTechnical()
        },
        methods: {
            async getTechnical() {
                try {
                    await axios.get(`${this.apibe}technical`)
                        .then(res => {
                            this.technical = res.data
                        })
                } catch (error) {
                    console.log(error)
                }
            },
            async saveTechnical() {
                try {
                    if (this.formtechnical.id != undefined) {
                        await axios.put(`${this.apibe}technical/${this.formtechnical.id}`, this.formtechnical, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getTechnical()
                                this.dialogtechnical = false
                                this.$swal('Success', 'Technical berhasil diubah', 'success')
                            })
                    } else {
                        await axios.post(`${this.apibe}technical`, this.formtechnical, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                            })
                            .then(res => {
                                this.getTechnical()
                                this.dialogtechnical = false
                                this.$swal('Success', 'Technical berhasil dibuat', 'success')
                            })
                    }
                    this.formtechnical = {
                        title: '',
                        subtitle: '',
                        image: [],
                    }
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Technical gagal dibuat', 'error')
                }
            },
            editTechnical(item) {
                this.formtechnical = this.technical[item];
                this.dialogtechnical = true
            },
            async deleteTechnical(item) {
                try {
                    await axios.delete(`${this.apibe}technical/${this.technical[item].id}`, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                        .then(res => {
                            this.getTechnical()
                            this.$swal('Success', 'Technical berhasil dihapus', 'success')
                        })
                } catch (error) {
                    console.log(error)
                    this.$swal('Error', 'Technical gagal dihapus', 'error')
                }
            }
        },
    }
</script>