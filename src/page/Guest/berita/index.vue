<script>
    import mix from '@/mixins/mix'
    import componentsmix from '@/mixins/componentsmix'
    import FooterGuest from '@/components/FooterGuest.vue'
    import NavigationGuest from '@/components/NavigationGuest.vue'
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
                    'Berita Lainnya'
                ],
                model: null,
            }
        },
        created() {
            this.getBerita()
        },
        methods: {
            getBerita() {
                this.$store.dispatch('getBerita')
            }
        },
        computed: {
            getBeritaUtama() {
                return this.$store.state.berita.filter(berita => berita.category === 'Berita Utama')
            },
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
            }
        }
    }
</script>
<template>
    <v-app>
        <navigation-guest />
        <!-- Page 1 -->
        <v-container class="my-16" v-for="(beritaUtama, key) in getBeritaUtama" :key="key">
            <v-card flat
            :to="`/news/${beritaUtama.id}`"
            >
                <v-list two-line>
                    <v-list-item>
                        <v-img v-show="nosm" :src="`${assets}${beritaUtama.image}`" max-width="600" :height="height">
                        </v-img>
                        <v-list-item-content>
                            <v-card flat color="blue" dark :height="nosm ? height : height+200">
                                <v-container :class="nosm ? 'pa-16' : 'pa-5'">
                                    <p class="font-weight-bold my-5" :class="nosm ? 'display-3' : 'text-h4'">
                                        {{ beritaUtama.title }}</p>
                                    <span class="subtitle-2" v-html="beritaUtama.content"></span>
                                </v-container>
                            </v-card>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-container>
        <!-- Page 2 -->
        <v-container class="my-16 blue--text" v-for="(berita, category) in getByCategory" :key="category">
            <v-row align="center">
                <p class="text-capitalize font-weight-bold" :class="nosm ? 'display-3': 'text-h4'">{{ category }}</p>
                <v-divider></v-divider>
            </v-row>
            <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
                <v-slide-item v-for="item in berita" :key="item.id" v-slot="{ toggle }">
                    <v-hover v-slot="{hover}">
                        <v-card flat class="ma-4" rounded="xl" 
                        :elevation="hover ? 12 : 2"
                        :to="`/news/${item.id}`"
                        >
                        <v-img :src="`${assets}${item.image}`" :height="height-300" />
                        <v-card-title class="display-1 blue--text font-weight-bold ma-5">{{ item.title }}</v-card-title>
                    </v-card>
                    </v-hover>
                </v-slide-item>
            </v-slide-group>
        </v-container>
        <footer-guest />
    </v-app>
</template>