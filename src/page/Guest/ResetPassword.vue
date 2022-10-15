<template>
    <v-app>
        <NavigationGuest />
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <v-form class="ma-16">
                        <v-text-field v-model="password" label="Password" outlined dense
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword">
                        </v-text-field>
                        <v-text-field v-model="password" label="Confirm Password" outlined dense
                            :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPasswordConfirmation ? 'text' : 'password'"
                            @click:append="showPasswordConfirmation = !showPasswordConfirmation"></v-text-field>
                        <div class="d-flex justify-end">
                            <v-btn color="primary" @click="resetPassword">Reset Password</v-btn>
                        </div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        <FooterGuest />
    </v-app>
</template>
<script>
    import mix from '@/mixins/mix';
    import componentsmix from '@/mixins/componentsmix';
    export default {
        mixins: [mix, componentsmix],
        data() {
            return {
                formvalidationpassword: {
                    password: '',
                    password_confirmation: '',
                },
                showPassword: false,
                showPasswordConfirmation: false,
                rulespassword: {
                    password: [
                        v => !!v || 'Password is required',
                        v => (v && v.length >= 8) || 'Min 8 characters',
                    ],
                    password_confirmation: [
                        v => !!v || 'Password Confirmation is required',
                        v => (v && v.length >= 8) || 'Min 8 characters',
                    ],
                },
            }
        },
        methods: {
            async resetPassword() {
                try {
                    await axios.post(`${this.apibe}user/forgot`).then((response) => {
                        this.$router.push({ name: 'HomeGuest' });
                    });
                } catch (error) {
                    console.log(error);
                }
            },
        },
    }
</script>