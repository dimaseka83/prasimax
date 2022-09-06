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
                <h1 class="text-h1 font-weight-bold">Tentang Kami</h1>
                <p class="title mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                  beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                  natus. Ea debitis reiciendis eligendi tempore.</p>
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
                <p class="title mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                natus. Ea debitis reiciendis eligendi tempore.</p>
            </v-col>
            <v-col cols="4">
                <v-img src="@/assets/images/dummy/carousel.svg"></v-img>
            </v-col>
            </v-row>
            <p class="headline mt-5 font-weight-bold text-capitalize ">Visi, Misi dan Nilai Perusahaan</p>
            <v-row class="mt-10">
                <v-col cols="6">
                    <v-card color="white" elevation="10" rounded="xl" class="blue--text pb-10">
                        <v-card-title class="font-weight-bold">Visi</v-card-title>
                        <v-card-text class="blue--text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                            beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                            natus. Ea debitis reiciendis eligendi tempore.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card color="white" elevation="10" rounded="xl" class="blue--text pb-10">
                        <v-card-title class="font-weight-bold">Misi</v-card-title>
                        <v-card-text class="blue--text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                            beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                            natus. Ea debitis reiciendis eligendi tempore.
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
            <p class="headline mt-5 font-weight-bold text-capitalize">Tim Inovatif</p>
            <p class="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quam iure blanditiis eaque magni earum aut voluptatibus sint? Vel error ipsa eligendi quas doloremque tempora est ex minus tenetur obcaecati!</p>
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
        <h2 class="display-1 font-weight-bold text-capitalize">Kami Mencari Talenta :</h2>
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
            slides: [
                "First",
                "Second",
                "Third",
                "Fourth",
                "Fifth",
            ],
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