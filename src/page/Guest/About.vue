<template>
    <v-app>
        <NavigationGuest/>
    <!-- Page 1 -->
    <v-carousel cycle :height="height" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i + 'slide'">
        <v-img gradient="to bottom right, rgba(0, 102, 204, 1), rgba(0, 204, 255, 1)" :height="height">
          <v-container>
            <v-row class="fill-height mt-10 white--text">
              <v-col>
                <h1 class="text-h2 font-weight-bold">{{slide.title}}</h1>
                <p class="title mt-10">{{slide.text}}</p>
                <v-btn color="#42A5F5" dark rounded>Baca Lebih Lanjut</v-btn>
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
    <v-container>
        <v-card color="light-blue lighten-1" elevation="10" class="my-16 pa-10" rounded="xl">
        <v-container class="white--text">
            <v-row class="fill-height mt-10 ">
                <v-col cols="8">
                <h1 class="text-h3 font-weight-bold text-uppercase">informasi perusahaan</h1>
                <p class="headline mt-5 font-weight-bold text-capitalize ">kami memimpin teknologi sistem embedded</p>
                <p class="title mt-10">PRASIMAX adalah sebuah entitas bisnis sekaligus lembaga riset dan pengembangan teknologi elektronika di Indonesia yang memiliki lini dan lingkup mulai dari konsultasi inovasi, desain, pengembangan hingga produksi atau manufakturing produk.</p>
            </v-col>
            <v-col cols="4">
                <v-img src="@/assets/images/dummy/carousel.svg"></v-img>
            </v-col>
            </v-row>
            <p class="headline mt-5 font-weight-bold text-capitalize ">Visi, Misi dan Nilai Perusahaan</p>
            <v-row class="mt-10">
                <v-col cols="6" class="d-flex align-stretch">
                    <v-card color="white" elevation="10" rounded="xl" class="blue--text pb-10 ">
                        <v-card-title class="font-weight-bold">Visi</v-card-title>
                        <v-card-text class="blue--text">
                            Visi kami menjadi Penyedia Solusi ODM, OEM dan Manufakturing produk teknologi Internet of Things, embedded System, Kecerdasan Artifisial, Teknologi Nirkabel dan Kendaraan Listrik terkemuka di Indonesia dan kawasan regional untuk seluruh industri vertikal.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6" class="d-flex align-stretch">
                    <v-card color="white" elevation="10" rounded="xl" class="blue--text pb-10">
                        <v-card-title class="font-weight-bold">Misi</v-card-title>
                        <v-card-text class="blue--text">
                            Dalam menjalankan bisnis teknologi, kami memiliki misi mendorong perkembangan Industri 4.0 di Indonesia. Menciptakan dan menginvensi produk inovatif untuk kebutuhan klien kami. Mempercepat kemandirian bangsa dalam penguasaan teknologi informasi dan elektronika. Mencerdaskan manusia Indonesia agar mampu dan memiliki keahlian dan keterampilan di bidang teknologi elektronika, mulai dari desain, pengembangan hingga manufakturing.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <div class="mt-5 white--text">
                <p>Nilai inti perusahaan yang kami anut adalah:</p>
                <ul>
                    <li>Inovasi</li>
                    <li>Fokus</li>
                    <li>Integritas</li>
                    <li>Berkualitas</li>
                </ul>
                <p class="mt-5">Dengan nilai inti yang kami</p>
            </div>
        </v-container>
    </v-card>
    </v-container>
    <!-- Page 3 -->
    <v-container class="my-16 blue--text">
        <v-row>
            <v-col cols="5">
                <v-card elevation="10" rounded="xl">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height - 100"></v-img>
                </v-card>
            </v-col>
            <v-col cols="7">
                <h2 class="display-1 font-weight-bold text-uppercase mb-5">sejak tahun 2001 hingga kini</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti a voluptatibus aspernatur similique nam perferendis repellat necessitatibus cumque ullam eum? Similique accusantium ducimus maxime? Perspiciatis deleniti repudiandae enim necessitatibus rem!</p>
                <h2 class="display-1 font-weight-bold text-capitalize my-5">fase berdiri :</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <h2 class="display-1 font-weight-bold text-capitalize my-5">fase transformasi :</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
            </v-col>
            <v-col cols="6">
                <h2 class="display-1 font-weight-bold text-capitalize my-5">fase pertumbuhan :</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
            </v-col>
        </v-row>
        <h2 class="display-1 font-weight-bold text-capitalize my-5">download dokumen perusahaan :</h2>
        <div class="d-flex justify-space-between" >
            <div class="pa-2 font-weight-bold text-decoration-underline headline" v-for="(document, idx) in documents" :key="idx">{{ document.name }} </div>
        </div>
        <v-divider class="mt-10"></v-divider>
    </v-container>
    <v-container class="my-16 blue--text">
    <v-row align="center">
        <p class="display-3 text-capitalize blue--text font-weight-bold">Kami Mencari Talenta </p>
        <v-divider></v-divider>
    </v-row>
    <v-row class="my-10">
        <v-col cols="6">
        <h2 class="display-1 font-weight-bold text-capitalize mb-5">benefits</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
        </v-col>
        <v-col cols="6">
            <h2 class="display-1 font-weight-bold text-capitalize mb-5">learning & development</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>

        <a class="font-italic text-decoration-underline font-weight-medium">Lihat Program mencari talenta</a>
        </v-col>
    </v-row>

    <v-row align="center">
        <p class="display-3 text-capitalize blue--text font-weight-bold">magang di perusahaan kami </p>
        <v-divider></v-divider>
    </v-row>
    <v-row>
        <v-col cols="6">
        <h2 class="display-1 font-weight-bold text-capitalize mb-5">benefits</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
        </v-col>
        <v-col cols="6">
            <h2 class="display-1 font-weight-bold text-capitalize mb-5">learning & development</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>

        <a class="font-italic text-decoration-underline font-weight-medium">Lihat Program magang</a>
        </v-col>
    </v-row>
    </v-container>
    <v-container class="my-16 blue--text">
        <h2 class="display-1 font-weight-bold text-capitalize mb-5">pedoman perilaku :</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque. Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
    </v-container>
    <FooterGuest />
    </v-app>
