<template>
	<div>
		<z-header>我的收藏</z-header>
		<collect-card
			:list="list"
			@goodsId="handleDeleteId">
		</collect-card>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex';
	import zHeader from '../../components/header/index.vue'
	import collectCard from './card.vue'
	export default {
		name:'collect',
		components:{
			collectCard,
			zHeader
		},
		data(){
			return {
				list:''
			}
		},
		computed:{
			...mapState(['userId']),
		},
		methods:{
			getIndexData(){ 										//获取筛选1数据
		  		axios.get('/ds-app/user/collectList?userId='+this.userId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		this.list=res.data.data
		  	},
		  	handleGetDataErr(res){
		  		console.log(res)
		  	},
		  	handleDeleteId(id){
		  		axios.get('/ds-app/home/collectGoods?userId='+this.userId+'&collectStatus=false&goodsId='+id)
		  		  .then(this.handleGetDataSucc1.bind(this))
		  		  .catch(this.handleGetDataErr1.bind(this))
		  	},
		  	handleGetDataSucc1(res){
		  		console.log(res)
		  		this.getIndexData()
		  	},
		  	handleGetDataErr1(res){
		  		console.log(res)
		  	}

		},
		mounted(){
			this.getIndexData()
		}
	}
</script>
<style lang="stylus" scoped>

</style>