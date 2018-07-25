<template>
	<div class="order">
		<z-header>我的订单</z-header>
		<myorder-header></myorder-header>
		<myorder-list
			@page="handleGetList"
			:list="list"
			:loadmore="loadmore">
		</myorder-list>
	</div>
</template>
<script>
	import axios from 'axios'
	import MyorderHeader from './header.vue'
	import zHeader from '../../components/header/index.vue'
	import {Toast} from 'mint-ui';
	import MyorderList from './list.vue'
	import { mapState,mapMutations } from 'vuex';
	export default{
		name:'myorder',
		components:{
			MyorderHeader,
			MyorderList,
			Toast,
			zHeader
		},
		data(){
			return {
				list:'',
				loadmore:''
			}
		},
		computed:{
			...mapState(['orderIndex','userId']),
		},
		methods: {
			getIndexData(a,b){ 										//获取筛选1数据
		  		axios.get('/ds-app/user/orderList?userId='+this.userId+'&orderStatus='+a+'&page='+b)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  			this.loadmore = res.data.hasMore				//判断是否有更多数据
		  			this.list=res.data.data 						//列表数据赋值
		  	},
		  	handleGetDataErr(res){
		  		console.log(res)
		  	},
		  	handleGetList(id){      								//上拉加载请求数据
		  		this.getIndexData(this.orderIndex,id)
		  	}
		},
		mounted(){
			this.getIndexData('','')								//加载默认数据
		},
		watch:{
			orderIndex(){											//判断切换tab监听
				console.log(this.orderIndex)
				this.getIndexData(this.orderIndex,'')
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.order
		height:100%;
		overflow: hidden;
</style>