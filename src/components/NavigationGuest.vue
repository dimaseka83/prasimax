<template>
    <div>
        <v-container>
            <v-card flat class="d-flex">
                <v-card flat class="mr-auto pa-2">
                    <v-img src="@/assets/images/logo.png" max-width="300"></v-img>
                </v-card>
                <v-card flat class="pa-2">
                    <v-text-field
                    dense
                    rounded
                    outlined
                    class="rounded-xl"
                    label="Masukkan kata yang dicari"
                    prepend-inner-icon="mdi-magnify"
                    >
                    </v-text-field>
                </v-card>
                <v-card flat class="pa-2">
                    <v-btn
                    color="primary"
                    class="rounded-xl"
                    >
                    <v-icon left>mdi-import</v-icon>
                    Login
                    </v-btn>
                </v-card>
            </v-card>
        </v-container>
            <v-app-bar dense flat dark>
                <div v-for="(nav, idx) in menu" :key="idx + 'nav'">
                    <v-btn text v-if="nav.submenu == undefined">{{ nav.name }}</v-btn>
                    <v-menu offset-y v-else>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            text
                            v-bind="attrs"
                            v-on="on"
                            >
                            {{ nav.name }}
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(sub, i) in nav.submenu" :key="i + 'submenu'">
                                <v-list-item-title>{{ sub.name }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                </div>
            </v-app-bar>
    </div>
</template>
<script>
import mixin from '../mixins/mix';

export default {
  name: 'NavigationGuest',
  mixins: [mixin],
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #2196F3;
}
.v-text-field--outlined >>> label {
  color: #2196F3;
}
.v-text-field--outlined >>> .v-icon {
  color: #2196F3 !important;
}
</style>
