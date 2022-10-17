<template>
    <v-app>
    <NavigationGuest />
        <!-- Page 1 -->
        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/static/jasalanding.svg" :height="height">
        <v-container class="white--text">
            <v-row class="fill-height mt-16 text-center">
                <v-col>
                    <h1 class="display-4 text-capitalize font-weight-bold">jasa</h1>
                <p class="title mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                  beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                  natus. Ea debitis reiciendis eligendi tempore.</p>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
    <!-- Page 2 -->
    <v-container class="my-16 blue--text">
        <v-row>
            <v-col cols="6">
                <h1 class="display-1 font-weight-bold mb-16 text-uppercase">desain dan pengembangan perangkat elektronik</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos sit, voluptas quia quasi voluptatibus, nobis vitae accusantium harum doloremque rerum ad fugiat debitis, ex deserunt. Atque voluptates itaque doloremque?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos sit, voluptas quia quasi voluptatibus, nobis vitae accusantium harum doloremque rerum ad fugiat debitis, ex deserunt. Atque voluptates itaque doloremque?</p>
            </v-col>
            <v-col cols="6">
                <v-card elevation="10" rounded="xl">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height - 100"></v-img>
                </v-card>
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