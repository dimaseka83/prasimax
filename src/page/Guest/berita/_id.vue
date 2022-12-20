<script>
    import mix from '@/mixins/mix'
    import FooterGuest from '@/components/FooterGuest.vue'
    import NavigationGuest from '@/components/NavigationGuest.vue'
    import axios from 'axios'
    import moment from 'moment'
    export default {
        components: {
            FooterGuest,
            NavigationGuest
        },
        mixins: [mix],
        data() {
            return {
                title: null,
                content: null,
                image: null,
                date: null,
            }
        },
        created() {
            this.getDetailBerita()
        },
        methods: {
            async getDetailBerita() {
                const id = this.$route.params.id
                const {
                    data
                } = await axios.get(`${this.apibe}berita/${id}`)
                const {
                    title,
                    content,
                    image,
                    updatedAt
                } = data
                this.title = title
                this.content = content
                this.image = image
                this.date = updatedAt
            },
            moment(date) {
                return moment(date).lang('id').format('LL')
            }
        },
    }
</script>
<template>
    <v-app>
        <navigation-guest />
        <v-content>
            <v-img :src="`${assets}${image}`">
                <template v-slot:placeholder>
                    <v-row align="center" justify="center" class="fill-height ma-0">
                        <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-content>
        <v-container class="blue--text my-16">
            <h1 class="display-1 font-weight-bold black--text">
                {{ title }}
            </h1>
            <p class="text--disabled mt-10">
                {{ moment(date) }}
            </p>

            <div class="my-8" v-html="content"></div>
        </v-container>
        <footer-guest />
    </v-app>
</template>