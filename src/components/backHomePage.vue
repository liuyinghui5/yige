<style scoped>
    /*<style lang='less' scoped>*/
    .backHomePage {
        width: 80px;
        background-color: greenyellow;
        position: fixed;
        top: 30px;
        right: 0;
        border-radius: 10px;
        padding: 10px;
    }
</style>
<template>
    <div class="backHomePage" @click="go">
        <p>回到首页 是否有msg传递过来: {{this.cue.msg}}</p>
    </div>
</template>

<script>
    //    import * from './*';
    export default {
        props: {
            cue: {
                type: Object,
                default: function () {
                    return {
                    	msg: '默认的msg',
                        age: '',
                    }
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            go() {
                this.$router.push({
                    path: '/'
                })
            }
        },
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        	console.log(this.cue)
        },
        beforeUpdate() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }

        /*
         *
         *创建前状态
         *创建完毕状态
         *挂载前状态
         *挂载结束状态̬
         *更新前状态
         *更新完成状态
         *for keep-alive 组件被激活
         *for keep-alive 组件被移除
         *销毁前状态
         *销毁完成状态
         *
         */

    }
</script>
