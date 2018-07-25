<template>
	<div>
		<mt-navbar class="htop" v-model="currentTab">
		  <mt-tab-item id="">全部</mt-tab-item>
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
				currentTab:''
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
	.htop
		margin-top:0.4rem;
		box-szing:border-box;
	.list
		margin-top:0.1rem;
</style>












