<template>
  <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-carousel cycle :height="height" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i + 'slide'">
        <v-img :src="`${assets}${slide.image}`">
          <v-container>
            <v-row class="fill-height white--text" :class="nosm ? 'mt-10' : ''">
              <v-col :cols="nosm ? '6' : '12'">
                <h1 class="font-weight-bold" :class="nosm ? 'text-h2' : 'text-h5'">{{slide.title}}</h1>
                <p :class="nosm ? 'title mt-10' : 'body-2'">{{slide.subtitle}}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <!-- Page 2 -->
    <v-container class="my-16">
      <v-row>
        <v-col>
          <v-card color="blue" elevation="10" rounded="xl" dark>
            <v-container :class="nosm ? 'pa-16' : 'pa-8'">
              <div class="d-flex">
                <p class="font-weight-bold text-uppercase" :class="nosm ? 'display-2' : 'display-1'">dari ide sampai produk</p>
              </div>
              <h2 class=" font-weight-bold my-5" :class="nosm ? 'display-1' : 'text-h5'">Desain, Pengembangan & Manufacturing</h2>
              <p class="subtitle">Lingkup bisnis kami adalah membantu Anda dalam menterjemahkan dan mentransformasi ide Anda menjadi sebuah desain produk elektronik untuk solusi tertentu yang diinginkan. Tidak sampai pada desain, kami dapat melanjutkan proses pengembangan hingga manufakturing produk.</p>
              <v-btn color="white" class="blue--text mt-16" rounded to="/odm">Baca Lebih Lanjut</v-btn>
            </v-container>
          </v-card>
        </v-col>
        <v-col>
          <v-img class="mx-5" src="@/assets/images/static/idesampaiproduk.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- Page 3 -->
    <v-container class="my-16">
          <v-card flat>
            <v-list two-line>
              <v-list-item>
                <v-img v-show="nosm"
                 src="@/assets/images/static/produkhome.svg" max-width="600" :height="height"></v-img>
                <v-list-item-content>
                  <v-card flat color="blue" dark :height="nosm ? height : height+200">
                  <v-container :class="nosm ? 'pa-16' : 'pa-5'">
                    <p class="font-weight-bold my-5" :class="nosm ? 'display-3' : 'text-h4'">Produk</p>
                    <p class="subtitle-2">Kami menyediakan pilihan kepada Anda dengan skema produksi ODM (Original Design Manufacturing), OEM (Original Equipment Manufacturing) ataupun Contract Manufacturing agar ide produk Anda dapat dikembangkan dan diproduksi oleh kami.</p>
                      <v-btn color="white" large rounded class="blue--text mt-10" to="/product">Baca Lebih Lanjut</v-btn>
                  </v-container>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
    </v-container>
    <!-- Page 4 -->
    <v-container class="my-16">
      <v-row align="center">
        <v-divider></v-divider>
        <p class="text-uppercase blue--text font-weight-bold" :class="nosm ? 'display-3' : 'text-h4'">informasi</p>
        <v-divider></v-divider>
      </v-row>

      <v-row>
        <v-col md="6" v-for="test in 4" :key="test">
          <v-row>
            <v-col md="6">
              <v-card class="border-card">
                <v-img src="@/assets/images/dummy/board.jpg"></v-img>
              </v-card>
            </v-col>
            <v-col md="6">
              <h1 class="display-1 text-capitalize font-weight-bold">Laman berita</h1>
              <p class="subtitle blue--text mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                quidem iste consequuntur amet fuga doloremque vel magnam praesentium ab necessitatibus illum, magni hic.
                Ut eos dicta aliquam, neque officiis blanditiis.</p>
              <v-btn color="white" class="blue--text mt-10 " outlined rounded>Baca Lebih Lanjut</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- Page 5 -->
    <v-container class="my-16">
      <v-row align="center">
        <p class="text-capitalize blue--text font-weight-bold" :class="nosm ? 'display-3' : 'text-h4'">pelanggan kami</p>
        <v-divider></v-divider>
      </v-row>
<v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="mtr in mitra"
        :key="mtr.id"
        v-slot="{ toggle }"
      >
        <v-card
          class="ma-4"
          height="200"
          width="300"
          @click="toggle"
          :href="`https://${mtr.link}`"
          target="_blank"
        >
          <v-img :src="`${assets}${mtr.image}`" height="200" ></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    </v-container>
    <!-- Page 6 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/static/mengenaikamihome.svg"
      class="my-16" :height="nosm ? height : height+250">
      <v-container class="white--text" :class="nosm ? 'pa-16 mt-16 ' : ''">
        <v-row>
          <v-col md="6">
            <h1 class="font-weight-bold text-uppercase" :class="nosm ? 'display-3': 'text-h4'">mengenai kami</h1>
            <p class="title text-capitalize mt-10">perusahaan bidang teknologi</p>
            <p class="subtitle">Kami telah merintis bisnis di bidang desain, pengembangan hingga manufakturing di Indonesia sejak 2011. Model bisnis OEM, ODM, Design House dan Manufakturing untuk produk inovasi teknologi Anda menjadi lingkup bisnis kami. Sedangkan lingkup teknologi yang kami kuasai adalah IoT, Kecerdasan Artifisial, Embedded System, Nirkabel dan Kendaraan Listrik.</p>
            <v-btn class="blue--text" color="white" rounded dark to="/about">Baca Lebih Lanjut</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <!-- Page 7 -->
    <v-container class="my-16">
      <v-row align="center">
        <p class="text-capitalize blue--text font-weight-bold" :class="nosm ? 'display-3': 'text-h4'">mitra teknologi</p>
        <v-divider></v-divider>
      </v-row>

<v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="mtr in mitratech"
        :key="mtr.id"
        v-slot="{ toggle }"
      >
        <v-card
          class="ma-4"
          height="200"
          width="300"
          @click="toggle"
          :href="`${mtr.link}`"
          target="_blank"
        >
          <v-img :src="`${assets}${mtr.image}`" height="200" ></v-img>
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
            slides: [
              {
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
    created(){
      this.getMitra();
    },
    methods: {
      async getMitra(){
        try {
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
};
</script>
<style scoped>
  .v-carousel>>>.v-icon.mdi-minus {
    color: blue;
  }
</style>