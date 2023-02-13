<template>
    <div class="nf-logo">
        <img src="../assets/logo/Logo Wikrama.png" alt="Logo">
    </div>

    <div class="notfound-page">
        <div class="nf-content">
            <div class="nf-brand">
                <p>WIK<span>Smart</span></p>
            </div>

            <div class="nf-error">
                <img src="../assets/image/notfound.png" alt="404">
                <span>ERROR NOT FOUND</span>
            </div>

            <div class="nf-action">
                <div class="nf-text">
                    <p>{{ $t('notFound.message') }}</p>
                </div>

                <div class="nf-button">
                    <button type="button" @click="goBack()">
                        {{ $t('notFound.back') }}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="login-copyright nf-copy">
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