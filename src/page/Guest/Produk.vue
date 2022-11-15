<template>
    <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/static/produklanding.svg" :height="nosm ? height : height+200">
        <v-container class="white--text">
            <v-row class="fill-height" :class="nosm ? 'mt-16' : 'mt-2'">
                <v-col :cols="nosm ? '8' : '12'">
                    <h1 class=" text-uppercase font-weight-bold" :class="nosm ? 'display-4' : 'text-h4'">produk kami</h1>
                <p :class="nosm ? 'mt-10 title' : 'mt-5'" v-html="headerproduk"></p>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
    <!-- Page 2 -->
    <v-container :class="nosm ? 'my-16' : 'my-8'">
        <v-row>
            <v-col :cols="nosm ? '4' : '12'" v-for="(category, idx) in categories" :key="idx">
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
    <v-container :class="nosm ? 'my-16' : 'my-8'">
        <v-row>
            <v-col :cols="nosm ? '4' : '12'" v-for="(product, idx) in productsMerge" :key="idx" class="d-flex align-stretch">
                <v-hover v-slot="{hover}">
                <v-card rounded="xl" elevation="12">
                    <v-img :src="`${assets}${product.image}`" :height="height-300">
                        <v-expand-transition>
                            <div v-if="hover" class="d-flex flex-column justify-center align-center" style="height: 100%">
                                <!-- Vanced -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="92.685" height="78.888" viewBox="0 0 92.685 78.888" v-if="product.status == 'Terakuisisi'">
  <path id="Path_335" data-name="Path 335" d="M85.036,21,82.162,69.9a10.348,10.348,0,0,1-10.335,9.741H22.358A10.348,10.348,0,0,1,12.023,69.9L9.149,21m27.6,18.972L47.093,50.317m0,0L57.441,60.666M47.093,50.317,57.441,39.969M47.093,50.317,36.744,60.666M7.424,21H86.761a5.176,5.176,0,0,0,5.174-5.174v-6.9A5.176,5.176,0,0,0,86.761,3.75H7.424A5.176,5.176,0,0,0,2.25,8.924v6.9A5.176,5.176,0,0,0,7.424,21Z" transform="translate(-0.75 -2.25)" fill="none" stroke="#19b0f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
</svg>
                                <!-- Buyed -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="87.385" height="81.328" viewBox="0 0 87.385 81.328" v-else>
  <path id="Path_329" data-name="Path 329" d="M2.25,3H8.281a4.9,4.9,0,0,1,4.73,3.634l1.667,6.253M25.1,51.955A13.055,13.055,0,0,0,12.041,65.009H80.578M25.1,51.955H73.911A259.282,259.282,0,0,0,86.635,20.894a261.589,261.589,0,0,0-71.957-8.007M25.1,51.955,14.678,12.887m3.89,65.177A3.264,3.264,0,1,1,15.3,74.8,3.264,3.264,0,0,1,18.568,78.064Zm55.482,0A3.264,3.264,0,1,1,70.787,74.8,3.264,3.264,0,0,1,74.05,78.064Z" transform="translate(-0.75 -1.5)" fill="none" stroke="#2196f3" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
</svg>
                                <p class="font-weight-light blue--text display-2">{{ product.status }}</p>
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
                    <v-card-actions v-if="$store.state.token">
                        <v-btn class="blue--text" outlined rounded elevation="0" :disabled="product.pesanan != 'Vacant'" block @click="sendemail(product.name), sendProduk(product.id)">
                            {{ product.pesanan == 'Vacant' ? 'Ambil' : product.pesanan }}
                        </v-btn>
                    </v-card-actions>
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
            category_select: '',
            products: [],
            pesanan: [],
            headerproduk: 'Kami menyediakan etalase berbagai variasi produk kami kepada OEM atau Brand Owner dengan persyaratan <i>Minimum of Quantity</i>, Perjanjian peralihan Kekayaan Intelektual dan syarat dan ketentuan komersial. Pesanan dapat dilakukan langsung pada PRODUK yang dipilih dengan meng-klik tombol <b>"Ambil"</b>. Produk yang dipilih dan sudah diambil oleh OEM akan kami rubah status dari <b>Vacant</b> menjadi <b>Terakuisisi</b>',
        }
    },
    created() {
        this.getproducts();
    },
    methods: {
        selectCategory(id) {
            this.category_select = id;
            console.log(this.category_select == 'All' && this.$route.params.search != undefined);
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

            await axios.get(`${this.apibe}pesanan`, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            })
                .then(res => {
                    this.pesanan = res.data
            })
        },
        async sendemail(nama){
            window.location.href = `mailto:produk@prasimax.com?Subject=Request for Quotation ${nama}`;
        },
        async sendProduk(idProduct){
            let data = {
                process: 'Ambil',
                idProduct
            }
            let pesanan = JSON.stringify(data);
            console.log(pesanan);
            await axios({
                method: 'post',
                url: `${this.apibe}pesanan`,
                data: pesanan,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.$store.state.token}`
                }
            }).then(res => {
                console.log(res);
            })
        }
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
            if(this.productsFilter.length > 0) {
                return Math.ceil(this.productsFilter.length / 6);
            }
        },
        productsFilter(){
            if(this.$route.params.search == undefined) {
                return this.products;
            } else {
                if(this.category_select != 'All' && this.$route.params.search != undefined){
                    return this.products.filter(product => product.category == this.category_select);
                }else if(this.category_select == 'All' && this.$route.params.search != undefined){
                    return this.products;
                }else if(this.category_select == 'All' && this.$route.params.search == undefined){
                    return this.products;
                }else if(this.category_select != 'All'){
                    return this.products.filter(product => product.category == this.category_select);
                }else if(this.$route.params.search != undefined){
                    return this.products.filter(product => product.name.toLowerCase().includes(this.$route.params.search.toLowerCase()));
                }
            }
        },
        productsMerge(){
            let products = [];
            this.productsFilter.forEach(product => {
                let pesanan = this.pesanan.filter(pesanan => pesanan.idProduct == product.id);
                if(pesanan.length > 0){
                    product.pesanan = pesanan[0].process;
                }else{
                    product.pesanan = 'Vacant';
                }
                products.push(product);
            });
            return products;
        }
    }
}
</script>
<style>
    .btn-category{
        border: 1px solid #03A9F4;
    }
</style>