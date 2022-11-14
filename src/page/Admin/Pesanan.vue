<script>
import axios from 'axios';
import mix from '@/mixins/mix'
import NavigationAdmin from '@/components/Admin/Navigation.vue'

export default {
    mixins: [mix],
    components: {
        NavigationAdmin
    },
    data() {
        return {
            pesananAdmin: [],            
        }
    },
    created() {
        this.getPesananAdmin()
    },
    methods: {
        async getPesananAdmin() {
            await axios.get(`${this.apibe}`, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            }).then(res => {
                this.pesananAdmin = res.data
            }).catch(err => {
                console.log(err)
            })
        },
    },
}
</script>
<template>
    <v-app>
        <navigation-admin />
    </v-app>
</template>