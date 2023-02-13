<template>
    <div class="content-modal">
        <div class="modal-header">
            {{ $t('modal.addMajor') }}
        </div>

        <div class="modal-value">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in iure iste ipsam perspiciatis, debitis molestiae ad fugit iusto! Quos neque impedit eveniet, dignissimos enim facilis consectetur temporibus placeat asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in iure iste ipsam perspiciatis, debitis molestiae ad fugit iusto! Quos neque impedit eveniet, dignissimos enim facilis consectetur temporibus placeat asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in iure iste ipsam perspiciatis, debitis molestiae ad fugit iusto! Quos neque impedit eveniet, dignissimos enim facilis consectetur temporibus placeat asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in iure iste ipsam perspiciatis, debitis molestiae ad fugit iusto! Quos neque impedit eveniet, dignissimos enim facilis consectetur temporibus placeat asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in iure iste ipsam perspiciatis, debitis molestiae ad fugit iusto! Quos neque impedit eveniet, dignissimos enim facilis consectetur temporibus placeat asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in iure iste ipsam perspiciatis, debitis molestiae ad fugit iusto! Quos neque impedit eveniet, dignissimos enim facilis consectetur temporibus placeat asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in iure iste ipsam perspiciatis, debitis molestiae ad fugit iusto! Quos neque impedit eveniet, dignissimos enim facilis consectetur temporibus placeat asperiores.
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

