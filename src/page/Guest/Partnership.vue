<template>
  <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <div v-for="(partner, idx) in partners" :key="idx" class="title">
      <v-container class="mt-16 blue--text" v-if="idx % 2 === 0">
        <v-row>
          <v-col :cols="nosm ? '6' : '12'">
            <h1 class="text-h3 font-weight-bold mb-16 text-uppercase">{{ partner.title }}</h1>
            <span v-html="partner.content"></span>
          </v-col>
          <v-col :cols="nosm ? '6' : '12'">
            <v-card elevation="10" rounded="xl">
              <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
                :src="`${assets}${partner.image}`" :height="nosm ? height-100 : height">
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
      <!-- Page 2 -->
      <v-container class="mt-16" v-else>
        <v-card flat>
          <v-list two-line>
            <v-list-item>
              <v-img :src="`${assets}${partner.image}`" max-width="600" :height="height" v-show="nosm">
                <template v-slot:placeholder>
                  <v-row align="center" justify="center" class="fill-height ma-0">
                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-list-item-content>
                <v-card flat :class="nosm ? 'pa-16' : 'pa-5'" color="blue" dark :height="nosm ? height : height+300">
                  <h2 class="font-weight-bold text-h3">{{ partner.title }}</h2>
                  <span class="mt-10" v-html="partner.content"></span>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    </div>
    <!-- Page 3 -->
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
    <!-- Page 4 -->
    <v-container class="mb-16">
      <p class="text-capitalize blue--text font-weight-bold text-h3">bergabung menjadi
        mitra</p>
      <v-btn color="blue" large rounded class="white--text mt-10" @click="route('/contact')">Hubungi Kami</v-btn>
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
        partners: [],
        mitratech: [],
        model: null,
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init() {
        await axios.get(`${this.apibe}kerjasama`).then(res => {
          this.partners = res.data
        })

        await axios.get(`${this.apibe}mitra-teknologi`).then(res => {
          this.mitratech = res.data
        })
      }
    },
  }
</script>