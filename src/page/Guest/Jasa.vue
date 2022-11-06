<template>
  <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
      src="@/assets/images/static/jasalanding.svg" :height="nosm ? height : height+200">
      <v-container class="white--text">
        <v-row class="fill-height" :class="nosm ? 'mt-16' : 'mt-2'">
          <v-col>
            <h1 class="text-uppercase font-weight-bold" :class="nosm ? 'display-4' : 'text-h4'">jasa</h1>
            <p :class="nosm ? 'mt-10 title' : 'mt-5'">Sebagai perusahaan dengan DNA teknologi digital, selain portofolio produk,
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
    <v-container class="my-16 blue--text" v-if="idx % 2 === 0">
      <v-row>
        <v-col :cols="nosm ? '6' : '12'">
          <h1 class="display-1 font-weight-bold mb-16 text-uppercase" v-html="row.title"></h1>
          <p>{{row.text}}</p>
        </v-col>
        <v-col :cols="nosm ? '6' : '12'">
          <v-card elevation="10" rounded="xl">
            <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
              src="@/assets/images/dummy/board.jpg" :height="height - 100"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Page 3 -->
    <v-container :class="nosm ? 'my-16' : 'my-8'" v-if="idx % 2 === 1">
      <v-card flat>
        <v-list two-line>
          <v-list-item>
            <v-img src="@/assets/images/dummy/board.jpg" max-width="600" v-show="nosm" :height="height"></v-img>
            <v-list-item-content>
              <v-card flat :class="nosm ? 'pa-16': 'pa-8'" color="blue" dark :height="nosm ? height : height+400">
                <p class="display-1 font-weight-bold" v-html="row.title"></p>
                <p class="subtitle mt-10">{{ row.text }}</p>
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
<script>
  import mix from '@/mixins/mix';
  import componentsmix from '@/mixins/componentsmix';
  export default {
    mixins: [mix, componentsmix],
    data() {
      return {
        rows: [{
            title: 'Konsultasi, Sistem Integrasi Produk &amp; Pelatihan Teknologi Sistem Embedded, IoT dan AI',
            text: 'Jasa konsultasi merupakan kekuatan portofolio jasa kami yang terkuat. Pengalaman kami sudah membuktikan bahwa kami pernah mendeliver proyek-proyek jasa konsultasi dan pelatihan untuk vertikal teknologi Sistem Embedded, Internet of Things, Kecerdasan Artifisial dan Kendaraan Listrik.'
          },
          {
            title: 'Desain Industri dan Desain Mekanikal',
            text: 'Dalam pengembangan produk baru, lingkup jasa desain industri dan desain mekanikal memegang peranan penting.Konsumen pasti akan memberikan kesan pengalaman melalui tampilan eksterior sebuah produk.Desain industri dan desain mekanikal sengaja kami bedakan karena pendekatan dan kompetensi keduanya kontras berbeda.Namun PRASIMAX menerima permintaan desain industri dan desain mekanikal.'
          },
          {
            title: 'Desain Skematik dan Desain PCB',
            text: 'Inti dari produk teknologi digital adalah sistem elektronik yang meng-enable kemampuan sebuah produk, berupa board elektronik yang disebut PCB. Kami menerima permintaan jasa desain skematik dan jasa desain PCB atau keduanya. Selain itu PRASIMAX juga menyediakan desain contoh atau Reference Design sebuah sistem embedded, Internet of Things atau Kecerdasan Artifisial.'
          },
          {
            title: 'Desain Perangkat Lunak',
            text: 'Nyawa daripada sebuah produk elektronik digital adalah software yang meng-enable fungsi-fungsi operasional daripada board elektronik atau PCB. PRASIMAX dengan pengalaman di bidang Bare programming, RTOS dan LInux menyediakan jasa programming perangkat lunak sistem embedded.'
          }
        ],
      };
    },
  }
</script>