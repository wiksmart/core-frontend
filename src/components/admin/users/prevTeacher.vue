<template>
    <div class="load-base-switch" :class="loadData ? 'load-base-show' : ''"><Loading /></div>

    <div class="content-header">
        <span>
            <font-awesome-icon icon="fa-solid fa-user-tie" />&emsp;{{ $t('sidebar.users') }} {{ $t('sidebar.teacher') }}
        </span>

        <span class="switch-mode">
            <span @click="switchCard = 0" title="List" :class="switchCard === 0 ? 'listcard-act' : ''"><font-awesome-icon icon="fa-solid fa-list" /></span>
            <span @click="switchCard = 1" title="Card" :class="switchCard === 1 ? 'listcard-act' : ''"><font-awesome-icon icon="fa-solid fa-border-all" /></span>
            |
            <button @click="modalAdd = true"><font-awesome-icon icon="fa-solid fa-circle-plus" /><p>{{ $t('menu.add') }}</p></button>
        </span>
    </div>

    <div class="content-table" v-if="switchCard === 0">
        <table>
            <thead>
                <tr>
                    <th>{{ $t('table.no') }}</th>
                    <th>{{ $t('table.pict') }}</th>
                    <th>{{ $t('table.name') }}</th>
                    <th>{{ $t('table.email') }}</th>
                    <th>{{ $t('table.position') }}</th>
                    <th width="100px">{{ $t('table.action') }}</th>
                </tr>
            </thead>

            <tbody>
              
                <tr  v-for="(data, index) in listdata.value" :key="data.id">
                    <td>{{ index + 1 }}</td>
                    <td><img src="../../../assets/image/IMG_20211214_194210-picsay.jpg" alt="Pict" @click="modalImg = true"></td>
                    <td>{{ data.name }}</td>
                    <td>{{ data.email }}</td>
                    <td>{{ data.division }}</td>
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

    <div class="content-table" v-if="switchCard === 1">
        <div class="table-card">
            <div class="card-data"  v-for="(data, index) in listdata.value" :key="data.id">
                <div class="card-img">
                    <img src="../../../assets/image/IMG_20211214_194210-picsay.jpg" alt="Pict" @click="modalImg = true">
                </div>
                <div class="text-content">
                    <p>{{ data.name }}</p>
                    <p>{{ $t('table.position') }} | {{ data.division }}</p>
                </div>
                <div class="text-detail">
                    <p>{{ data.email }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" :class="modalImg ? 'show-modal' : 'hide-modal'">
        <div class="modal-img">
            <img src="../../../assets/logo/Logo Wikrama.png" alt="">
        </div>
        <div class="close-modal" @click="modalImg = false"/>
    </div>
</template>

<script>
import { onMounted, reactive, ref} from "vue"
import axios from "axios"
import Loading from '../../../components/loading.vue';
import { apiHost } from "../../../config"


    export default {
        components: {
            Loading
        },
        setup() {
            const listdata = reactive([])
            const switchCard = ref(0);
            const loadData = ref(true)

            const refresh = async () => {
                const res = await axios.get(apiHost + 'teachers?=TEACHER')
                listdata.value = res.data
                loadData.value = false

            }

            onMounted(() => {   
                refresh()
            })

            return {
                switchCard,
                modalImg: ref(false),
                listdata,
                loadData

            }
        }
    }
</script>