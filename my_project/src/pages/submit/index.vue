<template>
	<div class="page">
		<z-header>我的订单</z-header>
		<submit-site :address="address"></submit-site>
		<submit-pay></submit-pay>
		<!-- <div @click="handle">adsfasfd</div> -->
		<submit-list
					 :totalPrice="totalPrice"
					 :list="list"
					 @yhq="handleGetYhhData"
					 :totalNum="totalNum">
		</submit-list>
		<submit-footer :list="list"
					   @pay="handleGetPayData">
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
				address:'',														//地址信息
				list:''															//商品列表
			}
		},
		computed:{
			 ...mapState(['userId','cid']),
			 ...mapGetters(['order','totalNum','totalPrice']),
			 goods(){
		    	return {
		    		userId:this.userId,											//userid
		    		sp:this.order 												//订单信息
		    	}
		    }
		},
		methods:{
			...mapActions(['zSubmit']),
			...mapMutations(['cleanTrue']),
			getIndexData(){ 													//获取收获地址数据
		  		axios.get('/ds-app/address/getDefaultAddress?userId='+this.userId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		// console.log(res)
		  		this.address = res.data.data
		  	},
		  	handleGetDataErr(res){
		  		// console.log(res)
		  	},
		  	getListData(params){												//进入页面获取列表数据
		  		axios.post('/ds-app/order/settlementOrder',qs.stringify({
	    				param:params,
	    		}))
		  		  .then(this.handleGetListDataSucc.bind(this))
		  		  .catch(this.handleGetListDataErr.bind(this))
		  	},
		  	handleGetListDataSucc(res){
		  		// console.log(res)
		  		this.list = res.data.data.sp 									//商品信息进行赋值
		  	},
		  	handleGetListDataErr(res){
		  		// console.log(res)
		  	},
		  	getYhListData(params){												//获取传入优惠券id返回列表
		  		axios.post('/ds-app/order/settlementOrderCoupon',qs.stringify({
	    				param:params,
	    		}))
		  		  .then(this.handleGetYhListDataSucc.bind(this))
		  		  .catch(this.handleGetYhListDataErr.bind(this))
		  	},
		  	handleGetYhListDataSucc(res){
		  		// console.log(res)
		  		this.list = res.data.data.sp
		  	},
		  	handleGetYhListDataErr(res){
		  		// console.log(res)
		  	},
		  	getOrderData(total,good){											//获取支付id接口
		  		axios.post('/ds-app/order/createPayOrder',qs.stringify({
	    				param:good,												//商品信息
	    				payMoney:total,											//计算总价
	    				userId:this.userId,										//用户id
	    				addressId:this.address.addressId,						//地址id
	    		}))
		  		  .then(this.handleGetOrderDataSucc.bind(this))
		  		  .catch(this.handleGetOrderDataErr.bind(this))
		  	},
		  	handleGetOrderDataSucc(res){
		  		// console.log(res)
		  		this.cleanTrue(1)
		  	},
		  	handleGetOrderDataErr(res){
		  		// console.log(res)
		  	},
		  	handleGetYhhData(id){												//点击优惠券请求数据
		  		this.getYhListData(id)
		  	},
		  	handleGetPayData(total){											//点击支付调用支付订单接口
		  		var good = JSON.stringify(this.list)							//total为支付总价
		  		this.getOrderData(total,good)
		  	},
		  	// handle(){
		  	// 	this.cleanTrue(1)
		  	// }

		},
		watch:{
			order(){
				// console.log(this.order)
			}
		},
		mounted(){
			this.getIndexData()
			var good = JSON.stringify(this.goods)
			this.getListData(good)								//进入页面默认获取商品列表数据

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




	<!-- getCounponData(){ 										//获取优惠券数据
		  	// 	axios.get('/ds-app/coupon/getCounponByGoodsAndUser?userId='+this.userId)
		  	// 	  .then(this.handleGetDataSucc1.bind(this))
		  	// 	  .catch(this.handleGetDataErr1.bind(this))
		  	// },
		  	// handleGetDataSucc1(res){
		  	// 	console.log(res)
		  	// },
		  	// handleGetDataErr1(res){
		  	// 	console.log(res)
		  	// },
		  	// getYhjData(){
		  	// 	axios.get('/ds-app/coupon/getCounponByGoodsAndUser?userId='+this.userId)
		  	// 	  .then(this.handleGetDataSucc2.bind(this))
		  	// 	  .catch(this.handleGetDataErr2.bind(this))
		  	// },
		  	// handleGetDataSucc2(res){
		  	// 	console.log(res)
		  	// },
		  	// handleGetDataErr2(res){
		  	// 	console.log(res)
		  	// },-->