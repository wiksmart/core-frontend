<template>
    <!-- Background -->
    <div class="bg-img-login">
        <img src="../assets/image/Gedung.jpg" alt="Background">
    </div>

    <div class="login-section">
        <div class="login-content">
            <div class="login-desk">
                <!-- Title -->
                <div class="login-title">
                    <p>WIK<span>Smart</span></p>
                </div>

                <!-- Error alert -->
                <div v-if="error" class="alert-error" role="alert">{{ error }}</div>

                <form @submit.prevent="handlersubmit">
                    <!-- Username input -->
                    <div class="login-input">
                        <div class="login-icon">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.8796 26.5833C24.8796 21.9071 20.2275 18.125 14.5 18.125C8.77251 18.125 4.12042 21.9071 4.12042 26.5833M14.5 14.5C16.1024 14.5 17.6391 13.8635 18.7721 12.7304C19.9051 11.5974 20.5417 10.0607 20.5417 8.45832C20.5417 6.85597 19.9051 5.31925 18.7721 4.18622C17.6391 3.05319 16.1024 2.41666 14.5 2.41666C12.8977 2.41666 11.3609 3.05319 10.2279 4.18622C9.09487 5.31925 8.45834 6.85597 8.45834 8.45832C8.45834 10.0607 9.09487 11.5974 10.2279 12.7304C11.3609 13.8635 12.8977 14.5 14.5 14.5Z" stroke="#01005A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <input type="email" v-model="email" placeholder="Email">
                    </div>

                    <!-- Password input -->
                    <div class="login-input">
                        <div class="login-icon">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.775 24.375H9.375C8.6 24.375 7.9125 24.35 7.3 24.2625C4.0125 23.9 3.125 22.35 3.125 18.125V11.875C3.125 7.65 4.0125 6.1 7.3 5.7375C7.9125 5.65 8.6 5.625 9.375 5.625H13.7M18.775 5.625H20.625C21.4 5.625 22.0875 5.65 22.7 5.7375C25.9875 6.1 26.875 7.65 26.875 11.875V18.125C26.875 22.35 25.9875 23.9 22.7 24.2625C22.0875 24.35 21.4 24.375 20.625 24.375H18.775M18.75 2.5V27.5" stroke="#01005A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.8687 15H13.8787M8.86749 15H8.87999" stroke="#01005A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <input :type="show === true ? 'text' : 'password'" placeholder="Password" v-model="password">

                        <div class="login-show-pw" v-if="show" @click="show = !show">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.53 9.46999L9.47002 14.53C8.79902 13.859 8.42206 12.9489 8.42206 12C8.42206 11.5301 8.5146 11.0649 8.69441 10.6308C8.87422 10.1967 9.13777 9.80223 9.47002 9.46999C9.80226 9.13774 10.1967 8.87419 10.6308 8.69438C11.0649 8.51457 11.5302 8.42203 12 8.42203C12.949 8.42203 13.859 8.79899 14.53 9.46999Z" stroke="#01005A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.82 5.77001C16.07 4.45001 14.07 3.73001 12 3.73001C8.47003 3.73001 5.18003 5.81001 2.89003 9.41001C1.99003 10.82 1.99003 13.19 2.89003 14.6C3.68003 15.84 4.60003 16.91 5.60003 17.77M8.42003 19.53C9.56003 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.40001C20.78 8.88001 20.42 8.39001 20.05 7.93001" stroke="#01005A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.51 12.7C15.3745 13.3976 15.0337 14.0387 14.5312 14.5412C14.0287 15.0437 13.3876 15.3845 12.69 15.52M9.47 14.53L2 22M22 2L14.53 9.47" stroke="#01005A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="login-show-pw" v-else @click="show = !show">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.41998 13.98 8.41998 12C8.41998 10.02 10.02 8.42001 12 8.42001C13.98 8.42001 15.58 10.02 15.58 12Z" stroke="#01005A" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47003 3.72 5.18003 5.8 2.89003 9.4C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z" stroke="#01005A" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Forgot password -->
                    <div class="login-forgot-pw">
                        <p>Lupa password? <router-link to="/forgot-password" class="link">klik disini</router-link></p>
                    </div>

                    <!-- Button submit -->
                    <div class="login-submit">
                        <button type="submit">
                            Masuk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Web promotion -->
    <div class="login-promotion">
        <div class="promotion">
            <div class="promotion-logo">
                <img src="../assets/logo/Logo Wikrama.png" alt="Logo">
            </div>

            <div class="text-brand">
                <div class="text-school">
                    <p>SMK WIKRAMA BOGOR</p>
                </div>

                <div class="text-app">
                    <p>WIK<span>Smart</span></p>
                </div>
            </div>
        </div>

        <div class="motto">
            <p>Ilmu yang Amaliah&emsp;|&emsp;Amal yang Ilmiah&emsp;|&emsp;Akhlakul Karimah</p>
        </div>
    </div>

    <!-- Copyright -->
    <div class="login-copyright">
        <p>&copy;2023 WikSmart, <a href="https://smkwikrama.sch.id/" target="_blank">SMK WIKRAMA BOGOR</a></p>
    </div>
</template>

<script>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { apiHost } from "../config"

    export default {
        data: () => {
            return {
                email:'',
                password: '',
                error: '',
                show: false
            }
        },
        methods:{
           async handlersubmit(){  
                try{ 
                    const res = await axios.post(apiHost + 'auth/login', {
                        email: this.email,
                        password: this.password
                    })
                
                    localStorage.setItem('token', res.data.access_token)

                    this.$router.push('/admin/dashboard')
                
                } catch (e) {
                    this.error = 'Invalid email/password !!'
                }
            }
        },
        // setup() { 
            // const tokenWeb = ref('') 

            // const roleWeb = ref('')

            // handlersubmit() = async () => {
            //     const res = await axios
            //     .post(apiHost + 'auth/login', {
            //         email: this.email,
            //         password: this.password
            //     })
            //     localStorage.setItem('token', res.data.token)
            //     this.$router.push('/admin/dashboard')
            // }

            // return {
            //     handlersubmit
            // }

            // const refresh = async () => {
            //     const res = await axios
            //     .get(apiHost + 'regions')
            //     listdata.value = res.data
            //     loadData.value = false
            // }
        // }
    }
</script>