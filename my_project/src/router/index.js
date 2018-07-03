import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [
	{ path: "/", redirect: "/Index" },
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
		},{
			path: '/User',
			name: 'User',
			component: () => import('@/pages/user/index'),
		}]
	},{
		path: '/Detail/:id',
		name: 'Detail',
		component: () => import('@/pages/detail/index')

	},{
		path: '/Myorder',
		name: 'Myorder',
		component: () => import('@/pages/myorder/index')
	}]
})