<template>
	<div>
		<mt-navbar v-model="currentTab">
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
				currentTab:'0'
			}
		},

		computed:{
			...mapState(['orderIndex']),
			tab:function(){
				return this.currentTab
			}
		},
		methods:{
			...mapMutations(['changeOrderTab'])
		},
		watch:{
			currentTab(){
				this.changeOrderTab(this.currentTab)
			}
		}
	}
</script>
<style lang='stylus' scoped>
	.list
		margin-top:10px;
</style>












