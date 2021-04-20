/**
* 所有工单
* 针对大量表单项循环生成的变量名;
*  搜索示例:
*  workorderId: null // 工单ID 默认加载取 列表中第一个的id
*  searchType: 1, // 搜索类型（1：所有；2：未分配；3：未受理，4：处理中；5：已解决；6：关注的，7：smartview）
*  workStatus:0, // 1编辑工单 0创建工单
*  workorderDetailObject:{}, // 工单详情对象
*/

<style rel="stylesheet/scss" lang="scss" scoped>
@import "./index";
</style>
<style>
/* 分隔页面的竖线. */
.workorder-all .Resizer {
  z-index: 98 !important;
}
/* 改变element-ui的样式 */
/* tab切换 */
.workorder-all .tabTitle .el-tabs__item {
  padding-top: 10px !important;
  height: 56px !important;
}
/* 遮罩层颜色 */
.workorder-all .v-modal {
  background-color: rgba(22, 33, 77, 0.6) !important;
}
.workorder-all .el-button + .el-button {
  margin-left: 10px !important;
}
/* 用于解决 drawer 打开标题会自动蓝框 */
:focus {
  outline: 0;
}
/* 用于解决 drawer 内容背景颜色 UI 规定 可编辑抽屉插件 为#F3F4F6 不可编辑为 #FFFFFF */
.workorder-all .el-drawer__body {
  background: #ffffff;
}
.workorder-all .el-drawer__header {
  font-size: 20px;
  color: #182647;
  padding-bottom: 18px;
  margin-bottom: 0;
  border-bottom: 1px solid #d1d4da;
}
.workorder-all .el-dialog__header {
  font-size: 20px;
  color: #182647;
  padding-bottom: 20px;
  margin-bottom: 0;
  border-bottom: 1px solid #d1d4da;
}
/*drawer 内的某些样式 scoped原因 写在这里 */
/* 搜索 弹窗的相关样式 */
.workorder-all #selectChoseDrawerTitle {
  display: flex;
  align-items: center;
}
.workorder-all #selectChose2DrawerTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#selectChose2DrawerTitle .el-page-header__title {
  font-size: 16px;
}
#selectChose2DrawerTitle .el-page-header__content {
  font-size: 16px;
}
.workorder-all .createWorkorderDrawer {
  /*可编辑的 抽屉 颜色 #F3F4F6*/
  background-color: #f3f4f6;
}
.workorder-all .selectChoseDrawer .createWorkorderDrawer {
  /*可编辑的 抽屉 颜色 #F3F4F6*/
  background-color: #f3f4f6;
}
.workorder-all .selectChose2Drawer {
  /*可编辑的 抽屉 颜色 #F3F4F6*/
  background-color: #f3f4f6;
}
.workorder-all .createWorkorderDrawer-item-Form .el-form-item__label {
  font-size: 14px;
  color: #182647;
}
.workorder-all .selectChoseDrawer-item-Form .el-form-item__label {
  padding: 0 !important;
  font-size: 14px;
  color: #182647;
}
.workorder-all .selectChoseDrawer-item-Form .el-form-item {
  margin-bottom: 8px !important;
}
.workorder-all .tox-tinymce {
  z-index: 99 !important;
} /*富文本编辑器的层级*/
.workorder-all .tabDetail .tabDetail-item-in .el-input__inner {
  font-size: 14px;
} /*工单详情 工单属性 设备信息 用户信息 禁用input 的文字大小*/
.workorder-all #checkboxList .detail-item .el-checkbox {
  width: 100%;
  display: flex;
  align-items: center;
}
.workorder-all #checkboxList .detail-item .el-checkbox .el-checkbox__label {
  width: 98%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.workorder-all .el-button--mini {
  font-size: 12px;
}
/* 设置必填项 标题后面的 红星 */
.workorder-all
  .el-form-item.is-required:not(.is-no-asterisk)
  .el-form-item__label-wrap
  > .el-form-item__label:before,
.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:after {
  content: " *";
  color: #f56c6c;
  margin-right: 4px;
}
.workorder-all
  .el-form-item.is-required:not(.is-no-asterisk)
  .el-form-item__label-wrap
  > .el-form-item__label:before,
.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
  content: "";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
