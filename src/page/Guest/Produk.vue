<template>
    <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height">
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
                    :style="{'background-color': hover ? '#03A9F4' : '#FFFFFF'}" 
                    :class="[ hover ? 'btn-category white--text' : 'blue--text']"
                    :disabled="disableButton(category.id)"
                    @click="selectCategory(category.id)" 
                    outlined 
                    rounded 
                    elevation="">{{ category.name }}</v-btn>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="my-16">
        <v-row>
            <v-col cols="4" v-for="i in 6" :key="i">
                <v-card rounded="xl" elevation="12">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height-300"></v-img>
                    <v-container class="pa-10 blue--text">
                        <v-row>
                            <v-col cols="12">
                                <h3 class="text-uppercase font-weight-bold mb-5">Smart Speaker - SMAI-88</h3>
                                <span>Qualcom QCS400 - ARM Cortex-A53 Quad Core</span><br>
                                <span>RAM : 4GB LPDDR2</span><br>
                                <span>Flash : 4GB NAND</span><br>
                                <span>2x Digital Mics</span><br>
                                <span>Google Voice Assistant and Alexa ready</span><br>
                                <span>Customizable for specific customer NLP</span>
                                <h3 class="text-uppercase font-weight-bold my-5">Terms & Condition</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore! Blanditiis nostrum odio, magnam molestias dolores nemo numquam minus. Alias aut dicta unde! Provident dolor nisi aperiam perferendis quisquam mollitia.</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <div class="text-center mb-16">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
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
            page: 1,
            category_select: '',
            categories: [
                {
                    id: 1,
                    name: 'notebook',
                },
                {
                    id: 2,
                    name: 'tablet',
                },
                {
                    id: 3,
                    name: 'smartphone',
                },
                {
                    id: 4,
                    name: 'tablet',
                },
                {
                    id: 5,
                    name: 'accessories',
                },
                {
                    id: 6,
                    name: 'smartwatch',
                }
            ]
        }
    },
    methods: {
        selectCategory(id) {
            this.category_select = id;
        },
        disableButton(id) {
            if (id == this.category_select) {
                return true;
            }
        }
    },
}
</script>
<style>
    .btn-category{
        border: 1px solid #03A9F4;
    }
    button:disabled{
        background-color: #03A9F4 !important;
        color: #FFFFFF !important;
    }
</style>