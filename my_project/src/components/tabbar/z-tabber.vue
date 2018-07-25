<template>
	<div class="tabbar">
		<!-- <keep-alive  include="index"> -->
		<router-view />
		<!-- </keep-alive>:to="'/Index?id='+userId+'&cid='+cid" -->
		<tabbar>
			<router-link :to="{path:'/Index',query:{id:userId,cid:cid}}">
			<tabbar-item id='tab1'>
				<img src="../../assets/images/zhuye2@2x.png" slot="icon-normal">
				<img src="../../assets/images/zhuye1@2x.png" slot="icon-active">
        		首页
			</tabbar-item>
			</router-link>
			<router-link to="/Buycar">
			<tabbar-item id='tab2'>
				<img src="../../assets/images/gouwuche1@2x.png" slot="icon-normal">
				<img src="../../assets/images/gouwuche2@2x.png" slot="icon-active">
        		购物车
			</tabbar-item>
			</router-link>
			<router-link to="/User">
			<tabbar-item id='tab4'>
				<img src="../../assets/images/wde1@2x.png" slot="icon-normal">
				<img src="../../assets/images/wde2@2x.png" slot="icon-active">
        		我的
			</tabbar-item>
			</router-link>
		</tabbar>
	</div>
</template>
<script>
	import tabbar from '@/components/tabbar/tabbar'
    import tabbarItem from '@/components/tabbar/tabbar-item.vue'
    import { mapState } from 'vuex'
	export default{
		name:'z-tabber',
		components:{
			tabbar,
			tabbarItem
		},
		computed:{
			...mapState(['userId','cid']),
		},
		mounted(){
			console.log(this.userId)
		}
	}
</script>
<style lang="stylus" scoped>
	a
		flex: 1;
</style>



