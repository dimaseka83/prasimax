<template>
  <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-carousel cycle :height="height" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i + 'slide'">
        <v-img gradient="to bottom right, rgba(0, 102, 204, 1), rgba(0, 204, 255, 1)" :height="height">
          <v-container>
            <v-row class="fill-height mt-10 white--text">
              <v-col>
                <h1 class="text-h1 font-weight-bold">Internet of Things</h1>
                <p class="title mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                  beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                  natus. Ea debitis reiciendis eligendi tempore.</p>
                <v-btn color="#42A5F5" dark rounded>Tentang Kami</v-btn>
              </v-col>
              <v-col>
                <v-img src="@/assets/images/dummy/carousel.svg"></v-img>
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
                <p class="display-3 font-weight-bold text-uppercase">odm</p>
              </div>
              <h2 class="display-1 font-weight-bold my-5">Desain, Pengembangan & Manufacturing</h2>
              <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto numquam sunt!
                Quidem adipisci voluptates, debitis totam dolorum dolores harum sapiente eum libero dignissimos
                consequatur excepturi ab ducimus distinctio alias!</p>
              <v-btn color="white" class="blue--text mt-16" rounded>Read More</v-btn>
            </v-container>
          </v-card>
        </v-col>
        <v-col>
          <v-img class="mx-5" src="@/assets/images/dummy/carousel.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- Page 3 -->
    <v-container class="my-16">
          <v-card flat>
            <v-list two-line>
              <v-list-item>
                <v-img src="@/assets/images/dummy/board.jpg" max-width="600" :height="height"></v-img>
                <v-list-item-content>
                  <v-card flat class="pa-16" color="blue" dark :height="height">
                    <p class="display-3 font-weight-bold">Produk</p>
                    <p class="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laborum, in ad
                      minus odit distinctio eligendi doloribus tempora, sed eum quas obcaecati animi saepe error itaque
                      maxime enim. Exercitationem, commodi?</p>
                      <v-btn color="white" large rounded class="blue--text mt-10">Read More</v-btn>
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
              <v-btn color="white" class="blue--text mt-10 " outlined rounded>Read More</v-btn>
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
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg"
      class="my-16" :height="height">
      <v-container class="pa-16 white--text mt-16">
        <v-row>
          <v-col md="6">
            <h1 class="display-3 font-weight-bold text-uppercase">mengenai kami</h1>
            <p class="title text-capitalize mt-10">perusahaan bidang teknologi</p>
            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam nisi quae
              dolor repellendus consequatur at, corporis dolore atque ipsa suscipit qui alias reprehenderit magni minima
              et deserunt fugiat? Esse?</p>
            <v-btn class="blue--text" color="white" rounded dark>Read More</v-btn>
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
  import mix from '@/mixins/mix';
  import componentsmix from '@/mixins/componentsmix';
  export default {
    mixins: [mix, componentsmix],
    data() {
        return {
            slides: [
                "First",
                "Second",
                "Third",
                "Fourth",
                "Fifth",
            ],
        };
    },
};
</script>
<style scoped>
  .v-carousel>>>.v-icon.mdi-minus {
    color: blue;
  }
</style>