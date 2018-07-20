<template>
	<div>
		<div class="collect">
			<div class="collect_card"
			     v-for="(item,index) in list">
				 <router-link :to="'/Detail/'+item.goodsId">
					 <div class="collect_card_t">
						<img :src="item.imgUrls" alt="">
					 </div>
				</router-link>
					 <div class="collect_card_b">
						<div class="card_b_t">{{item.goodsName}}</div>
						<div class="card_b_b">
							<div class="price">¥{{item.goodsPrice}}</div>
							<div class="del_pic"
								 @click="handleClick(item.goodsId)">
								<img src="@/assets/images/del@2x.png" alt="">
							</div>
						</div>
					 </div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'collect-card',
		props:{
			list:''
		},
		methods:{
			handleClick(id){
				this.$emit('goodsId',id)
			}
		}
	}
</script>
<style lang="stylus" scoped>
.collect
	margin-top:0.4rem;
	.collect_card
		height:2.3rem;
		width: 1.62rem;
		background:#fff;
		margin: 0.14rem 0 0 0.175rem;
		float: left;
		box-shadow:0px 4px 12px 0px rgba(174,201,205,0.50);
		.collect_card_t
			height:1.7rem;
			width: 100%;
			// background:yellow;
			img
				height: 1.7rem;
				width: 100%;
		.collect_card_b
			height:0.6rem;
			width: 100%;
			// background:red;
			.card_b_t
				width:1.42rem;
				height: 0.18rem;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				word-wrap: break-word;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				font-size: 0.13rem;
				margin: 0.1rem 0 0 0.1rem;
				float: left;
				// background:yellow;
				white-space: normal !important;
			.card_b_b
				width:1.42rem;
				height: 0.17rem;
				margin: 0.04rem 0 0 0.1rem;
				float: left;
				.price
					height:0.17rem;
					line-height: 0.17rem;
					font-size: 0.14rem;
					color: #FB596B;
					float: left;
				.del_pic
					height:0.17rem;
					width: 0.15rem;
					float: right;
					img
						height: 0.17rem;
						width: 0.15rem;




</style>














