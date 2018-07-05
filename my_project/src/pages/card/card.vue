<template>
	<ul>
		<li class="card_k">
			<div class="card_l">
				<div class="card_l_t">80% OFF</div>
				<div class="card_l_b">优惠券使用范围及商铺其他信息优惠券使用范围及围及商铺其他信息</div>
			</div>
			<div class="card_r">
				<div class="card_r_t">使用期限</div>
				<div class="card_r_c">2018年3月15号</div>
				<div class="card_r_b">立即使用</div>
			</div>
		</li>
		<li class="card_k">
			<div class="card_l">
				<div class="card_l_t">80% OFF</div>
				<div class="card_l_b">优惠券使用范围及商铺其他信息优惠券使用范围及围及商铺其他信息</div>
			</div>
			<div class="card_r">
				<div class="card_r_t">使用期限</div>
				<div class="card_r_c">2018年3月15号</div>
				<div class="card_r_b">立即使用</div>
			</div>
		</li>
	</ul>
</template>
<script>
	export default {
		name:'card-card'
	}
</script>
<style lang="stylus" scoped>
ul
	overflow:hidden;
	.card_k
		height:1.16rem;
		width: 3.40rem;
		background: url('../../assets/images/youhuiquan@2x.png') no-repeat;
		background-size: 3.40rem 1.16rem;
		margin: 0 auto;
		margin-top: 0.13rem;
		.card_l
			width:1.88rem;
			height:0.992rem;
			float: left;
			margin-right: 0.06rem;
			// background:pink;
			margin: 0.08rem 0 0 0.07rem;
			padding: 0 0.09rem;
			.card_l_t
				height:0.33rem;
				width: 100%;
				// background:yellow;
				margin-top: 0.14rem;
				color: #fff;
				font-size: 0.24rem;
				display: -webkit-box;
				overflow: hidden;
			    white-space: normal !important;
			    text-overflow: ellipsis;
			    word-wrap: break-word;
			    -webkit-line-clamp: 1;
			    -webkit-box-orient: vertical;
			.card_l_b
				height:0.36rem;
				width: 100%;
				// background: red;
				margin-top: 0.094rem;
				line-height: 0.18rem;
				color: #fff;
				display: -webkit-box;
			    overflow: hidden;
			    font-size: 0.12rem;
			    white-space: normal !important;
			    text-overflow: ellipsis;
			    word-wrap: break-word;
			    -webkit-line-clamp: 2;
			    -webkit-box-orient: vertical;
		.card_r
			height:0.992rem;
			width: 1.14rem;
			// background: pink;
			float: right;
			margin: 0.08rem 0.07rem 0 0;
			.card_r_t
				font-size:0.12rem;
				color: #333;
				width: 100%;
				text-align: center;
				margin-top: 0.064rem;
				// background: red;
			.card_r_c
				height:0.2rem;
				line-height: 0.2rem;
				font-size: 0.14rem;
				color: #333;
				margin-top: 0.066rem;
				text-align: center;
				// background: green;
			.card_r_b
				height:0.21rem;
				width: 0.651rem;
				line-height: 0.21rem;
				text-align: center;
				color: #fff;
				background: #E31313;
				margin: 0 auto;
				margin-top: 0.15rem;

</style>















