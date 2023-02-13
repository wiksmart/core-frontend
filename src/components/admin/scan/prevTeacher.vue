<template>
    <div class="content-header">
        <span>
            <font-awesome-icon icon="fa-solid fa-user-tie" />&emsp;{{ $t('sidebar.scan') }} {{ $t('sidebar.teacher') }}
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
                    <th>{{ $t('table.nip') }}</th>
                    <th>{{ $t('table.name') }}</th>
                    <th>{{ $t('table.position') }}</th>
                    <th>{{ $t('table.room') }}</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>0xfc 0xb5 0x4d 0x17</td>
                    <td>12007875</td>
                    <td>Mada Dwi Saputra</td>
                    <td>Laboran</td>
                    <td>322</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        setup() {
            
        }
    }
</script>