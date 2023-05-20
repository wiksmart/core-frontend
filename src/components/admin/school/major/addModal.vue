<template>
    <div class="content-modal">
        <div class="modal-header">
            {{ $t('modal.addMajor') }}
        </div>
        <div class="modal-value">
            <div class="row-input">
                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('tableClass.prodi') }}</p></div>
                    <div><input type="text" required></div>
                </div>

                <div class="input-data half-input">
                    <div class="title-input"><p>{{ $t('tableClass.major') }}</p></div>
                    <div><input type="text" required></div>
                </div>
            </div>

            <div class="row-input">
                <div class="input-data full-input">
                    <div class="title-input"><p>{{ $t('tableClass.desc') }}</p></div>
                    <div><input  type="text" required></div>
                </div>
            </div>
            <div class="modal-action">
                <button>{{ $t('menu.submit') }}</button>
                <button type="button" @click.capture="cancelClick">{{ $t('menu.cancel') }}</button>
            </div>
          
        </div>

        
    </div>
</template>

<script>
//     import axios from "axios"
//     import { onMounted, onUpdated, reactive, ref, watch, watchEffect } from "vue";
//     import { apiHost } from "../../../../config"

//     export default {
        
//         setup(props, {emit}) {
//         const modaladd = ref(false)
//             const formData = reactive({
//             competency: '',
//             name: '',
//             description: '',

//         })
//             const cancelClick = (event, item) => {
//                 emit("cancel-click", event, item)
//             }
//             const formAdd = async () => {
//             const url = `${apiHost}majors${localStorage.getItem('SchoolYear')}`
//             const method = 'POST'
//             await axios({
//                 method,
//                 url,
//                 params: formData
//             })
//                 .then(response => {
//                     console.log('sukses', response)
//                     modaladd.value = false
//                 })
//         }


//         return{
//             cancelClick,
//             modaladd,
//             formAdd,
//             formData,
//         }
//     },
//     // data(){
//     //     return{
//     //         model: {
//     //             major: {
//     //                 competency: '',
//     //                 name:'',
//     //                 description:''
//     //             }
//     //         }
//     //     }
//     // },
//     // methods: {
//     //     submitData(){
//     //         axios.post(apiHost + "majors/" + localStorage.getItem('SchoolYear'), this.model.major)
//     //         .then(res => {
//     //             console.log(res.data)
//     //             this.model.major = {
//     //                 competency: '',
//     //                 name: '',
//     //                 description: '' 
//     //             }
//     //           emit('cancel-click')

//     //         })
//     //     }
//     // }
    
//  }
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

