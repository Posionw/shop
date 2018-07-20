<template>
	<div class="page">
		<z-header>我的订单</z-header>
		<submit-site :address="address"></submit-site>
		<submit-pay></submit-pay>
		<submit-list 
					 :totalPrice="totalPrice"
					 :list="list"
					 :totalNum="totalNum">
		</submit-list>
		<submit-yhj></submit-yhj>
		<submit-footer :totalPrice="totalPrice"
					   :totalNum="totalNum">
		</submit-footer>
	</div>
</template>
<script>
	import qs from 'qs';
	import axios from 'axios'
	import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
	import zHeader from '../../components/header/index.vue'
	import submitSite from './site.vue';
	import submitPay from './pay.vue';
	import submitList from './list.vue';
	import submitYhj from './yhj.vue';
	import submitFooter from './footer.vue'
	export default {
		name:'submit',
		components:{
			submitSite,
			submitPay,
			submitFooter,
			submitList,
			zHeader,
			submitYhj
		},
		data(){
			return {
				address:'',
				list:''
			}
		},
		computed:{
			 ...mapState(['userId']),
			 ...mapGetters(['order','totalNum','totalPrice']),
			 goods(){
		    	return {
		    		userId:this.userId,
		    		sp:this.order
		    	}
		    }
		},
		methods:{
			getIndexData(){ 										//获取收获地址数据
		  		axios.get('/ds-app/address/getDefaultAddress?userId=1')
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		this.address = res.data.data
		  	},
		  	handleGetDataErr(res){
		  		console.log(res)
		  	},
		  	getCounponData(){ 										//获取优惠券数据
		  		axios.get('/ds-app/coupon/getCounponByGoodsAndUser?userId=1')
		  		  .then(this.handleGetDataSucc1.bind(this))
		  		  .catch(this.handleGetDataErr1.bind(this))
		  	},
		  	handleGetDataSucc1(res){
		  		console.log(res)
		  	},
		  	handleGetDataErr1(res){
		  		console.log(res)
		  	},
		  	getYhjData(){
		  		axios.get('/ds-app/coupon/getCounponByGoodsAndUser?userId=1')
		  		  .then(this.handleGetDataSucc2.bind(this))
		  		  .catch(this.handleGetDataErr2.bind(this))
		  	},
		  	handleGetDataSucc2(res){
		  		console.log(res)
		  	},
		  	handleGetDataErr2(res){
		  		console.log(res)
		  	},
		  	getListData(params){
		  		axios.post('/ds-app/order/settlementOrder',qs.stringify({
	    				param:params,
	    		}))
		  		  .then(this.handleGetListDataSucc.bind(this))
		  		  .catch(this.handleGetListDataErr.bind(this))
		  	},
		  	handleGetListDataSucc(res){
		  		console.log(res)
		  		console.log(res.data.data.sp)
		  		this.list = res.data.data.sp
		  	},
		  	handleGetListDataErr(res){
		  		console.log(res)
		  	}

		},
		watch:{
			order(){
				console.log(this.order)
			}
		},
		mounted(){
			this.getIndexData()
			console.log(this.order)
			// console.log(this.goods)
			var good = JSON.stringify(this.goods)
			// console.log(good)
			this.getListData(good)

		}

	}
</script>
<style lang="stylus" scoped>
	.page
		margin-bottom:0.6rem;
</style>




<!-- <iframe ref="ss" style="height:100%;width: 100%;position:absolute;top:0;left:0"></iframe> -->
		<!-- <div @click="see" style="z-index: 999;height:20px;width:100%">adsfasdfsaf</div> -->
		<!--// see(){
		  	// 	alert('1')
		  	// 	// window.open("https://www.baidu.com")
		  	// 	this.$refs.ss.src="https://www.baidu.com"
		  	// }-->