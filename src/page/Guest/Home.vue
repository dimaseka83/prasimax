<template>
  <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-carousel cycle :height="height" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i + 'slide'">
        <!-- <v-img gradient="to bottom right, rgba(0, 102, 204, 1), rgba(0, 204, 255, 1)" :height="height"> -->
        <v-img :src="`${assets}${slide.image}`">
          <v-container>
            <v-row class="fill-height mt-10 white--text">
              <v-col>
                <h1 class="text-h2 font-weight-bold">{{slide.title}}</h1>
                <p class="title mt-10">{{slide.subtitle}}</p>
                <v-btn color="#42A5F5" dark rounded>Baca Lebih Lanjut</v-btn>
              </v-col>
              <v-col>
                <!-- <v-img :src="`${assets}${image}`"></v-img> -->
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
            <v-container class="pa-16">
              <div class="d-flex">
                <p class="display-2 font-weight-bold text-uppercase">dari ide sampai produk</p>
              </div>
              <h2 class="display-1 font-weight-bold my-5">Desain, Pengembangan & Manufacturing</h2>
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
                <v-img 
                 src="@/assets/images/static/produkhome.svg" max-width="600" :height="height"></v-img>
                <v-list-item-content>
                  <v-card flat color="blue" dark :height="height">
                  <v-container class="pa-16">
                    <p class="display-3 font-weight-bold my-5">Produk</p>
                    <p class="subtitle-2">Kami menyediakan pilihan kepada Anda dengan skema produksi ODM (Original Design Manufacturing), OEM (Original Equipment Manufacturing) ataupun Contract Manufacturing agar ide produk Anda dapat dikembangkan dan diproduksi oleh kami.</p>
                      <v-btn color="white" large rounded class="blue--text mt-10">Baca Lebih Lanjut</v-btn>
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
        <p class="display-3 text-uppercase blue--text font-weight-bold">informasi</p>
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
        <p class="display-3 text-capitalize blue--text font-weight-bold">pelanggan kami</p>
        <v-divider></v-divider>
      </v-row>
      <v-carousel cycle :height="height" hide-delimiter-background delimiter-icon="mdi-minus" show-arrows-on-hover>
        <v-carousel-item v-for="i in 2" :key="i + 'slide'" class="pa-5">
          <v-row>
            <v-col md="3" v-for="test in 8" :key="test">
              <v-card elevation="" rounded="xl" class="pa-12">
                <v-img src="@/assets/images/dummy/kominfo.png"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <!-- Page 6 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/static/mengenaikamihome.svg"
      class="my-16" :height="height">
      <v-container class="pa-16 white--text mt-16">
        <v-row>
          <v-col md="6">
            <h1 class="display-3 font-weight-bold text-uppercase">mengenai kami</h1>
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
        <p class="display-3 text-capitalize blue--text font-weight-bold">mitra teknologi</p>
        <v-divider></v-divider>
      </v-row>
      <v-carousel cycle :height="height" hide-delimiter-background delimiter-icon="mdi-minus" show-arrows-on-hover>
        <v-carousel-item v-for="i in 2" :key="i + 'slide'" class="pa-5">
          <v-row>
            <v-col md="3" v-for="test in 8" :key="test">
              <v-card elevation="" rounded="xl" class="pa-12">
                <v-img src="@/assets/images/dummy/kominfo.png"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <FooterGuest />
  </v-app>
</template>
<script>
  import axios from 'axios'
  import mix from '@/mixins/mix';
  import componentsmix from '@/mixins/componentsmix';
  export default {
    mixins: [mix, componentsmix],
    data() {
        return {
            slides: [],
        };
    },
    created(){
      this.getCarousel();
    },
    methods: {
            async getCarousel() {
                try {
                    await axios.get(`${this.apibe}carousel`)
                        .then(res => {
                            this.slides = res.data
                        })
                } catch (error) {
                    console.log(error)
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