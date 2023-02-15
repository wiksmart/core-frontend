import { createRouter, createWebHistory } from 'vue-router';

import Login from '../page/login.vue';
import NotFound from '../page/notfound.vue';
import ForgotPw from '../page/forgotPw.vue';
import Admin from '../page/admin/index.vue';
import Dashboard from '../page/admin/page/index.vue';
import Major from '../page/admin/page/school/major.vue';
import Class from '../page/admin/page/school/class.vue';
import Rayon from '../page/admin/page/school/rayon.vue';
import AcademicYear from '../page/admin/page/school/academicYear.vue';
import Users from '../page/admin/page/users/index.vue';
import Scan from '../page/admin/page/scan/index.vue';
import Machine from '../page/admin/page/machine/index.vue';
import LastTap from '../page/admin/page/lastTap/index.vue';



const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
        meta: { title: "Masuk", authPage:true}
    },
    {
        path: "/forgot-password",
        name: "Forgot Password",
        component: ForgotPw,
        meta: { title: "Lupa Password" }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not Found",
        component: NotFound,
        meta: { title: "Not Found" }
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: { title: "Admin" },
        children: [
            { 
                path: '/admin/dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: { title: "Dashboard",
                 requireAuth : true},
            },
            { 
                path: '/admin/school/major',
                name: 'Major',
                component: Major,
                meta: { title: "Major" },
            },
            { 
                path: '/admin/school/class',
                name: 'Class',
                component: Class,
                meta: { title: "Class" },
            },
            { 
                path: '/admin/school/rayon',
                name: 'Rayon',
                component: Rayon,
                meta: { title: "Rayon" },
            },
            { 
                path: '/admin/school/academic-year',
                name: 'Academic Year',
                component: AcademicYear,
                meta: { title: "Academic Year" },
            },

            { 
                path: '/admin/users',
                name: 'Users ',
                component: Users,
                meta: { title: "Users" },
            },
            { 
                path: '/admin/scan',
                name: 'Scan',
                component: Scan,
                meta: { title: "Scan" },
            },
            { 
                path: '/admin/machine',
                name: 'Machine',
                component: Machine,
                meta: { title: "Machine" },
            },
            { 
                path: '/admin/last-tap',
                name: 'Last Tap',
                component: LastTap,
                meta: { title: "Last Tap" },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const isAuthenticated = true

router.beforeEach(async (to, from, next) => {
    document.title = 'WIKSmart - ' + `${to.meta.title}`;
    if(to.name !== 'Login' && !isAuthenticated) next({name: 'Login'});
    // if(to.name === 'Login' && isAuthenticated) next({name: 'Dashboard'});
    // if(to.name === 'Logout ' && isAuthenticated) next({name: 'Login'});


    else

     next()
});

export default router;