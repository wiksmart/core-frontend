<template>
    <div class="content-header">
        <span>
            <font-awesome-icon icon="fa-solid fa-users" />&emsp;{{ $t('sidebar.scan') }} {{ $t('sidebar.student') }}
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
                    <th>{{ $t('table.rfid') }}</th>
                    <th>{{ $t('table.nis') }}</th>
                    <th>{{ $t('table.name') }}</th>
                    <th>{{ $t('table.room') }}</th>
                    <th>Status</th>
                    
                </tr>
            </thead>

            <tbody>
            
                <tr  v-for="(data, index) in listdata.value" :key="data.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ data.rfid }}</td>
                    <td>{{ data.user.nis }}</td>
                    <td>{{ data.user.name }}</td>
                    <td>{{ data.machine.room }}</td>
                    <td>{{ data.status}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { onMounted, onUpdated, reactive, ref } from "vue"
import axios from "axios"
import Loading from '../../../components/loading.vue'
import { apiHost } from "../../../config"

export default {
    components: {
        Loading
    },
    setup() {
        const listdata = reactive([])
        const switchCard = ref(0)

        const refresh = async () => {
            const res = await axios
                .get(apiHost + 'scans')
            listdata.value = res.data
            loadData.value = false
        }

        const loadData = ref(true)

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