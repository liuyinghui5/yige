<style scoped>
	.bank {
		width: 30px;
		height: 30px;
		display: inline-block;
		text-align: center;
		line-height: 30px;
		border: 2px solid red;
	}

	.bankOut {
		width: 35%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		/*border: 1px solid black;*/
	}
</style>

<template>
	<div class="fter">
		<!--路由跳转-->
		<div style="border: 10px solid blue">
			<p>路由跳转:</p>
			<p @click="jump(1)">点击跳转到one页面</p>
			<p @click="jump(2)">点击跳转到two页面测试vuex</p>
			<p @click="jump(3)">点击跳转到three页面测试轮播图和数组判断下标删除</p>
			<p @click="jump(4)">点击跳转到four页面测试iview表格</p>
			<p @click="jump(5)">点击跳转到scroll页面测试scrollIntoView锚点</p>

		</div>

		<div style="margin-top: 10px;border: 10px solid yellowgreen;">
			<Tabs value="name1">
				<!--测试vuex获取数据-->
				<TabPane label="测试vuex获取数据" name="name1">
					<div>
						<p>显示VUEX中 存的名字: <span
							style="font-weight: 900;font-size: 20px;"> {{this.$store.state.user.name}}</span></p>
						<p>显示VUEX中 存的年龄: <span
							style="font-weight: 900;font-size: 20px;">{{this.$store.state.user.age}}</span></p>
					</div>
				</TabPane>


				<!--测试弹窗-->
				<TabPane label="测试弹窗" name="name2">
					<div>
						<p>测试弹窗</p>
						<input type="text" ref="in">
						<select name="aa" id="s1" v-show="showSel" @change="methodName($event)" ref="sel">
							<option value="1">aaaaaa</option>
							<option value="1">bbbbbb</option>
						</select>
						<p @click="openSel">点击打开弹窗</p>
					</div>
				</TabPane>


				<!--测试组件传值-->
				<TabPane label="测试组件传值" name="name3">
					<p>
						包含ab两个组件

						<compA></compA>
						<compB></compB>
					</p>
				</TabPane>


				<!--测试模拟移动端银行输入密码-->
				<TabPane label="测试模拟移动端银行输入密码" name="name4">
					<div>
						<div class="bankOut" style="position: relative">
							<span class="bank">{{inputVal[0]}}</span>
							<span class="bank">{{inputVal[1]}}</span>
							<span class="bank">{{inputVal[2]}}</span>
							<span class="bank">{{inputVal[3]}}</span>
							<span class="bank">{{inputVal[4]}}</span>
							<span class="bank">{{inputVal[5]}}</span>
							<input type="tel" v-model="inputVal" maxlength="6"
							       style="position: absolute;left: 0;top: 0;text-align:right;opacity: 0.5;caret-color:rgba(0,0,0,.5);"
							>
						</div>
						<div>

						</div>
					</div>
				</TabPane>
			</Tabs>


		</div>
	</div>
</template>

<script>

	export default {
		props: {},
		data() {
			return {
				showSel: true,
				inputVal: '123456',
			}
		},
		methods: {
			openSel (){
				this.$refs.sel.setAttribute('size', 2)
				console.log(this.$refs.sel)
			},
			methodName(val) {
				console.log('打开了select弹窗', val.target)
			},
			jump(i) {
				switch (i) {
					case 1 :
						return this.$router.push({path: './one'})
						break;
					case 2 :
						return this.$router.push({path: './two'})
						break;
					case 3 :
						return this.$router.push({path: './three'})
						break;
					case 4 :
						return this.$router.push({path: './four'})
						break;
					case 5 :
						return this.$router.push({path: './scroll'})
						break;
				}
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
