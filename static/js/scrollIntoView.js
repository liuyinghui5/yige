/**
 * Created by liuyinghui on 18/10/26.
 */
// 封装的scrollIntoView 方法抛出供VUE项目使用

export default function scrollF(domD,move) {
	let getDom = document.querySelector(`${domD}`);
	let getMove = document.querySelector(`${move}`);
	getDom.addEventListener('click', function () {
		getMove.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	});
}
