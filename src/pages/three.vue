<style scoped>
	/*<style lang='less' scoped>*/
	/*@import '../less/mixin';*/

</style>
<template>
	<div class="three">
        <backHomePage></backHomePage>

        <p>轮播图和 处理对应数组的删除判断</p>
        <swiperSys></swiperSys>
        <ul>
            <li v-for="(item,index) in list" @click="ccc(index)">{{item.name}}
            <p v-if="isShow[index]">{{item.age}}</p>
            </li>
        </ul>
	</div>
</template>

<script>
	//    import * from './*';
	export default {
		props: {},
		data() {
			return {
				isShow:{
//					'0':false,
//                    '1':false,
                },
				list:[
                    {
                    	name:'来了',
                        age:'123',
                    },{
                        name:'jj',
                        age:'222',
                    }
                ]
            }
		},
		computed: {},
		methods: {
			ccc(index) {
				this.$set(this.isShow,index,!this.isShow[index])
                //this.isShow[index] = !this.isShow[index];
                console.log(this.isShow)
            }
        },
		beforeCreate() {
		},
		created() {
		},
		beforeMount() {
		},
		mounted() {
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

</script>
