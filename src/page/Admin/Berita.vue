<script>
import NavigationAdmin from '@/components/Admin/Navigation.vue'
import mix from '@/mixins/mix'
import axios from 'axios'
export default {
    mixins: [mix],
    components: {
        NavigationAdmin
    },
    data() {
        return {
            headers: [
                { text: 'Judul', value: 'title' },
                { text: 'Konten', value: 'content' },
                { text: 'Gambar', value: 'image' },
                { text: 'Kategori', value: 'category' },
                { text: 'Aksi', value: 'action' },
            ],
            dialog: false,
            loading: false,
            form : {
                title: '',
                content: '',
                image: null,
                category: '',
            },
            rules: {
                title: [
                    v => !!v || 'Judul harus diisi',
                ],
                content: [
                    v => !!v || 'Konten harus diisi',
                ],
                category: [
                    v => !!v || 'Kategori harus diisi',
                    v => !this.inputBeritaUtamaMustOne || 'Berita Terpopuler hanya boleh 3'
                ],
                image: [
                    v => !!v || 'Gambar harus diisi',
                ],
            },
            formsTitle: 'Tambah Berita',
            category: [
                'Berita Terpopuler',
                'Berita'
            ],
            header: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    },
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
            this.loading = true
            this.$store.dispatch('getBerita')
            this.loading = false
        },
        tambahBerita() {
            this.dialog = true
            this.formsTitle = 'Tambah Berita'
            this.form = {
                title: '',
                content: '',
                image: null
            }
        },
        editItem(item) {
            this.dialog = true
            this.form = item
            this.formsTitle = 'Edit Berita'
        },
        deleteItem(item) {
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

            const { id } = item
            const { data } = axios.delete(`${this.apibe}/berita/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            this.$swal('Berhasil', 'Berita berhasil dihapus', 'success')
            this.initialize()
                    }
                })
        },
        save() {
            const saveData = () => {
                const { data } = axios.post(`${this.apibe}/berita`, this.form, {
                    headers: this.header
                })
                this.initialize()
                this.$swal('Berhasil', 'Berita berhasil ditambahkan', 'success')
                return data
            }

            const updateData = () => {
                const { data } = axios.put(`${this.apibe}/berita/${this.form.id}`, this.form, {
                    headers: this.header
                })
                this.initialize()
                this.$swal('Berhasil', 'Berita berhasil diubah', 'success')
                return data
            }

            if (this.$refs.form.validate()) {
                this.loading = true
                if (this.formsTitle === 'Tambah Berita') {
                    saveData()
                } else {
                    updateData()
                }
                this.dialog = false
            }
        },
    },
    computed: {
        inputBeritaUtamaMustOne() {
            return this.$store.state.berita.filter(
                item => item.category === 'Berita Terpopuler').length === 4 && 
                this.form.category === 'Berita Terpopuler'
                ? true : false
        }
    }
}
</script>
<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headers" :items="$store.state.berita" :loading="loading">
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
                <template v-slot:item.image="{ item }">
                    <v-img :src="`${assets}${item.image}`" max-width="100px" max-height="100px"></v-img>
                </template>
                <template v-slot:item.content="{ item }">
                    <div v-html="limitText(item.content, 50)"></div>                    
                </template>
                <template v-slot:item.action="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon small v-on="on" @click="editItem(data.item)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon small v-on="on" @click="deleteItem(data.item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>
                </template>
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Berita</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                                <v-btn 
                                color="primary" 
                                dark class="mb-2" 
                                v-on="on"
                                @click="tambahBerita"
                                >Tambah Berita</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{ formsTitle }}</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-form lazy-validation ref="form">
                                            <v-col cols="12">
                                                <v-text-field 
                                                v-model="form.title" 
                                                label="Judul"
                                                :rules="rules.title"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-textarea
                                                    v-model="form.content"
                                                    label="Konten"
                                                    :rules="rules.content"
                                                    v-show="false"
                                                ></v-textarea>
                                                <v-tiptap v-model="form.content" label="Konten" :toolbar="toolbar"></v-tiptap>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-select
                                                    v-model="form.category"
                                                    :items="category"
                                                    label="Kategori"
                                                    :rules="rules.category"
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-file-input
                                                    v-model="form.image"
                                                    label="Gambar"
                                                    prepend-icon="mdi-camera"
                                                    accept="image/*"
                                                    :rules="rules.image"
                                                ></v-file-input>
                                            </v-col>
                                            </v-form>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>
    </v-app>
</template>