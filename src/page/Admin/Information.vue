<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headerinformationtitle" :items="informationtitle">
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="editInformationTitle(data.index)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" @click="deleteInformationTitle(data.index)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Information Title
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialoginformationtitle" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat Information Title Baru</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Title" v-model="forminformationtitle.judul"></v-text-field>
                                    <v-text-field label="Description" v-model="forminformationtitle.subtitle"></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue" text @click="dialoginformationtitle = false">Cancel</v-btn>
                                    <v-btn color="blue" text @click="saveInformationTitle">Save</v-btn>
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
                dialoginformationtitle: false,
                informationtitle: [],
                headerinformationtitle: [{
                        text: 'Title',
                        value: 'judul'
                    },
                    {
                        text: 'Subtitle',
                        value: 'subtitle'
                    },
                    {
                        text: 'Action',
                        value: 'action',
                    }
                ],
                forminformationtitle: {
                    judul: '',
                    subtitle: '',
                }
            }
        },
        created() {
            this.getInformationTitle()
        },
        methods: {
            async getInformationTitle() {
                try {
                    await axios.get(`${this.apibe}informationTitle`)
                        .then(res => {
                            this.informationtitle = res.data
                        })
                } catch (error) {
                    console.log(error)
                }
            },
            async saveInformationTitle() {
                try {
                    if(this.forminformationtitle.id != undefined){
                        await axios.put(`${this.apibe}informationTitle/${this.forminformationtitle.id}`, this.forminformationtitle, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        }) 
                        .then(res => {
                            console.log(res)
                            this.dialoginformationtitle = false
                            this.getInformationTitle()
                        })
                    }else{
                        await axios.post(`${this.apibe}informationTitle`, this.forminformationtitle, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                        .then(res => {
                            if (res.status == 200) {
                                this.dialoginformationtitle = false
                                this.getInformationTitle()
                                this.forminformationtitle = {
                                    judul: '',
                                    subtitle: '',
                                }
                            }
                        })
                    }
                } catch (error) {
                    console.log(error)
                }
            },
            async editInformationTitle(index) {
                this.forminformationtitle = this.informationtitle[index];
                this.dialoginformationtitle = true
            },
            async deleteInformationTitle(index){
                try {
                    await axios.delete(`${this.apibe}informationTitle/${this.informationtitle[index].id}`, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${this.$store.state.token}`
                            },
                        })
                    .then(res => {
                        this.getInformationTitle()
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>