<template>
    <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
        <v-container class="my-16 blue--text">
        <v-row>
            <v-col cols="6">
                <h1 class="display-1 font-weight-bold mb-16 text-uppercase">Kerja Sama</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos sit, voluptas quia quasi voluptatibus, nobis vitae accusantium harum doloremque rerum ad fugiat debitis, ex deserunt. Atque voluptates itaque doloremque?</p>
            </v-col>
            <v-col cols="6">
                <v-card elevation="10" rounded="xl">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height - 100"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!-- Page 2 -->
        <v-container class="my-16">
          <v-card flat>
            <v-list two-line>
              <v-list-item>
                <v-img src="@/assets/images/dummy/board.jpg" max-width="600" :height="height"></v-img>
                <v-list-item-content>
                  <v-card flat class="pa-16" color="blue" dark :height="height">
                    <p class="display-1 font-weight-bold">Desain dan Pengembangan Software</p>
                    <p class="subtitle mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laborum, in ad
                      minus odit distinctio eligendi doloribus tempora, sed eum quas obcaecati animi saepe error itaque
                      maxime enim. Exercitationem, commodi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, iure modi odit ipsa est aliquam dolore dolorum, quidem omnis, totam odio sapiente nostrum sequi incidunt nulla. Impedit molestias maxime sed.</p>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
    </v-container>
    <!-- Page 3 -->
        <v-container class="my-16">
        <p class="display-3 text-capitalize blue--text font-weight-bold">mitra kami</p>
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
    <!-- Page 4 -->
    <v-container class="mb-16">
        <p class="display-3 text-capitalize blue--text font-weight-bold">bergabung menjadi mitra</p>
        <v-btn color="blue" large rounded class="white--text mt-10">Hubungi Kami</v-btn>
    </v-container>
    <FooterGuest />
    </v-app>
</template>
<script>
import mix from '@/mixins/mix';
import componentsmix from '@/mixins/componentsmix';
export default {
    mixins: [mix, componentsmix],
}
</script>