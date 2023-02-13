<template>
    <div class="container-section">
        <!-- Button switch -->
        <div class="switch-section">
            <li :class="activeTab === 0 ? 'switch-act' : ''" @click="activeTab = 0">
                {{ $t('sidebar.student') }}
            </li>
            <li :class="activeTab === 1 ? 'switch-act' : ''" @click="activeTab = 1">
                {{ $t('sidebar.teacher') }}
            </li>
            <li :class="activeTab === 2 ? 'switch-act' : ''" @click="activeTab = 2">
                {{ $t('sidebar.staff') }}
            </li>
        </div>

        <!-- Content preview -->
        <div class="content-section">
            <div v-if="activeTab === 0" >
                <prev-student />
            </div>

            <div v-if="activeTab === 1" >
                <prev-teacher />
            </div>

            <div v-if="activeTab === 2" >
                <prev-staff />
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import PrevStudent from '../../../../components/admin/scan/prevStudent.vue';
    import PrevTeacher from '../../../../components/admin/scan/prevTeacher.vue';
    import PrevStaff from '../../../../components/admin/scan/prevStaff.vue';

    export default ({
        components: {
            PrevStudent,
            PrevTeacher,
            PrevStaff
        },
        methods: {
            subIsActive(input) {
                const paths = Array.isArray(input) ? input : [input];
                return paths.some((path) => {
                    return this.$route.path.indexOf(path) === 0;
                });
            },
            parentIsActive(input) {
                const paths = Array.isArray(input) ? input : [input];
                return paths.some((path) => {
                    return this.$route.path.indexOf(path) === 1;
                });
            },
        },
        setup() {
            const activeTab = ref(0);
            return {
                activeTab,
            }
        },
    })
</script>
