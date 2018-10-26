import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import one from '@/pages/one'
import two from '@/pages/two'
import three from '@/pages/three'
import four from '@/pages/four'
import lodash from '@/pages/lodash'
import scroll from '@/pages/scrollIntoView'
import tab from '@/pages/tabChange'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		}, {
			path: '/one',
			name: 'one',
			component: one
		}, {
			path: '/two',
			name: 'two',
			component: two
		}, {
			path: '/three',
			name: 'three',
			component: three
		}, {
			path: '/four',
			name: 'four',
			component: four
		}, {
			path: '/lodash',
			name: 'lodash',
			component: lodash
		}, {
			path: '/scroll',
			name: 'scroll',
			component: scroll
		}, {
			path: '/tab',
			name: 'tab',
			component: tab
		}
	]
})
