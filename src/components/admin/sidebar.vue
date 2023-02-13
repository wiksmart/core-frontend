<template>
    <div class="sidebar-adm">
        <div class="logo-adm">
            <div class="content-logo">
                <img src="../../assets/logo/Logo Wikrama.png" alt="logo">

                <div class="text-logo-adm">
                    <p>WIK<span>Smart</span></p>
                </div>
            </div>
        </div>

        <div class="sidebar-container">
            <div class="group-menu">
                <!-- Singel menu (Dashboard) -->
                <RouterLink class="menu-sidebar" to="/admin/dashboard" exact-path>
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-desktop" />
                        </span>

                        <p>{{ $t('sidebar.dashboard') }}</p>
                    </li>
                </RouterLink>

                <!-- Parent menu (School) -->
                <div class="menu-sidebar">
                    <div class="menu-parent" :class="{'parent-menu': subIsActive(['/admin/school/class', '/admin/school/rayon', '/admin/school/major']),}">
                        <li>
                            <span @click="dropmenu1 = true">
                                <font-awesome-icon icon="fa-solid fa-school" />
                            </span>

                            <p  @click="dropmenu1 = true">{{ $t('sidebar.school') }}</p>

                            <span class="drop-arrow"  @click="dropmenu1 = !dropmenu1" :class="dropmenu1 ? 'droprot' : ''">
                                <font-awesome-icon class="icon-ar-lang" icon="fa-solid fa-chevron-down"/>
                            </span>
                        </li>
                    </div>

                    <!-- Child menu -->
                    <div class="menu-child" :class="dropmenu1 ? 'droping' : 'dropup'">
                        <RouterLink to="/admin/school/major">
                            <li>
                                <span>
                                    <font-awesome-icon icon="fa-solid fa-book-open-reader" />
                                </span>

                                <p>{{ $t('sidebar.major') }}</p>
                            </li>
                        </RouterLink>

                        <RouterLink to="/admin/school/class">
                            <li>
                                <span>
                                    <font-awesome-icon icon="fa-solid fa-house" />
                                </span>

                                <p>{{ $t('sidebar.rombel') }}</p>
                            </li>
                        </RouterLink>

                        <RouterLink to="/admin/school/rayon">
                            <li>
                                <span>
                                    <font-awesome-icon icon="fa-solid fa-map-location-dot" />
                                </span>

                                <p>{{ $t('sidebar.rayon') }}</p>
                            </li>
                        </RouterLink>

                        <RouterLink to="/admin/school/academic-year">
                            <li>
                                <span>
                                    <font-awesome-icon icon="fa-solid fa-calendar-days" />
                                </span>

                                <p>{{ $t('sidebar.acaYear') }}</p>
                            </li>
                        </RouterLink>
                    </div>
                </div>

                <!-- Singel menu (Users) -->
                <RouterLink class="menu-sidebar" to="/admin/users">
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-users" />
                        </span>

                        <p>{{ $t('sidebar.users') }}</p>
                    </li>
                </RouterLink>

                <!-- Singel menu (Scan) -->
                <RouterLink class="menu-sidebar" to="/admin/scan">
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-brands fa-nfc-symbol" />
                        </span>

                        <p>{{ $t('sidebar.scan') }}</p>
                    </li>
                </RouterLink>

                <!-- Singel menu (Machine) -->
                <RouterLink class="menu-sidebar" to="/admin/machine">
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-microchip" />
                        </span>

                        <p>{{ $t('sidebar.machine') }}</p>
                    </li>
                </RouterLink>
            </div>

            <div class="group-menu">
                <!-- Singel menu (Last tap) -->
                <RouterLink class="menu-sidebar" to="/admin/last-tap" exact-path>
                    <li>
                        <span>
                            <font-awesome-icon icon="fa-solid fa-id-card" />
                        </span>

                        <p>{{ $t('sidebar.lastTap') }}</p>
                    </li>
                </RouterLink>

                <!-- Singel menu (Logout) -->
                <div class="menu-sidebar side-logout">
                    <li>
                        <p v-on:click="handlerClick">{{ $t('navMenu.logout') }}</p>

                        <span>
                            <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                        </span>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
       
        methods: {
            subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input];
                return paths.some((path) => {
                    return this.$route.path.indexOf(path) === 0; // current path starts with this path string
                });
            },
            handlerClick(){
                localStorage.removeItem('token')
                this.$router.push('/')
            }
        },
        setup() {
            return {
                dropmenu1: ref(false),
                dropmenu2: ref(false),
                dropmenu3: ref(false),
            }
        }
    }
</script>