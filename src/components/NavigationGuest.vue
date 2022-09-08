<template>
    <div>
        <v-container>
            <v-card flat class="d-flex">
                <v-card flat class="mr-auto pa-2">
                    <v-img src="@/assets/images/logo.png" max-width="300"></v-img>
                </v-card>
                <v-card flat class="pa-2">
                    <v-text-field dense rounded outlined class="rounded-xl" label="Masukkan kata yang dicari"
                        prepend-inner-icon="mdi-magnify">
                    </v-text-field>
                </v-card>
                <v-card flat class="pa-2">
                    <v-btn color="primary" class="rounded-xl">
                        <v-icon left>mdi-import</v-icon>
                        Login
                    </v-btn>
                    <v-btn color="white" class="ml-2 rounded-xl blue--text">
                        <v-icon left>mdi-import</v-icon>
                        Register
                    </v-btn>
                </v-card>
            </v-card>
        </v-container>
        <v-app-bar dense flat dark src="@/assets/images/dummy/rectangle.svg">
            <div v-for="(nav, idx) in menu" :key="idx + 'nav'">
                <v-hover v-slot="{hover}">
                    <v-btn text v-if="nav.submenu == undefined" :style="{'background-color': hover ? '#03A9F4' : ''}" :disabled="disableButton(nav.link)" @click="route(nav.link)">{{ nav.name }}</v-btn>
                </v-hover>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
import mixin from '../mixins/mix';
export default {
  name: 'NavigationGuest',
  mixins: [mixin],
  methods: {
    disableButton(link){
        if(link == this.$route.path){
            return true;
        }
    }
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

button:disabled,
button[disabled]{
    background-color: #03A9F4 !important;
}

</style>
