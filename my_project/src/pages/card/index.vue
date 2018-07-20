<template>
	<div>
		<z-header>我的卡券</z-header>
		<card-card :list="list"></card-card>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex';
	import cardCard from './card.vue'
	import zHeader from '../../components/header/index.vue'
	export default {
		name:'card',
		data(){
			return {
				list:''
			}
		},
		components:{
			cardCard,
			zHeader
		},
		computed:{
			...mapState(['userId']),
		},
		methods: {
			getIndexData(){ 										//获取筛选1数据
		  		axios.get('/ds-app/user/couponList?userId='+this.userId)
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

		},
		mounted(){
			this.getIndexData()
		}
	}
</script>
<style lang="stylus" scoped>

</style>