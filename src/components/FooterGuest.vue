<template>
    <div>
        <v-container fluid class="white--text background-footer pa-16">
            <v-row>
                <v-col md="2">
                    <v-img src="@/assets/images/white_logo.png"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="subtitle">Kami memberikan solusi, layanan dan produksi bagi Anda yang ingin melengkapi portofolio Anda atau kebutuhan Anda. Bidang teknologi yang kami kuasai adalah embedded system, IoT, Kecerdasan Artifisial, Kendaraan Listrik dan Teknologi Nirkabel lainnya. Kapasitas dan kapabilitas kami didukung oleh penyedia dan prinsipal teknologi global yang sudah sangat dikenal reputasinya.</p>
                    <p class="display-1 font-weight-bold text-uppercase">alamat</p>
                    <div>
                        <span>Perkantoran Taman Melati Margonda</span><br />
                        <span>Jl. Margonda Raya 525A</span><br />
                        <span>Depok 16424</span><br />
                        <span>INDONESIA</span><br /><br />
                        <span>Telp: +6221-7888-0672</span><br />
                    </div>
                </v-col>
                <v-col>
                    <p class="display-1 font-weight-bold text-capitalize">hubungi kami</p>
                    <p>
                        <span>Technical Support: </span><br />
                        <a @click="mailto('contact@prasimax.com')" style="color:white">contact@prasimax.com</a><br />
                    </p>
                    <p>
                        <span>Penjualan dan Kerja Sama Bisnis: </span><br />
                        <a @click="mailto('sales@prasimax.com')" style="color:white">sales@prasimax.com</a><br />
                    </p>
                    <v-row class="mt-16">
                        <v-col md="4" v-for="(social, i) in socials" :key="i + 'social2'">
                            <v-btn text :href="social.link" target="_blank">
                                <v-icon x-large color="white">{{ social.icon }}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <p class="display-1 font-weight-bold text-capitalize">link penting</p>
                    <p>
                        <span>Bantuan</span><br />
                        <span>Pusat Dokumen</span><br />
                        <span>Event dan Kegiatan</span><br />
                    </p>
                </v-col>
                <v-col>
                    <p class="display-1 font-weight-bold text-capitalize">langganan berita dan makalah</p>
                    <p>
                        Dapatkan informasi dan berita terbaru dari perusahaan kami. seperti berita, makalah, dan
                        lain-lain.
                    </p>
                    <v-text-field dense rounded outlined dark class="rounded-xl" label="alamat email"></v-text-field>
                    <v-btn class="rounded-xl primary px-16">Langganan</v-btn>
                    <v-checkbox dark label="Menerima syarat dan ketentuan kebijakan privasi">
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-container>
        <v-app-bar dense flat dark src="@/assets/images/dummy/rectangle.svg">
            <div class="d-flex">
                <span class="mr-auto">&copy; PT Prasimax Inovasi Teknologi, 2010 - {{ getYears }}, Hak Cipta dilindungi undang - undang</span>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
  import mix from '@/mixins/mix';
export default {
    mixins: [mix],
    computed: {
        getYears(){
            return new Date().getFullYear();
        }
    },
    methods: {
        mailto(email){
            window.location.href = `mailto:${email}`;
        }
    },
}
</script>
<style scoped>
.background-footer{
    background-color: #2196F3;
}

.background-footer-bottom{
    background-color: #64B5F6;
}
</style>