<template>
    <v-app>
    <NavigationGuest />
        <!-- Page 1 -->
        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height">
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
    <v-container class="my-16 blue--text">
        <h1 class="text-uppercase display-2 font-weight-bold">desain dan pengembangan software</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi recusandae voluptatibus aut odio cupiditate eligendi voluptatum aperiam, quisquam, fuga quibusdam fugiat inventore quidem necessitatibus omnis, mollitia iure iusto facilis?</p>

        <h1 class="text-capitalize display-1 font-weight-bold pt-16">prasimax board support package (BSP)</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi recusandae voluptatibus aut odio cupiditate eligendi voluptatum aperiam, quisquam, fuga quibusdam fugiat inventore quidem necessitatibus omnis, mollitia iure iusto facilis?</p>

        <h1 class="text-capitalize display-1 font-weight-bold pt-16">prasimax RTOS dan Board Firmware</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi recusandae voluptatibus aut odio cupiditate eligendi voluptatum aperiam, quisquam, fuga quibusdam fugiat inventore quidem necessitatibus omnis, mollitia iure iusto facilis?</p>

        <h1 class="text-capitalize display-1 font-weight-bold pt-16">keahlian tim kami</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi recusandae voluptatibus aut odio cupiditate eligendi voluptatum aperiam, quisquam, fuga quibusdam fugiat inventore quidem necessitatibus omnis, mollitia iure iusto facilis?</p>
    </v-container>
    <!-- Page 4 -->
    <v-container class="my-16 blue--text">
        <v-row>
            <v-col cols="6">
                <v-card elevation="10" rounded="xl">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height - 100"></v-img>
                </v-card>
            </v-col>
            <v-col cols="6">
                <h1 class="display-2 font-weight-bold mb-16 text-uppercase">konsultasi dan sistem terintegrasi</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos sit, voluptas quia quasi voluptatibus, nobis vitae accusantium harum doloremque rerum ad fugiat debitis, ex deserunt. Atque voluptates itaque doloremque?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos sit, voluptas quia quasi voluptatibus, nobis vitae accusantium harum doloremque rerum ad fugiat debitis, ex deserunt. Atque voluptates itaque doloremque?</p>
            </v-col>
        </v-row>
    </v-container>
    <!-- Page 5 -->
    <v-container class="my-16 blue--text">
        <h1 class="text-uppercase display-2 font-weight-bold">rekayasa dan fabrikasi</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi recusandae voluptatibus aut odio cupiditate eligendi voluptatum aperiam, quisquam, fuga quibusdam fugiat inventore quidem necessitatibus omnis, mollitia iure iusto facilis?</p>

        <h1 class="text-capitalize display-1 font-weight-bold pt-16">kami menawarkan</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi recusandae voluptatibus aut odio cupiditate eligendi voluptatum aperiam, quisquam, fuga quibusdam fugiat inventore quidem necessitatibus omnis, mollitia iure iusto facilis?</p>
    </v-container>
    <!-- Page 6 -->
    <v-container class="my-16 blue--text">
        <h1 class="text-uppercase display-2 font-weight-bold">pelatihan dan workshop internet of things</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quasi recusandae voluptatibus aut odio cupiditate eligendi voluptatum aperiam, quisquam, fuga quibusdam fugiat inventore quidem necessitatibus omnis, mollitia iure iusto facilis?</p>
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