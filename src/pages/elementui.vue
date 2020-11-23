<style scoped lang="less">

</style>

<template>
	<div class="helloWorld" v-show="true">
		<el-input v-model="input" placeholder="请输入内容"></el-input>

		<el-button @click="editValue" type="primary">编辑</el-button>
		<el-button @click="cancelInput" type="primary">取消</el-button>
	</div>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				input: '',
				inputCopy: '',
			}
		},
		methods: {
			editValue() {
				this.input = '原始值',
				this.inputCopy = '原始值'
			},
			cancelInput() {
				this.input = this.inputCopy;
			}
		},
		mounted(){
			this.$Message.info({
				content: '欢迎回来',
				duration: 3
			});



		}
	}
</script>
