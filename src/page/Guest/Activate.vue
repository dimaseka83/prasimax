<template>
    <v-app>
    <NavigationGuest />
        <v-container class="my-16">
            <h1 class="title blue--text">{{ message }}</h1>
        </v-container>
            <FooterGuest />

    </v-app>
</template>
<script>
import mix from '@/mixins/mix';
  import componentsmix from '@/mixins/componentsmix';
    import axios from 'axios';
export default {
    mixins: [componentsmix, mix],
    data() {
        return {
            message: '',
        }
    },
    created() {
        this.activate();
    },
    methods: {
        async activate() {
            await axios.get(`${this.apibe}user/activate-email?token=${this.$route.params.token}`).then(res => {
                this.message = res.data.message;
            }).catch(err => {
                this.message = err.response.data.message;
            });
        },
    },
}
</script>