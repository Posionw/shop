<template>
	<div style="overflow:hidden">
		<z-header>我的地址</z-header>
		<site-list
			class="site_k"
			:list="list"
			:morenId="morenId"
			:hasMore="hasMore"
			@ewewew="more"
			@increase="deletsde">
		</site-list>
		<site-addsite></site-addsite>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex';
	import siteAddsite from './addsite.vue'
	import siteList from './list.vue'
	import zHeader from '../../components/header/index.vue'
	export default {
		name:'site',
		components:{
			siteList,
			siteAddsite,
			zHeader
		},
		data(){
			return {
				list:'',
				morenId:'',
				hasMore:''
			}
		},
		computed:{
			...mapState(['userId']),
		},
		methods:{
			getIndexData(){//循环地址
	    		axios.get('/ds-app/user/addressList?&userId='+this.userId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  			this.list = res.data.data
		  			let item = this.list.find(n=>n.isDefault == "true");
		  			this.morenId=item.addressId //默认的id赋值

		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	},
		  	deletsde(id){//删除地址
		  		axios.get('/ds-app/address/deleteAddress?&userId='+this.userId+'&addressId='+id)
		  		  .then(this.handleGetDataSucc1.bind(this))
		  		  .catch(this.handleGetDataErr1.bind(this))

		  	},
		  	handleGetDataSucc1(res){
		  		console.log(res)
		  		this.getIndexData()//重新调取地址
		  	},
		  	handleGetDataErr1(){
		  		console.log("失败了")
		  	},
		  	more(id){
		  		axios.get('/ds-app/address/addressDefault?&userId='+this.userId+'&addressId='+id)
		  		  .then(this.handleGetDataSucc2.bind(this))
		  		  .catch(this.handleGetDataErr2.bind(this))
		  	},
		  	handleGetDataSucc1(res){
		  		console.log(res)
		  		this.getIndexData()//重新调取地址
		  	},
		  	handleGetDataErr1(){
		  		console.log("失败了")
		  	}
		},
		mounted(){
			this.getIndexData()
		}
	}
</script>
<style lang="stylus" scoped>
	.site_k
		margin-top:0.4rem;
		margin-bottom:0.4rem;
		box-sizing: border-box;
</style>