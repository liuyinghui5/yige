<style scoped lang="less">
	.helloWorld {
		text-align: center;
	}

	#indexLogo {
		width: 200px;
	}

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

	.router {
		border: 4px solid dodgerblue;
		position: fixed;
		left: 0;
		top: 10px;
		text-align: left;
		background-color: deepskyblue;
		z-index: 999;
		p {
			padding: 5px 0;
			color: white;
			font-size: 12px;
		}
	}
</style>

<template>
	<!--暂时只启用控制台 ,页面留白-->
	<!--关于样式变量绑定 :class="{active:topRank==0}"-->
	<div class="helloWorld" v-show="true">

		<img id="indexLogo" src="../assets/logo.jpg" alt="">

		<!--路由跳转-->
		<div class="router">
			<h2>路由跳转:</h2>
			<p @click="jump(1)">跳转到one页面</p>
			<p @click="jump(2)">跳转到two页面测试vuex</p>
			<p @click="jump(3)">跳转到three页面测试轮播图和数组判断下标删除</p>
			<p @click="jump(4)">跳转到four页面测试iview表格</p>
			<p @click="jump(5)">跳转到scroll页面测试scrollIntoView锚点</p>
			<p @click="jump(6)">跳转到Tab切换实现</p>
			<p @click="jump(7)">跳转到checkbox 动态变更表单项目 位置不变的问题</p>

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

		<div style="border: 1px solid;display: inline-block;width: 50px;margin-left: 50px;transform: skew(20deg, 0deg);"> DIV画平行四边形 </div>
		<div style="width: 0;height: 0;display: inline-block;border-top: 100px solid transparent;border-bottom: 100px solid green;border-left: 100px solid transparent;border-right: 100px solid transparent;">DIV画三角形</div>
		<div style="width: 50px;height: 50px;display: inline-block;border: 2px solid red;border-radius: 100%;">DIV画圆</div>

		<p>原格式arr1 {{arr1}}</p>
		<p>目标格式arr2 {{arr2}}</p>
		<p>输出格式arr {{arr}}</p>
		<p>输出格式arr4 {{arr4}}</p>


	</div>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				showSel: true,
				inputVal: '123456',
				arr: [],
				arr1: [{content: "六六六", fastWord: "1"},
					{content: "七七七", fastWord: "2,3"},
					{content: "刘刘刘", fastWord: "1,2,3"}],
				arr2: [{content: "六六六", fastWord: "1"},
					{content: "七七七", fastWord: "2"},
					{content: "七七七", fastWord: "3"},
					{content: "刘刘刘", fastWord: "1"},
					{content: "刘刘刘", fastWord: "2"},
					{content: "刘刘刘", fastWord: "3"}],
				arr3: [[{"content": "六六六", "fastWord": "1"}],
					[{"content": "七七七", "fastWord": "2"}, {"content": "七七七", "fastWord": "3"}],
					[{"content": "刘刘刘", "fastWord": "1"}, {"content": "刘刘刘", "fastWord": "2"}, {
						"content": "刘刘刘",
						"fastWord": "3"
					}]],
				arr4: [],
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
					case 6 :
						return this.$router.push({path: './tab'})
						break;
					case 7 :
						return this.$router.push({path: './elementQA'})
						break;
				}
			},
			// 递归打开多层数组
			deepArr(arr) {
				var result = [];
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] instanceof Array) {
						result = result.concat(this.deepArr(arr[i]));
					} else {
						result.push(arr[i]);
					}
				}
				return result;
			},
