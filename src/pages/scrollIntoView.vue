<style scoped>
	/*<style lang='less' scoped>*/
	/*@import '../less/mixin';*/
	.scroll {
	}
	.scroll img {
		display: block;
	}

	.btn {
		position: fixed;
		right: 0;
		top: 200px;
		width: 100px;
		border: 3px solid red;
		background-color: green;
		color: white;
	}
</style>
<template>
	<div class="scroll">
		<div class="btn">
			<div class="go1">go1</div>
			<div class="go2">go2</div>
			<div class="go3">go3</div>
			<div class="go4">go4</div>
			<div class="go5">go5</div>
			<div class="go6">go6</div>
		</div>
		<div class="content">
			<img src="../assets/scrollTest/1.jpg" class="q">
			<img src="../assets/scrollTest/2.jpg" class="w">
			<img src="../assets/scrollTest/3.jpg" class="e">
			<img src="../assets/scrollTest/4.jpg" class="r">
			<img src="../assets/scrollTest/5.png" class="t">
			<img src="../assets/scrollTest/1.jpg" class="y">
		</div>
	</div>
</template>

<script>
	import scrollF from '../../static/js/scrollIntoView'
	export default {
		props: {},
		data() {
			return {}
		},
		computed: {},
		methods: {
		},
		beforeCreate() {
		},
		created() {
		},
		beforeMount() {
		},
		mounted() {
			scrollF('.go1', '.q')
			scrollF('.go2', '.w')
			scrollF('.go3', '.e')
			scrollF('.go4', '.r')
			scrollF('.go5', '.t')
			scrollF('.go6', '.y')

//			const q = document.querySelector('#q');
//			const go1 = document.querySelector('.go1');
//			go1.addEventListener('click', function () {
//				y.scrollIntoView({
//					block: 'start',
//					behavior: 'smooth'
//				});
//			});
		}
	}

</script>