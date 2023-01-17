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
            pelamarStaff: [],
            pelamarMagang: [],
            headers: [
                { text: 'Kode Lamaran', value: 'kode_lowongan' },
                { text: 'Jumlah Pelamar', value: 'cnt' },
                { text: 'Actions', value: 'actions'}
            ],
            headersDetailLowongan: [
                { text: 'No', value: 'no'},
                
            ],

            dialog: false,
            detailLowongan: []
        }
    },
    created() {
        this.getPelamar()
    },
    methods: {
        async getPelamar() {
            try {
                const { data } = await axios.get(`${this.apibe}lowongan_magang/groupby-kode`)
                this.pelamarMagang = data

                await axios.get(`${this.apibe}lowongan_staff/groupby-kode`)
                    .then(res => {
                        this.pelamarStaff = res.data
                    })
            } catch (error) {
                console.log(error)
            }
        },

        async getDetailStaff(kode) {
            try {
                const { data } = await axios.get(`${this.apibe}lowongan_staff/kode-lowongan/${kode}`)
                this.detailLowongan = data
            } catch (error) {
                console.log(error)
            }
        },
        
        async getDetailMagang(kode) {
            try {
                const { data } = await axios.get(`${this.apibe}lowongan_magang/kode-lowongan/${kode}`)
                this.detailLowongan = data
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<template>
    <v-app>
        <navigation-admin />
        <v-card class="my-16">
            <v-card-title>
                <h2 class="headline">Pelamar Staff</h2>
            </v-card-title>
            <v-data-table
            :items="pelamarStaff"
            :headers="headers"
            >
            <template v-slot:item.cnt="{ item }">
                {{ item.cnt }} Pelamar
            </template>
            <template v-slot:item.actions="{ item }">
                <v-btn
                color="primary"
                class="mr-4"
                @click="getDetailStaff(item.kode_lowongan)"
                >
                Detail
                </v-btn>
            </template>
            </v-data-table>
        </v-card>

        <v-card class="my-16">
            <v-card-title>
                <h2 class="headline">Pelamar Magang</h2>
            </v-card-title>
            <v-data-table
            :items="pelamarMagang"
            :headers="headers"
            >
            <template v-slot:item.cnt="{ item }">
                {{ item.cnt }} Pelamar
            </template>
            <template v-slot:item.actions="{ item }">
                <v-btn
                color="primary"
                class="mr-4"
                @click="getDetailMagang(item.kode_lowongan)"
                >
                Detail
                </v-btn>
            </template>
            </v-data-table>
        </v-card>

        <v-dialog v-model="dialog" max-width="800">
            <v-card>
                <v-card-title class="headline">Detail Pelamar</v-card-title>
                <v-card-text>
                    <v-data-table
                    :items="detailLowongan"
                    :headers="headers"
                    >
                    <template v-slot:item.cnt="{ item }">
                        {{ item.cnt }} Pelamar
                    </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template> 