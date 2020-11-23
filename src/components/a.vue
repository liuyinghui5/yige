<style scoped>
    /*@import '../less/mixin';*/


</style>
<template>
    <div @click="go">
        点击组件a 把用户信息传给组件b
    </div>
</template>

<script>
    //    import CONFIG from '../config.js';
    import bus from './bus';

    export default {
        props: {
//            cue: {
//                type: Object,
//                default: function () {
//                    return {}
//                }
//            }
        },
        data() {
            return {
            	user:{
            		name:'lyh',
                    age:'25'
                }
            }
        },
        methods: {
        	go() {
                bus.$emit('userData',this.user)
            }
        },
        mounted(){
        }
    }
</script>
