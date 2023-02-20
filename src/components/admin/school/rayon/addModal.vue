<template>
    <div class="content-modal">
        <div class="modal-header">
            {{ $t('modal.addRayon') }}
        </div>

        <div class="modal-value">
            <div class="row-input">
                <div class="input-data full-input">
                    <div class="title-input"><p>{{ $t('tableClass.area') }}</p></div>

                    <div><input type="text"></div>
                </div>
            </div>

            <div class="row-input">
                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('table.region') }}</p></div>

                    <div><input type="text"></div>
                </div>

                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('sidebar.teacher') }}</p></div>

                    <div><input type="text"></div>
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

            return {
                cancelClick
            }
        },
    }
</script>

