<template>
    <div class="content-modal">
        <div class="modal-header">
            {{ $t('modal.addAcaYear') }}
        </div>

        <div class="modal-value">
            <div class="row-input">
                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('tableAcaYear.startYear') }}</p></div>

                    <div><input type="date"></div>
                </div>

                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('tableAcaYear.endYear') }}</p></div>

                    <div><input type="date"></div>
                </div>
            </div>

            <div class="row-input">
                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('tableAcaYear.desc') }}</p></div>

                    <div><input type="text" :placeholder="$t('tableAcaYear.addStart')"></div>
                </div>

                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('tableAcaYear.status') }}</p></div>

                    <div class="act-tog">
                        <div class="tog-2" @click="isActive">
                            <div class="btn-tog-2" :class="isActive ? 'tog-rg' : 'tog-lf'"></div>
                        </div>
                        <p>Active</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-action">
            <button>{{ $t('menu.submit') }}</button>
            <button type="button" @click.capture="cancelClick">{{ $t('menu.cancel') }}</button>
        </div>
    </div>
</template>

<script>
    import { onMounted, onUpdated, reactive, ref } from "vue";

    export default {
        setup(props, {emit}) {
            const cancelClick = (event, item) => {
                emit("cancel-click", event, item)
            }

            const isActive = ref(false)

            return {
                cancelClick,
                isActive
            }
        },
    }
</script>

