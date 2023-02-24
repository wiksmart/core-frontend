<template>
    <div class="navbar-adm">
        <!-- Navbar -->
        <div class="navbar-container">
            <div class="title-page">
                <div class="subtitle-page">
                    <!-- {{ currentRouteName }} -->
                    {{ hours }}:{{ minutes }} | {{ days }}, {{ timestamp }}
                </div>
            </div>

            <!-- Navbar menu -->
            <div class="nav-menu">
                <!-- Notification -->
                <div
                    class="nav-notif"
                    @click="dropnotif = !dropnotif"
                    :title="$t('hint.notif')"
                >
                    <font-awesome-icon class="icon" icon="fa-regular fa-bell" />

                    <div class="nav-not-badge">9</div>

                    <!-- Preview notification -->
                    <div
                        class="prev-notif"
                        :class="dropnotif ? 'show-notif' : 'hide-notif'"
                        @click="dropnotif = false"
                    >
                        <div class="header-prev-notif">
                            <p>{{ $t("notification.notif") }}</p>
                        </div>

                        <div class="content-prev-notif">
                            <div class="main-notif">
                                <div class="main-message">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Dignissimos ducimus
                                    recusandae at quibusdam error, incidunt
                                    maiores ipsum autem, consectetur aperiam
                                    fuga numquam neque eum nihil quas itaque
                                    asperiores nulla voluptatem.
                                </div>
                                <div class="main-time">08:00</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Profile & menu -->
                <div
                    class="nav-profile"
                    @click="dropmenu = !dropmenu"
                    :title="$t('hint.profile')"
                >
                    <div class="pro-img">
                        <!-- <img src="../../assets/image" alt=""> -->
                        <font-awesome-icon icon="fa-regular fa-user" />
                    </div>

                    <div class="pro-name">
                        <p>{{ username }}</p>
                    </div>

                    <div class="pro-icon" :class="dropmenu ? 'rot-icon' : ''">
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </div>
                </div>
            </div>

            <!-- More menu from profile -->
            <div
                class="menu-profile"
                :class="dropmenu ? 'swipe-content' : 'swipe-hide'"
            >
                <div class="prev-profile">
                    <div class="prev-img">
                        <!-- <img src="../../assets/logo/Logo Wikrama.png" alt=""> -->
                        <font-awesome-icon icon="fa-regular fa-user" />
                    </div>

                    <div class="prev-name">
                        <p>{{ username }}</p>
                    </div>

                    <div class="prev-role">
                        <p>{{ roleStatus }}</p>
                    </div>
                </div>

                <div class="submenu-pro">
                    <li>
                        {{ $t("navMenu.profile") }}
                    </li>
                    <li class="lang-switch" @click="buttonLang = !buttonLang">
                        <p v-if="locale == 'en'">English</p>
                        <p v-else>Indonesia</p>
                        <font-awesome-icon
                            class="icon-ar-lang"
                            icon="fa-solid fa-chevron-down"
                        />

                        <div class="switch-lang" v-show="buttonLang">
                            <button type="button" @click="switchLang2">
                                Indonesia
                            </button>
                            <button type="button" @click="switchLang">
                                English
                            </button>
                        </div>
                    </li>
                    <li class="lang-switch">
                        {{ $t("navMenu.darkmode") }}
                        <div class="tog-2" @click="toggle(!isDarkmode)">
                            <div
                                class="btn-tog-2"
                                :class="!isDarkmode ? 'tog-rg' : 'tog-lf'"
                            ></div>
                        </div>
                    </li>
                    <li class="lang-switch">
                        {{ $t("navMenu.logout") }}
                        <font-awesome-icon
                            icon="fa-solid fa-right-from-bracket"
                        />
                    </li>
                </div>
            </div>
        </div>
        <div
            :class="dropmenu || dropnotif ? 'close-menu' : 'show-menu'"
            @click=";[(dropmenu = false), (dropnotif = false)]"
        ></div>
    </div>
</template>

<script>
import { ref } from "vue"
import { useI18n } from "vue-i18n"

export default {
    data() {
        return {
            isDarkmode: false,
            hours: 0,
            minutes: 0,
            timestamp: "",
            days: "",
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name
        },
    },
    methods: {
        toggle(payload) {
            this.isDarkmode = payload
            document.documentElement.className = payload
            localStorage.setItem("theme", payload)
        },
        setTime() {
            const month = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
            const weekday = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
            const date = new Date()
            let hours = date.getHours()
            let minutes = date.getMinutes()
            let seconds = date.getSeconds()
            let day = weekday[date.getDay()]
            const timestamps =
                date.getDate() +
                " " +
                month[date.getMonth()] +
                " " +
                date.getFullYear()
            hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours
            minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes
            seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds
            this.hours = hours
            this.minutes = minutes
            this.seconds = seconds
            this.timestamp = timestamps
            this.days = day
        },
    },
    setup() {
        const { t, locale } = useI18n()

        const switchLang = () => {
            locale.value === "id"
                ? (locale.value = "en")
                : (locale.value = "en")
            localStorage.setItem("lang", locale.value)
        }

        const switchLang2 = () => {
            locale.value === "en"
                ? (locale.value = "id")
                : (locale.value = "id")
            localStorage.setItem("lang", locale.value)
        }

        const roleStatus = localStorage.getItem("role")

        const username = localStorage.getItem("name")

        return {
            t,
            locale,
            switchLang,
            switchLang2,
            roleStatus,
            username,
            buttonLang: ref(false),
            dropmenu: ref(false),
            dropnotif: ref(false),
        }
    },
    mounted() {
        this.toggle(JSON.parse(localStorage.getItem("theme")))

        setInterval(() => this.setTime(), 1000)
    },
}
</script>
