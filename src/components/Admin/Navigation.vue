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
            <v-list-group :value="true" prepend-icon="mdi-engine" no-action>
                <template v-slot:activator>
                    <v-list-item-title>Lowongan</v-list-item-title>
                </template>
                <v-list-item v-for="(low, i) in lowongan" :key="'low' + i" @click="menuklik(low.href)">
                    <v-list-item-icon>
                        <v-icon>{{ low.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ low.title }}</v-list-item-title>
                </v-list-item>
            </v-list-group>
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
                },
                {
                    title: 'Partnership',
                    icon: 'mdi-engine',
                    href: '/admin/partnership'
                },
                {
                    title: 'Contact',
                    icon: 'mdi-engine',
                    href: '/admin/contact'
                },
                {
                    title: 'Jasa',
                    icon: 'mdi-engine',
                    href: '/admin/jasa'
                },
                {
                    title: 'Pesanan',
                    icon: 'mdi-engine',
                    href: '/admin/pesanan'
                },
                {
                    title: 'Berita',
                    icon: 'mdi-engine',
                    href: '/admin/berita'
                },
            ],
            lowongan: [
                {
                    title: 'Data Lowongan',
                    icon: 'mdi-engine',
                    href: '/admin/lowongan'
                },
                {
                    title: 'Pelamar Lowongan',
                    icon: 'mdi-engine',
                    href: '/admin/pelamar'
                },
                {
                    title: 'Kode Lowongan',
                    icon: 'mdi-engine',
                    href: '/admin/kodeLowongan'
                }
            ],
        }
    },
    methods: {
        menuklik(href) {
            this.$router.push(href)
        }
    }
}
</script>