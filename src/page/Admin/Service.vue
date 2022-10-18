<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table
                :headers="headerserviceInovate"
                :items="serviceInovate"
            >
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Service Inovate</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogServiceInovate" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                    Service Inovate
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Edit / Tambar Service Inovate</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field v-model="formserviceInovate.title" label="Title"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="12" md="12">
                                                <v-text-field v-model="formserviceInovate.subtitle" label="Subtitle"></v-text-field>
                                            </v-col>
                                            <!-- <v-col cols="12" sm="12" md="12">
                                                <v-file-input v-model="formserviceInovate.image" label="Image" prepend-icon="mdi-camera"></v-file-input>
                                            </v-col> -->
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="dialogServiceInovate == false">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="addServiceInovate">Save</v-btn>
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
                dialogServiceInovate: false,
                serviceInovate: [],
                headerserviceInovate: [{
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
                formserviceInovate: {
                    title: '',
                    subtitle: '',
                    image: [],
                }
            }
        },
        created() {
            this.getServiceInovate()
        },
        methods: {
            async getServiceInovate() {
                try {
                    await axios.get(`${this.apibe}serviceInovate`)
                        .then(res => {
                            this.serviceInovate = res.data
                        })
                } catch (error) {
                    console.log(error)
                }
            },

            async addServiceInovate() {
                try {
                    if(this.formserviceInovate.id != undefined){
                        await axios.put(`${this.apibe}serviceInovate/${this.formserviceInovate.id}`, this.formserviceInovate, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                            .then(res => {
                                this.getServiceInovate()
                                this.dialogServiceInovate = false

                            })
                    }else{
                        await axios.post(`${this.apibe}serviceInovate`, this.formserviceInovate, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                            .then(res => {
                                this.getServiceInovate()
                                this.dialogServiceInovate = false
                            })
                    }
                                    
                } catch (error) {
                    console.log(error)
                }
                                                this.formserviceInovate = {
                                    title: '',
                                    subtitle: '',
                                    image: [],
                                }
            },
            editServiceInovate(data) {
                this.dialogServiceInovate = true
                this.formserviceInovate = this.serviceInovate[data];
            },
            async deleteServiceInovate(data) {
                try {
                    await axios.delete(`${this.apibe}serviceInovate/${this.technical[item].id}`, {
                        headers: {
                            Authorization: `Bearer ${this.$store.state.token}`
                        },
                    })
                        .then(res => {
                            this.getServiceInovate()
                        })
                } catch (error) {
                    console.log(error)
                }
            },
        },
}
</script>