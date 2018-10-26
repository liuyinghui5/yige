<style scoped>
    /*@import '../less/mixin';*/


</style>
<template>
    <div class="">
        组件b
        <span>从组件a传来的user信息, 名字{{jieshouUser.name}},年龄:{{jieshouUser.age}}</span>
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
                jieshouUser: {},
            }
        },
        methods: {},
        mounted(){
            bus.$on('userData', (data) => {
                this.jieshouUser = data;
                console.log(this.jieshouUser)
            })
        }
    }
</script>
