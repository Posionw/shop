<template>
	<div>
		<mt-popup v-model="popupVisible"
			style="background:0"
			position="bottom">
			<div class="kuang">
		  		<div class="kuang_w">
					<div class="title">店铺优惠券</div>
					<div class="list">
			  			<div class="list_li"
			  				 v-for="(item,index) in discounts"
			  				 :key="index">
			  				<div class="list_li_l">
			  					<div class="price">¥{{item.couponMoney}}</div>
			  					<div class="xianzhi">订单金额满{{item.consumptionLimit}}可使用</div>
			  					<div class="yxq">有效期:{{item.startTime}}-{{item.endTime}}</div>
			  				</div>
			  				<div class="list_li_r" @click="handleGetCard(item.goodsId)">立即领取</div>
			  			</div>

			  			<!-- <div class="list_li">
			  				<div class="list_li_l">
			  					<div class="price">¥10</div>
			  					<div class="xianzhi">订单金额满200可使用</div>
			  					<div class="yxq">有效期:2018.03.01-2018.05.31</div>
			  				</div>
			  				<div class="list_li_r">立即领取</div>
			  			</div> -->
			  		</div>
		  		</div>
		    </div>
		</mt-popup>
		<div class="discounts" @click="handleClick">
			<div class="discounts_l">店铺优惠券</div>
			<div class="discounts_r">
				<img src="@/assets/images/arrow@2x.png" alt="">
			</div>
			<div class="discounts_c">满200减10，满500减50</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex'
	import { Popup,Toast } from 'mint-ui';
	export default {
		name:'detail-discounts',
		props:{
			discounts:''
		},
		components:{
			Popup,
			Toast
		},
		data(){
			return {
				popupVisible:false,
			}
		},
		computed:{
			 ...mapState(['userId']),
		},
		methods:{
			handleClick(){
				this.popupVisible=true
			},
			handleGetCard(id){
				console.log(id)
				this.getIndexData(id)
			},
			getIndexData(id){
	    		axios.get('/ds-app/coupon/getCounpon?couponId='+id+'&userId='+this.userId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		Toast({
					  message: res.data.msg,
					  className:'tan1',
					  duration: 1000,
					  iconClass: 'iconfont icon-right'
				});
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
		},
		watch:{
			popupVisible(){
				if(this.popupVisible == true){
					document.documentElement.style.overflowY = 'hidden';
				}else{
					document.documentElement.style.overflowY = 'scroll';
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
		.kuang
			height:5.71rem;
			width: 3.75rem;
			// background:#fff;
			position:relative;
			z-index: 9999;
			overflow: hidden;
			.kuang_w
				height:5.41rem;
				width: 3.75rem;
				background:#fff;
				margin-top: 0.3rem;
				.title
					height:0.5rem;
					line-height: 0.5rem;
					width: 100%;
					text-align: center;
					font-family: PingFangSC-Regular;
					font-size: 0.18rem;
					color:#21283E;
					// background:pink;
			.list
				height:2.5rem;
				overflow-y: scroll;
				// background:red;
				.list_li
					height:0.9rem;
					width: 3.4rem;
					float:left;
					margin:0.12rem 0 0 0.18rem;
					background:url(../../assets/images/bg@2x.png) no-repeat;
					background-size: 100% 100%;
					.list_li_l
						height:0.9rem;
						width: 2.5rem;
						float: left;
						// background:pink;
						.price
							height:0.33rem;
							line-height: 0.33rem;
							width: 2.04rem;
							margin:0.05rem 0 0 0.14rem;
							color:#fff;
							font-size: 0.2rem;
							// background:red;
						.xianzhi
							height:0.17rem;
							width: 2.04rem;
							margin:0.08rem 0 0 0.14rem;
							font-family: PingFangSC-Regular;
							font-size: 0.12rem;
							color:#fff;
						.yxq
							height:0.17rem;
							width: 2.04rem;
							margin:0 0 0 0.14rem;
							ont-family: PingFangSC-Regular;
							font-size: 0.12rem;
							color:#fff;
					.list_li_r
						height:0.9rem;
						line-height: 0.9rem;
						text-align: center;
						width: 0.89rem;
						float: left;
						font-family: PingFangSC-Regular;
						font-size: 0.14rem;
						color:#fff;

	.discounts
		height:0.6rem;
		width: 100%;
		margin-top: 0.15rem;
		background:#fff;
		box-shadow:0 1px 10px 0 rgba(174,201,205,0.40);
		.discounts_l
			height:0.22rem;
			line-height: 0.22rem;
			text-align: center;
			width: 0.8rem;
			float: left;
			margin-left:0.36rem;
			font-family: MicrosoftYaHei;
			font-size: 0.13rem;
			color:#fff;
			background:#FB596B;
			border-radius: 0.02rem;
			margin-top: 0.2rem;
		.discounts_r
			height:0.14rem;
			width: 0.07rem;
			float: right;
			margin-right: 0.18rem;
			margin-top: 0.23rem;
			margin-left:0.1rem;
			img
				height:0.14rem;
				width: 0.07rem;
		.discounts_c
			height:0.6rem;
			line-height: 0.6rem;
			float: right;
			font-family: PingFangSC-Regular;
			font-size: 0.12rem;
			color:#333;

</style>













