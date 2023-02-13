<template>
    <div class="admin-page">
        <!-- Left side -->
        <div class="admin-sidebar" :class="[wide ? 'simple-side' : 'wide-side']">
            <!-- Sidebar -->
            <Sidebar />

            <!-- Button for smallest sidebar -->
            <div class="button-swipe" :class="[wide ? 'rotate-btn' : '']" @click="toggleSide()" :title="wide ? $t('hint.wideSide') : $t('hint.simpleSide')">
                <div class="bg-btn-swipe">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 16.6L7.06667 11.1667C6.425 10.525 6.425 9.47503 7.06667 8.83336L12.5 3.40002" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Backdrop -->
        <div class="bg-dark-focus" :class="[wide ? 'opacity-off' : 'opacity-on']"></div>

        <!-- Right side -->
        <div class="admin-container" :class="[wide ? 'wide-content' : 'short-content']">
            <!-- Navbar -->
            <Navbar />

            <!-- Button for sidebar -->
            <div class="btn-wide-mb" @click="toggleSide()">
                <font-awesome-icon icon="bars" />
            </div>

            <!-- Container page -->
            <div class="content-scroll">
                <div class="admin-content">
                    <RouterView />
                </div>
                
                <!-- Footer -->
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, ref } from "vue";
    import Sidebar from '../../components/admin/sidebar.vue';
    import Navbar from '../../components/admin/navbar.vue';
    import Footer from '../../components/admin/footer.vue';

    export default defineComponent({
        name: "Admin Page",
        components: {
            Sidebar,
            Navbar,
            Footer
        },
        methods: {
            toggle(payload) {
                this.isDarkmode = payload
            }
        },
        setup() { 
            let wide = ref(false)

            function toggleSide() {
                wide.value = !wide.value
            }

            // const theme = JSON.parse(localStorage.getItem('theme'))

            return {
                wide,
                toggleSide,
                // theme
            }
        },
        mounted() {
            this.toggle(JSON.parse(localStorage.getItem('theme')))
        }
    });
</script>