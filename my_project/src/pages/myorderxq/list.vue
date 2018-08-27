<template>
	<div style="overflow: hidden">
		<div class="list">
			<div class="list_li">
				<div class="car_head">
					<div class="car_head_l">
						<img src="@/assets/images/sp.png" alt="">
					</div>
					<div class="car_head_r">{{list.shopName}}</div>
				</div>
				<div class="ll_c"
					 v-for="(item,index) in list.orderGoodsList"
					 :key="index+'a'">
					<router-link :to="'/Detail/'">
					<div class="con_l">
						<img :src="item.imgUrls" alt="">
					</div>
					</router-link>
					<div class="con_r">
						<div class="name">{{item.goodsName}}</div>
						<div class="xinghao">
							<span>{{item.goodsOption1}}</span>
							<span>{{item.goodsOption2}}</span>
							<span>{{item.goodsNumber}}</span>
						</div>
						<div class="price">¥{{item.goodsPrice}}</div>
					</div>
				</div>
				<div class="yhq" v-if="coupon!=null">
					<div class="yhq_l">优惠券金额：</div>
					<div class="yhq_r">-{{couponMoney}}元</div>
				</div>
				<div class="ll_b">
					<div class="zong">
						<span class="num">共{{list.countGoodsNum}}件商品</span>
						<span class="toggle">实付：¥{{price}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
	export default {
		name:'submit-list',
		props:{
			list:'',
			couponMoney:'',
			coupon:''
		},
		data(){
			return {
				yu:0,
				xid:'',
				item1:''
			}
		},
		computed:{
			...mapState(['userId']),
			price:function(){
				return this.list.orderMoney-this.couponMoney
			}

		},
		mounted(){
			console.log(this.list)
			console.log(this.couponMoney)
			console.log(this.coupon)
		},
	}
</script>
<style lang="stylus" scoped>
	.list
		width:100%;
		background:#fff;
		float:left;
		// margin-top:0.15rem;
		.list_li
			min-height:1.7rem;
			width: 100%;
			background:#fff;
			.car_head
				height:0.3rem;
				background:#f7f7f7;
				.car_head_l
					height:0.15rem;
					width: 0.15rem;
					margin-top: 0.07rem;
					margin-left: 0.1rem;
					// background:blue;
					float: left;
					img
						height: 0.15rem;
						width: 0.15rem;
				.car_head_r
					height:0.3rem;
					line-height:0.3rem;
					width: 3rem;
					color:#000;
					float: left;
					font-size: 0.14rem;
					margin-left: 0.1rem;

			.ll_t
				height:0.45rem;
				width: 3.45rem;
				padding: 0 0.15rem;
				border-bottom: 0.01rem solid rgb(213,213,219);
				img
					height: 0.175rem;
					width: 0.175rem;
					float: left;
					margin-top: 0.14rem;
				.time
					height:0.45rem;
					line-height: 0.45rem;
					float: left;
					font-size: 0.12rem;
					margin-left: 0.08rem;
			.ll_c
				min-height:1.24rem;
				width: 3.45rem;
				padding: 0 0.15rem;
				border-bottom: 0.01rem solid #f7f7f7;
				.con_l
					height:1rem;
					width: 1rem;
					float: left;
					margin-top: 0.125rem;
					img
						height: 1rem;
						width: 1rem;
				.con_r
					width:2.3rem;
					height: 1rem;
					margin-top: 0.125rem;
					float: right;
					.name
						width:100%;
						height: 0.3rem;
						line-height: 0.15rem;
						margin-top: 0.06rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						word-wrap: break-word;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						font-size: 0.13rem;
						white-space: normal !important;
					.xinghao
						height:0.12rem;
						line-height: 0.12rem;
						width: 100%;
						color: rgb(162,162,169);
						margin-top: 0.13rem;
						font-size: 0.12rem;
						span
							// background:pink;
					.price
						height:0.14rem;
						line-height: 0.14rem;
						width: 100%;
						font-size: 0.14rem;
						margin-top: 0.16rem;
			.huq
				height:0.3rem;
				line-height: 0.3rem;
				border-bottom: 0.01rem solid #f7f7f7;
				.yh_name
					float:left;
					margin-left: 0.1rem;
				.yh_selet
					height:0.17rem;
					width: 0.17rem;
					margin:0.06rem 0.14rem;
					float:right;
					margin-right: 0.1rem;
					img
						height:0.17rem;
						width: 0.17rem;
			.yhq
				height:0.4rem;
				width: 100%;
				border-bottom: 0.01rem solid #f7f7f7;
				.yhq_l
					height:0.4rem;
					line-height: 0.4rem;
					float:left;
					font-size: 0.12rem;
					margin-left: 0.15rem;
				.yhq_r
					height:0.4rem;
					line-height: 0.4rem;
					float:right;
					margin-right: 0.15rem;
			.ll_b
				height:0.44rem;
				padding: 0 0.15rem;
				.zong
					height:0.44rem;
					line-height:0.44rem;
					float:left;
					font-size: 0.12rem;
					float:right;
					.num
						margin-right:0.13rem;
					.toggle
						float:right


</style>