<template>
    <v-app>
        <navigation-admin/>
        <v-card class="my-16">
            <v-data-table :headers="headercarousel" :items="carousel">
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Carousel <span class="subtitle-2 text-disabled">(Gambar harus svg)</span></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialogcarousel" max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on">Tambah</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>Buat Carousel Baru</v-card-title>
                                <v-card-text>
                                     <v-text-field label="Title" v-model="formcarousel.title"></v-text-field>
                                    <v-text-field label="Description" v-model="formcarousel.subtitle"></v-text-field>
                                    <v-file-input accept="image/*" v-model="formcarousel.image" label="Image"></v-file-input>
                                </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue" text @click="dialogcarousel = false">Cancel</v-btn>
                                <v-btn color="blue" text @click="savecarousel">Save</v-btn>
                            </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>
    </v-app>
</template>
<script>
import mix from '@/mixins/mix'
import NavigationAdmin from '@/components/Admin/Navigation.vue'
import axios from 'axios'
export default {
    mixins: [mix],
    components: {
        NavigationAdmin
    },
    data() {
        return {
            dialogcarousel: false,
            carousel: [],
            headercarousel: [
                { text: 'Title', value: 'title' },
                { text: 'Subtitle', value: 'subtitle' },
                { text: 'Image', value: 'image' },
                { text: 'Action', value: 'action' },
            ],
            formcarousel: {
                title: '',
                subtitle: '',
                image: [],
            }
        }
    },
    created() {
        this.getCarousel()
    },
    methods: {
        async getCarousel() {
            try {
                await axios.get(`${this.apibe}carousel`)
                    .then(res => {
                        this.carousel = res.data
                    })
            } catch (error) {
                console.log(error)
            }
        },
        async savecarousel(){
            try{
                await axios.post(`${this.apibe}carousel`, this.formcarousel, {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    },
            })
                    .then(res => {
                        if(res.status == 200){
                            this.dialogcarousel = false
                            this.getCarousel()
                        }
                    })
            } catch (error) {
                console.log(error)
            }

        }
    },
}
</script>