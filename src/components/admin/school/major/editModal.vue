<template>
    <div class="content-modal">
        <div class="modal-header">
            {{ $t('modal.editMajor') }}
        </div>
        <div class="modal-value">
            <div class="row-input">

                <div class="input-data half-input">
                    <div class="title-input">
                        <p>{{ $t('tableClass.prodi') }}</p>
                    </div>

                    <div><input v-model="model.major.competency" type="text" required></div>
                </div>

                <div class="input-data half-input">
                    <div class="title-input">
                        <p>{{ $t('tableClass.major') }}</p>
                    </div>

                    <div><input v-model="model.major.name" type="text" required></div>
                </div>
            </div>

            <div class="row-input">
                <div class="input-data full-input">
                    <div class="title-input">
                        <p>{{ $t('tableClass.desc') }}</p>
                    </div>

                    <div><input v-model="model.major.description" type="text" required></div>
                </div>
            </div>
        </div>

        <div class="modal-action">
            <button @click="submitData">{{ $t('menu.submit') }}</button>
            <button type="button" @click.capture="cancelClick">{{ $t('menu.cancel') }}</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { onMounted, onUpdated, reactive, ref, watch, watchEffect } from "vue"
import { apiHost } from "../../../../config"

export default {
    setup(props, { emit }) {
        const cancelClick = (event, item) => {
            emit("cancel-click", event, item)
        }
        return {
            cancelClick
        }
    },
    data() {
        return {
            model: {
                major: {
                    competency: '',
                    name: '',
                    description: ''
                }
            }
        }
    },
    mounted(){
    this.getmajordata(this.$route.params.id)
    },
    methods: {
        getmajordata(majorId){
axios.get().then(res =>{
    
})
        },
        submitData() {
            axios.post(apiHost + "majors/" + localStorage.getItem('SchoolYear'), this.model.major)
                .then(res => {
                    console.log(res.data)
                    this.model.major = {
                        competency: '',
                        name: '',
                        description: ''
                    }

                })
        }
    }
}
</script>

