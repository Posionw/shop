import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [
	{ path: "/", redirect: "/Tabbar" },
	{

		path: '/Tabbar',
		name: 'Tabbar',
		component: () => import('@/components/tabbar/z-tabber'),
		children:[{
			path: '/Index',
			name: 'Index',
			component: () => import('@/pages/index/index'),
		},{
			path: '/Buycar',
			name: 'Buycar',
			component: () => import('@/pages/buycar/index'),
		}]
	},
	{
		path: '/Detail/:id',
		name: 'Detail',
		component: () => import('@/pages/detail/index')

	}]
})