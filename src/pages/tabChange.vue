<style lang='less' scoped>
	/*@import '../less/mixin';*/
	.tab {
		width: 590px;
		height: 336px;
		background: #fff;
		border-radius: 6px;
		&-title {
			font-size: 16px;
			height: 46px;
			line-height: 46px;
			text-align: center;
			span {
				border: 2px solid dodgerblue;
			}
		}
		&-content {
			width: 400px;
			border: 2px solid grey;
		}
	}

	.current {
		border-color: #ff6602;
		color: #ff6602;
	}

</style>
<template>
	<div class="tab">

		<h2>切换标题</h2>
		<div class="tab-title">
			<span :class="{current:showDate == 0}" @click="changeDate(0)">日榜</span>
			<span :class="{current:showDate == 1}" @click="changeDate(1)">周榜</span>
			<span :class="{current:showDate == 2}" @click="changeDate(2)">月榜</span>
		</div>
		<div class="tab-content" v-for="item in list" :key="item.scope">
				<span>{{item.name}}</span>
				<span>{{item.scope}}</span>
		</div>

		<backHomePage></backHomePage>
	</div>
</template>

<script>
	//    import * from './*';
	export default {
		props: {},
		data() {
			return {
				showDate: 0, //控制类名变色
				list: [],
			}
		},
		computed: {},
		methods: {
			changeDate(i) {
				this.showDate = i;
				if(i == 0) {
					this.list =[{name: '小明', scope: 50}, {name: '小红', scope: 90}]
				}else if(i == 1) {
					this.list = [{name: '小张', scope: 110}]
				}else {
					this.list = [{name: '小红', scope: 90}]
				}
				console.log('打印的i ->', i)
			}
		},
		mounted() {
			this.list = [{name: '小明', scope: 50}, {name: '小红', scope: 90}]
		},
	}
</script>
