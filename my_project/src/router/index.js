import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	model:'history',
	routes: [
	{ path: "/", redirect: "/Index" },
	{

		path: '/Tabbar',
		name: 'Tabbar',
		meta:{
				keepAlive:false
			},
		component: () => import('@/components/tabbar/z-tabber'),
		children:[{
			path: '/Index',
			name: 'Index',
			meta:{
				keepAlive:true
			},
			component: () => import('@/pages/index/index'),
		},{
			path: '/Buycar',
			name: 'Buycar',
			meta:{
				keepAlive:false
			},
			component: () => import('@/pages/buycar/index'),
		},{
			path: '/User',
			name: 'User',
			meta:{
				keepAlive:false
			},
			component: () => import('@/pages/user/index'),
		}]
	},{
		path: '/Detail/:id',
		name: 'Detail',
		meta:{
				keepAlive:false
			},
		component: () => import('@/pages/detail/index')

	},{
		path: '/Myorder',
		name: 'Myorder',
		meta:{
				keepAlive:false
			},
		component: () => import('@/pages/myorder/index')
	},,{
		path: '/Myorderxq/:id',
		name: 'Myorderxq',
		meta:{
				keepAlive:false
			},
		component: () => import('@/pages/myorderxq/index')
	},{
		path: '/Site',
		name: 'Site',
		meta:{
				keepAlive:false
			},
		component: () => import('@/pages/site/index')
	},{
		path: '/Changesite/:id',
		name: 'Changesite',
		meta:{
				keepAlive:false
			},
		component: () => import('@/pages/changesite/index')
	},{
		path: '/Card',
		name: 'Card',
		component: () => import('@/pages/card/index')
	},{
		path: '/Collect',
		name: 'Collect',
		component: () => import('@/pages/collect/index')
	},{
		path: '/Submit',
		name: 'Submit',
		component: () => import('@/pages/submit/index')
	},{
		path: '/Success',
		name: 'Success',
		component: () => import('@/pages/success/index')
	}],
	scrollBehavior (to, from, savedPosition) {

	}

})