<template>
	<div class="workorder-all">
		<!--v-loading="searchLoading"-->
		<!--  出现移动element ui loading态滚动 下面出现白边的情况 自己写了一个Mask-->
		<div class="ticketaccountMask" element-loading-spinner="el-icon-loading" v-show="searchLoading" style="background-color: #000000;opacity: .8;height: 100vh;width: 100vw;position: fixed;z-index: 99999;top: 0;">
			<div class="el-loading-spinner" style="top: 50%;margin-top: -21px;width: 100%;text-align: center;position: absolute;left: -200px;"><i class="el-icon-loading"></i><p class="el-loading-text">加载中</p></div>
		</div>


		<rs-panes split-to="columns" :allow-resize="true" :min-size="leftMinSize" :size="leftSize" :max-size="leftMaxSize" units="percents" class="customerList" resizerColor="#ccc">

			<!--         布局 左侧              -->
			<!--         布局 左侧              -->
			<!--         布局 左侧              -->
			<div slot="firstPane">
				<div class="workorder-all-left">
					<!--全部应用和搜索框-->
					<div class="top">
						<el-select class="top-select" v-model="selectAppValue" placeholder="全部应用" size="small" clearable @change="selectAppValueChange">
							<el-option v-for="item in selectAppOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
						</el-select>
						<el-button class="top-search" icon="el-icon-search" size="small" left @click="openSelectChoseDrawer">请输入内容</el-button>
					</div>
					<!--全选按钮 回复量 优先级-->
					<div class="detail">
						<div class="detail-top">
							<!--全选按钮-->
							<div class="detail-top-l">
								<el-checkbox :indeterminate="isIndeterminateWorkorder" v-model="checkAllWorkorder" @change="choseAllWorkorder">{{checkedWorkorder.length}}项</el-checkbox>
							</div>

							<div class="detail-top-r" v-if="checkedWorkorder.length == 0">
								<!--回复量-->
								<el-select class="detail-top-r-selectL" v-model="replayValue" placeholder="回复量" size="mini" @change="replayValueChange">
									<el-option v-for="item in replayOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
								</el-select>
								<!--优先级-->
								<el-select class="detail-top-r-selectR" v-model="priorityValue" placeholder="优先级" size="mini"  @change="priorityValueChange">
									<el-option v-for="item in priorityOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
								</el-select>
							</div>
							<!--分配工单 按钮-->
							<div class="detail-top-btn" v-else>
								<el-button size="mini" icon="el-icon-s-fold" v-if="candistributionWorkorder" @click="distributionWorkorder">分配工单</el-button>
								<el-button size="mini" icon="el-icon-s-fold" v-if="!candistributionWorkorder" disabled >分配工单</el-button>
							</div>
						</div>

						<!--工单列表-->
						<el-checkbox-group id="checkboxList" v-model="checkedWorkorder" text-color="#182647;" @change="handleCheckedWorkorderChange">
							<div class="detail-item" v-for="(item, index) in workorderList":key="index" @click="workorderClick(item,$event)">
								<el-checkbox :label="item">
									<span class="detail-item-title">[{{ item.replyCount }}] {{ item.title }}</span>
								</el-checkbox>
								<div class="detail-item-bottom">
									<div class="tagList">
										<div class="tag low" v-if="item.priority == 1">低</div>
										<div class="tag mid" v-if="item.priority == 2">一般</div>
										<div class="tag high" v-if="item.priority == 3">紧急</div>
										<div class="tag high" v-if="item.priority == 4">非常紧急</div>
									</div>
									<div class="btnList">
										<!--状态编码（1未分配；2未受理；3受理中；4已解决; >4自定义状态；）-->
										<!--未分配-->
										<div class="btn btn2" v-if="item.statusCode == 1">{{ item.statusName }}</div>
										<!--未受理-->
										<div class="btn btn3" v-if="item.statusCode == 2">{{ item.statusName }}</div>
										<!--受理中-->
										<div class="btn btn4" v-if="item.statusCode == 3">{{ item.statusName }}</div>
										<!--已解决-->
										<div class="btn btn1" v-if="item.statusCode == 4">{{ item.statusName }}</div>
										<!--自定义状态 目前和已解决状态样式一致 UI说测试完会改-->
										<div class="btn btn1" v-if="item.statusCode > 4">{{ item.statusName }}</div>
										<!--<div class="btn" :class="`btn${item.statusCode}`">{{ item.statusName }}</div>-->
									</div>
								</div>

							</div>
						</el-checkbox-group>
						<!--<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" small></el-pagination>-->
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[20,100,200,300]" :page-size="itemsPerPage" layout="total, sizes, prev, pager, next, jumper" :total="totalItems"></el-pagination>

					</div>
				</div>
			</div>

			<!--         布局 右侧              -->
			<!--         布局 右侧              -->
			<!--         布局 右侧              -->
			<div slot="secondPane">
				<div class="workorder-all-right">
					<!--顶部主要标题-->
					<div class="top">
						<!--主要标题 文字部分-->
						<div class="top-title">
							<!--工单创建人-->
							<div class="top-title-name">{{ workorderDetailObject.creater }}</div>
							<!--工单id-->
							<div class="top-title-id">{{ workorderDetailObject.code }}</div>
							<!--工单创建时间-->
							<div class="top-title-time">{{ workorderDetailObject.created }}</div>
						</div>
						<!--主要标题 顶部按钮-->
						<div class="top-btn">
							<!--关注 / 已关注 按钮-->
							<el-button type="info" icon="el-icon-star-on" size="mini" v-if="workorderDetailObject.attentionState" @click="changeIsFocus">已关注</el-button>
							<el-button type="info" icon="el-icon-star-off" size="mini" v-if="!workorderDetailObject.attentionState" @click="changeIsFocus">关注</el-button>
							<!--催单按钮-->
							<el-button type="" icon="el-icon-bell" size="mini" @click="pushWorkorder">催单</el-button>
							<el-button type="" icon="el-icon-edit" size="mini" @click="editWorkorder" v-if="workorderDetailObject.statusCode == 1 || workorderDetailObject.statusCode == 2">编辑工单</el-button>
							<!--删除工单按钮-->
							<el-button type="" icon="el-icon-delete" size="mini" @click="deleteWorkorder">删除工单</el-button>
							<el-button type="primary" icon="el-icon-plus" size="mini" @click="createWorkorder">创建工单</el-button>
						</div>
					</div>

					<!--工单详情 , 工单属性 设备信息 用户信息-->
					<div class="detail">
						<!--工单详情 左侧-->
						<div class="detail-l">
							<!--工单标题-->
							<div class="detail-l-title">
								<div class="detail-l-title-l"><span>受理组：{{ workorderDetailObject.acceptGroupName }} </span> <span>受理人：{{ workorderDetailObject.acceptUserName }}</span></div>
								<div class="detail-l-title-r">


									<el-popover placement="bottom" width="320" trigger="hover" >
										<div style="padding: 10px 0;">
											{{ workorderDetailObject.type }}
										</div>
										<div slot="reference" class="detail-l-title-r-btn" >{{ workorderDetailObject.type }}</div>
									</el-popover>



									<el-select class="detail-l-title-r-sel" v-model="statusValue" placeholder="未分配" size="mini" @change="distributionOnly">
										<el-option v-for="item in workorderDetailObject.canChangeStatus" :key="item.id" :label="item.name" :value="item.id"></el-option>
									</el-select>
								</div>
							</div>
							<!--工单详情-->
							<div class="detail-l-content">
								<!--工单标题 客诉链接-->
								<div class="detail-l-content-top">
									<!-- 插入的催单 -->
									<div class="detail-l-content-top-insertPush">
										<div class="item" v-for="(item , index) in pushWorkorderList" :key="index" v-if="index < 2">
											<p class="item-title"> <span>{{ item.userName }}</span> : <span>发起了催单</span> <span>{{ item.created }}</span>  </p>
											<p class="item-content"> {{ item.content }}</p>
										</div>
										<el-button type="" size="mini" @click="openPushWorkorderList" v-if="pushWorkorderList.length != 0">更多内容</el-button>
									</div>
									<!--工单标题-->
									<div class="detail-l-content-top-title"> <p>工单标题: <span> {{ workorderDetailObject.title }} </span></p> </div>
									<!--客诉链接-->
									<div class="detail-l-content-top-href" v-if="workorderDetailObject.link"> <p>客诉链接: <a :href="workorderDetailObject.link" target="_blank"> {{ workorderDetailObject.link }}</a></p> </div>
									<!--工单内容-->
									<div class="detail-l-content-top-pre" v-html="workorderDetailObject.content"></div>
									<!--自定义字段-->
									<div class="detail-l-content-top-custom" v-for="(item,index) in workorderDetailObject.contentInfos" :key="index">
										<p>{{ item.field }}: <span> {{ item.content }}</span></p>
									</div>
									<!--上传的附件-->
									<div class="detail-l-content-top-custom" v-if="workorderDetailObjectFileList.length != 0">
										<p>附件内容: </p>
										<div  v-for="(item,index) in workorderDetailObjectFileList" :key="index">
											<el-popover placement="top-start" :title="item.name" width="400" trigger="hover">
												<a :href="item.url" target="_blank"> <img style="width: 100%;" :src="item.url" alt=""> </a>
												<p slot="reference" style="display: inline-block;"><a :href="item.url" target="_blank"> {{ item.name }}</a></p>
											</el-popover>
										</div>
									</div>

								</div>
								<!--富文本编辑器-->
								<div class="detail-l-content-mid">
									<div class="detail-l-content-mid-title">工单回复</div>
									<!-- 富文本 -->
									<vueTinymce ref="vueTinymceModel1" v-model="vueTinymceModel" :setting="vueTinymceSetting" />
									<!--回复按钮-->
									<div class="detail-l-content-mid-btn">
										<el-button type="primary"  size="mini" @click="replayWorkorder">回复</el-button>
										<el-button type="info"  size="mini" @click="clearVueTinymce">清空</el-button>
									</div>
								</div>
								<!--留言列表-->
								<div class="detail-l-content-down">
									<!--tab 切换-->
									<div class="tabTitle">
										<el-tabs v-model="replayTab" @tab-click="replayTabClick">
											<el-tab-pane label="其他回复" name="1"></el-tab-pane>
											<el-tab-pane label="操作历史" name="2"></el-tab-pane>
										</el-tabs>
									</div>
									<!--其他回复 操作历史-->
									<div class="tabDetail">
										<!--其他回复-->
										<div class="tabDetail-item" v-if="replayTab == 1">
											<div class="tabDetail-item-in" v-for="(item,index) in workorderReplayList" :key="index">
												<div class="up">
													<div class="left">
														<img class="left-pic" :src="item.avatar" alt="">
													</div>
													<div class="right">
														<el-button class="right-btn" type=""  size="mini" @click="replayVueTinymceFocus(item.id,item.userName)">回复</el-button>
														<p class="right-title">{{ item.userName }}</p>
														<p class="right-time">{{ item.created }}</p>
														<p class="right-detail" v-html="item.content"></p>
													</div>
												</div>
												<!--楼中楼-->
												<div class="down" v-if="item.childs.length != 0">
													<div v-for="(child, index) in item.childs" :key="index">
														<p class="down-title"> <span class="down-title-name">{{ child.userName }}</span> :<span class="down-title-time">{{ child.created }}</span></p>
														<p class="down-detail" v-html="child.content"></p></div>
												</div>
											</div>
										</div>
										<!--操作历史-->
										<div class="tabDetail-item" v-if="replayTab == 2">
											<div class="tabDetail-item-in" v-for="(item , index) in workorderHistoryList" :key="index">
												<div class="up">
													<div class="left">
														<img class="left-pic" src="../../../../assets/404_images/404.png" alt="">
													</div>
													<div class="right">
														<p class="right-title">{{ item.createrName }}</p>
														<p class="right-time">{{ item.created }}</p>
														<!--操作类型（1：创建工单，2：编辑工单，3：删除工单；4：变更状态；5：回复工单；6：催单）-->
														<p class="right-detail" v-if="item.event == 1"> 创建工单 </p>
														<p class="right-detail" v-if="item.event == 2"> 编辑工单 <span @click="openChangeDetailsDrawer(item)" style="text-decoration: underline;cursor: pointer;"> 查看详情 </span></p>
														<p class="right-detail" v-if="item.event == 3"> 删除工单 </p>
														<p class="right-detail" v-if="item.event == 4"> 变更状态 </p>
														<p class="right-detail" v-if="item.event == 5"> 回复工单 </p>
														<p class="right-detail" v-if="item.event == 6"> 催单 </p>
														<p class="right-detail" v-if="item.event == 7"> 分配工单 </p>
														<p class="right-detail" v-if="item.event == 8"> 关注工单 </p>

													</div>
												</div>

											</div>
										</div>
									</div>
								</div>

							</div>

							<!--开关右侧 工单属性 设备信息 用户信息 的按钮-->
							<div class="detail-l-hideShowDetailBtn" :class="{hideShowDetailBtnOff : tabDetailR == true}" @click="tabDetailR = !tabDetailR">
								<i class="fa fa-angle-right"></i>
								<i class="fa fa-angle-right"></i>
							</div>
						</div>

						<!--工单详情 右侧 工单属性 设备信息 用户信息-->
						<div class="detail-r" v-if="tabDetailR">
							<!--TAB 切换标题-->
							<div class="tabTitle">
								<el-tabs v-model="detailRightTab" @tab-click="workorderAttributeDeviceInformationUserInformationChangeTab">
									<el-tab-pane label="工单属性" name="1"></el-tab-pane>
									<el-tab-pane label="设备信息" name="2"></el-tab-pane>
									<el-tab-pane label="用户信息" name="3"></el-tab-pane>
								</el-tabs>
							</div>
							<!--TAB切换内容 没采用TAB标题内部切换的原因是 样式自定义不方便-->
							<div class="tabDetail">
								<div class="tabDetail-item" v-if="detailRightTab == 1">
									<div class="tabDetail-item-in">
										<p class="title">所属应用</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.appName" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单ID</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.code" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单状态</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.statusName" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单优先级</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.priorityName" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单受理组</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.acceptGroupName" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单受理人</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.acceptUserName" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单关注人</p>
										<p class="detail" style="font-size: 20px;">
											<el-input v-model="workorderDetailObject.followUsers" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单创建者</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.created" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">工单创建时间</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.creater" :disabled="true" size="mini"></el-input>
										</p>
									</div>
								</div>
								<div class="tabDetail-item" v-if="detailRightTab == 2">
									<div class="tabDetail-item-in">
										<p class="title">平台</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.platform" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">机型</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.model" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">应用包名</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.applicationIdentifier" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">国家地区缩写</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.countryCode" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">OS版本</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.osVersion" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">SDK版本</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.sdkVersion" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">服务器ID</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.serverId" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">语言</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.language" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">网络类型</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.networkType" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">自定义字段</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.deviceInfo.customFields" :disabled="true" size="mini"></el-input>
										</p>
									</div>

								</div>
								<div class="tabDetail-item" v-if="detailRightTab == 3">
									<div class="tabDetail-item-in">
										<p class="title">应用名称</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.customerInfo.applicationName" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">用户昵称</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.customerInfo.nickName" :disabled="true" size="mini"></el-input>
										</p>
									</div>
									<div class="tabDetail-item-in">
										<p class="title">用户UID</p>
										<p class="detail">
											<el-input v-model="workorderDetailObject.customerInfo.uid" :disabled="true" size="mini"></el-input>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</rs-panes>

		<!--            弹窗&抽屉             -->
		<!--            弹窗&抽屉             -->
		<!--            弹窗&抽屉             -->
		<!-- 富文本编辑器的z-index是 10000 虽然可修改 但是 页面可拖动的z-index也很高 -->
		<!--  UI要求 有编辑功能的抽屉插件 不可以点击遮罩关闭 :wrapperClosable="false" -->

		<!-- 抽屉插件 -->
		<!-- 抽屉插件 -->
		<!-- 抽屉插件 -->

		<!-- 创建 & 编辑工单 drawer -->
		<el-drawer :title="createWorkorderTitle" :visible.sync="createWorkorderDrawer" direction="rtl" size="35%" :wrapperClosable="false" @open="openCreateWorkorderDrawerInitWangEdit" :destroyOnClose="true">
			<div class="workorder-all-drawer createWorkorderDrawer">
				<div class="createWorkorderDrawer-item">

					<el-row :gutter="16">
						<el-form ref="createForm" :model="createForm" class="createWorkorderDrawer-item-Form" :rules="createFormRules" size="small" label-width="100px" label-position="top">
							<!-- 切换模板 -->
							<el-col :span="24">
								<el-form-item label="切换模板" prop="field200">
									<el-select v-model="createForm.field200" placeholder="请选择下拉选择切换模板" @change="changeTemplate($event,createForm.field200)" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field200Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<!-- 工单标题 -->
							<el-col :span="24">
								<el-form-item label="工单标题" prop="field201" >
									<el-input v-model="createForm.field201" placeholder="请输入工单标题" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 客诉链接 -->
							<el-col :span="24">
								<el-form-item label="客诉链接" prop="field202">
									<el-input v-model="createForm.field202" placeholder="请输入客诉链接" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 工单内容  富文本编辑器 -->
							<el-col :span="24">
								<el-form-item label="工单内容" prop="field203">
									<vueTinymce v-model="createForm.field203" :setting="vueTinymceSetting"/>
								</el-form-item>
							</el-col>
							<!-- 模板自定义字段 -->
							<el-col :span="24" v-for="(item,index) in createForm.contentInfos" :key="index">
								<el-form-item :label="item.field" :prop="'contentInfos.' + index + '.content'" :rules="{required: item.required ,message: '域名不能为空', trigger: 'blur'}">
									<el-input v-model="item.content" placeholder="请输入模板自定义字段" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>

							<!-- 上传附件 -->
							<el-col :span="24">
								<el-form-item label="上传附件" prop="field204">
									<el-upload class="upload-demo" ref="upload"
									           :file-list="createForm.field204"
									           action="/api/file/userupload"
									           :limit="3"
									           :beforeUpload="createWorkorderBeforeAvatarUpload"
									           :on-change="createWorkorderHandleChange"
									           :on-progress="createWorkorderHandleOnprogress"
									           :show-file-list="true"
									           :on-success="createWorkorderOnSuccess"
									           :on-error="createWorkorderOnError"
									           :on-remove="removeWorkorderOnSuccess"
									           :auto-upload="true">
										<el-button type="primary" slot="trigger" size="small">选取文件</el-button>
									</el-upload>
								</el-form-item>
							</el-col>

							<p style="font-size: 14px;color: #182647;padding: 16px 7px;">工单属性</p>
							<!-- 所属应用 -->
							<el-col :span="24">
								<el-form-item label="所属应用" prop="field205">
									<el-select v-model="createForm.field205" placeholder="请选择下拉选择所属应用" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field205Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<!-- 工单分类 -->
							<el-col :span="24">
								<el-form-item label="工单分类" prop="field206">
									<el-select v-model="createForm.field206" placeholder="请选择下拉选择工单分类" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field206Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<!-- 工单优先级 -->
							<el-col :span="24">
								<el-form-item label="工单优先级" prop="field207">
									<el-radio-group v-model="createForm.field207" size="medium">
										<el-radio v-for="(item, index) in field207Options" :key="index" :label="item.id" :disabled="item.disabled">{{item.name}}</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<!-- 工单受理组 -->
							<el-col :span="24">
								<el-form-item label="工单受理组" prop="field208">
									<el-select v-model="createForm.field208" placeholder="请选择下拉选择" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field208Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<!-- 工单受理人 -->
							<el-col :span="24">
								<el-form-item label="工单受理人" prop="field209">
									<el-select v-model="createForm.field209" placeholder="请选择下拉选择工单受理人" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field209Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<!-- 工单关注人 -->
							<el-col :span="24">
								<el-form-item label="工单关注人" prop="field210">
									<el-select v-model="createForm.field210" placeholder="请选择下拉选择工单关注人" clearable filterable multiple collapse-tags :style="{width: '100%'}">
										<el-option v-for="(item, index) in field210Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<p style="font-size: 14px;color: #182647;padding: 16px 7px;">用户信息</p>
							<!-- 应用名称 -->
							<el-col :span="24">
								<el-form-item label="应用名称" prop="field211">
									<el-input v-model="createForm.field211" placeholder="请输入应用名称" clearable :style="{width: '100%'}">
									</el-input>
								</el-form-item>
							</el-col>
							<!-- 用户昵称 -->
							<el-col :span="24">
								<el-form-item label="用户昵称" prop="field212">
									<el-input v-model="createForm.field212" placeholder="请输入用户昵称" clearable :style="{width: '100%'}">
									</el-input>
								</el-form-item>
							</el-col>
							<!-- 用户UID -->
							<el-col :span="24">
								<el-form-item label="用户UID" prop="field213">
									<el-input v-model="createForm.field213" placeholder="请输入用户UID" clearable :style="{width: '100%'}">
									</el-input>
								</el-form-item>
							</el-col>

							<p style="font-size: 14px;color: #182647;padding: 16px 7px;">设备信息</p>
							<!-- 机型 -->
							<el-col :span="12">
								<el-form-item label="机型" prop="field214">
									<el-input v-model="createForm.field214" placeholder="请输入机型" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 语言 -->
							<el-col :span="12">
								<el-form-item label="语言" prop="field215">
									<el-input v-model="createForm.field215" placeholder="请输入语言" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 平台 -->
							<el-col :span="12">
								<el-form-item label="平台" prop="field216">
									<el-input v-model="createForm.field216" placeholder="请输入平台" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 应用包名 -->
							<el-col :span="12">
								<el-form-item label="应用包名" prop="field217">
									<el-input v-model="createForm.field217" placeholder="请输入应用包名" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- OS版本 -->
							<el-col :span="12">
								<el-form-item label="OS版本" prop="field218">
									<el-input v-model="createForm.field218" placeholder="请输入OS版本" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- SDK版本 -->
							<el-col :span="12">
								<el-form-item label="SDK版本" prop="field219">
									<el-input v-model="createForm.field219" placeholder="请输入SDK版本" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 网络分类 -->
							<el-col :span="12">
								<el-form-item label="网络分类" prop="field220">
									<el-input v-model="createForm.field220" placeholder="请输入网络分类" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 服务器ID -->
							<el-col :span="12">
								<el-form-item label="服务器ID" prop="field221">
									<el-input v-model="createForm.field221" placeholder="请输入服务器ID" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>
							<!-- 自定义字段 -->
							<el-col :span="24">
								<el-form-item label="自定义字段" prop="field222">
									<el-input v-model="createForm.field222" placeholder="请输入自定义字段" clearable :style="{width: '100%'}"></el-input>
								</el-form-item>
							</el-col>

						</el-form>
					</el-row>

					<!-- 取消 & 创建 -->
					<div style="float: right;height: 60px;">
						<el-button type="" @click="closeNewWorkorder" size="small">取消</el-button>
						<el-button type="primary" @click="saveNewWorkorder" size="small">{{ createWorkorderBtnText }}</el-button>
					</div>
				</div>
			</div>
		</el-drawer>

		<!-- 搜索 抽屉(外) drawer -->
		<el-drawer title="筛选" :visible.sync="selectChoseDrawer" direction="rtl" size="35%" :wrapperClosable="false" >
			<div slot="title" id="selectChoseDrawerTitle">
				<span class="title-name">筛选</span>
				<el-button @click="openSelectChose2Drawer" icon="el-icon-s-tools" size="mini" style="margin-left: 10px;">编辑筛选项</el-button>
			</div>
			<div class="workorder-all-drawer selectChoseDrawer">
				<div class="selectChoseDrawer-item">

					<el-form :model="workorderForm" ref="workorderForm" label-width="100px" class="selectChoseDrawer-item-Form" size="small" :label-position="labelPosition">
						<!-- ['工单ID','工单标题','工单优先级','工单状态','工单分类','工单受理组','工单受理人','工单关注人','工单创建时间','工单解决时间','用户昵称','用户UID','机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段'] -->
						<!-- 使用循环 判断内层drawer checkbox 选择了那个, 外层drawer对应显示相应 formItem-->
						<div v-for="(item,index) in EditerListAll" :key="index">
							<template v-if="checkedEditer.indexOf(item) > -1">
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
									<el-select v-model="workorderForm.field106" placeholder="请选择工单优先级" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field106Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
								<!--工单状态-->
								<el-form-item label="工单状态" prop="field107" v-if="item == '工单状态'" >
									<el-select v-model="workorderForm.field107" placeholder="请选择工单状态" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field107Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
								<!--工单分类-->
								<el-form-item label="工单分类" prop="field108" v-if="item == '工单分类'">
									<el-select v-model="workorderForm.field108" placeholder="请选择工单分类" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field108Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
								<!--工单受理组-->
								<el-form-item label="工单受理组" prop="field109" v-if="item == '工单受理组'">
									<el-select v-model="workorderForm.field109" placeholder="请选择工单受理组" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field109Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
								<!--工单受理人-->
								<el-form-item label="工单受理人" prop="field110" v-if="item == '工单受理人'">
									<el-select v-model="workorderForm.field110" placeholder="请选择工单受理人" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field110Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
								<!--工单关注人-->
								<el-form-item label="工单关注人" prop="field111" v-if="item == '工单关注人'">
									<el-select v-model="workorderForm.field111" placeholder="请选择工单关注人" clearable filterable multiple collapse-tags :style="{width: '100%'}">
										<el-option v-for="(item, index) in field111Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
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
									<el-select v-model="workorderForm.field117" placeholder="请选择语言" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field117Options" :key="index" :label="item.value" :value="item.text" :disabled="item.disabled"></el-option>
									</el-select>
								</el-form-item>
								<!--平台-->
								<el-form-item label="平台" prop="field118" v-if="item == '平台'">
									<el-select v-model="workorderForm.field118" placeholder="请选择平台" clearable filterable :style="{width: '100%'}">
										<el-option v-for="(item, index) in field118Options" :key="index" :label="item.value" :value="item.text" :disabled="item.disabled"></el-option>
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
							</template>
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

				</div>
			</div>
		</el-drawer>

		<!-- 搜索 抽屉(内) drawer  由搜索 下拉框 drawer 中的 按钮el-button @click="selectChose2Drawer = true" 打开-->
		<el-drawer title="编辑筛选项" :visible.sync="selectChose2Drawer" direction="rtl" size="35%" :wrapperClosable="false" :before-close="closeSelectChose2Drawer" :show-close="false">
			<div slot="title" id="selectChose2DrawerTitle">
				<el-page-header :content="selectChose2DrawerTitle" @back="closeSelectChose2Drawer"></el-page-header>
			</div>
			<div class="workorder-all-drawer selectChose2Drawer">
				<div class="selectChose2Drawer-item">
					<el-checkbox :indeterminate="isIndeterminateEditer" v-model="checkAllEditer" @change="choseAllEditer">全选</el-checkbox>

					<!--循环五组 checkbox 选项数据 -->
					<div style="margin: 15px 0;" v-for="item in EditerList">
						<p style="margin: 16px 0;">{{item.title}}</p>
						<el-checkbox-group v-model="checkedEditer" @change="handleCheckedEditerChange">
							<el-checkbox v-for="(city,i) in item.EditerListItem" :label="city" :key="city" >{{city}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
			</div>
			<!--<div style="height: 60px;position: relative;bottom: 60px;display: flex;align-items: center;justify-content: space-between;width: 90%;margin-left: 5%;">-->
			<!--<el-checkbox :indeterminate="isIndeterminateEditer" v-model="checkAllEditer" @change="choseAllEditer">全选</el-checkbox>-->
			<!--<el-button type="primary" size="mini" >完成</el-button>-->
			<!--</div>-->
		</el-drawer>

		<!--操作历史 查看详情 drawer-->
		<el-drawer title="查看详情" :visible.sync="changeDetailsDrawer" direction="rtl" size="35%" :wrapperClosable="true">
			<div class="workorder-all-drawer changeDetailsDrawer">
				<!--原内容-->
				<div class="changeDetailsDrawer-item">
					<p style="color: #182647;">原内容</p>
					<div v-if="changeDetailsDrawerDetail.length != 0" v-for="(item,index) in changeDetailsDrawerDetail" :key="index">
						<p >{{ item.field }} : <span v-html="item.oldValue"></span></p>
					</div>
				</div>
				<div style="border-bottom: 1px solid #D1D4DA;"></div>
				<!--修改后-->
				<div class="changeDetailsDrawer-item">
					<p style="color: #FA4747;">修改后</p>
					<div v-if="changeDetailsDrawerDetail.length != 0" v-for="(item,index) in changeDetailsDrawerDetail" :key="index">
						<p >{{ item.field }} : <span v-html="item.newValue"></span></p>
					</div>
				</div>
			</div>
		</el-drawer>

		<!--催单详情 drawer-->
		<el-drawer title="催单详情" :visible.sync="pushWorkorderDrawer" direction="rtl" size="35%" :wrapperClosable="true">
			<div class="workorder-all-drawer pushWorkorderDrawer">
				<div class="pushWorkorderDrawer-item" v-for="(item , index) in pushWorkorderList" :key="index">
					<p class="pushWorkorderDrawer-item-title"> <span>{{ item.userName }}</span> : <span>发起了催单</span> <span>{{ item.created }}</span>  </p>
					<p class="pushWorkorderDrawer-item-content"> {{ item.content }}</p>
				</div>
			</div>
		</el-drawer>


		<!-- 弹窗插件 -->
		<!-- 弹窗插件 -->
		<!-- 弹窗插件 -->

		<!--催单 dialog-->
		<el-dialog title="发起催单" :visible.sync="pushWorkorderDialog" width="30%" :before-close="handleClose1" z-index="10003">
			<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="pushWorkorderTextarea" maxlength="500" show-word-limit></el-input>
			<span slot="footer" class="dialog-footer">
        <el-button @click="pushWorkorderTextarea = '';pushWorkorderDialog = false;" size="small">取消</el-button>
        <el-button type="primary" @click="wfreminderPost" size="small">提交</el-button>
      </span>
		</el-dialog>


		<!-- 分配自身工单弹窗 dialog -->
		<!--<el-dialog title="分配工单" :visible.sync="distributionOlnydialog" width="30%" :before-close="handleClose1" z-index="10002">-->
		<!--<div>分配当前工单</div>-->
		<!--<span slot="footer" class="dialog-footer">-->
		<!--<el-button @click="distributionOlnydialog = false" size="small">取消</el-button>-->
		<!--<el-button type="primary" @click="distributionWorkorderBtnOnly" size="small">提交</el-button>-->
		<!--</span>-->
		<!--</el-dialog>-->

		<!-- 分配工单弹窗 dialog -->
		<el-dialog title="分配工单" :visible.sync="distributiondialog" width="30%" :before-close="handleClose1" :close-on-click-modal="false" z-index="10002">
			<el-form ref="distributiondialogForm" :model="distributiondialogForm" :rules="distributiondialogFormRules" size="small" label-width="100px" label-position="top">
				<el-form-item label="工单受理组" prop="distributiondialog1">
					<el-select v-model="distributiondialogForm.distributiondialog1" placeholder="请选择工单受理组" clearable filterable :style="{width: '100%'}">
						<el-option v-for="(item, index) in distributiondialog1Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="工单受理人" prop="distributiondialog2">
					<el-select v-model="distributiondialogForm.distributiondialog2" placeholder="请选择工单受理人" clearable filterable :style="{width: '100%'}">
						<el-option v-for="(item, index) in distributiondialog2Options" :key="index" :label="item.name" :value="item.id" :disabled="item.disabled"></el-option>
					</el-select>
				</el-form-item>
				<!--<el-form-item size="small">-->
				<!--</el-form-item>-->
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="distributiondialog = false" size="small">取消</el-button>
				<el-button type="primary" @click="distributionWorkorderBtn" size="small">提交</el-button>
      </span>
		</el-dialog>

		<!--删除 dialog-->
		<el-dialog title="删除提示" :visible.sync="deleteDialog" width="30%" :before-close="handleClose2" z-index="10001">
			<span>确认删除该工单?</span>
			<span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialog = false" size="small">取消</el-button>
        <el-button type="danger" @click="deleteWorkorderOnly" size="small">删除</el-button>
      </span>
		</el-dialog>




	</div>
</template>

<script>


	import vueTinymce from "@/components/vueTinymce" // 富文本编辑器
	import ResSplitPane from 'vue-resize-split-pane'; // 布局可拖拽
	import axios from "axios";
	import qs from 'qs'
	import {routerHandleFun} from "@/permission/index";

	// 处理时间选择器
	const fetchDate = function(date) {
		let y = new Date(date).getFullYear();
		let m = new Date(date).getMonth() + 1;
		let d = new Date(date).getDate();
		let h = new Date(date).getHours();
		let mm = new Date(date).getMinutes();
		let s = new Date(date).getSeconds();
		mm = mm < 10 ? "0" + mm : mm;
		s = s < 10 ? "0" + s : s;
		return y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
	};
	export default {
		components: {
			'rs-panes': ResSplitPane,
			vueTinymce,

		},
		props: {},
		data() {
			var vm = this;
			return {
				searchLoading: false, // 请求接口之前 true 接口返回之后 false
				// 布局插件
				/* ================================= 页面拉伸布局 =================================  */
				leftMinSize: 20, // 最小宽度
				leftSize: 20, // 初始化宽度
				leftMaxSize: 45, // 最大宽度
				/* ================================= 翻页组件 =================================  */
				currentPage: 1, // 当前页
				itemsPerPage: 20, // 每页多少个
				totalItems: 1, // 总条数
				totalPages: 1, // 总页数

//			searchType: 1, // 搜索类型（1：所有；2：未分配；3：新工单，4：处理中；5：已解决；6：关注的，7：smartview）
				searchType: this.$route.query.searchType ? this.$route.query.searchType*1 : 1,
				workorderId: null, // 当前工单ID 点击列表item 切换 默认为列表中第一个
				firstSetId: 1,
				/* ================================= 左侧 =================================  */
				/* ================================= 左侧 =================================  */
				/* ================================= 左侧 =================================  */



				/* ================================= 全部应用 工单列表=================================  */
				// 搜索 抽屉 drawer
				createWorkorderTitle: '创建工单', // 设置标题 , 创建工单 和编辑工单 ;
				createWorkorderBtnText: '创建', // 设置按钮 创建工单 / 更新工单
				workStatus:0, // 1编辑工单 0创建工单
				createWorkorderDrawer: false, // 开关 创建工单 Drawer
				selectChoseDrawer: false, // 开关 搜索 (外层)
				selectChose2Drawer: false, // 开关 搜索 (内层)
				selectChose2DrawerTitle: '编辑筛选项', // 搜索 (内层)标题
				selectAppValue: '', // 筛选 应用
				selectAppOptions: [{id: '1', name: '应用1'}], // 筛选 应用列表
				replayValue:1, // 排序 回复量
				replayOptions: [{id: 1, name: '回复量降序'},{id: 2, name: '回复量升序'}], // 排序 回复量列表
				priorityValue: 1, // 排序 优先级
				priorityOptions: [{id: 1, name: '优先级降序'},{id: 2, name: '优先级升序'}], // 排序 优先级列表
				distributiondialog: false, // 批量分配工单弹窗
				distributionOlnydialog: false, // 分配 单个 当前工单 弹窗
				distributiondialogForm: {
					distributiondialog1: '',
					distributiondialog2: '',
				},
				distributiondialogFormRules: {
					distributiondialog1: [],
					distributiondialog2: [],
				},
				distributiondialog1Options: [{"name": "选项一", "id": 1}], // 批量分配 工单受理组
				distributiondialog2Options: [{"name": "选项一", "id": 1}], // 批量分配 工单受理人

				/* ================================= 工单列表  =================================  */
				// 工单列表的 多选全选
				checkAllWorkorder: false, // 是否全选
				checkedWorkorder: [], // 默认选中项|| 已选中的数组集合
				candistributionWorkorder: false, // 列表中是否有 除"未分配"状态以外的 状态 , 如果有 批量分配按钮禁用
				workorderList: [], //  所有项
				isIndeterminateWorkorder: false, //  多选的时候显示   不确定状态


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
					//日期选择不能选今天之后
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [
						{
							text: this.$t("latestWeek"),
							onClick(picker) {
								const end = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
								const start =
									new Date(vm.timeStr).getTime() - 3600 * 1000 * 24 * 7;
								// start=(start - 3600 * 1000 * 24 * 7);
								picker.$emit("pick", [fetchDate(start), fetchDate(end)]);
							}
						},
						{
							text: this.$t("latestMonth"),
							onClick(picker) {
								const end = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
								const start =
									new Date(vm.timeStr).getTime() - 3600 * 1000 * 24 * 30;
								// start=(start - 3600 * 1000 * 24 * 30);
								picker.$emit("pick", [fetchDate(start), fetchDate(end)]);
							}
						},
						{
							text: this.$t("latestThree"),
							onClick(picker) {
								const end = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
								const start =
									new Date(vm.timeStr).getTime() - 3600 * 1000 * 24 * 90;
								// start=(start- 3600 * 1000 * 24 * 90);
								picker.$emit("pick", [fetchDate(start), fetchDate(end)]);
							}
						}
					]
				},
				rules: {
					field104: [],
					field105: [],
					field106: [],
					field107: [],
					field108: [],
					field109: [],
					field110: [],
					field111: [],
					field112: [],
					field113: [],
					field114: [],
					field115: [],
					field116: [],
					field117: [],
					field118: [],
					field119: [],
					field120: [],
					field121: [],
					field122: [],
					field123: [],
					field124: [],
				},
				// 灌入的select 数据
				field106Options: [], // 请选择工单优先级
				field107Options: [], // 请选择工单状态
				field108Options: [], // 请选择工单分类
				field109Options: [], // 请选择工单受理组
				field110Options: [], // 请选择工单受理人
				field111Options: [], // 请选择工单关注人
				field117Options: [], // 请选择语言
				field118Options: [], // 请选择平台

				/* ================================= 搜索 (内层) checkbox =================================  */
				checkAllEditer: false, // 是否全选
				isIndeterminateEditer: false, //  多选的时候显示   不确定状态
				// 此数组用于按照UI分组 循环checkbox列表
				EditerList: [
					{title: '常用' ,EditerListItem: ['工单ID','工单标题','工单优先级','工单状态','工单分类']}, //  常用 所有项
					{title: '成员' ,EditerListItem: ['工单受理组','工单受理人','工单关注人']}, //  成员 所有项
					{title: '时间' ,EditerListItem: ['工单创建时间','工单解决时间']}, //  时间 所有项
					{title: '用户' ,EditerListItem: ['用户昵称','用户UID']}, //  用户 所有项
					{title: '设备信息' ,EditerListItem: ['机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段']}, //  设备信息 所有项
				],
				checkedEditer: ['工单ID','工单标题','工单优先级','工单状态','工单分类','工单受理组','工单受理人','工单关注人','工单创建时间','工单解决时间','用户昵称','用户UID','机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段'], // 产品要求默认选中项全选 || 已选中的数组集合
				EditerListAll: ['工单ID','工单标题','工单优先级','工单状态','工单分类','工单受理组','工单受理人','工单关注人','工单创建时间','工单解决时间','用户昵称','用户UID','机型','语言','平台','应用包名','OS版本','SDK版本','网络分类','服务器ID','自定义字段'], // 因为多选分组 ,采用循环方式 此数组用于 全选多选校验用

				/* ================================= 右侧 =================================  */
				/* ================================= 右侧 =================================  */
				/* ================================= 右侧 =================================  */

				tabDetailR: true, // 是否展开右侧按钮
				workorderDetailObject:{}, // 工单详情对象
				workorderDetailObjectFileList: [], // 工单详情展示 附件列表 , 由于返回的是json字符串 转换一下
				replayTab: '1', // 默认打开是第几个tab       切换 回复列表和操作历史
				detailRightTab: '1', // 默认打开是第几个tab  切换 工单属性 设备信息 用户信息
				statusValue:'', // 分配工单下拉框
				vueTinymceModel: '', // 富文本编辑器
				replayVueTinymceId: 0, // 用于判断回复按钮是 0: 回复工单 其他:回复楼中楼
				changeDetailsDrawer: false, // 查看历史 操作详情
				changeDetailsDrawerDetail: [], // 查看历史 操作详情 具体内容

				// 各种抽屉 弹窗
				// 右上角5个按钮
//				attentionState: false, // 关注 是否被关注
				/* ================================= 催单 =================================  */
				pushWorkorderDialog:false, // 催单 弹窗 dialog
				pushWorkorderDrawer: false, // 催单 详情列表 drawer
				pushWorkorderList: [], // 催单 详情列表
				pushWorkorderTextarea: '', // 催单输入框

				deleteDialog:false,// 删除弹窗 dialog

				workorderReplayList:[], // 工单回复列表
				workorderHistoryList:[], // 操作历史列表

				/* ================================= 创建工单 抽屉 =================================  */
				// 0 为下拉框默认状态 ; '' 为输入框默认状态 ;
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
					countryCode: "", // 地区
					field222: "", // 自定义字段
				},
				// 提交规则校验 必填/非必填
				createFormRules: {
					field200: [],
					contentInfos: [],
					field201: [{
						required: true,
						message: '请输入工单标题',
						trigger: 'blur'
					}],
					field202: [],
					field203: [{
						required: true,
						message: '请输入工单内容',
						trigger: 'blur'
					}],
					field205: [{
						required: true,
						message: '请选择下拉选择所属应用',
						trigger: 'change'
					}],
					field206: [{
						required: true,
						message: '请选择下拉选择工单分类',
						trigger: 'change'
					}],
					field207: [{
						required: true,
						message: '工单优先级不能为空',
						trigger: 'change'
					}],
					field208: [],
					field209: [],
					field210: [],
					field211: [],
					field212: [],
					field213: [],
					field214: [],
					field215: [],
					field216: [],
					field217: [],
					field218: [],
					field219: [],
					field220: [],
					field221: [],
					field222: [],
				},
				field200Options: [], // 切换模板
				field205Options: [], // 所属应用
				field206Options: [], // 工单分类
				field207Options: [], // 优先级
				field208Options: [], // 工单受理组
				field209Options: [], // 工单受理人
				field210Options: [], // 工单关注人

				// vueTinymce 富文本编辑器 配置
				vueTinymceSetting: {
					draggable_modal: true, // 高度可拖拽
					toolbar: "fullscreen | fontsizeselect | bold italic underline strikethrough | alignleft aligncenter alignright | undo redo | removeformat | link unlink | numlist bullist | image media| forecolor backcolor | indent outdent | searchreplace |",
					plugins: "link image media table lists fullscreen quickbars wordcount  emoticons searchreplace autoresize directionality",
					height: 200,
					max_height: 500,
					max_width: "100%",
					zIndex:9,
					placeholder: '输入工单回复',
				},
			}
		},
		computed: {},
		methods: {
			/* ================================= 翻页 =================================  */
			// 翻页 每页个数
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.itemsPerPage = val;
				this.getWorkorderList(); // 调用 加载/搜索 工单列表
			},
			// 翻页 跳页
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.currentPage = val;
				this.getWorkorderList(); // 调用 加载/搜索 工单列表
			},
			/* ================================= 工单列表 =================================  */
			// 切换应用
			selectAppValueChange() {
				console.log('打印的切换应用 ->', )
				this.getWorkorderList(); // 调用 加载/搜索 工单列表
			},
			// 回复量 排序
			replayValueChange() {
				// console.log('打印的回复量 排序 ->', )
				this.getWorkorderList(); // 调用 加载/搜索 工单列表
			},
			// 优先级 排序
			priorityValueChange() {
				// console.log('打印的优先级 排序 ->', )
				this.getWorkorderList(); // 调用 加载/搜索 工单列表
			},
			// 工单 全选
			choseAllWorkorder(val) {
				this.checkedWorkorder = val ? this.workorderList : [];
				this.isIndeterminateWorkorder = false;

				this.candistributionWorkorder = this.workorderList.every(item=> {return item.statusCode == 1;}) // 全选 筛选当前列表中是否有状态 除"未分配" 的 修改批量分配按钮状态
			},
			// 工单 多选
			handleCheckedWorkorderChange(value) {
				console.log('打印的value 多选 ->' ,this.checkedWorkorder)
				let checkedCount = value.length;
				this.checkAllWorkorder = checkedCount === this.workorderList.length;
				this.isIndeterminateWorkorder = checkedCount > 0 && checkedCount < this.workorderList.length;

				this.candistributionWorkorder = this.checkedWorkorder.every(item=> {return item.statusCode == 1;}) // 多选 筛选当前多选列表中是否有状态 除"未分配" 的 修改批量分配按钮状态
			},
			// 分配工单  打开分配工单弹窗
			distributionWorkorder() {
				this.distributiondialog = true;
				this.distributiondialogForm = {
					distributiondialog1: '',
					distributiondialog2: '',
				}
			},
			// 分配工单(列表批量) 确认按钮
			distributionWorkorderBtn() {
				this.collectionDistribution();

			},
			// 分配工单(当前自身) 调用分配接口
			distributionOnly() { this.workorderDistribution(); },
			/* ================================= 搜索 开始 =================================  */
			// 打开搜索 (外层)
			openSelectChoseDrawer() {
				this.selectChoseDrawer = true;
			},
			// 搜索 筛选项表单重置
			resetworkorderForm(formName) { this.$refs[formName].resetFields(); },
			// 搜索 关闭
			closeSelectChoseDrawer(formName) {
				this.resetworkorderForm(formName);
				this.selectChoseDrawer = false;
			},
			// 搜索提交 返回工单首页
			submitWorkorderForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.getWorkorderList(); // 调用 加载/搜索 工单列表
						// console.log('打印的筛选结果this.workorderForm ->', this.workorderForm)
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
				localStorage.setItem('workorderSelect',this.checkedEditer)
			},
			/* ================================= 搜索 结束 =================================  */


			/* ================================= 创建工单 开始 =================================  */
			// 创建工单
			createWorkorder() {

				this.createWorkorderTitle = '创建工单';
				this.createWorkorderBtnText = '创建';
				this.workStatus = 0; // 1编辑工单 0创建工单
				this.createWorkorderDrawer = true;

				// 每次创建之前 逐个重置
				// this.$refs[formName].resetFields(); 这个方法 居然不好用...
				this.createForm = {
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
					countryCode: "", // 地区
					field222: "", // 自定义字段
				}

				this.searchLoading = true;
				axios.get('/api/workflow/wforder/create',{
					params:{
						ticketId: this.$route.query.ticketId ? this.$route.query.ticketId : "" // 关联的客诉ID，不关联时为空字符串 从客诉跳过来把id带到url上
					},
					paramsSerializer: params => {return qs.stringify(params);}
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						let resData = res.data.data;

						this.field200Options = resData.templates;  // 创建工单 注入 模板
						this.field205Options = resData.applications;  // 创建工单 注入 所属应用
						this.field206Options = resData.types;         // 创建工单 注入 工单分类
						this.field207Options = resData.prioritys;     // 创建工单 注入 优先级
						this.field208Options = resData.groups;     // 创建工单 注入 受理组
						this.field209Options = resData.users;     // 创建工单 注入 受理人
						this.field210Options = resData.users;     // 创建工单 注入 关注人

						// 用户信息
						this.createForm.field211 = resData.customerInfo.applicationName; // 创建工单 客诉注入 应用名称
						this.createForm.field212 = resData.customerInfo.nickName; // 创建工单 客诉注入 用户昵称
						this.createForm.field213 = resData.customerInfo.uid; // 创建工单 客诉注入 用户UID

						// 设备信息
						this.createForm.field214 = resData.ticketDevice.model; // 创建工单 客诉注入 机型
						this.createForm.field215 = resData.ticketDevice.language; // 创建工单 客诉注入 语言
						this.createForm.field216 = resData.ticketDevice.platform; // 创建工单 客诉注入 平台
						this.createForm.field217 = resData.ticketDevice.applicationIdentifier; // 创建工单 客诉注入 应用包名
						this.createForm.field218 = resData.ticketDevice.osVersion; // 创建工单 客诉注入 OS版本
						this.createForm.field219 = resData.ticketDevice.sdkVersion; // 创建工单 客诉注入 SDK版本
						this.createForm.field220 = resData.ticketDevice.networkType; // 创建工单 客诉注入 网络分类
						this.createForm.field221 = resData.ticketDevice.serverId; // 创建工单 客诉注入 服务器ID
						this.createForm.field222 = resData.ticketDevice.customFields; // 创建工单 客诉注入 自定义字段

						// console.log('打印的创建工单 需要的selectOption ->', res.data.data)
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})


			},
			// 创建工单 打开的时候回调
			openCreateWorkorderDrawerInitWangEdit() {},
			// 切换模板
			changeTemplate($event,item) {
				// console.log('打印的切换模板i ->', $event,item)
				this.searchLoading = true;
				axios.get('/api/workflow/wftemplate/edit',{
					params:{id: item ? item : this.field200Options[0].id},
					paramsSerializer: params => {return qs.stringify(params);}
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.createForm.field201 = res.data.data.title; // 工单标题
						this.createForm.field202 = res.data.data.link; // 客诉链接
						this.createForm.field203 = res.data.data.content; // 富文本编辑器
						this.createForm.contentInfos = res.data.data.contents; // 模板自定义字段
						// console.log('打印的获取模板 ->', res.data.data)
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})

			},
			// 创建工单 上传附件
			// 上传前
			createWorkorderBeforeAvatarUpload(file) {
				var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)
				const isLt5M = file.size / 1024 / 1024 < 5
				if(!isLt5M) {
					this.$message({
						message: '上传文件大小不能超过 5MB!',
						type: 'warning'
					});
				}
				return isLt5M
			},
			createWorkorderHandleOnprogress(file, fileList) {this.searchLoading = true;},
			createWorkorderHandleChange(file, fileList) {},
			createWorkorderOnSuccess(response, file, fileList) {
				// console.log('打印的上传成功1 ->' ,file)
				this.createForm.field204.push({name:file.name,url:file.response.data.url})
				this.searchLoading = false;
			},
			createWorkorderOnError() {this.searchLoading = false;},
			// 移除上传的文件
			removeWorkorderOnSuccess(file, fileList) {
				var temp = this.createForm.field204;
				for (var i = 0, len = temp.length; i < len; i++) {
					if (temp[i].name == file.name) {
						temp.splice(i, 1);
						break;
					}
				}
				this.createForm.field204 = temp;
				console.log('打印的移除成功 ->',this.createForm.field204)
			},
			// 保存创建工单
			saveNewWorkorder() {
				this.$refs['createForm'].validate(valid => {
					if (valid) {
						console.log('打印的工单id ->', this.workorderId)
						this.createdWorkorder();
						console.log('打印的创建成功 ->')
					} else {
						console.log('打印的创建失败  ,error submit!!')
						return false;
					}
				})
			},
			// 取消创建工单
			closeNewWorkorder() {
				// console.log('打印的取消创建工单')
				this.createForm.field203 = "";
				this.createWorkorderDrawer = false;
				this.$refs['createForm'].resetFields();
			},
			/* ================================= 创建工单 结束 =================================  */

			/* ================================= 编辑工单 =================================  */
			// 编辑工单
			editWorkorder() {
				this.createWorkorderTitle = '编辑工单';
				this.createWorkorderBtnText = '更新';
				this.workStatus = 1; // 1编辑工单 0创建工单
				console.log('打印的编辑工单 工单id ->', this.workorderId)
				this.editerWorkorder(); // 调接口
			},


			/* ================================= 自定义 方法 =================================  */
			/* ======================
			 * 工单item 点击;
			 * 工单属性 设备信息 用户信息 TAB切换;
			 *
			 * 关注 催单  删除工单
			 *
			 * 其他回复 操作历史 TAB切换;
			 * 查看历史 操作详情 打开侧边栏list
			 *  =======================  */

			// 工单item 点击 lyh
			workorderClick(item,event) {

				if( event.target.className == 'tagList' || event.target.className == 'detail-item') {
					console.log('打印的切换工单item.orderId ->', item.orderId)
					this.workorderId = item.orderId; // 更新工单id
					console.log('打印的this.searchType ->', this.searchType)
					this.$router.push({
						path: `${this.$route.path}?orderId=${item.orderId}&searchType=${this.searchType}`
					})
//					this.refresh(); // 获取 列表 详情 催单
//					this.getWorkorderDetail(); // 获取 工单详情 首次获取需同步执行)
//					this.getWfreminderList(); // 获取催单列表
//					this.getWorkorderReplyList(); // 获取回复工单列表
//					this.getWorkorderDoHistory(); // 获取操作历史记录
				}
			},
			// 工单属性 设备信息 用户信息 切换
			workorderAttributeDeviceInformationUserInformationChangeTab(event) {console.log(event);},
			// 关注
			changeIsFocus() {
				this.searchLoading = true;
				axios.post('/api/workflow/wforder/attention',{
					attention: !this.workorderDetailObject.attentionState,
					id:this.workorderId
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.workorderDetailObject.attentionState = !this.workorderDetailObject.attentionState;
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 催单
			pushWorkorder() {this.pushWorkorderDialog = true;},
			// 催单 催单更多内容按钮 打开侧边栏list
			openPushWorkorderList() {this.pushWorkorderDrawer = true;},
			// 关闭催单前的弹窗
			handleClose1(done) {
				this.pushWorkorderTextarea = ''; // 关闭 清空催单内容
				done();},
			// 删除工单
			deleteWorkorder() {this.deleteDialog = true;},
			// 关闭删除工单前的弹窗
			handleClose2(done) {done();},
			// 其他回复 操作历史切换
			replayTabClick(event) {
				if(event.name == 1) {
					this.getWorkorderReplyList(); // 获取回复工单列表
				}else if(event.name == 2){
					this.getWorkorderDoHistory(); // 获取操作历史记录
				}
			},
			// 查看历史 操作详情 打开侧边栏list
			openChangeDetailsDrawer(item) {
				this.changeDetailsDrawer = true;
				this.changeDetailsDrawerDetail = item.operations; // 查看详情的具体字段
			},
			// 编辑器 清空按钮
			clearVueTinymce() {
				this.vueTinymceModel = '';
				this.replayVueTinymceId = 0; // 编辑器 回复按钮 回复当前工单
			},
			// 回复楼中楼 按钮 自动激活编辑框
			replayVueTinymceFocus(replayVueTinymceId,username) {
				// console.log('打印的盖楼按钮 ->', )
				// console.log('打印的tinymce ->', tinyMCE)
				// console.log('打印的this.$refs.vueTinymceModel1 ->', this.$refs.vueTinymceModel1)
				this.replayVueTinymceId = replayVueTinymceId; // 编辑器 回复按钮 回复楼中楼
				tinyMCE.execCommand("mceReplaceContent", false, `@${username}: `); // 编辑器 获取激活
			},



			/* ================================= 请求接口 主动触发 =================================  */

			// 创建/更新  按钮
			createdWorkorder() {

				var sendData = JSON.parse(JSON.stringify(this.createForm)); // 拷贝一份
				if(sendData.field200 == 0) { sendData.field200 = this.field200Options[0].id; }
				if(sendData.field205 == "") { sendData.field205 = 0; }
				if(sendData.field206 == "") { sendData.field206 = 0; }
				if(sendData.field207 == "") { sendData.field207 = 0; }
				if(sendData.field208 == "") { sendData.field208 = 0; }
				if(sendData.field209 == "") { sendData.field209 = 0; }
				if(sendData.field210.length == 0 ) { sendData.field210 = null; } else { sendData.field210 = sendData.field210.join();}
				console.log('打印的创建工单sendData ->', sendData)


				// 创建表单的时候 新增的请求参数
				var createdReqObject = {
					"ticketId": this.$route.query.ticketId ? this.$route.query.ticketId : "", // 客诉id
					"tempId": Number(sendData.field200), // 模板id
					"title": sendData.field201, // 工单标题
					"ticketLink": sendData.field202, // 客诉链接
					"content": sendData.field203, // 富文本编辑器
					"files": sendData.field204, // 上传附件
					"appId": sendData.field205, // 所属应用
					"typeId": sendData.field206, // 工单分类
					"priority": sendData.field207, // 工单优先级
					"acceptGroupId": sendData.field208, // 工单受理组
					"acceptUserId": sendData.field209, // 工单受理人
					"followUsers": sendData.field210, // 工单关注人 '1,2,3'
					"customerInfo": {
						"applicationName": sendData.field211, // 应用名称
						"nickName": sendData.field212, // 用户昵称
						"uid": sendData.field213, // 用户UID
					},
					"deviceInfo": {
						"model": sendData.field214, // 机型
						"language": sendData.field215, // 语言
						"platform": sendData.field216, // 平台
						"applicationIdentifier": sendData.field217, // 应用包名
						"osVersion": sendData.field218, // OS版本
						"sdkVersion": sendData.field219, // SDK版本
						"networkType": sendData.field220, // 网络分类
						"serverId": sendData.field221, // 服务器ID
						"countryCode": sendData.countryCode, // 地区 ,默认传""
						"customFields": sendData.field222, // 自定义字段
//						"customFields": "{"hs-custom-metadata":{"vip":"vip1","testKey":"testValue","coins":"0","hs-tags":"活动bug,军队bug"},"elva-custom-metadata":{"vip":"vip1","testKey":"testValue","coins":"0","elva-tags":"活动bug,军队bug"}}"
					},
					"contentInfos": sendData.contentInfos,
				}

				// 编辑表单的时候 更新的请求参数
				var editReqObject = {
					"id": this.workorderId , // 编辑的工单id
					"ticketId": this.$route.query.ticketId ? this.$route.query.ticketId : "", // 客诉id
					"tempId": Number(sendData.field200), // 模板id
					"title": sendData.field201, // 工单标题
					"ticketLink": sendData.field202, // 客诉链接
					"content": sendData.field203, // 富文本编辑器
					"files": sendData.field204, // 上传附件
					"appId": sendData.field205, // 所属应用
					"typeId": sendData.field206, // 工单分类
					"priority": sendData.field207, // 工单优先级
					"acceptGroupId": sendData.field208, // 工单受理组
					"acceptUserId": sendData.field209, // 工单受理人
					"followUsers": sendData.field210, // 工单关注人 '1,2,3'
					"customerInfo": {
						"applicationName": sendData.field211, // 应用名称
						"nickName": sendData.field212, // 用户昵称
						"uid": sendData.field213, // 用户UID
					},
					"deviceInfo": {
						"model": sendData.field214, // 机型
						"language": sendData.field215, // 语言
						"platform": sendData.field216, // 平台
						"applicationIdentifier": sendData.field217, // 应用包名
						"osVersion": sendData.field218, // OS版本
						"sdkVersion": sendData.field219, // SDK版本
						"networkType": sendData.field220, // 网络分类
						"serverId": sendData.field221, // 服务器ID
						"countryCode": sendData.countryCode, // 地区 ,默认传""
						"customFields": sendData.field222, // 自定义字段
//						"customFields": "{"hs-custom-metadata":{"vip":"vip1","testKey":"testValue","coins":"0","hs-tags":"活动bug,军队bug"},"elva-custom-metadata":{"vip":"vip1","testKey":"testValue","coins":"0","elva-tags":"活动bug,军队bug"}}"
					},
					"contentInfos": sendData.contentInfos,
				}

				this.searchLoading = true;

				if(this.workStatus == 0) {
//					console.log('打印的创建工单 ->',createdReqObject)
					axios.post('/api/workflow/wforder/create', createdReqObject).then(res=>{
						this.searchLoading = false;
						if(res.data.flag){
							this.closeNewWorkorder(); // 关闭并清空 创建工单
							// this.getWorkorderList(); // 刷新列表
							// this.getWorkorderDetail(); // 刷新详情
							this.refresh();

						}else{
							this.$message.error(res.data.desc)
						}
					}).catch(err=>{
						console.log(err)
					})

				}else {
//					console.log('打印的更新工单 ->',editReqObject)
					axios.post('/api/workflow/wforder/edit', editReqObject).then(res=>{
						this.searchLoading = false;
						if(res.data.flag){
							this.closeNewWorkorder(); // 关闭并清空 更新工单
							// this.getWorkorderList(); // 刷新列表
							// this.getWorkorderDetail(); // 刷新详情
							console.log('打印的this.workorderId ->', this.workorderId)
							this.refresh();

						}else{
							this.$message.error(res.data.desc)
						}
					}).catch(err=>{
						console.log(err)
					})

				}

			},
			// 编辑工单
			editerWorkorder() {
				this.searchLoading = true;
				axios.get('/api/workflow/wforder/edit',{
					params:{id: this.workorderId },// id 工单ID
					paramsSerializer: params => {return qs.stringify(params);}
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.createWorkorderDrawer = true; // 打开编辑弹窗

						var resData = res.data.data;
						this.createForm.field200 = resData.tempId; // 切换模板
						this.createForm.field201 = resData.title; // 工单标题 '' *
						this.createForm.field202 = resData.ticketLink; // 客诉链接 ''
						this.createForm.field203 = resData.content; // 富文本编辑器 {}
						this.createForm.contentInfos = resData.contentInfos; // 模板自定义字段
						this.createForm.field204 = resData.files; // 上传附件 []
						this.createForm.field205 = resData.appId; // 所属应用 0 *
						this.createForm.field206 = resData.typeId; // 工单分类 0 *
						this.createForm.field207 = resData.priority; // 工单优先级 * 单选 无默认
						if(resData.acceptGroupId == 0) {
							this.createForm.field208 = ""; // 工单受理组 0
						}else {
							this.createForm.field208 = resData.acceptGroupId; // 工单受理组 0
						}
//
						if(resData.acceptUserId == 0) {
							this.createForm.field209 = ""; // 工单受理组 0
						}else {
							this.createForm.field209 = resData.acceptUserId; // 工单受理组 0
						}
//						this.createForm.field208 = resData.acceptGroupId; // 工单受理组 0
//						this.createForm.field209 = resData.acceptUserId; // 工单受理人 0
						if(resData.followUsers) {
							this.createForm.field210 = resData.followUsers.split(','); // 工单关注人 0
						}else {
							this.createForm.field210 = resData.followUsers; // 工单关注人 0
						}
						this.createForm.field211 = resData.customerInfo.applicationName; // 应用名称
						this.createForm.field212 = resData.customerInfo.nickName; // 用户昵称
						this.createForm.field213 = resData.customerInfo.uid; // 用户UID
						this.createForm.field214 = resData.deviceInfo.model; // 机型
						this.createForm.field215 = resData.deviceInfo.language; // 语言
						this.createForm.field216 = resData.deviceInfo.platform; // 平台
						this.createForm.field217 = resData.deviceInfo.applicationIdentifier; // 应用包名
						this.createForm.field218 = resData.deviceInfo.osVersion; // OS版本
						this.createForm.field219 = resData.deviceInfo.sdkVersion; // SDK版本
						this.createForm.field220 = resData.deviceInfo.networkType; // 网络分类
						this.createForm.field221 = resData.deviceInfo.serverId; // 服务器ID
						this.createForm.countryCode = resData.deviceInfo.countryCode; // 地区
						this.createForm.field222 = resData.customFields; // 自定义字段
						this.field200Options = resData.templates; // 切换模板
						this.field205Options = resData.applications; // 所属应用
						this.field206Options = resData.types; // 工单分类
						this.field207Options = resData.prioritys; // 优先级
						this.field208Options = resData.groups; // 工单受理组
						this.field209Options = resData.users; // 工单受理人
						this.field210Options = resData.users; // 工单关注人
//						console.log('打印的res.data.data ->', res.data.data)
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})

			},
			// 催单 发起催单
			wfreminderPost() {
				this.searchLoading = true;
				axios.post('/api/workflow/wfreminder/create',{
					orderId: this.workorderId , // 工单ID
					content: this.pushWorkorderTextarea, // 催单内容
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.$message('发起催单成功');
//						console.log('打印的res.data.data ->', res.data.data)
						this.pushWorkorderTextarea = ''; // 清空催单内容
						this.pushWorkorderDialog = false; // 关闭催单窗口
						this.getWfreminderList(); // 获取催单列表
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 删除工单
			deleteWorkorderOnly() {
				// 需求 , 删除当前之后加载 下一个工单
				this.searchLoading = true;
				axios.post('/api/workflow/wforder/delete',{
					id: this.workorderId , // 工单ID
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.deleteDialog = false; // 关闭弹窗
						this.$router.push({
							path: `${this.$route.path}`
						})

//						if(this.workorderList.length > 1) {
//							var findWorkorderListId = this.workorderList.findIndex(item => {
//								if(this.workorderId == item.orderId) {
//									return true;
//								}
//							})
//							var newIndex = findWorkorderListId+1;
//							if(findWorkorderListId+1  == this.workorderList.length) {
//								console.log('打印的1 表里有多个 但是在删最后一个')
//								this.workorderId = this.workorderList[0].orderId;
//							}else {
//								console.log('打印的2 表里有多个 在删除中间的')
//								this.workorderId = this.workorderList[newIndex].orderId; // 设置要显示的id 为下一条
//							}
//						}else {
//							// 表里就剩下这一个了
//							console.log('打印的3 表里就剩下这一个了')
//							this.workorderId = this.workorderList[0].orderId;
//						}
//						this.refresh(); // 刷新列表 刷新详情

					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 分配当前工单
			workorderDistribution() {
				this.searchLoading = true;
				axios.post('/api/workflow/wforder/changestatus',{
					id: this.workorderId , // 工单ID
					oldStatus: this.workorderDetailObject.status, // 当前工单状态ID
					newStatus: this.statusValue, // 要变更的工单状态ID
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.$message('变更状态成功');
						this.refresh(); // 更新状态
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})

			},
			// 工单列表 批量分配
			collectionDistribution() {

				var sendData = JSON.parse(JSON.stringify(this.distributiondialogForm)); // 拷贝一份 防止改变页面select返显
				//以下是后端需要的 "空"数据格式 ; 改变完类型的结果 用于调用接口且不影响页面显示;
				if(sendData.distributiondialog1 == "") {sendData.distributiondialog1 = 0; }
				if(sendData.distributiondialog2 == "") {sendData.distributiondialog2 = 0; }
				// 如果打开批量分配 不选分配组和分配人 就直接关了弹窗 不走接口
				if(sendData.distributiondialog1 == 0 && sendData.distributiondialog2 == 0) {
					this.distributiondialog = false; // 关闭分配工单弹窗
					return
				}
				var ids = this.checkedWorkorder.reduce((odd,curr)=> {return [...odd,curr.orderId]},[]).join();

				this.searchLoading = true;
				axios.post('/api/workflow/wforder/batchallocation',{
					ids: ids, // 需要分配的ID，英文逗号分隔 '1,2,3'
					acceptGroupId: sendData.distributiondialog1, // 受理组ID
					acceptUserId: sendData.distributiondialog2, // 受理人ID
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.refresh(); // 获取新的列表
						this.distributiondialog = false; // 关闭分配工单弹窗
						this.isIndeterminateWorkorder = false; // 关闭多选状态bug
						this.checkedWorkorder = []; // 关闭多选状态bug (清空已选择)
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})

			},
			// 回复工单 回复楼中楼
			replayWorkorder() {
				console.log('打印的this.vueTinymceModel ->', this.vueTinymceModel)
				this.searchLoading = true;
				axios.post('/api/workflow/wfreply/create',{
					orderId: this.workorderId , // 工单ID
					content: this.vueTinymceModel, // 催单内容
					replyId: this.replayVueTinymceId, // 被回复消息ID（第一级回复传0）
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.$message('发起回复成功');
						this.replayVueTinymceId = 0; //重置回复状态为 回复当前工单
						this.getWorkorderReplyList(); // 刷新回复列表
						this.clearVueTinymce(); // 清空编辑器
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})
			},





			/* ================================= 请求接口 被动加载 =================================  */



			// 工单列表 & 搜索
			getWorkorderList() {

				var sendData = JSON.parse(JSON.stringify(this.workorderForm)); // 拷贝一份 防止改变页面select返显
				//以下是后端需要的 "空"数据格式 ; 改变完类型的结果 用于调用接口且不影响页面显示;

				if(sendData.field106 == "") {sendData.field106 = 0; }
				if(sendData.field107 == "") {sendData.field107 = 0; }
				if(sendData.field108 == "") {sendData.field108 = 0; }
				if(sendData.field109 == "") {sendData.field109 = 0; }
				if(sendData.field110 == "") {sendData.field110 = 0; }
//				if(sendData.field111 == "") {sendData.field111 = 0; }
				if(sendData.field111.length == 0 ) { sendData.field111 = null; } else { sendData.field111 = sendData.field111.join();}
				if(sendData.field112.length == 0) {sendData.field112 = null; }
				if(sendData.field113.length == 0) {sendData.field113 = null; }
				// console.log('打印的筛选结果sendData ->', sendData)

				this.searchLoading = true;
				axios.post('/api/workflow/wforder/list',{
					pageIndex: this.currentPage, // 页码
					pageSize: this.itemsPerPage, // 页大小
					searchType: this.searchType*1, // 路由判断 ?? 搜索类型（1：所有；2：未分配；3：新工单，4：处理中；5：已解决；6：关注的，7：smartview）
					replyOrderBy: this.replayValue, // 回复量排序
					priorityOrderBy: this.priorityValue, // 优先级排序
					userId: 0, // 接口文档没注释
					gameId: this.selectAppValue == "" ? 0 : this.selectAppValue, // 应用ID，传0，为当前使用的应用

					code: sendData.field104, // 工单ID
					title: sendData.field105, // 工单标题
					priority: sendData.field106, // 工单优先级id
					status: sendData.field107, // 工单状态id
					type: sendData.field108, // 工单分类id
					acceptGroupId: sendData.field109, // 工单受理组id
					acceptUserId: sendData.field110, // 工单受理人id
					attentionUserId: sendData.field111, // 工单关注人id
					createdBegin: sendData.field112 == null ? null : sendData.field112[0], // 创建时间-开始
					createdEnd: sendData.field112 == null ? null : sendData.field112[1], // 创建时间-结束
					completedBegin: sendData.field113 == null ? null : sendData.field113[0], // 完成时间-开始
					completedEnd: sendData.field113 == null ? null : sendData.field113[1], // 完成时间-结束
					nickName: sendData.field114, // 用户昵称
					uuid: sendData.field115, // 用户UID
					deviceModel: sendData.field116, // 机型
					deviceLanguage: sendData.field117, // 语言
					devicePlatform: sendData.field118, // 平台
					appPackageName: sendData.field119, // 应用包名
					osVersion: sendData.field120, // OS版本
					sdkVersion: sendData.field121, // SDK版本
					networkType: sendData.field122, // 网络分类
					serverId: sendData.field123, // 服务器ID
					customData: sendData.field124, // 自定义字段

				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						let resData = res.data.data;

						this.totalItems = resData.orderList.totalItems; // Number 设置 总条数
						this.totalPages = resData.orderList.totalPages; // Number 设置 总页数

						this.selectAppOptions = resData.applications;   // Array 注入 全部应用

						this.field106Options = resData.prioritys;       // Array 注入 工单优先级
						this.field107Options = resData.status;          // Array 注入 工单状态
						this.field108Options = resData.types;           // Array 注入 工单分类
						this.field109Options = resData.groups;          // Array 注入 工单受理组
						this.field110Options = resData.users;           // Array 注入 工单受理人
						this.field111Options = resData.users;           // Array 注入 工单关注人
						this.field117Options = resData.languages;       // Array 注入 语言
						this.field118Options = resData.platforms;       // Array 注入 平台

						// 再次渲染的原因是防止以后批量分配数据有变动 方便更改
						this.distributiondialog1Options = resData.groups;// Array 注入 列表批量分配 工单受理人
						this.distributiondialog2Options = resData.users; // Array 注入 列表批量分配 工单受理人

						this.workorderList = resData.orderList.items; // Array 注入 工单列表

//						if(this.firstSetId == 1) {
//							console.log('打印的仅加载一次 ->' )
						if(this.$route.query.orderId) { this.workorderId = this.$route.query.orderId*1; }
						if(this.$route.query.searchType) { this.searchType = this.$route.query.searchType*1; }
						if(this.workorderList.length != 0) {
							this.workorderId = this.workorderList[0].orderId; // 存工单id

							this.getWorkorderDetail(); // 获取 工单详情 首次获取需同步执行)
							this.getWfreminderList(); // 获取催单列表
							this.getWorkorderReplyList(); // 获取回复工单列表
							this.getWorkorderDoHistory(); // 获取操作历史记录

						} else {
							this.workorderDetailObject = {};
							this.$message.error('工单列表为空')
						}
						routerHandleFun(); // 更新导航数字
						this.isIndeterminateWorkorder = false; // 关闭多选状态bug
						this.checkedWorkorder = []; // 关闭多选状态bug (清空已选择)

//							this.getWorkorderDetail(); // 获取 工单详情 首次获取需同步执行)
//							this.getWfreminderList(); // 获取催单列表
//							this.getWorkorderReplyList(); // 获取回复工单列表
//							this.getWorkorderDoHistory(); // 获取操作历史记录

						this.firstSetId = 0;
//						} // 解决首次加载 list -> ID -> detail 同步操作

						this.selectChoseDrawer = false; // 关闭搜索抽屉

					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})

			},
			// 催单 获取催单列表
			getWfreminderList() {
				this.searchLoading = true;
				axios.get('/api/workflow/wfreminder/list',{
					params:{orderId: this.workorderId},// orderId 工单ID
					paramsSerializer: params => {return qs.stringify(params);}
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.pushWorkorderList = res.data.data;
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 回复列表
			getWorkorderReplyList() {
				this.searchLoading = true;
				axios.get('/api/workflow/wfreply/list',{
					params:{
						orderId: this.workorderId, // orderId 工单ID
						replyId: -1  //被回复 ID（0：查询该工单下所有回复消息，-1：只查询工单下第一级回复。大于0:查询所属的二级回复）
					},
					paramsSerializer: params => {return qs.stringify(params);}
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.workorderReplayList = res.data.data;
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 操作记录
			getWorkorderDoHistory() {
				this.searchLoading = true;
				axios.get('/api/workflow/record/list',{
					params:{
						orderId: this.workorderId, // orderId 工单ID
					},
					paramsSerializer: params => {return qs.stringify(params);}
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.workorderHistoryList = res.data.data;
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 工单详情
			getWorkorderDetail() {
				this.searchLoading = true;
				axios.get('/api/workflow/wforder/detail',{
					params:{id:this.workorderId },// 工单ID
					paramsSerializer: params => {return qs.stringify(params);}
				}).then(res=>{
					this.searchLoading = false;
					if(res.data.flag){
						this.workorderDetailObject = res.data.data;
						this.workorderDetailObject.followUsers = res.data.data.followUsers.reduce((odd,curr)=> {
							return [...odd,curr.name];
						},[]).join(',');
						this.statusValue = res.data.data.status; // 设置状态初始值

						this.workorderDetailObjectFileList = JSON.parse(res.data.data.files); //
						console.log('打印的工单详情对象 ->', this.workorderDetailObject)
					}else{
						this.$message.error(res.data.desc)
					}
				}).catch(err=>{
					console.log(err)
				})

			},


			/* ================================= 请求接口 点击item 加载 =================================  */
			refresh() {
//				const list = this.getWorkorderList();
//				const detail = this.getWorkorderDetail();
//				Promise.all([list, detail]).then((result) => {
//					console.log(result)
//				}).catch((error) => {
//					console.log(error)
//				})
				this.getWorkorderList(); // 获取 工单列表
//				this.getWorkorderDetail(); // 获取 工单详情 首次获取需同步执行)
//				this.getWfreminderList(); // 获取催单列表
//				this.getWorkorderReplyList(); // 获取回复工单列表
//				this.getWorkorderDoHistory(); // 获取操作历史记录
			}
		},
		created() {
//			this.getWorkorderList();
			this.refresh();
		},
		watch : {
			workorderId:function(newVal,oldVal) {
				if(newVal != oldVal) {
//					this.refresh();
//					console.log('打印的newVal1,oldVal1 ->', newVal, oldVal)
					this.getWorkorderDetail(); // 获取 工单详情 首次获取需同步执行)
					this.getWfreminderList(); // 获取催单列表
					this.getWorkorderReplyList(); // 获取回复工单列表
					this.getWorkorderDoHistory(); // 获取操作历史记录
				}
			},
			$route(to,from) { 
//				if(to.query.orderId != from.query.orderId) {
//					console.log('打印的newVal3,oldVal3 ->', to.query.orderId, from.query.orderId)

				if(this.workorderList.length != 0) {
					if(to.query.searchType != from.query.searchType) {
						this.searchType = this.$route.query.searchType ? this.$route.query.searchType*1 : 1,
							this.workorderId = this.$route.query.orderId ? this.$route.query.orderId*1 : this.workorderList[0].orderId;
						this.refresh(); // 获取
					}
				}else {
					console.log('打印的工单列表无数据 ->')
					this.searchType = this.$route.query.searchType ? this.$route.query.searchType*1 : 1,
						this.workorderId = null;
					this.refresh(); // 获取
				}

//				}
			}
		},
		updated() {

		},
		mounted() {
			// 进入页面就在本地存储取搜索筛选项 如果本地存储没有 就取全部 此时: 0 == all;
			var getWorkorderSelect = localStorage.getItem('workorderSelect');
			(getWorkorderSelect && getWorkorderSelect.length != 0) ? this.checkedEditer = getWorkorderSelect.split(',') : this.checkedEditer;

			// 2020/11/25 17:47 配置动态导航前


		}
	}


</script>
