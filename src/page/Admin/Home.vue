<template>
    <v-app>
        <navigation-admin/>
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
            carousel: [],
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
    },
}
</script>