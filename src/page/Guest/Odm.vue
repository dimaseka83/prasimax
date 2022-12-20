<template>
    <v-app>
        <NavigationGuest />
        <!-- Page 1 -->
        <v-container class="blue--text">
            <v-row class="mt-16" v-for="odm in isOdm" :key="odm.id">
                <v-col :cols="nosm ? '6' : '12'" class="text-center">
                    <h1 class="font-weight-bold display-2">{{ odm.name }}</h1>
                    <div class="mt-10">
                        <span v-html="limitText(odm.keterangan, 100)"></span>
                    </div>
                </v-col>
                <v-col :cols="nosm ? '6' : '12'">
                    <div class="d-flex justify-left">
                        <v-img :src="`${assets}${odm.image}`" :max-width="height-300">
                            <template v-slot:placeholder>
                                <v-row align="center" justify="center" class="fill-height ma-0">
                                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-container>
        <!-- Page 2 -->
        <v-container class="blue--text mt-16">
            <v-row>
                <v-col :cols="nosm ? '6' : '12'">
                    <h1 class="font-weight-bold mb-10" :class="nosm ? 'display-4' : 'text-h4'">Apa itu OEM dan ODM</h1>
                    <p>Pada perusahaan teknologi elektronika dan sekaligus memilki kapasitas manufakturing, kita
                        sering mendengar adanya istilah perusahaan OEM dan perusahaan ODM. ODM adalah
                        singkatan dari Original Design Manufacturer sedangkan OEM adalah singkatan dari Original
                        Equipment Manufacturer. Kedua-duanya berkaitan dalam hal manufakturing. Manufakturing
                        adalah kumpulan aktifitas dalam sebuah rantai nilai industri yang mengolah bahan baku
                        menjadi barang jadi yang dapat dijual dan bermanfaat bagi penggunaannya.</p>
                    <p>Kumpulan aktifitas-aktifitas pada OEM atau ODM tersebut dimulai dari aktifitas merancang
                        (design), merencanakan (planning), mengembangkan (development), dokumentasi
                        (documentation), pemilihan dan pembelian bahan baku/bahan pembantu (purchasing),
                        produksi (production), pengendalian kualitas (Quality Control) dan penjaminan kualitas
                        produk (Quality Assurance) dalam proses pabrikasi (manufacturing).</p>
                </v-col>
                <v-col :cols="nosm ? '6' : '12'">
                    <v-card elevation="10" rounded="xl" class="blue--text">
                        <v-container class="pa-10">
                            <p class="font-weight-medium text-capitalize headline">
                                pengertian perusahaan OEM <br>
                                <span class="font-italic">(original equipment manufacturer)</span>
                            </p>
                            <p>Yang dimaksud dengan perusahaan OEM (Original Equipment Manufacturer) adalah suatu
                                perusahaan atau organisasi yang merancang dan memproduksi produk (komponen/part
                                ataupun barang jadi) sesuai dengan spesifikasi yang ditentukannya dan dijual ke
                                perusahaan pembeli. Perusahaan pembeli tersebut kemudian melakukan pendistribusian
                                atas produk atau komponen tersebut. Spesifikasi yang dimaksud disini (OEM) adalah
                                spesifikasi produk yang ditentukan oleh perusahaan OEM. Dengan kata lain, perusahaan
                                OEM melakukan produksi produk atas nama perusahaan lain, setelah itu perusahaan
                                pembeli memasarkan produk tersebut dibawah merek mereka sendiri atau umum disebut
                                sebagai Brand Owner.</p>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="mt-16">
                <v-col :cols="nosm ? '6' : '12'">
                    <h1 class="font-weight-medium  display-1 mb-10">Perbedaan OEM dan ODM</h1>
                    <p>Satu hal penting yang membedakan perusahaan OEM dan ODM adalah spesifikasi produk di mana
                        perusahaan OEM merancang dan memproduksi produk berdasarkan spesifikasi dari mereka sendiri
                        sedangkan perusahaan ODM merancang dan memproduksi produk berdasarkan spesifikasi yang
                        ditentukan perusahaan klien atau Brand Owner.</p>
                    <p>Satu hal penting yang membedakan perusahaan OEM dan ODM adalah spesifikasi produk di mana
                        perusahaan OEM merancang dan memproduksi produk berdasarkan spesifikasi dari mereka sendiri
                        sedangkan perusahaan ODM merancang dan memproduksi produk berdasarkan spesifikasi yang
                        ditentukan perusahaan klien atau Brand Owner.</p>
                </v-col>
                <v-col :cols="nosm ? '6' : '12'">
                    <v-card elevation="10" rounded="xl" class="blue--text">
                        <v-container class="pa-10">
                            <p class="font-weight-medium text-capitalize headline">
                                pengertian perusahaan ODM <br>
                                <span class="font-italic">(Original Design Manufacturer)</span>
                            </p>
                            <p>Yang dimaksud dengan perusahaan ODM (Original Design Manufacturer) adalah suatu
                                perusahaan atau organisasi yang merancang dan memproduksi produksi (komponen/part
                                ataupun barang jadi) sesuai dengan spesifikasi &amp; fitur yang ditentukan oleh
                                perusahaan
                                pembeli/klien. Produk yang diproduksinya tersebut kemudian diproduksi dan dijual ke
                                perusahaan pembeli. Perusahaan pembeli tersebut memasarkan produk tersebut dibawah
                                merek mereka sendiri. Umumnya perusahaan pembeli luaran ODM tersebut lazim disebut
                                dengan Brand Owner.</p>
                            <p>Contoh perusahaan ODM terbesar di dunia adalah Quanta, Pegatron dan Compal, yaitu
                                perusahaan multinasional asal Taiwan yang memproduksi produk-produk Laptop, PC dan
                                server.</p>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- Page 3 -->
        <v-container class="my-16">
            <v-card flat>
                <v-list two-line>
                    <v-list-item>
                        <v-img gradient="to top right, rgba(0, 126, 209, 1), rgba(255, 255, 255, 0)" v-if="nosm"
                            src="@/assets/images/static/rndodm.svg" max-width="600" :height="height">
                                                        <template v-slot:placeholder>
                                <v-row align="center" justify="center" class="fill-height ma-0">
                                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                </v-row>
                            </template>
                            </v-img>
                        <v-list-item-content>
                            <v-card flat :class="nosm ? 'pa-16' : 'pa-5'" color="blue" dark
                                :height="nosm ? height : height+500">
                                <p class="font-weight-bold" :class="nosm ? 'display-1' : 'text-h5'">Riset dan
                                    Pengembangan</p>
                                <p class="subtitle mt-10">Riset dan pengembangan atau dikenal sebagai Research and
                                    Development, disingkat R&amp;D, yaitu
                                    lembaga atau entitas perusahaan yang melakukan penelitian. Tujuan penelitian dan
                                    pengembangan
                                    tidak hanya merumuskan teori, tetapi juga evaluasi teori serta konsep dan bertujuan
                                    dalam
                                    merumuskan sejarah. Pada penelitian pengembangan lebih banyak digunakan dan dipakai
                                    untuk
                                    sektor pendidikan dan juga industri. Pada entitas industri, penelitian dilakukan
                                    oleh tim pemasaran,
                                    tim produk dan tim operasional. Masing-masing punya tujuan tersendiri.</p>
                                <p class="subtitle mt-10">Pengembangan adalah aktifitas yang lebih berorientasi produk
                                    dand pasar. Diawali dengan riset,
                                    pengembangan sudah lebih tervalidasi untuk kelayakan bisnis dan produk.</p>
                            </v-card>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-container>
        <!-- Page 4 -->
        <v-container class="mb-16 blue--text">
            <v-row>
                <v-col :cols="nosm ? '6' : '12'">
                    <h1 class="display-1 font-weight-bold mb-16">Pabrikasi</h1>
                    <p>Perangkat elektronik merupakan produk yang sudah umum ditemui di tengah masyarakat, penting
                        untuk mengetahui cara pembuatannya. Proses pabrikasi elektronik melibatkan banyak langkah,
                        mulai dari merancang perangkat hingga merakitnya dan mengirimkannya ke konsumen.</p>
                    <p>Input daripada proses pabrikasi produk elektronik adalah desain produk dan proses perakitan.
                        Langkah selanjtnya adalah mencari komponen dari pihak suplier dari industri manufaktur
                        komponen. Komponen tersebut kemudian dikirim ke pabrik perakitan. Bersamaan dengan itu pula
                        pabrikan menerima part atau bagian lain seperti enclosure atau casing yang diproduksi dari
                        industri
                        terkait pencetakan enclosure. Bagian atau part yang sangat penting pada produk elektronika
                        adalah
                        Printed Circuit Board (PCB). Pabrikan juga menerima pasokan PCB dari pabrik yang khusus hanya
                        memproduksi PCB. Proses utama dari pabrikasi produk elektronik adalah perakitan (assembly)
                        komponen pada PCB, atau biasa disebut PCBA (PCB Assemblied). Proses berikutnya merupakan
                        proses akhir yang disebut proses Perakitan Akhir (Final Assembly).</p>
                    <p>Brand Owner atau klien dengan skema OEM atau ODM aktifitas terintegrasi di dalamnya adalah
                        termasuk aktifitas dan proses pabrikasi.</p>
                </v-col>
                <v-col :cols="nosm ? '6' : '12'">
                    <v-card elevation="10" rounded="xl">
                        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
                            src="@/assets/images/static/pabrikasiodm.svg" :height="height - 100">
                                                        <template v-slot:placeholder>
                                <v-row align="center" justify="center" class="fill-height ma-0">
                                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                </v-row>
                            </template>
                            </v-img>
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
                products: []
            }
        },
        created() {
            this.getproducts();
        },
        methods: {
            async getproducts() {
                await axios.get(`${this.apibe}product`)
                    .then(res => {
                        this.products = res.data
                    })
            },
        },
        computed: {
            isOdm() {
                if (this.products.length > 0) {
                    return this.products.filter(product => product.isOdm === true)
                }
                return []
            }
        }
    }
</script>