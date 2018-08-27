<template>
	<div class="bg" style="height:5.7rem;overflow: scroll;-webkit-overflow-scrolling: touch;">
		<mt-loadmore
			:autoFill="autoFill"
			:bottom-all-loaded="allLoaded"
			:bottom-method="loadBottom"
			ref="loadmore">
			<ul class="list">
				<template v-if="list.length>0">
					<li class="list_li"
						v-for="(item,index) in list"
						:key="index">
						<div class="list_li_t">
							<img src="@/assets/images/time.png" alt="">
							<div class="time">{{item.createTime}}</div>
							<div v-if="item.orderStatus==1" class="pay">待付款</div>
							<div v-else-if="item.orderStatus==2" class="pay">已取消</div>
							<div v-else="item.orderStatus==3" class="pay">已完成</div>
						</div>
						<div class="list_li_c"
							 v-for="(ite,i) in item.orderGoodsList"
							 :key="i">
							<router-link :to="'/Detail/'+ite.goodsId">
								<div class="list_li_c_l">
									<img v-lazy="ite.imgUrls" alt="">
								</div>
							</router-link>
							<div class="list_li_c_r">
								<div class="list_li_name">{{ite.goodsName}}</div>
								<div class="list_li_size">
									<span>{{ite.goodsOption1}}</span>
									<span> {{ite.goodsOption2}}</span>
									<span> {{ite.goodsNumber}}件</span>
								</div>
								<div class="list_li_price">¥{{ite.goodsPrice}}</div>
							</div>
						</div>
						<div class="list_li_b">
							<div class="list_li_num">共{{item.orderGoodsList.length}}件商品</div>
							<div class="list_li_totle">实付：¥{{item.orderMoney}}</div>
							<router-link :to="'/Myorderxq/'+item.orderId">
								<div class="list_li_pay" v-if="item.orderStatus==1">去付款</div>
								<div v-else-if="item.orderStatus==2" class="list_li_pay">已取消</div>
								<div v-else="item.orderStatus==3" class="list_li_pay">已完成</div>
							</router-link>
						</div>
					</li>
				</template>
				<template v-else>
					<li class="list_li">
						<div class="moren">
							<img src="@/assets/images/wu.png" alt="">
						</div>
					</li>
				</template>
			</ul>
		</mt-loadmore>
	</div>
</template>
<script>
	import {TabContainer, TabContainerItem, Loadmore, Indicator} from 'mint-ui';
	import { mapState,mapMutations } from 'vuex';
	export default{
		name:'myorder-list',
		props:{
			list:'',
			loadmore:''
		},
		components:{
			TabContainer,
			TabContainerItem,
			Loadmore,
			Indicator
		},
		data(){
			return{
				active:0,
				swipeable:true,
				autoFill:false,
				autoLoaded:false,
				page:1,
				loading:true,
				top:0,
				allLoaded:false
			}
		},
		computed:{
			...mapState(['orderIndex']),
		},
		methods:{
			loadTop() {
			  this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {
			  this.page+=1
			  this.$emit('page',this.page)
			  this.$refs.loadmore.onBottomLoaded();
			},
			handleClick(){
				alert('1')
			}
		},
		watch:{
			orderIndex(){
				this.active=this.orderIndex
				console.log(this.orderIndex)
			},
			loadmore(){
				console.log(this.loadmore)
				if(this.loadmore==0){
					this.allLoaded = true;         //判断是否加载完成
				}
			},
			list(){
				console.log(this.list)
			}

		},
		mounted(){
			console.log(this.list)
			console.log(this.active)
			console.log(this.orderIndex)
		}
	}
</script>
<style lang="stylus" scoped>
	.bg
		// background:red;
		height: 100%;
		.list
			margin-top:10px;
			.list_li
				min-height:2.15rem;
				width: 100%;
				margin-bottom: 0.15rem;
				background:#fff;
				.moren
					margin:0 auto;
					background:#f5f5f5;
					text-align: center;
					margin-top:1.5rem;
				.list_li_t
					height:0.45rem;
					width: 3.45rem;
					padding: 0 0.15rem;
					// background:green;
					border-bottom: 0.01rem solid #d5d5db;
					img
						height: 0.175rem;
						width: 0.175rem;
						margin-top:0.14rem;
						float: left;
					.time
						height:0.45rem;
						line-height: 0.45rem;
						float: left;
						font-size: 0.12rem;
						margin-left: 0.08rem;
					.pay
						height:0.45rem;
						line-height: 0.45rem;
						float: right;
						font-size: 0.12rem;
						color:rgb(245,58,58)
				.list_li_c
					min-height:1.24rem;
					width: 3.45rem;
					padding: 0 0.15rem;
					border-bottom: 0.01rem solid rgb(213,213,219);
					.list_li_c_l
						height:1rem;
						width: 1rem;
						float: left;
						margin-top:0.125rem;
						background:url(../../assets/images/xtmr.png);
						img
							height: 1rem;
							width: 1rem;
					.list_li_c_r
						width:2.3rem;
						height: 1rem;
						margin-top:0.125rem;
						float: right;
						// background:yellow;
						.list_li_name
							color:#000;
							height: 0.3rem;
							font-size:0.14rem;
							line-height: 0.15rem;
							overflow: hidden;
							white-space: normal !important;
							word-wrap: break-word;
							text-overflow: ellipsis;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							display: -webkit-box;
						.list_li_size
							height:0.12rem;
							line-height: 0.12rem;
							margin-top: 0.1rem;
							width: 100%;
							// background:green;
						    color:rgb(162,162,169);
						    font-size: 0.12rem;
						.list_li_price
							height:0.18rem;
							line-height: 0.18rem;
							width: 100%;
							font-size:0.18rem;
							margin-top:0.19rem;
							// background:red;
							color: #000;
				.list_li_b
					height:0.44rem;
					padding: 0 0.15rem;
					// background:yellowgreen;
					line-height: 0.44rem;
					font-size: 0.12rem;
					.list_li_num
						margin-right:0.13rem;
						float:left
					.list_li_totle
						float:left;
					.list_li_pay
						height:0.25rem;
						width: 0.5rem;
						text-align: center;
						line-height: 0.25rem;
						color:#fff;
						background:rgb(55,146,235);
						float: right;
						font-size: 0.12rem;
						margin-top:0.09rem;
						border-radius: 0.04rem;


</style>


















