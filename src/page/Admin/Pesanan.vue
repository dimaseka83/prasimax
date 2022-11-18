<script>
import axios from 'axios';
import mix from '@/mixins/mix'
import NavigationAdmin from '@/components/Admin/Navigation.vue'

export default {
    mixins: [mix],
    components: {
        NavigationAdmin
    },
    data() {
        return {
            pesananAdmin: [],
            headers: [
                {
                    text: 'No',
                    align: 'start',
                    sortable: false,
                    value: 'no',
                },
                {
                    text: 'Nama User',
                    value: 'user.username',
                },
                {
                    text: 'Product',
                    value: 'product.name',
                },
                {
                    text: 'Process',
                    value: 'process',
                },
                { text: 'Aksi', value: 'aksi' },
            ],
            dialog: false,
            pesanan: null, 
            optionsPesanan: ['Ambil', 'Proses', 'Kirim'],        
        }
    },
    created() {
        this.getPesananAdmin()
    },
    methods: {
        async getPesananAdmin() {
            await axios.get(`${this.apibe}pesanan/admin`, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            }).then(res => {
                this.pesananAdmin = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        edit(id) {
            console.log(id)
            this.pesanan = id
            this.dialog = true
        },
        async save(){
            try {
                let id = this.pesanan.id
            let data = {
                process: this.pesanan.process,
            }
            let pesanan = JSON.stringify(data);
            await axios({
                method: 'put',
                url: `${this.apibe}pesanan/${id}`,
                data: pesanan,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.$store.state.token}`
                }
            }).then(res => {
                console.log(res);
                this.getPesananAdmin()
                this.$swal('Berhasil', 'Data berhasil diubah', 'success')
                this.dialog = false
            })
            } catch (error) {
              console.log(error)
              this.$swal('Gagal', 'Data gagal diubah', 'error')  
            }
        }
    },
}
</script>
<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-data-table :headers="headers" :items="pesananAdmin">
                <template v-slot:item.no="{ item, index }">
                    {{ index + 1 }}
                </template>
                <template v-slot:item.aksi="data">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon color="blue" dark v-on="on" @click="edit(data.item)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" max-width="500px" v-if="pesanan">
            <v-card>
                <v-card-title class="title">Edit pesanan {{ pesanan.user.username }} produk {{ pesanan.product.name }}</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-select :items="optionsPesanan" v-model="pesanan.process"></v-select>
                            </v-col>
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
    </v-app>
</template>