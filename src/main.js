import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes/index.js';
import './assets/base.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faChevronDown, faRightFromBracket, faDesktop, faSchool, faHouse, faMapLocationDot, faUsers, faMicrochip, faUserTie, faBarcode, faIdCard, faClipboardUser, faPenToSquare, faClipboardList, faTrashCan, faBookOpenReader, faList, faBorderAll, faPlusCircle, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createI18n, useI18n } from 'vue-i18n';
import { languages } from './i18n';
import { defaultLocale } from './i18n';

library.add(faBars, faChevronDown, faRightFromBracket, faDesktop, faSchool, faHouse, faMapLocationDot, faUsers, faMicrochip, faUserTie, faBarcode, faIdCard, faClipboardUser, faPenToSquare, faClipboardList, faTrashCan, faBookOpenReader, faList, faBorderAll, faPlusCircle, faCalendarDays, faBell, faUser, faNfcSymbol, faCircleQuestion);
const localeStorageLang = localStorage.getItem('lang');

const messages = Object.assign(languages);

const i18n = createI18n ({
    legacy: false,
    locale: localeStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
})

createApp(App, {
    setup() {
        const {t} = useI18n();
        return {t};
    }
})
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(routes)
    .use(i18n)
    .mount('#app');
