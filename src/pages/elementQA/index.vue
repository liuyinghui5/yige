/**
* Created by liuyinghui on 2020/10/21.
 * 所有工单
 */
<template>


<div style="width: 80%;margin-left: 10%;">
	<el-form :model="workorderForm" ref="workorderForm" label-width="100px" class="selectChoseDrawer-item-Form" size="small" :label-position="labelPosition">
		<!-- ['工单ID','工单标题','工单优先级','工单状态','工单分类','工单受理组','工单受理人','工单关注人','工单创建时间','工单解决时间','用户昵称','用户UID','机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段'] -->
		<!-- 使用循环 判断内层drawer checkbox 选择了那个, 外层drawer对应显示相应 formItem-->
		<div v-for="(item,index) in checkedEditer" :key="index">

			<!--工单ID-->
			<el-form-item label="工单ID" prop="field104" v-if="item == '工单ID'">
				<el-input v-model="workorderForm.field104" placeholder="请输入工单ID" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--工单标题-->
			<el-form-item label="工单标题" prop="field105" v-if="item == '工单标题'">
				<el-input v-model="workorderForm.field105" placeholder="请输入工单标题" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--工单优先级-->
			<el-form-item label="工单优先级" prop="field106" v-if="item == '工单优先级'">
				<el-select v-model="workorderForm.field106" placeholder="请选择工单优先级" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field106Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--工单状态-->
			<el-form-item label="工单状态" prop="field107" v-if="item == '工单状态'" >
				<el-select v-model="workorderForm.field107" placeholder="请选择工单状态" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field107Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--工单分类-->
			<el-form-item label="工单分类" prop="field108" v-if="item == '工单分类'">
				<el-select v-model="workorderForm.field108" placeholder="请选择工单分类" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field108Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--工单受理组-->
			<el-form-item label="工单受理组" prop="field109" v-if="item == '工单受理组'">
				<el-select v-model="workorderForm.field109" placeholder="请选择工单受理组" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field109Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--工单受理人-->
			<el-form-item label="工单受理人" prop="field110" v-if="item == '工单受理人'">
				<el-select v-model="workorderForm.field110" placeholder="请选择工单受理人" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field110Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--工单关注人-->
			<el-form-item label="工单关注人" prop="field111" v-if="item == '工单关注人'">
				<el-select v-model="workorderForm.field111" placeholder="请选择工单关注人" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field111Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--工单创建时间-->
			<el-form-item label="工单创建时间" prop="field112" v-if="item == '工单创建时间'">
				<el-date-picker type="datetimerange" v-model="workorderForm.field112" :style="{width: '100%'}" start-placeholder="开始日期" end-placeholder="结束日期" range-separator="至" :picker-options="pickerOptions" align="right" clearable></el-date-picker>
			</el-form-item>
			<!--工单解决时间-->
			<el-form-item label="工单解决时间" prop="field113" v-if="item == '工单解决时间'">
				<el-date-picker type="datetimerange" v-model="workorderForm.field113" :style="{width: '100%'}" start-placeholder="开始日期" end-placeholder="结束日期" range-separator="至" :picker-options="pickerOptions" align="right" clearable></el-date-picker>
			</el-form-item>
			<!--用户昵称-->
			<el-form-item label="用户昵称" prop="field114" v-if="item == '用户昵称'">
				<el-input v-model="workorderForm.field114" placeholder="请输入用户昵称" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--用户UID-->
			<el-form-item label="用户UID" prop="field115" v-if="item == '用户UID'">
				<el-input v-model="workorderForm.field115" placeholder="请输入用户UID" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--机型-->
			<el-form-item label="机型" prop="field116" v-if="item == '机型'">
				<el-input v-model="workorderForm.field116" placeholder="请输入机型" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--语言-->
			<el-form-item label="语言" prop="field117" v-if="item == '语言'">
				<el-select v-model="workorderForm.field117" placeholder="请选择语言" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field117Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--平台-->
			<el-form-item label="平台" prop="field118" v-if="item == '平台'">
				<el-select v-model="workorderForm.field118" placeholder="请选择平台" clearable :style="{width: '100%'}">
					<el-option v-for="(item, index) in field118Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
				</el-select>
			</el-form-item>
			<!--应用包名-->
			<el-form-item label="应用包名" prop="field119" v-if="item == '应用包名'">
				<el-input v-model="workorderForm.field119" placeholder="请输入应用包名" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--OS版本-->
			<el-form-item label="OS版本" prop="field120" v-if="item == 'OS版本'">
				<el-input v-model="workorderForm.field120" placeholder="请输入OS版本" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--SDK版本-->
			<el-form-item label="SDK版本" prop="field121" v-if="item == 'SDK版本'">
				<el-input v-model="workorderForm.field121" placeholder="请输入SDK版本" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--网络分类-->
			<el-form-item label="网络分类" prop="field122" v-if="item == '网络分类'">
				<el-input v-model="workorderForm.field122" placeholder="请输入网络分类" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--服务器ID-->
			<el-form-item label="服务器ID" prop="field123" v-if="item == '服务器ID'">
				<el-input v-model="workorderForm.field123" placeholder="请输入服务器ID" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--自定义字段-->
			<el-form-item label="自定义字段" prop="field124" v-if="item == '自定义字段'">
				<el-input v-model="workorderForm.field124" placeholder="请输入自定义字段" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<!--表单结束-->
		</div>

		<el-form-item>
			<div style="display: inline-block;">
				<el-button @click="resetworkorderForm('workorderForm')">重置</el-button>
			</div>
			<div style="display: inline-block;float: right;">
				<el-button type="primary" @click="closeSelectChoseDrawer('workorderForm')">取消</el-button>
				<el-button type="primary" @click="submitWorkorderForm('workorderForm')">筛选</el-button>
			</div>
		</el-form-item>

	</el-form>


	<el-checkbox :indeterminate="isIndeterminateEditer" v-model="checkAllEditer" @change="choseAllEditer">全选</el-checkbox>

	<!--循环五组 checkbox 选项数据 -->
	<div style="margin: 15px 0;" v-for="item in EditerList">
		<p style="margin: 16px 0;">{{item.title}}</p>
		<el-checkbox-group v-model="checkedEditer" @change="handleCheckedEditerChange">
			<el-checkbox v-for="(city,i) in item.EditerListItem" :label="city" :key="city" >{{city}}</el-checkbox>
		</el-checkbox-group>
	</div>


