<template>
    <Transition name="fade" appear>
        <div class="bg-loading" v-if="!isLoaded">
            <div class="content">
                <!-- Logo -->
                <div class="logo">
                    <img src="../assets/logo/Logo Wikrama.png" alt="Logo">
                </div>

                <!-- Text -->
                <div class="text">
                    <h1>
                        <span>WIK</span>Smart
                    </h1>
                </div>

                <!-- Loading circle -->
                <div class="ring">
                    <img src="../assets/image/load.png" alt="Loading...">
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
    export default {
        data: () => {
            return {
                isLoaded: false
            }
        },
        mounted() {
            document.onreadystatechange = () => {
                if(document.readyState == "complete") {
                    setTimeout(() => {
                        this.isLoaded = true;
                    }, 3000);
                }
            }
        }
    }
</script>

<style>
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>