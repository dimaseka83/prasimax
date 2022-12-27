<script>
  import axios from 'axios'
  import mix from '@/mixins/mix';
  import componentsmix from '@/mixins/componentsmix';
  export default {
    mixins: [mix, componentsmix],
    data() {
      return {
        rows: [],
      };
    },
    created() {
      this.init()
    },
    methods: {
      async init() {
        await axios.get(`${this.apibe}jasa`).then(res => {
          this.rows = res.data
        })
      },
    },
  }
</script>
<template>
  <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
      src="@/assets/images/static/jasalanding.svg" :height="nosm ? height : height+200">
      <template v-slot:placeholder>
        <v-row align="center" justify="center" class="fill-height ma-0">
          <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
        </v-row>
      </template>
      <v-container class="white--text">
        <v-row class="fill-height" :class="nosm ? 'mt-16' : 'mt-2'">
          <v-col>
            <h1 class="text-uppercase font-weight-bold" :class="nosm ? 'display-4' : 'text-h4'">jasa</h1>
            <p :class="nosm ? 'mt-10 title' : 'mt-5'">Sebagai perusahaan dengan DNA teknologi digital, selain portofolio
              produk,
              kami juga menyediakan jasa atau services untuk mengakomodasi permintaan
              pelanggan atau klien kami. Jasa yang kami sediakan mencakup jasa konsultasi,
              jasa desain Desain Industri, Desain Mekanikal, Desain Skematik, Desain PCB
              dan Pengembangan Software.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <!-- Page 2 -->
    <div v-for="(row, idx) in rows" :key="idx">
      <v-container class="mt-16 blue--text" v-if="idx % 2 === 0">
        <v-row>
          <v-col :cols="nosm ? '6' : '12'">
            <h1 class="display-1 font-weight-bold mb-16 text-uppercase" v-html="row.title"></h1>
            <span v-html="row.content"></span>
          </v-col>
          <v-col :cols="nosm ? '6' : '12'">
            <v-card elevation="10" rounded="xl">
              <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" :src="`${assets}${row.image}`"
                :height="nosm ? height - 100 : height">
                <template v-slot:placeholder>
                  <v-row align="center" justify="center" class="fill-height ma-0">
                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                  </v-row>
                </template></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- Page 3 -->
      <v-container :class="nosm ? 'mt-16' : 'my-8'" v-if="idx % 2 === 1">
        <v-card flat>
          <v-list two-line>
            <v-list-item>
              <v-img :src="`${assets}${row.image}`" max-width="600" v-show="nosm" :height="height">
                <template v-slot:placeholder>
                  <v-row align="center" justify="center" class="fill-height ma-0">
                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-list-item-content>
                <v-card flat :class="nosm ? 'pa-16': 'pa-8'" color="blue" dark :height="nosm ? height : height+400">
                  <p class="display-1 font-weight-bold" v-html="row.title"></p>
                  <p class="subtitle mt-10">{{ row.text }}</p>
                  <span class="subtitle mt-10" v-html="row.content"></span>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    </div>
    <FooterGuest />
  </v-app>
</template>