<template>
    <div class="container-section">
        <div class="load-base" :class="loadData ? 'load-base-show' : ''"><Loading /></div>

        <div class="content-section">
            <div class="content-header">
                <span>
                    <font-awesome-icon icon="fa-solid fa-house" />&emsp;{{ $t('sidebar.rombel') }}
                </span>

                <span class="switch-mode">
                    <button @click="modalAdd = true"><font-awesome-icon icon="fa-solid fa-circle-plus" /><p>{{ $t('menu.add') }}</p></button>
                </span>
            </div>

            <div class="content-table">
                <table>
                    <thead>
                        <tr>
                            <th>{{ $t('table.no') }}</th>
                            <th>{{ $t('tableClass.prodi') }}</th>
                            <th>{{ $t('tableClass.major') }}</th>
                            <th>{{ $t('tableClass.desc') }}</th>
                            <th>{{ $t('tableClass.level') }}</th>
                            <th>{{ $t('tableClass.classNo') }}</th>
                            <th width="100px">{{ $t('table.action') }}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(data, index) in listdata.value" :key="data.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ data.major.competency }}</td>
                            <td>{{ data.major.name }}</td>
                            <td>{{ data.major.description }}</td>
                            <td>{{ data.level }}</td>
                            <td>{{ data.no_class }}</td>
                            <td>
                                <span class="btn-action">
                                    <button :title="$t('table.edit')"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
                                    <button :title="$t('table.detail')"><font-awesome-icon icon="fa-solid fa-clipboard-list" /></button>
                                    <button :title="$t('table.delete')"><font-awesome-icon icon="fa-solid fa-trash-can" /></button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="modal" :class="modalAdd ? 'show-modal' : 'hide-modal'">
        <modal-add @cancel-click="cancelClick"/>
        <div class="close-modal" @click="modalAdd = false"/>
    </div>
</template>

<script>
    import { onMounted, onUpdated, reactive, ref } from "vue";
    import axios from "axios";
    import { apiHost } from "../../../../config"
    import Loading from '../../../../components/loading.vue';
    import ModalAdd from '../../../../components/admin/school/class/addModal.vue';

    export default {
        components: {
            Loading,
            ModalAdd
        },
        setup() {
            const cancelClick = (event, item) => { 
                if(modalAdd.value) {
                    modalAdd.value = false
                } else {
                    modalAdd.value = true
                }
            }

            const listdata = reactive([]);

            const loadData = ref(true)

            const modalAdd = ref(false)

            const refresh = async () => {
                const res = await axios
                .get(apiHost + 'classes' )
                listdata.value = res.data
                loadData.value = false
            }

            onMounted(() => {
                refresh();
            });

            return {
                listdata,
                loadData,
                modalAdd,
                cancelClick,
            }
        },
    }
</script>