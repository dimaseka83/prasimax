<template>
    <v-app>
        <NavigationGuest />
        <!-- Page 1 -->
        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
            src="@/assets/images/static/hubungilanding.svg" class="mb-16" :height="nosm ? height : height+300">
            <template v-slot:placeholder>
                <v-row align="center" justify="center" class="fill-height ma-0">
                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                </v-row>
            </template>
            <v-container class="white--text">
                <v-row class="fill-height" :class="nosm ? 'mt-16': 'mt-5'">
                    <v-col :cols="nosm ? '8' : '12'">
                        <h1 class="text-uppercase font-weight-bold text-h3">hubungi kami
                        </h1>
                        <p class="title mt-10">Segala kebutuhan Anda, dipersilakan menghubungi kami, mulai dari
                            konsultasi, pengembangan produk, pabrikasi atau manufakturing dan pelatihan, kami siap
                            membantu Anda.</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
        <!-- Page 2 -->
        <v-container class="my-2 blue--text" v-for="(name, group) in groupingSalesDepartment" :key="group">
            <h1 class="text-h3 font-weight-bold text-capitalize">{{ group }}</h1>
            <v-row class="my-10">
                <v-col :cols="nosm ? '4' : '12'" v-for="sales in name" :key="sales.id">
                    <v-card rounded="xl" elevation="12">
                        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
                            :src="`${assets}${sales.image}`" :height="height-300">
                            <template v-slot:placeholder>
                                <v-row align="center" justify="center" class="fill-height ma-0">
                                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-container class="pa-10 blue--text">
                            <v-row>
                                <v-col cols="12">
                                    <h2 class="text-capitalize text-h4 font-weight-bold mb-5">{{ sales.name }}</h2>
                                    <span v-html="sales.detail"></span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- Page 4 -->
        <v-container class="my-16">
            <v-row>
                <v-col :cols="nosm ? '6' : '12'">
                    <v-card :height="height">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.260701979084!2d106.83066401476991!3d-6.360294195397502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1638c43137%3A0xb75d0558c257be22!2sPT.%20Prasimax%20Inovasi%20Teknologi!5e0!3m2!1sid!2sid!4v1662818289875!5m2!1sid!2sid"
                            width="100%" :height="height" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </v-card>
                </v-col>
                <v-col :cols="nosm ? '6' : '12'">
                    <v-card flat class="blue--text" :class="nosm ? 'ma-16 ' : 'ma-4'">
                        <v-container>
                            <h1 class="font-weight-bold text-capitalize text-h3">
                                kunjungi kantor kami</h1>
                            <p class=" mt-5 title">Untuk menjangkau kantor kami, ada
                                beberapa pilihan moda transportasi
                                publik. Anda dapat menjangkau dengan Kereta Commuter Line (B) berhenti di Stasiun
                                Universitas Indonesia. Selain itu Anda dapat menggunakan Taxi Bluebird atau Taxi Online
                                seperti GoCar atau GrabCar.</p>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <FooterGuest />
    </v-app>
</template>
<script>
    import mix from '@/mixins/mix';
    import componentsmix from '@/mixins/componentsmix';
    import axios from 'axios';
    export default {
        mixins: [mix, componentsmix],
        data() {
            return {
                salesdepartment: [],
                departement: [],
            }
        },
        created() {
            this.init();
        },
        methods: {
            async init() {
                await axios.get(`${this.apibe}salesdepartment`)
                    .then(res => {
                        this.salesdepartment = res.data
                    })
                const {
                    data
                } = await axios.get(`${this.apibe}department`)
                this.departement = data.sort((a, b) => a.urutan - b.urutan)
            }
        },
        computed: {
            groupingSalesDepartment() {
                const salesByDepartment = {};

                for (const sale of this.salesdepartment) {
                    const department = this.departement.find(d => d.nama === sale.kelompok);
                    if (department) {
                        if (!salesByDepartment[department.nama]) {
                            salesByDepartment[department.nama] = [];
                        }
                        salesByDepartment[department.nama].push(sale);
                    }
                }

                const sortedSalesByDepartment = {};

                Object.keys(salesByDepartment)
                    .sort((a, b) => {
                        const departmentA = this.departement.find(d => d.nama === a);
                        const departmentB = this.departement.find(d => d.nama === b);
                        if (departmentA.urutan !== departmentB.urutan) {
                            return departmentA.urutan - departmentB.urutan;
                        } else {
                            return a.localeCompare(b);
                        }
                    })
                    .forEach(key => {
                        if (salesByDepartment[key].length > 0) {
                            sortedSalesByDepartment[key] = salesByDepartment[key];
                        }
                    });
                return sortedSalesByDepartment
            }
        }
    }
</script>