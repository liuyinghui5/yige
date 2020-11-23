<style scoped>
    /*@import '../less/mixin';*/
    .one label {
        border: 1px solid red;
    }

    .item {
        float: left;
        margin-left: 50px;
        padding: 5px 20px;
    }

    .itemChose {
        float: left;
        margin-left: 50px;
        padding: 5px 20px;
        background-color: green;
        color: white;
    }

    .item-span {
        margin-left: 10px;
        opacity: 0;
    }

    .item-spanChose {
        margin-left: 10px;
        opacity: 1;
    }
</style>
<template>
    <div class="one">
        <p>页面One</p>
        <div style="border: 1px solid red;">
            <div v-for="item in users">
                <input type="checkbox" :value="item.id" v-model="checkedIds">{{item.name}}
            </div>
            <div>选择的人对应的ID:{{checkedIds}}</div>
        </div>
        <!--iview的多选-->
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
            <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll">全选
            </Checkbox>
        </div>
        <CheckboxGroup v-model="checkAllGroup"
                       @on-change="checkAllGroupChange">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        <!--自己写一个多选-->
        <div>
            <div v-for="(item,index) in users">
                <div class="item" @click="chose(index,$event)">{{item.name}}
                    <span :class=" !item.isChose ? 'item-span' : 'item-spanChose' ">×</span>
                </div>
            </div>
        </div>
        <div @click="add">点击查看统计选中人的ID{{checkID}}</div>
        <backHomePage :cue="{msg: '从one传来的msg',age:'11'}"></backHomePage>

    </div>
</template>

<script>
    //    import * from './*';
    export default {
        props: {},
        data() {
            return {
                users: [
                    {
                        name: 'jack',
                        id: 11,
                    },
                    {
                        name: 'john',
                        id: 22
                    },
                    {
                        name: 'mike',
                        id: 34
                    }
                ],
                checkedNames: [],
                checkedIds: [],
//                iview的变量
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '苹果', '西瓜'],
                //自己定义的变量
                checkID: [],
            }
        },
        computed: {},
        filters: {
            hideMiddle: function (val) {
//                return `${val.subString(0,3)}****${val.subString(val.length-3)}`;
                console.log(val.substring(0, 3))
            },
        },
        methods: {

            //iview多选的方法
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
            chose(index, e) {
                if (e.target.className == 'item') {
                    e.target.className = 'itemChose';
                } else {
                    e.target.className = 'item';
                }
                //改变状态
                this.users[index].isChose = !this.users[index].isChose
                //强制重新渲染
                this.$forceUpdate()
                console.log(this.users)
            },
            add() {
                //filter 过滤出 isChose为true的对象 , map 遍历出选中对象的id
                const a = this.users.filter((item) => {
                    return item.isChose;
                }).map((item) => {
                    return item.id
                })
                this.checkID = a;
                console.log(a)
            }
        },
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {

            this.$Message.info({
                content: '欢迎来到one页面',
                duration: 3
            });

            //给users添加isChose字段和默认状态
            this.users = this.users.map((item, index) => {
                item.isChose = false;
                return item;
            })
            console.log(this.users)
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
