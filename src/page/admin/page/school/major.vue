<template>
    <div class="container-section">
        <!-- <div class="load-base" :class="loadData ? 'load-base-show' : ''"><Loading /></div> -->

        <div class="content-section">
            <div class="content-header">
                <span>
                    <font-awesome-icon icon="fa-solid fa-map-location-dot" />&emsp;{{ $t('sidebar.major') }}
                </span>

                <span class="switch-mode">
                    <button @click="modalAdd = true"><font-awesome-icon icon="fa-solid fa-circle-plus" /><p>{{ $t('menu.add') }}</p></button>
                </span>
            </div>

            <div class="content-table">
                <table>
                    <p>listdata.value</p>
                    
                    <thead>
                        <tr>
                            <th>{{ $t('table.no') }}</th>
                            <th>{{ $t('tableClass.prodi') }}</th>
                            <th>{{ $t('tableClass.major') }}</th>
                            <th>{{ $t('tableClass.desc') }}</th>
                            <th width="100px">{{ $t('table.action') }}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(data, index) in listdata.value" :key="data.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ data.competency }}</td>
                            <td>{{ data.name }}</td>
                            <td>{{ data.description }}</td>
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

    <div class="modal" :class="modalDetail ? 'show-modal' : 'hide-modal'">
        <div class="close-modal" @click="modalDetail = false"/>
    </div>

    <div class="modal" :class="modalDelete ? 'show-modal' : 'hide-modal'">
        <div class="close-modal" @click="modalDelete = false"/>
    </div>
</template>

<script>
    import { onMounted, onUpdated, reactive, ref } from "vue";
    import axios from "axios";
    import { apiHost } from "../../../../config"
    import Loading from '../../../../components/loading.vue';
    import ModalAdd from '../../../../components/admin/school/major/addModal.vue';
import { useRouter, useRoute } from 'vue-router'


    export default {
        components: {
            Loading,
            ModalAdd
        },
        setup(props, {emit}) {
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

            const router = useRouter()

            //vue router
            const route = useRoute()

            const refresh = async () => {
                const res = await axios
                    .get(`http://localhost:3000/majors/${route.params.id}`)
          console.log(res.data)
                // loadData.value = false
            }

            onMounted(() => {
                refresh();
            });

            return {
                cancelClick,
                router,
                listdata,
                loadData,
                modalAdd,
                modalDetail: ref(false),
                modalDelete: ref(false),
            }
        },
    }
</script>