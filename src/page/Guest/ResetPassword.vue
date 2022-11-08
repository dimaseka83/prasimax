<template>
    <v-app>
        <NavigationGuest />
        <v-container fill-height fluid>
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <v-form :class="nosm ? 'ma-16 ' : 'ma-4'" ref="resetPassword" v-model="rulespassword.valid" lazy-validation>
                        <v-text-field v-model="formvalidationpassword.password" label="Password" outlined dense
                            :rules="rulespassword.password"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword">
                        </v-text-field>
                        <v-text-field v-model="formvalidationpassword.password_confirmation" label="Confirm Password" outlined dense
                            :rules="rulespassword.password_confirmation"
                            :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPasswordConfirmation ? 'text' : 'password'"
                            @click:append="showPasswordConfirmation = !showPasswordConfirmation"></v-text-field>
                        <div class="d-flex justify-end">
                            <v-progress-circular
                                indeterminate
                                color="primary"
                                v-if="loading"
                                ></v-progress-circular>
                            <v-btn color="primary" @click="resetPassword" v-else>Reset Password</v-btn>
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
    import axios from 'axios';
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
                    valid: false,
                    password: [
                        v => !!v || 'Password is required',
                        v => (v && v.length >= 8) || 'Min 8 characters',
                    ],
                    password_confirmation: [
                        v => !!v || 'Password Confirmation is required',
                        v => (v && v.length >= 8) || 'Min 8 characters',
                        v => v === this.formvalidationpassword.password || 'Konfirmasi Password tidak sama dengan Password',
                    ],
                },
                loading: false,
            }
        },
        methods: {
            async resetPassword() {
                if(this.$refs.resetPassword.validate()){
                    this.loading = true;
                    try {
                        let data = {
                            token: this.$route.params.token,
                            password: this.formvalidationpassword.password,
                        }
                        await axios.post(`${this.apibe}user/reset-password`, data).then((response) => {
                            this.$swal({
                                title: 'Sukses',
                                text: 'Password berhasil diubah',
                                icon: 'success',
                                timer: 2000,
                                showConfirmButton: false,
                            });
                            setTimeout(() => {
                                this.$router.push({ name: 'HomeGuest' });
                            }, 500);
                        });
                    } catch (error) {
                        console.log(error);
                    }
                    this.loading = false;
                }
            },
        },
    }
</script>