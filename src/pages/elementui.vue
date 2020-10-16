
<style lang='less' scoped>
	/*@import '../less/mixin';*/

</style>
<template>
	<div>
	<el-table
		:data="tableData"
		@select="select"
		@select-all="selectAll"
		style="width: 50%;">
		<el-table-column
			type="selection"
			width="55">
		</el-table-column>
		<el-table-column
			fixed
			label="日期"
			width="150">
			<template slot-scope="scope">
				<p>{{scope.row.detail.time}}</p>
				<p>{{scope.row.detail.name}}</p>
			</template>
		</el-table-column>
		<el-table-column
			label="操作"
			width="100">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			</template>
		</el-table-column>
	</el-table>
		<el-button type="primary" @click="save">提交</el-button>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				// 提交参数
				saveObj: {
					selectAll: false,
					choseArr: [{id:'',name:''}]
				},
				// 表格数据
				tableData: [{
					detail: {
						time: '2020-09-01',
						name: '王小虎1',
					},
					id: '111',
				}, {
					detail: {
						time: '2020-09-01',
						name: '王小虎2',
					},
					id: '222',
				}]
			}
		},
		methods: {
			handleClick(row) {
				console.log(row);
			},
			// 手动全选
			selectAll(selection) {
				console.log('手动全选 ->', selection)
				selection.length ? this.saveObj.selectAll = true : this.saveObj.selectAll = false;
				this.choseArr = [];
			},
			// 手动单选
			select(selection) {
				console.log('手动单选->', selection)
				this.saveObj.choseArr = selection;
			},




			// 调接口提交选择的
			save() {
				console.log('打印提交的参数 ->', this.saveObj)
					
			}








		},
	}
</script>

</script>
