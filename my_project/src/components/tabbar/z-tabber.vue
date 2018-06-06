<template>
	<div>
		<router-view/>
		<tabbar v-model="select">
			<router-link to="/Index">
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
			<router-link to="/Buycar">
			<tabbar-item id='tab3'>
				<img src="../../assets/images/dingdang1@2x.png" slot="icon-normal">
				<img src="../../assets/images/dingdang2@2x.png" slot="icon-active"> 
        		订单
			</tabbar-item>
			</router-link>
			<router-link to="/Buycar">
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
	export default{
		name:'z-tabber',
		components:{
			tabbar,
			tabbarItem
		},
		data() {
	      return {
	        select:"tab1"
	      }
	    }
	}
</script>
<style lang="stylus" scoped>
	a
		flex: 1;
</style>



