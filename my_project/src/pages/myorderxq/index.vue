<template>
	<div>
		<z-header>订单详情</z-header>
		<myorderxq-header
			:name="name"
			:phone="phone"
			:area="area"
			:address="address">
		</myorderxq-header>
		<submit-pay
			@payState="handlePayState">
		</submit-pay>
		<submit-list
			:list="list"
			:coupon="coupon"
			:couponMoney="couponMoney">
		</submit-list>
		<submit-footer
			:price="price"
			:orderStatus="orderStatus"
			@pay="handlePayClick">
		</submit-footer>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState} from 'vuex';
	import MyorderxqHeader from './header.vue'
	import submitPay from './pay.vue';
	import submitList from './list.vue';
	import submitFooter from './footer.vue';
	import zHeader from '../../components/header/index.vue'
	export default{
		name:'myorderxq',
		components:{
			MyorderxqHeader,
			zHeader,
			submitPay,
			submitList,
			submitFooter
		},
		data(){
			return {
				addressId:'',
				list:'',
				name:'',
				phone:'',
				area:'',
				address:'',
				couponMoney:'',
				price:'',
				payState:true,
				orderStatus:'',
				coupon:''
			}
		},
		computed:{
			 ...mapState(['oid']),
		},
		methods:{
			getIndexData(){ 										//获取筛选1数据
		  		axios.get('/ds-app/order/orderInfo?orderId='+this.$route.params.id)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		this.list = res.data.data
		  		this.addressId = res.data.data.addressId
		  		this.getUserData(res.data.data.addressId)

		  		console.log(res.data.data.coupon)
		  		if(res.data.data.coupon!=null){
		  		this.couponMoney = res.data.data.coupon.couponMoney
		  		}
		  		if(res.data.data.coupon!=null){
		  			var price1 = res.data.data.orderMoney-res.data.data.coupon.couponMoney
		  		}else{
		  			var price1 = res.data.data.orderMoney
		  		}
		  		this.coupon = res.data.data.coupon
		  		console.log(price1)
		  		this.price = price1
		  		this.orderStatus = res.data.data.orderStatus
		  	},
		  	handleGetDataErr(res){
		  		console.log(res)
		  	},
		  	getUserData(a){
		  		axios.get('/ds-app/address/getAddress?addressId='+a)
		  		  .then(this.handleGetUidDataSucc.bind(this))
		  		  .catch(this.handleGetUidDataErr.bind(this))
		  	},
		  	handleGetUidDataSucc(res){
		  		console.log(res)
		  		this.name = res.data.data.consignee
		  		this.phone = res.data.data.phone
		  		this.area = res.data.data.area
		  		this.address = res.data.data.address

		  	},
		  	handleGetUidDataErr(res){
		  		console.log(res)
		  	},
		  	handlePayState(state){
		  		console.log(state)
		  		this.payState = state
		  	},
		  	handlePayClick(price){
		  		console.log(this.payState)
		  		console.log(this.list.orderId)
		  		// var that =this
		  		// if(this.oid==0){
		  		// 	 window.android.orderPay(that.payState,that.list.orderId);     //给安卓传参数
		  		// }else{
		  		// 	orderPay(that.payState,that.list.orderId)  					   //给ios传参数
		  		// }
		  	},
		},
		mounted(){
			this.id=this.$route.params.id
			console.log(this.$route.params.id)
			this.getIndexData()
		}
	}
</script>
<style lang="stylus" scoped>

</style>