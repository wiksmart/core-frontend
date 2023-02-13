<template>
    <div class="footer-adm">
        <div class="footer-content">
            <p @click="modalAbout = true" :title="$t('hint.aboutWeb')"><font-awesome-icon icon="fa-regular fa-circle-question" /></p>
            <p>&copy;2023 WIKSmart, <a href="https://smkwikrama.sch.id/" target="_blank">SMK WIKRAMA BOGOR</a></p>
        </div>
    </div>

    <div class="modal" :class="modalAbout ? 'show-modal' : 'hide-modal'">
        <div class="modal-img">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea numquam, nisi, ab assumenda eum delectus perferendis tempora similique reiciendis non aperiam beatae vero. Ipsum, corporis. Impedit quia voluptas quos.
        </div>
        <div class="close-modal" @click="modalAbout = false"/>
    </div>
</template>

<script>
    import { onMounted, onUpdated, reactive, ref } from "vue"

    export default {
        setup() {
            return {
                modalAbout: ref(false)
            }
        }
    }

</script>