<template>
    <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height">
        <v-container class="white--text">
            <v-row class="fill-height mt-16">
                <v-col cols="8">
                    <h1 class="display-4 text-uppercase font-weight-bold">hubungi kami</h1>
                <p class="title mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                  beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                  natus. Ea debitis reiciendis eligendi tempore.</p>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
    <!-- Page 2 -->
    <v-container class="my-16 blue--text">
        <h1 class="display-2 font-weight-bold text-capitalize">sales department</h1>
        <v-row class="my-10">
            <v-col cols="4" v-for="i in 3" :key="i">
                <v-card rounded="xl" elevation="12">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height-300">
                    </v-img>
                    <v-container class="pa-10 blue--text">
                        <v-row>
                            <v-col cols="12">
                                <h3 class="text-capitalize headline font-weight-bold mb-5">john doe</h3>
                                <span>Mobile : +123 456</span><br>
                                <span>Social Media : @johndoe</span><br>
                                <span>Fax : +123 456</span><br>
                                <span>E-mail : JohnDoe@prasimax.com</span><br>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!-- Page 3 -->
        <v-container class="mb-16 blue--text">
        <h1 class="display-2 font-weight-bold text-capitalize">sales department</h1>
        <v-row class="my-10">
            <v-col cols="4" v-for="i in 3" :key="i">
                <v-card rounded="xl" elevation="12">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height-300">
                    </v-img>
                    <v-container class="pa-10 blue--text">
                        <v-row>
                            <v-col cols="12">
                                <h3 class="text-capitalize headline font-weight-bold mb-5">john doe</h3>
                                <span>Mobile : +123 456</span><br>
                                <span>Social Media : @johndoe</span><br>
                                <span>Fax : +123 456</span><br>
                                <span>E-mail : JohnDoe@prasimax.com</span><br>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!-- Page 4 -->
    <v-container class="my-16">
        <v-row>
            <v-col cols="6">
                <v-card>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.260701979084!2d106.83066401476991!3d-6.360294195397502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1638c43137%3A0xb75d0558c257be22!2sPT.%20Prasimax%20Inovasi%20Teknologi!5e0!3m2!1sid!2sid!4v1662818289875!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card flat class="ma-16 blue--text">
                    <v-container>
                        <h1 class="display-2 font-weight-bold text-capitalize">kunjungi kantor kami</h1>
                        <p class="title mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                            beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                            natus. Ea debitis reiciendis eligendi tempore.</p>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
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