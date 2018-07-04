<template>
	<div>
		<ul class="list_k">
			<router-link to='Myorder'>
				<li>
					<div class="pic">
						<img src="@/assets/images/wd-dingdan@2x.png" alt="">
					</div>
					<div class="pic_name">我的订单</div>
				</li>
			</router-link>
			<router-link to='Site'>
				<li>
					<div class="pic">
						<img src="@/assets/images/wd-dizhi@2x.png" alt="">
					</div>
					<div class="pic_name">收货地址</div>
				</li>
			</router-link>
			<li>
				<div class="pic">
					<img src="@/assets/images/wd-kaquan@2x.png" alt="">
				</div>
				<div class="pic_name">我的卡券</div>
			</li>
			<li>
				<div class="pic">
					<img src="@/assets/images/wd-shoucang@2x.png" alt="">
				</div>
				<div class="pic_name">我的收藏</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'user-list'
	}
</script>
<style lang="stylus" scoped>
	.list_k
		height:4.09rem;
		width: 3.39rem;
		// background:pink;
		margin: 0 auto;
		margin-top: -0.3rem;
		li
			height:0.6rem;
			width: 3.39rem;
			background:#fff;
			box-shadow: 0px 4px 12px 0px rgba(174,201,205,0.50);
			border-radius: 0.08rem;
			overflow:hidden;
			margin-bottom: 0.13rem;
			.pic
				height:0.17rem;
				width: 0.15rem;
				// background:yellow;
				margin: 0.21rem 0.11rem 0 0.15rem;
				float: left;
				img
					height:0.17rem;
					width: 0.15rem;
			.pic_name
				height:0.6rem;
				line-height: 0.6rem;
				float: left;
				// background:red;
				font-size: 0.14rem;
				color: #333333;
</style>