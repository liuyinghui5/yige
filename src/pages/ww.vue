<style lang='less'>

	/*@import '../less/mixin';*/
	.onlineList {
		margin-left: 50px;
		&-title {
			font-size: 24px;
			font-weight: 800;
			color: #333;
		}
		&-list {
			border: 1px solid red;
			overflow: hidden;
			.item {
				width: 260px;
				height: auto;
				border: 1px solid red;
				float: left;

			}
		}
	}
</style>
<template>
	<div class="home-container">
		<div class="onlineList">
			<p class="onlineList-title">体育</p>
			<div class="onlineList-list">

				<div class="item" v-for="item in arr" :key="item.roomId">
					<div class="item-up">
						<img :src="item.cover" alt="">
					</div>
					<div class="item-mid">
						<span>{{item.title}}</span>
					</div>
					<div class="item-bottom">
						<span>{{item.views}}</span>
						<span>{{item.gameName}}</span>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import '../../../assets/stylus/common/reset.css'
	import axios from 'axios'
	//    import * from './*';
	export default {
		props: {},
		data() {
			return {
				arr: [{
					cover: 'http://img.plures.net/live/screenshots/2129235/274.jpg',
					domain: '2455360',
					gameId: 274,
					gameName: '综合足球',
					roomId: 2129235,
					roomName: '龙珠用户_150000892',
					sort: 0,
					title: '3015的直播',
					userAvatar: 'http://r.plures.net/no-avatar.jpg',
					userId: 150000892,
					userName: '龙珠用户_150000892',
					views: 2,
				}, {
					cover: 'http://img.plures.net/live/screenshots/2129235/274.jpg',
					domain: '2455360',
					gameId: 274,
					gameName: '综合足球',
					roomId: 2129235,
					roomName: '龙珠用户_150000892',
					sort: 0,
					title: '3015的直播',
					userAvatar: 'http://r.plures.net/no-avatar.jpg',
					userId: 150000892,
					userName: '龙珠用户_150000892',
					views: 2,
				}, {
					cover: 'http://img.plures.net/live/screenshots/2129235/274.jpg',
					domain: '2455360',
					gameId: 274,
					gameName: '综合足球',
					roomId: 2129235,
					roomName: '龙珠用户_150000892',
					sort: 0,
					title: '3015的直播',
					userAvatar: 'http://r.plures.net/no-avatar.jpg',
					userId: 150000892,
					userName: '龙珠用户_150000892',
					views: 2,
				}, {
					cover: 'http://img.plures.net/live/screenshots/2129235/274.jpg',
					domain: '2455360',
					gameId: 274,
					gameName: '综合足球',
					roomId: 2129235,
					roomName: '龙珠用户_150000892',
					sort: 0,
					title: '3015的直播',
					userAvatar: 'http://r.plures.net/no-avatar.jpg',
					userId: 150000892,
					userName: '龙珠用户_150000892',
					views: 2,
				}],
			}
		},
		computed: {},
		methods: {
			getList() {
				axios.get('//sportsapi.longzhu.com/SportRoom/GetLivingRoomList', {
					params: {
						categoryId: 243,
					},
				}).then(res => {
					console.log('打印的正在直播列表res ->', res)
				})
			},
		},
		mounted() {
			this.getList()
		},
	}

</script>
