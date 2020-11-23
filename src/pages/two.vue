<style scoped>
    /*@import '../less/mixin';*/


</style>
<template>
    <div class="">
        标题: 当前页 作为VUEX 测试页面
        <div style="border: 10px solid yellowgreen">
            <p>显示获取到的vuex的名字:{{this.$store.state.user.name}}</p>
            <p>显示获取到的vuex的年龄:{{this.$store.state.user.age}}</p>
        </div>

        <div style="border: 10px solid green">
            <p>
                <span>输入要更改VUEX数据的名字</span>
                <input type="text" v-model="user.name"></p>
            <p>
                <span>输入要更改VUEX数据的年龄</span>
                <input type="text" v-model="user.age">
            </p>
        </div>


        <div style="
            background-color:cornflowerblue;
            width: 50%;
            margin: 20px auto;
            padding: 10px;
            border-radius: 5px;"
             @click="add">
            点击给vuex添加数据
        </div>


        <backHomePage></backHomePage>
    </div>
</template>

<script>
    //    import CONFIG from '../config.js';

    export default {
        data() {
            return {
                user: {
                    name: '',
                    age: '',
                }
            }
        },
        methods: {
            add() {
                //this.$store.dispatch('changeName', '刘英辉');
                if(!this.user.name&&!this.user.age) {
                    this.$Message.error('姓名或年龄不能为空');
                }else {
                    this.$store.dispatch('changeObj', {
                        name: this.user.name,
                        age: this.user.age
                    })
                }


                console.log(this.$store.state)
            },
        },
        mounted(){
            this.$Message.info({
                content: '欢迎来到two页面',
                duration: 3
            });
        }
    }
</script>
