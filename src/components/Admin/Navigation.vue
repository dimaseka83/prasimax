<template>
    <div>
        <v-app-bar absolute color="blue" elevate-on-scroll scroll-target="#scroll-techniques-7">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn icon @click="logout">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense v-for="(men, i) in menus" :key="'menu' + i">
                <v-list-item active-class="blue--text text--accent-4" @click="menuklik(men.href)">
                    <v-list-item-icon>
                        <v-icon>{{ men.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ men.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import mixin from '@/mixins/mix';
export default {
    mixins: [mixin],
    data() {
        return {
            drawer: false,
            menus: [
                {
                    title: 'Home',
                    icon: 'mdi-home',
                    href: '/admin'
                },
                {
                    title: 'About',
                    icon: 'mdi-account',
                    href: '/admin/about'
                },
                {
                    title: 'Information',
                    icon: 'mdi-information',
                    href: '/admin/information'
                },
                {
                    title: 'Products',
                    icon: 'mdi-package-variant',
                    href: '/admin/products'
                },
                {
                    title: 'Technical',
                    icon: 'mdi-engine',
                    href: '/admin/technical'
                },
                {
                    title: 'Service',
                    icon: 'mdi-engine',
                    href: '/admin/service'
                }
            ]
        }
    },
    methods: {
        menuklik(href) {
            this.$router.push(href)
        }
    }
}
</script>