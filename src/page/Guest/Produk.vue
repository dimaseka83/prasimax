<template>
    <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/static/produklanding.svg" :height="height">
        <v-container class="white--text">
            <v-row class="fill-height mt-16">
                <v-col cols="8">
                    <h1 class="display-4 text-uppercase font-weight-bold">produk kami</h1>
                <p class="title mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis similique
                  beatae dicta, consectetur assumenda doloremque fugiat in! Veritatis ipsa ab odio ratione aliquid ipsam
                  natus. Ea debitis reiciendis eligendi tempore.</p>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
    <!-- Page 2 -->
    <v-container class="my-16">
        <v-row>
            <v-col cols="4" v-for="(category, idx) in categories" :key="idx">
                <v-hover v-slot="{hover}">
                    <v-btn 
                    :style="{'background-color': hover ? '#03A9F4' : '#FFFFFF', 'color': disableButton(category) ? '#FFFFFF' : '#000000'}"
                    :class="[ hover ? 'btn-category white--text' : 'blue--text']"
                    @click="selectCategory(category)" 
                    outlined 
                    rounded 
                    elevation="">{{ category }}</v-btn>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="my-16">
        <v-row>
            <v-col cols="4" v-for="(product, idx) in productsFilter" :key="idx" class="d-flex align-stretch">
                <v-hover v-slot="{hover}">
                <v-card rounded="xl" elevation="12">
                    <v-img :src="`${assets}${product.image}`" :height="height-300">
                        <v-expand-transition>
                            <div v-if="hover" class="d-flex flex-column justify-center align-center" style="height: 100%">
                                <!-- Vanced -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="58.023" height="49.558" viewBox="0 0 58.023 49.558" v-if="product.status == 'Vacant'">
                                    <path id="Path_335" data-name="Path 335" d="M53.041,14.331l-1.764,30a6.349,6.349,0,0,1-6.34,5.976H14.587a6.349,6.349,0,0,1-6.34-5.976l-1.764-30m16.93,11.64,6.349,6.349m0,0,6.349,6.349M29.762,32.32l6.349-6.349M29.762,32.32l-6.349,6.349M5.424,14.331H54.1a3.176,3.176,0,0,0,3.174-3.174V6.924A3.176,3.176,0,0,0,54.1,3.75H5.424A3.176,3.176,0,0,0,2.25,6.924v4.233A3.176,3.176,0,0,0,5.424,14.331Z" transform="translate(-0.75 -2.25)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                </svg>
                                <!-- Buyed -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="58.719" height="54.72" viewBox="0 0 58.719 54.72" v-else>
                                    <path id="Path_329" data-name="Path 329" d="M2.25,3H6.232A3.235,3.235,0,0,1,9.356,5.4l1.1,4.129m6.879,25.8a8.62,8.62,0,0,0-8.62,8.62H53.97m-36.635-8.62H49.568a171.2,171.2,0,0,0,8.4-20.51A172.727,172.727,0,0,0,10.456,9.528m6.879,25.8-6.879-25.8m2.569,43.036A2.155,2.155,0,1,1,10.87,50.41,2.155,2.155,0,0,1,13.025,52.565Zm36.635,0A2.155,2.155,0,1,1,47.5,50.41,2.155,2.155,0,0,1,49.66,52.565Z" transform="translate(-0.75 -1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                </svg>
                                <p class="font-weight-light white--text display-2">{{ product.status }}</p>
                            </div>
                        </v-expand-transition>
                    </v-img>
                    <v-container class="pa-10 blue--text">
                        <v-row>
                            <v-col cols="12">
                                <h3 class="text-uppercase font-weight-bold mb-5">{{ product.name }}</h3>
                                <span v-html="product.keterangan"></span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-hover>
            </v-col>
        </v-row>
    </v-container>
    <div class="text-center mb-16">
    <v-pagination
      v-model="page"
      :length="lengthpage"
    ></v-pagination>
  </div>
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
            page: 1,
            category_select: 'All',
            products: [],
        }
    },
    created() {
        this.getproducts();
    },
    methods: {
        selectCategory(id) {
            this.category_select = id;
        },
        disableButton(category) {
            if (category == this.category_select) {
                return true;
            }
        },
        async getproducts() {
            await axios.get(`${this.apibe}product`)
                .then(res => {
                    this.products = res.data
            })
        },
    },
    computed: {
        categories() {
            let categories = ['All'];
            this.products.forEach(product => {
                if (!categories.includes(product.category)) {
                    categories.push(product.category);
                }
            });
            return categories;
        },
        lengthpage() {
            if(this.products.length > 0) {
                return Math.ceil(this.products.length / 6);
            }
        },
        productsFilter(){
            if(this.category_select == 'All') {
                return this.products;
            } else {
                return this.products.filter(product => product.category == this.category_select);
            }
        }
    }
}
</script>
<style>
    .btn-category{
        border: 1px solid #03A9F4;
    }
</style>