</div>

	</template>

<script>

	export default {
		components: {
//			'rs-panes': ResSplitPane,
		},
		props: {},
		data() {
			return {
// 布局插件

				/* ================================= 搜索 (外层)  =================================  */
				labelPosition: 'top', // 抽屉组件内 form 文字在上Input在下
				workorderForm: {
					field104: "", // 工单ID
					field105: "", // 工单标题
					field106: "", // 工单优先级
					field107: "", // 工单状态
					field108: "", // 工单分类
					field109: "", // 工单受理组
					field110: "", // 工单受理人
					field111: "", // 工单关注人
					field112: [], // 工单创建时间
					field113: [], // 工单解决时间 ["2020-10-15", "2020-11-16"]
					field114: "", // 用户昵称
					field115: "", // 用户UID
					field116: "", // 机型
					field117: "", // 语言
					field118: "", // 平台
					field119: "", // 应用包名
					field120: "", // OS版本
					field121: "", // SDK版本
					field122: "", // 网络分类
					field123: "", // 服务器ID
					field124: "", // 自定义字段
				},
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				field106Options: [{
					"label": "优先级1",
					"value": 1
				}, {
					"label": "优先级2",
					"value": 2
				}],
				field106Options: [{
					"label": "优先级1",
					"value": 1
				}, {
					"label": "优先级2",
					"value": 2
				}],
				field107Options: [{
					"label": "状态1",
					"value": 1
				}, {
					"label": "状态2",
					"value": 2
				}],
				field108Options: [{
					"label": "分类1",
					"value": 1
				}, {
					"label": "分类2",
					"value": 2
				}],
				field109Options: [{
					"label": "工单受理组1",
					"value": 1
				}, {
					"label": "工单受理组2",
					"value": 2
				}],
				field110Options: [{
					"label": "工单受理人1",
					"value": 1
				}, {
					"label": "工单受理人2",
					"value": 2
				}],
				field111Options: [{
					"label": "工单关注人1",
					"value": 1
				}, {
					"label": "工单关注人2",
					"value": 2
				}],
				field117Options: [{
					"label": "语言1",
					"value": 1
				}, {
					"label": "语言2",
					"value": 2
				}],
				field118Options: [{
					"label": "平台1",
					"value": 1
				}, {
					"label": "平台2",
					"value": 2
				}],

				/* ================================= 搜索 (内层) checkbox =================================  */
				checkAllEditer: false, // 是否全选
				checkedEditer: ['工单ID','工单标题','工单优先级','工单状态','工单分类','工单受理组','工单受理人','工单关注人','工单创建时间','工单解决时间','用户昵称','用户UID','机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段'], // 产品要求默认选中项全选 || 已选中的数组集合
				EditerList: [
					{title: '常用' ,EditerListItem: ['工单ID','工单标题','工单优先级','工单状态','工单分类']}, //  常用 所有项
					{title: '成员' ,EditerListItem: ['工单受理组','工单受理人','工单关注人']}, //  成员 所有项
					{title: '时间' ,EditerListItem: ['工单创建时间','工单解决时间']}, //  时间 所有项
					{title: '用户' ,EditerListItem: ['用户昵称','用户UID']}, //  用户 所有项
					{title: '设备信息' ,EditerListItem: ['机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段']}, //  设备信息 所有项
				],
				EditerListAll: ['工单ID','工单标题','工单优先级','工单状态','工单分类','工单受理组','工单受理人','工单关注人','工单创建时间','工单解决时间','用户昵称','用户UID','机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段'], // 因为多选分组 ,采用循环方式 此数组用于 全选多选校验用
				isIndeterminateEditer: false, //  多选的时候显示   不确定状态

			}
		},
		computed: {},
		methods: {
			/* ================================= 搜索 开始 =================================  */
			// 打开搜索 (外层)
			openSelectChoseDrawer() {
				this.selectChoseDrawer = true;
//				var getWorkorderSelect = localStorage.getItem('workorderSelect'); // 打开搜索框的时候 获取 selectChose2Drawer 中的多选项 , 用来筛选要显示那些筛选项
//				getWorkorderSelect.length != 0 ? this.checkedEditer = getWorkorderSelect.split(',') : this.checkedEditer;	// 获取的时候 如果数组为0 split 会让length 不为0 这样判断 多选全选的时候就会出bug
			},
			// 搜索 筛选项表单重置
			resetworkorderForm(formName) {
				this.$refs[formName].resetFields();
			},
			// 搜索 关闭
			closeSelectChoseDrawer(formName) {
				this.resetworkorderForm(formName);
				this.selectChoseDrawer = false;
			},
			// 搜索提交 返回工单首页
			submitWorkorderForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log('打印的筛选结果this.workorderForm ->', this.workorderForm)
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			/* ================================= 搜索 ↑ (外层) =================================  */
			/* ================================= 搜索 ↓ (内层) =================================  */
			// 打开搜索 (内层)checkbox
			openSelectChose2Drawer() {
				// 打开第二层筛选项
				this.selectChose2Drawer = true;
				// 如果打开第二层筛选项  已选择的数量为0 不确定状态清空 如果不为0且小于全选的数量 不确定状态打开 如果等于全选数量 不确定状态关闭 全选打开
				if(this.checkedEditer.length == 0) {
					this.isIndeterminateEditer = false; // 不确定状态
					this.checkAllEditer = false; // 全选状态
				}else if(this.checkedEditer.length < this.EditerListAll.length) {
					this.isIndeterminateEditer = true;
					this.checkAllEditer = false;
				}else if(this.checkedEditer.length == this.EditerListAll.length) {
					this.isIndeterminateEditer = false;
					this.checkAllEditer = true;
				}
			},
			// 全选 搜索编辑项
			choseAllEditer(val) {
				console.log('打印的val ->', val)
				this.isIndeterminateEditer = false;
				this.checkedEditer = val ? this.EditerListAll : []; // 由于设计上 是5组 checkbox 所以采用循环方式 , 为了解决多组checkbox全选 多选问题 加了个 EditerListAll变量 存全部的
			},
			// 多选 搜索编辑项
			handleCheckedEditerChange(value) {
				console.log('打印的value 多选, 已经选择的集合[1,2,3] ->',value)
				let checkedCount = value.length;
				this.checkAllEditer = checkedCount === this.EditerListAll.length;
				this.isIndeterminateEditer = checkedCount > 0 && checkedCount < this.EditerListAll.length;
			},
			// 关闭搜索 (内层)checkbox
			closeSelectChose2Drawer() {
				console.log('打印的关闭了内层筛选 ->')
				this.selectChose2Drawer = false;
				this.resetworkorderForm('workorderForm'); // 改变了筛选项 清空原有数据
//				localStorage.setItem('workorderSelect',this.EditerListAll)
			},
			/* ================================= 搜索 结束 =================================  */




		},
		created() {
		},
		updated() {
		},
		mounted() {



		}
	}


</script>
