<template>
  <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-carousel cycle :height="height" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i + 'slide'">
        <v-img :src="`${assets}${slide.image}`">
          <template v-slot:placeholder>
            <v-row align="center" justify="center" class="fill-height ma-0">
              <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
            </v-row>
          </template>
          <v-container>
            <v-row class="fill-height white--text" :class="nosm ? 'mt-10' : ''">
              <v-col :cols="nosm ? '6' : '12'">
                <h1 class="font-weight-bold" :class="nosm ? 'text-h3' : 'text-h5'">{{slide.title}}</h1>
                <p :class="nosm ? 'title mt-10' : 'body-2'">{{slide.subtitle}}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <!-- Page 2 -->
    <v-container class="mt-16">
      <v-row>
        <v-col>
          <v-card color="blue" elevation="10" rounded="xl" dark>
            <v-container :class="nosm ? 'pa-16' : 'pa-8'">
              <div class="d-flex">
                <h1 class="font-weight-bold text-uppercase text-h3">dari ide sampai
                  produk</h1>
              </div>
              <h2 class=" font-weight-bold my-5 text-h4">Desain, Pengembangan &
                Manufacturing</h2>
              <p class="title">Lingkup bisnis kami adalah membantu Anda dalam menterjemahkan dan mentransformasi ide
                Anda menjadi sebuah desain produk elektronik untuk solusi tertentu yang diinginkan. Tidak sampai pada
                desain, kami dapat melanjutkan proses pengembangan hingga manufakturing produk.</p>
              <v-btn color="white" class="blue--text mt-16" rounded to="/odm">Baca Lebih Lanjut</v-btn>
            </v-container>
          </v-card>
        </v-col>
        <v-col>
          <v-img class="mx-5" src="@/assets/images/static/idesampaiproduk.png">
            <template v-slot:placeholder>
              <v-row align="center" justify="center" class="fill-height ma-0">
                <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- Page 3 -->
    <v-container class="mt-16">
      <v-card flat>
        <v-list two-line>
          <v-list-item>
            <v-img v-show="nosm" src="@/assets/images/static/produkhome.svg" max-width="600" :height="height">
              <template v-slot:placeholder>
                <v-row align="center" justify="center" class="fill-height ma-0">
                  <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-list-item-content>
              <v-card flat color="blue" dark :height="nosm ? height : height+400">
                <v-container :class="nosm ? 'pa-16' : 'pa-5'">
                  <h1 class="font-weight-bold my-5 text-h3 text-uppercase">Produk</h1>
                  <p class="title">Kami menyediakan pilihan kepada Anda dengan skema produksi ODM (Original Design
                    Manufacturing), OEM (Original Equipment Manufacturing) ataupun Contract Manufacturing agar ide
                    produk Anda dapat dikembangkan dan diproduksi oleh kami.</p>
                  <v-btn color="white" large rounded class="blue--text mt-10" to="/product">Baca Lebih Lanjut</v-btn>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
    <!-- Page 4 -->
    <v-container class="my-12">
      <v-row align="center">
        <v-divider></v-divider>
        <h1 class="text-uppercase blue--text font-weight-bold text-h3">berita</h1>
        <v-divider></v-divider>
      </v-row>

      <v-row>
        <v-col md="6" v-for="berita in getFourBerita" :key="berita.id">
          <v-row>
            <v-col md="6">
              <v-card class="border-card">
                <v-img :src="`${assets}${berita.image}`" height="350">
                  <template v-slot:placeholder>
                    <v-row align="center" justify="center" class="fill-height ma-0">
                      <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
            <v-col md="6">
              <h1 class="text-h4 text-capitalize font-weight-bold text-truncate">{{ berita.title }}</h1>
              <p class="title blue--text mt-10" v-html="limitText(berita.content, 150)"></p>
              <v-btn color="white" class="blue--text mt-10 " outlined rounded :to="`/news/${berita.id}`">Baca Lebih
                Lanjut</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- Page 5 -->
    <v-container class="mt-8">
      <v-row align="center">
        <h1 class="text-capitalize blue--text font-weight-bold text-h3">pelanggan kami
        </h1>
        <v-divider></v-divider>
      </v-row>
      <v-slide-group v-model="model" class="pa-4"  show-arrows>
        <v-slide-item v-for="mtr in mitra" :key="mtr.id" v-slot="{ toggle }">
          <v-card flat class="mx-8 mt-8" height="200" width="300" @click="toggle" :href="`${mtr.link}`" target="_blank">
            <v-img :src="`${assets}${mtr.image}`" :width="nosm ? '300' : '200'" :class="sm ? 'mt-8' : ''">
              <template v-slot:placeholder>
                <v-row align="center" justify="center" class="fill-height ma-0">
                  <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
    <!-- Page 6 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
      src="@/assets/images/static/prasimax_team.jpg" class="mb-16" :height="nosm ? height : height+450">
      <template v-slot:placeholder>
        <v-row align="center" justify="center" class="fill-height ma-0">
          <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
        </v-row>
      </template>
      <v-container class="white--text" :class="nosm ? 'pa-16 mt-10 ' : ''">
        <v-row>
          <v-col md="6">
            <h1 class="font-weight-bold text-uppercase text-h3">mengenai kami</h1>
            <h2 class="text-h4 text-capitalize mt-5">perusahaan bidang teknologi</h2>
            <p class="title mt-2">Kami telah merintis bisnis di bidang desain, pengembangan hingga manufakturing di
              Indonesia sejak 2011. Model bisnis OEM, ODM, Design House dan Manufakturing untuk produk inovasi teknologi
              Anda menjadi lingkup bisnis kami. Sedangkan lingkup teknologi yang kami kuasai adalah IoT, Kecerdasan
              Artifisial, Embedded System, Nirkabel dan Kendaraan Listrik.</p>
            <v-btn class="blue--text" color="white" rounded dark to="/about">Baca Lebih Lanjut</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <!-- Page 7 -->
    <v-container class="my-8" :class="sm ? 'mx-2' : ''">
      <v-row align="center">
        <p class="text-capitalize blue--text font-weight-bold text-h3">mitra teknologi
        </p>
        <v-divider></v-divider>
      </v-row>

      <v-slide-group v-model="model" class="pa-4"  show-arrows>
        <v-slide-item v-for="mtr in mitratech" :key="mtr.id" v-slot="{ toggle }">
          <v-card flat class="mx-4" height="200" width="300" @click="toggle" :href="`${mtr.link}`" target="_blank">
            <v-img :src="`${assets}${mtr.image}`" width="200" class="mt-10">
              <template v-slot:placeholder>
                <v-row align="center" justify="center" class="fill-height ma-0">
                  <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
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
        // slides: [],
        model: null,
        slides: [{
            title: 'Internet of Things',
            subtitle: 'Di era Industri 4.0, peran manusia sudah tergantikan oleh perangkat dan periferal elektronik yang saling terinterkoneksi satu sama lain melalui platform dan cloud. Apakah perangkat tersebut merupakan sensor, probing maupun aktuator, transmitter atau sejenisnya.',
            image: "/upload/carousel/image-1666013005591slide1.svg"
          },
          {
            title: 'Electric Vehicle',
            subtitle: 'Seriring perkembangan dan transformasi digital yang membawa perubahan perilaku manusia yang ingin mencapai tingkat kehidupan yang lebih baik dan bersih dari kotoran emisi karbon, EV (electrical vehicle) menjadi jawaban. Namun ekosistem EV adalah luas. Mulai dari batere dan BMS nya, mesin listrik sebagai powertrain, instrumen elektronik dan mekatronik dan keterlibatan IoT pun menjadi bagian atau part yang membentuk Smart EV.',
            image: "/upload/carousel/image-1666013086839slide2.svg"
          },
          {
            title: 'Mobile Device Solution',
            subtitle: 'Perkembangan teknologi komunikasi dan informasi yang sangat pesat dalam 2 dekade terakhir sudah melahirkan teknologi Long Term Evolution generasi ke 5 atau LTE 5G. Sungguhpun 4G LTE masih belum terlalu luas digunakan oleh masyarakat. Perkembangan tersebut ditunjang dengan pertumbuhan populasi produk perangkat komunikasi seperti Smartphone, IoT module, Smart Module berbasis 4G LTE, NB-IoT, LoRa dan WiFi versi 6, yang mampu mentransportasi volume data dengan pita yang lebih lebar. Kami sudah memiliki pengalaman sebagai penyedia solusi device solution berbasis 4G LTE, WiFi, ZigBee dan LoRa.',
            image: "/upload/carousel/image-1666013159317slide3.svg"
          },
          {
            title: 'Kecerdasan Artifisial (Artificial Intelligence)',
            subtitle: 'Teknologi kecerdasan artifisial telah memberikan banyak solusi dan inovasi yang berbasis metode neural network dan machine learning. Pengalaman kami dalam teknologi kecerdasan artifisial ini masih fokus pada solusi computer vision dan pengenalan suara cerdas.',
            image: "/upload/carousel/image-1666013306474slide4.svg"
          }
        ],
        mitra: [],
        mitratech: [],
      };
    },
    created() {
      this.getMitra();
    },
    methods: {
      async getMitra() {
        try {
          if (this.$store.state.berita.length == 0) {
            this.$store.dispatch('getBerita');
          }

          await axios.get(`${this.apibe}mitra`).then(res => {
            this.mitra = res.data
          })

          await axios.get(`${this.apibe}mitra-teknologi`).then(res => {
            this.mitratech = res.data
          })
        } catch (error) {
          console.log(error);
        }
      },
    },
    computed: {
      getFourBerita() {
        return this.$store.state.berita.slice(0, 4);
      }
    }
  };
</script>
<style scoped>
  .v-carousel>>>.v-icon.mdi-minus {
    color: blue;
  }
</style>