//			deepArrNew(arr) {
//				arr.reduce(function(v,item) {
//					if(item instanceof Array) {
//						return v.concat(...this.$options.methods.deepArrNew(item))
//					}
//					return v.concat(item)
//				},[])
//			}
		},
		mounted(){
			this.$Message.info({
				content: '欢迎回来',
				duration: 3
			});

//			学习数组转换 arr1 => arr2 ;
//			var arrw = []
//			this.arr1.map((item)=>{
//				if(item.fastWord.split(",").length > 1) {
//					item.fastWord.split(",").map(items =>{
//						let obj = {}
//						obj.content = item.content;
//						obj.fastWord = items;
//						arrw.push(obj)
////					arrw.push({item.content, fastWord:items})
//					})
//				}else {
//					arrw.push(item)
//				}
//			})

//			const res = arrx.reduce((odd, { content, fastWord }) => {
//				odd.push(...fastWord.split(',').map(v => ({ content, fastWord: v })));
//				return odd;
//			}, []);
			//console.log('转换后的数组是否相等 ->', this.arr.toString() == this.arr2.toString())
			//			reduce 第1个参数 item: 初始值, 或者计算结束后的返回值 (必需)
			//			reduce 第2个参数 {content,fastWord}: 当前元素 (必需)

//			let arrText1 = [{content: "六六六", fastWord: "1"},
//				{content: "七七七", fastWord: "2,3"},
//				{content: "刘刘刘", fastWord: "1,2,3"}];
//
//			let arrText1Reduce = arrText1.reduce((v,{content,fastWord})=> {
//				let b = [];
//				let d = fastWord.split(',').map(itemMap =>({
//					content,fastWord:itemMap
//				}))
//				b.push(...v,d)
//				return b
//			},[])
//			console.log('打印的arrText1Reduce ->', arrText1Reduce)

			/*


			 createForm: {
			 field200: "", // 切换模板
			 field201: "", // 工单标题 '' *
			 field202: "", // 客诉链接 ''
			 field203: "", // 富文本编辑器 {}
			 contentInfos:[], // 模板自定义字段
			 field204: [], // 上传附件 []
			 field205: "", // 所属应用 0 *
			 field206: "", // 工单分类 0 *
			 field207: "", // 工单优先级 * 单选 无默认
			 field208: "", // 工单受理组 0
			 field209: "", // 工单受理人 0
			 field210: "", // 工单关注人 0
			 field211: "", // 应用名称
			 field212: "", // 用户昵称
			 field213: "", // 用户UID
			 field214: "", // 机型
			 field215: "", // 语言
			 field216: "", // 平台
			 field217: "", // 应用包名
			 field218: "", // OS版本
			 field219: "", // SDK版本
			 field220: "", // 网络分类
			 field221: "", // 服务器ID
			 field222: "", // 自定义字段
			 },



			 [1,2,3,4].shift(1) // 1
			 [1,2,3,4].splice(1) // [2,3,4]
			 [1,2,3,4].slice(1) // [2,3,4]
			 [1,2,3,4].slice(1,3) // [2,3]
			 [1,2,3,4].join() // "1,2,3,4"

			 "1,2,3,4".replace(/,/g,'') // "1234"
			 "1234".substring(1) //234
			 "1234".charAt(0) // 1
			 "1234".split('') //["1", "2", "3", "4"]
			 ["1", "2", "3", "4"].map(item => (item*1)) // [1,2,3,4]
			 */


			//  reduce filter some has findIndex find forEach map
			/*
			 *
			 * filter 按条件返回当前数组
			 * some 有一条包含就返回true;
			 * findIndex 找到只返回第一个下标 没找到就 -1
			 * find 找到只返回第一个 没找到就Undefined
			 *
			 * */

			let arrText2 = [
				{name: 'banana', price: 9},
				{name: 'fdsaf', price: 1},
				{name: 'apple', price: 10}];
			let ArrText2Obj = {name: 'apple', price: 10};


			// reduce
			const reduceArr = arrText2.reduce((v, item) => {
				let b = [];
				b.push(...v, item.name[0].toUpperCase() + item.name.substring(1))
				return b;
			}, [])
			// console.log('打印的reduceArr ->', reduceArr)

			// filter
			const filterArr = arrText2.filter(item => (
				item.price > 5
			))
			const filterArr2 = arrText2.filter(item => {
				return item.price > 5
			})
			// console.log('打印的filterArr ->', filterArr,filterArr2)

			// some
			const someArr = arrText2.some(item => ({
				ArrText2Obj
			}))
			// console.log('打印的someArr ->', someArr)

			// findIndex
			const findIndexArr = arrText2.findIndex(item => {
				if (item.price == ArrText2Obj.price) {
					return true;
				}
			})
			// console.log('打印的findIndexArr ->', findIndexArr)

			// find
			const findArr = arrText2.find(item => {
				if (item.name == ArrText2Obj.name) {
					return true;
				}
			})
			// console.log('打印的findArr ->', findArr)


			const oldArr = [1, [2, [3], [4, 5, 6], [7, 8, 9], 10, 11,], 12, 13, 14, [15, 16, 17]];
//			let asd = this.deepArrNew(oldArr);
//			console.log('打印的asd ->', asd)
//			function deepForEach(arr) {
//				let temp = []
//				arr.forEach(item => {
//					if(item instanceof Array) {
//						temp = temp.concat(deepForEach(item))
//					}else {
//						temp.push(item)
//					}
//				})
//				return temp
//			}
//			let deepArr = deepForEach(oldArr);

//			const deepForEach = (arr) => arr.reduce((v,item)=> {
//				if(item instanceof Array) {
//					return v.concat(...deepForEach(item))
//				}
//				return v.concat(item)
//			},[])
//
//			let deepArr = deepForEach(oldArr);
//			console.log('打印的deepArr ->', deepArr)
//
//
			//查找ID相同的
//			var arr2 = ['62b7160d18144df7b0b4f6e489728ead', "cea0bb90d4ae4361a531df5bd7c77c1a"];
//			var arr1 = [{
//				id:"62b7160d18144df7b0b4f6e489728ead",
//				name: "xx"
//			}, {
//				id:"cea0bb90d4ae4361a531df5bd7c77c1a",
//				name:"zz"
//			}, {
//				id:"39e42ff91bf54c8eb291315894d2134f",
//				name:"ww"
//			},]
//
//			const sam = arr1.filter((item,i)=> {
//				return item.id === arr2[i]
//			})
//			console.log('打印的sam ->', sam)


//    https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
//			输入: [1,2,3,4]
//			输出: 24
//			var maximumProduct = function(nums) {
//				var arr = nums.sort(function(a,b){
//					return b-a;
//				})
//				return arr[0]*arr[1]*arr[2]
//			};
//			console.log('打印的maximumProduct([1,2,6,3,4]) ->', maximumProduct([-4,-3,-2,-1]))
//
//
//			var strText = 'aaaabdc';
//			var arrS = strText.split('');
////			["a", "a", "a", "a", "b", "d", "c"]
//			var v = arrS.join().replace(/,/g,'')
//
//			const arrx = (arr) => arr.reduce((v,item)=> {
//				console.log('打印的v[item] ->', v,item)
//				v[item] ? v[item]++ : v[item]=1;
//				return v;
//			},{})
//
//			var x = arrx(arrS)
//			console.log('打印的x ->', x)
			
//						var strText = '          aa aa bdc;33,1234     ';


//			var tag = '红茶,绿茶 黑茶';
//			let tagTrim = tag.trim();
//			let tagSend = tagTrim.split(/[\n\s+,，；;]/g);
//
//			console.log('打印的xs ->', xs)


			var arr = [3,1,4,6,2];
			var temp;
//			for(var i = 0;i<arr.length;i++) {
//				for(var j = i+1;j<arr.length;j++) {
//					if(arr[i]<arr[j]) {
//						temp = arr[i];
//						arr[i] = arr[j];
//						arr[j] = temp;
//					}
//				}
//			}
//			console.log('打印的arr ->', arr)
//
////
//			function dq(arr) {
//				if(arr.length<1) {return arr}
//				var midN = Math.floor(arr.length/2);
//				var mid = arr.splice(midN,1)[0];
//				var l = [];var r = [];
//				for(var i = 0;i<arr.length;i++) {
//					if(arr[i]<mid){l.push(arr[i])}else {r.push(arr[i])}
//				}
//				return dq(l).concat([mid],dq(r))
//			}
//			var x = dq(arr);
//			console.log('打印的x ->', x)
////
// 			var sortArr = (arr) => arr.reduce((v,item,i,arra)=> {
//				let b = [];var l = []; var r = []; var mid = arra[Math.floor(arra.length/2)];
//				item > mid ? l.push(item) : r.push(item);
//				if(i = arra.length-1){
//					b = [...l,mid,...r]
//					console.log('打印的1 ->', [...l,mid,...r])
//				}
//				return b;
//			},[])
//			var arrS = sortArr(arr);
//			console.log('打印的arrS ->', arrS)
//			
//

//			var arr1 =[{content: "六六六", fastWord: "1"},
//				{content: "七七七", fastWord: "2,3"},
//				{content: "刘刘刘", fastWord: "1,2,3"}];
//
//			var sa = arr1.reduce((v,item)=>{
//				let b = [];
//				b.push(...v,item.fastWord.split(',').map(items=>({content:item.content,fastWord:items})))
//				return b
//			},[])
//			
//			console.log('打印的sa ->', sa)

//			var a = 'aasdfvvvvvvvv';
//			
//			var b = a.split('');
//
//			var c = b.reduce((v,item)=> {
//				v[item] ? v[item]++ : v[item] = 1;
//				return v
//			},{})
//			console.log('打印的c ->', c)

//			.workorder-all .tabDetail .tabDetail-item-in .el-input__inner
			function f1() {
				console.log('打印的1 ->', 1)
				setTimeout(()=> {
					console.log('打印的2 ->', 2)
				},1000)
				console.log('打印的3 ->', 3)
			}
			function f2() {
				console.log('打印的1 ->', 4)
			}

			async function init() {
				await f1();
				await f2();
			}
			// 1
			// 2
			// 3
			// 4
			// 5
			// 6
			// 7
			// 8




		}
	}
</script>
