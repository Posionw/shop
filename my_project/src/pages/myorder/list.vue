<template>
	<div class="bg">
		<ul class="list">
			<li class="list_li">
				<div class="list_li_t">
					<img src="@/assets/images/Group6@2x.png" alt="">
					<div class="time">2018-12-12 21:22:13</div>
					<div class="pay">待付款</div>
				</div>
				<div class="list_li_c">
					<div class="list_li_c_l">
						<img src="@/assets/images/Group6@2x.png" alt="">
					</div>
					<div class="list_li_c_r">
						<div class="list_li_name">飞羽跑asd步dasfdsf鞋撒发射点发啊第三方大发生大</div>
						<div class="list_li_size">
							<span>黑色</span><span>L/165</span>
						</div>
						<div class="list_li_price">¥329</div>
					</div>
				</div>
				<div class="list_li_b">
					<div class="list_li_num">共1件商品</div>
					<div class="list_li_totle">实付：¥770</div>
					<div class="list_li_pay">去付款</div>
				</div>
			</li>
			<li class="list_li">
				<div class="list_li_t">
					<img src="@/assets/images/Group6@2x.png" alt="">
					<div class="time">2018-12-12 21:22:13</div>
					<div class="pay">待付款</div>
				</div>
				<div class="list_li_c">
					<div class="list_li_c_l">
						<img src="@/assets/images/Group6@2x.png" alt="">
					</div>
					<div class="list_li_c_r">
						<div class="list_li_name">飞羽跑asd步dasfdsf鞋撒发射点发啊第三方大发生大</div>
						<div class="list_li_size">
							<span>黑色</span><span>L/165</span>
						</div>
						<div class="list_li_price">¥329</div>
					</div>
				</div>
				<div class="list_li_b">
					<div class="list_li_num">共1件商品</div>
					<div class="list_li_totle">实付：¥770</div>
					<div class="list_li_pay">去付款</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import {TabContainer, TabContainerItem} from 'mint-ui';
	import { mapState,mapMutations } from 'vuex';
	export default{
		name:'myorder-list',
		components:{
			TabContainer,
			TabContainerItem
		},
		data(){
			return{
				active:0,
				swipeable:true
			}
		},
		computed:{
			...mapState(['orderIndex']),
		},
		watch:{
			orderIndex(){
				this.active=this.orderIndex
				console.log(this.orderIndex)
			}
		},
		mounted(){
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
				height:2.15rem;
				width: 100%;
				margin-bottom: 0.15rem;
				background:#fff;
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
					height:1.24rem;
					width: 3.45rem;
					padding: 0 0.15rem;
					border-bottom: 0.01rem solid rgb(213,213,219);
					.list_li_c_l
						height:1rem;
						width: 1rem;
						float: left;
						margin-top:0.125rem;
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
							display: -webkit-box; 
						    overflow: hidden;
						    white-space: normal !important;
						    text-overflow: ellipsis;
						    word-wrap: break-word;
						    -webkit-line-clamp: 2; 
						    -webkit-box-orient: vertical;
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


















