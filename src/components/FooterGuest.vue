<template>
    <div>
        <v-img src="@/assets/images/dummy/rectangle.svg"></v-img>
        <v-container fluid class="white--text background-footer pa-16">
            <v-row>
                <v-col md="2">
                    <v-img src="@/assets/images/white_logo.png"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere non earum
                        veniam sapiente necessitatibus mollitia omnis harum ullam asperiores nam voluptatibus cum
                        impedit tempore quibusdam distinctio officiis blanditiis, officia rem!</p>
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
                        <span>service@prasimax.com</span><br />
                    </p>
                    <p>
                        <span>Penjualan dan Kerja Sama Bisnis: </span><br />
                        <span>sales@prasimax.com</span><br />
                    </p>
                    <v-row class="mt-16">
                        <v-col md="4" v-for="(social, i) in socials" :key="i + 'social2'">
                            <v-btn text>
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
                    <v-checkbox dark label="Menerima syarat dan ketentuan kebijakan privasi">
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="background-footer-bottom white--text">
            <div class="d-flex">
                <span class="mr-auto">&copy; PT Prasimax Inovasi Teknologi, 2010 - {{ getYears }}, All rights
                    reserved</span>
            </div>
        </v-container>
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
    }
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