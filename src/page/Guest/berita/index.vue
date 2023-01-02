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
                const group = this.$store.state.berita.reduce((r, a) => {
                    r[a.category] = [...r[a.category] || [], a];
                    return r;
                }, {});
                const Abjad = Object.keys(group).sort().reverse()
                const Berita = {}
                Abjad.forEach(abjad => {
                    Berita[abjad] = group[abjad]
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
        <v-container class="mt-16 title" v-if="products.length">
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
                                    <p class="font-weight-bold my-5 text-h3">
                                        {{ product.name }}</p>
                                    <span v-html="product.deskripsi"></span>
                                </v-container>
                            </v-card>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-container>
        <!-- Page 2 -->
        <v-container class="blue--text title" v-for="(berita, category) in getByCategory" :key="category" :class="category.at(-1) ? 'my-8' : 'mt-16'">
            <v-row align="center">
                <p class="text-capitalize font-weight-bold text-h3">{{ category }}</p>
                <v-divider></v-divider>
            </v-row>
            <v-slide-group v-model="model" class="pa-4"  show-arrows>
                <v-slide-item v-for="item in berita" :key="item.id" v-slot="{ toggle }">
                    <v-hover v-slot="{hover}">
                        <v-card flat class="ma-4" rounded="xl" :width="width" :elevation="hover ? 12 : 2" :to="`/news/${item.id}`">
                            <v-img :src="`${assets}${item.image}`" :height="height-300">
                                <template v-slot:placeholder>
                                    <v-row align="center" justify="center" class="fill-height ma-0">
                                        <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <v-card-text class="text-h4 blue--text font-weight-bold">{{ item.title }}
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-slide-item>
            </v-slide-group>
        </v-container>
        <footer-guest />
    </v-app>
</template>