</template>
<script>
      import mix from '@/mixins/mix';
  import componentsmix from '@/mixins/componentsmix';
import FooterGuest from '@/components/FooterGuest.vue';
export default {
    mixins: [mix, componentsmix],
    data() {
        return {
            slides: [{
              title : 'Perusahaan',
              text : 'PRASIMAX [PT Prasimax Inovasi Teknologi] berdiri secara legal dan formal pada tanggal 12 Maret 2010 oleh 5 orang pendiri. Bidang bisnis PRASIMAX adalah design, pengembangan dan manufakturing produk elektronik seperti IoT, embedded system, kecerdasan artifisial, nirkabel, divais komputasi dan peralatan elektronika lainnya di berbagai sektor industri',
              image : 'carousel.svg'
            },
            {
              title: 'Kompetensi',
              text: 'Dengan pengalaman kami yang sudah melewati satu dekade di bidang teknologi informasi dan komputasi, kompetensi kami yang dapat membantu Anda dalam merealisasikan produk inovatif adalah desain industrial dan mekanikal, desain dan pengembangan elektronika berikut perangkat lunaknya hingga kami memiliki kemampuan untuk memproduksi massal',
              image: 'carousel.svg'
            },
            {
              title: 'Industri 4.0',
              text: 'Perkembangan Industri 4.0 yang sedang berlaku membuat kami juga beradaptasi untuk menciptakan invensi dan inovasi teknologi. Sudah banyak produk dan desain kami yang telah memberikan nilai tambah bagi klien dan pelanggan kami. Khususnya produk IoT dan nirkabel yang pernah kami hasilkan telah membuktikan bahwa PRASIMAX mampu mengikuti perkembangan Industri 4.0',
              image: 'carousel.svg'
            }],
            documents: [
                {
                    name: "NIB",
                    url: "https://www.google.com"
                },
                {
                    name: "NPWP",
                    url: "https://www.google.com"
                },
                {
                    name: "Panduan Merk Prasimax",
                    url: "https://www.google.com"
                },
            ]
        };
    },
    components: { FooterGuest }
}
</script>