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
        }
    },
            created() {
            this.init()
        },
    methods: {
                    async init() {
                await axios.get(`${this.apibe}jasa`).then(res => {
                    this.partners = res.data
                })
            },
            editpartnership(index) {
                this.formpartnership = this.partners[index]
                this.dialogpartnership = true
            },
            async deletepartnership(index) {
                try {
                    await axios.delete(`${this.apibe}jasa/${this.partners[index].id}`, {
                    headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                }).then(res => {
                    this.init()
                })
                } catch (error) {
                    console.log(error)
                }
            },
            async savepartnerts(){
                if(this.formpartnership.id){
                    try {
                        await axios.put(`${this.apibe}jasa/${this.formpartnership.id}`, this.formpartnership, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.init()
                        this.dialogpartnership = false
                    })
                    } catch (error) {
                        console.log(error)
                    }
                }else{
                    try {
                        await axios.post(`${this.apibe}jasa`, this.formpartnership, {
                        headers: {
                                    'Content-Type': 'multipart/form-data',
                                    Authorization: `Bearer ${this.$store.state.token}`
                                },
                    }).then(res => {
                        this.init()
                        this.dialogpartnership = false
                    })
                    } catch (error) {
                        console.log(error)
                    }
                }

                                        this.formpartnership = {
                            title: '',
                            content: '',
                            image: ''
                        }
            },
    },
}
</script>
<template>
    <v-app>
        <navigation-admin/>
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
                        <v-toolbar-title>Jasa</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogpartnership" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat / Edit Jasa</v-card-title>
                                <v-card-text>
                                    <v-text-field label="Nama" v-model="formpartnership.title"></v-text-field>
                                    <v-tiptap v-model="formpartnership.content" label="keterangan"
                                        :toolbar="['bold', 'italic', 'underline','strike', '|', 'bulletList', 'orderedList','h1','h2','h3','p']"></v-tiptap>
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
    </v-app>
</template>