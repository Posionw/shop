<template>
	<div clal>
		<mt-navbar v-model="active">
		  <mt-tab-item id="0">全部</mt-tab-item>
		  <mt-tab-item id="1">待付款</mt-tab-item>
		  <mt-tab-item id="2">待收货</mt-tab-item>
		  <mt-tab-item id="3">已完成</mt-tab-item>
		</mt-navbar>
	</div>
</template>
<script>
	import { Navbar,TabContainer, TabContainerItem} from 'mint-ui';
	import { mapState,mapMutations } from 'vuex';
	export default {
		name:'myorder-header',
		components:{
			Navbar,
			TabContainer,
			TabContainerItem
		},
		data(){
			return{
				active:'0'
			}
		},
		computed:{
			...mapState(['orderIndex'])
		},
		methods:{
			...mapMutations(['changeOrderTab'])
		},
		watch:{
			active(){
				this.changeOrderTab(this.active)
			}
		}
	}
</script>
<style lang='stylus' scoped>
	.list
		margin-top:10px;
</style>












