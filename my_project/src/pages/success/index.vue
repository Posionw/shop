<template>
	<div>
		<div class="success">
			<p class="jieshou">您的订单已被接收，敬请期待</p>
			<div class="btn">再来一单</div>
		</div>
		<router-link to="Myorder">
			<div class="order">查看订单</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name:'success'
	}
</script>
<style lang="stylus" scoped>
	.success
		height: 3.99rem;
		width: 2.7rem;
		background: pink;
		margin: 0 auto;
		margin-top: 0.39rem;
		background:url('../../assets/images/goumaichenggong@2x.png') no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		.jieshou
			height:0.14rem;
			line-height: 0.14rem;
			width: 100%;
			text-align: center;
			margin-top: 2.4rem;
			font-size: 0.14rem;
			color: #fff;
		.btn
			height:0.48rem;
			line-height: 0.48rem;
			width: 1.4rem;
			background:#fff;
			margin: 0 auto;
			text-align: center;
			border-radius: 0.4rem;
			color: red;
			font-size: 0.16rem;
			margin-top: 0.5rem;
	.order
		height:0.2rem;
		line-height: 0.2rem;
		width: 100%;
		text-align: center;
		font-size:0.14rem;
		color: #21283E;
		margin-top: 0.8rem;
		text-decoration: underline;
</style>















