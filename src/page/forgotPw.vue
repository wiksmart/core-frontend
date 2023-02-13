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

                <form>
                    <!-- Username input -->
                    <div class="login-input">
                        <div class="login-icon">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.8796 26.5833C24.8796 21.9071 20.2275 18.125 14.5 18.125C8.77251 18.125 4.12042 21.9071 4.12042 26.5833M14.5 14.5C16.1024 14.5 17.6391 13.8635 18.7721 12.7304C19.9051 11.5974 20.5417 10.0607 20.5417 8.45832C20.5417 6.85597 19.9051 5.31925 18.7721 4.18622C17.6391 3.05319 16.1024 2.41666 14.5 2.41666C12.8977 2.41666 11.3609 3.05319 10.2279 4.18622C9.09487 5.31925 8.45834 6.85597 8.45834 8.45832C8.45834 10.0607 9.09487 11.5974 10.2279 12.7304C11.3609 13.8635 12.8977 14.5 14.5 14.5Z" stroke="#01005A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <input type="text" placeholder="Username">
                    </div>

                    <!-- Alert -->
                    <div class="login-forgot-pw" style="text-align: center;">
                        <p>Masukan Username lalu klik tombol Kirim untuk mendapatkan Password baru!</p>
                    </div>

                    <!-- Button submit -->
                    <div class="login-submit">
                        <button type="submit">
                            Kirim
                        </button>

                        <button type="button" @click="goBack()">
                            Kembali
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
        <p>&copy;2023 WIKSmart, <a href="https://smkwikrama.sch.id/" target="_blank">SMK WIKRAMA BOGOR</a></p>
    </div>
</template>

<script>
    const data = {
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    };

    export default data;
</script>