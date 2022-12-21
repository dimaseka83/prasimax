<script>
    import mix from '@/mixins/mix'
    import componentsmix from '@/mixins/componentsmix'
    import FooterGuest from '@/components/FooterGuest.vue'
    import NavigationGuest from '@/components/NavigationGuest.vue'
    import axios from 'axios'
    export default {
        components: {
            FooterGuest,
            NavigationGuest
        },
        mixins: [mix, componentsmix],
        data() {
            return {
                category: [
                    'Berita Terpopuler',
                    'Berita'
                ],
                model: null,
                products: []
            }
        },
        created() {
            this.getBerita()
        },
        methods: {
            async getBerita() {
                this.$store.dispatch('getBerita')
                const { data } = await axios.get(`${this.apibe}product`);
                data.filter(product => product.isBerita === true).forEach(product => {
                    this.products.push(product)
                })
            },
        },
        computed: {
            getByCategory() {
                const berita = {}
                this.category.forEach(category => {
                    berita[category] = this.$store.state.berita.filter(berita => berita.category === category)
                })
                const Abjad = Object.keys(berita).sort().reverse()
                const Berita = {}
                Abjad.forEach(abjad => {
                    Berita[abjad] = berita[abjad]
                })
                return Berita
            },
        }
    }
</script>
<template>
    <v-app>
        <navigation-guest />
        <!-- Page 1 -->
        <v-container class="my-16" v-if="products.length">
            <v-card flat v-for="(product, key) in products" :key="key">
                <v-list two-line>
                    <v-list-item>
                        <v-img v-show="nosm" :src="`${assets}${product.image}`" max-width="600" :height="height">
                            <template v-slot:placeholder>
                                <v-row align="center" justify="center" class="fill-height ma-0">
                                    <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-list-item-content>
                            <v-card flat color="blue" dark :height="nosm ? height : height+200">
                                <v-container :class="nosm ? 'pa-16' : 'pa-5'">
                                    <p class="font-weight-bold my-5" :class="nosm ? 'display-3' : 'text-h4'">
                                        {{ product.name }}</p>
                                    <span class="subtitle-2" v-html="product.deskripsi"></span>
                                </v-container>
                            </v-card>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-container>
        <!-- Page 2 -->
        <v-container class="blue--text" v-for="(berita, category) in getByCategory" :key="category" :class="category.at(-1) ? 'my-8' : 'mt-16'">
            <v-row align="center">
                <p class="text-capitalize font-weight-bold" :class="nosm ? 'display-3': 'text-h4'">{{ category }}</p>
                <v-divider></v-divider>
            </v-row>
            <v-slide-group v-model="model" class="pa-4"  show-arrows>
                <v-slide-item v-for="item in berita" :key="item.id" v-slot="{ toggle }">
                    <v-hover v-slot="{hover}">
                        <v-card flat class="ma-4" rounded="xl" :elevation="hover ? 12 : 2" :to="`/news/${item.id}`">
                            <v-img :src="`${assets}${item.image}`" :height="height-300">
                                <template v-slot:placeholder>
                                    <v-row align="center" justify="center" class="fill-height ma-0">
                                        <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <v-card-title class="display-1 blue--text font-weight-bold ma-5">{{ item.title }}
                            </v-card-title>
                        </v-card>
                    </v-hover>
                </v-slide-item>
            </v-slide-group>
        </v-container>
        <footer-guest />
    </v-app>
</template>