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
            headersDetailLowonganStaff: [
                { text: 'No', value: 'no'},
                { text: 'CV', value: 'cv'},
            ],

            headersDetailLowonganMagang: [
                { text: 'No', value: 'no'},
                { text: 'CV', value: 'cv'},
                { text: 'Transkrip Nilai', value: 'transkip_nilai'}
            ],

            dialogStaff: false,
            dialogMagang: false,
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
                const { data } = await axios.get(`${this.apibe}lowongan_staff/file/${kode}`)
                this.detailLowongan = data
                this.dialogStaff = true
            } catch (error) {
                console.log(error)
            }
        },
        
        async getDetailMagang(kode) {
            try {
                const { data } = await axios.get(`${this.apibe}lowongan_magang/file/${kode}`)
                this.detailLowongan = data
                this.dialogMagang = true
            } catch (error) {
                console.log(error)
            }
        },

        splitNameFile(url){
            const split = url.split('/')
            return split[split.length - 1]
        },

        toFile(file){
            return this.assets + file
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

        <v-dialog v-model="dialogStaff" max-width="800">
            <v-card>
                <v-card-title class="headline">Detail Pelamar</v-card-title>
                <v-card-text>
                    <v-data-table
                    :items="detailLowongan"
                    :headers="headersDetailLowonganStaff"
                    >
                    <template v-slot:item.no="{ item, index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:item.cv="{ item }">
                        <a :href="toFile(item.cv)" target="_blank">{{ splitNameFile(item.cv) }}</a>
                    </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialogMagang" max-width="800">
            <v-card>
                <v-card-title class="headline">Detail Pelamar</v-card-title>
                <v-card-text>
                    <v-data-table
                    :items="detailLowongan"
                    :headers="headersDetailLowonganMagang"
                    >
                    <template v-slot:item.no="{ item, index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:item.cv="{ item }">
                        <a :href="toFile(item.cv)" target="_blank">{{ splitNameFile(item.cv) }}</a>
                    </template>
                    <template v-slot:item.transkip_nilai="{ item }">
                        <a :href="toFile(item.transkip_nilai)" target="_blank">{{ splitNameFile(item.transkip_nilai) }}</a>
                    </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template> 