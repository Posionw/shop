<template>
	<div>
		<div class="footer">
			<div class="footer_left">合计:¥{{totalPrice}}</div>
			<router-link to="Success">
				<div class="footer_right">提交订单</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name:'submit-footer',
		props:{
			totalPrice:'',
			totalNum:''
		}
	}
</script>
<style lang="stylus" scoped>
	.footer
		height:0.6rem;
		width: 100%;
		position: fixed;
		bottom:0;
		background:#fff;
		.footer_left
			height:100%;
			line-height: 0.6rem;
			width: 2.45rem;
			// background:pink;
			text-align: center;
			font-size: 0.16rem;
			color: #21283E;
			float: left;
		.footer_right
			height:100%;
			line-height: 0.6rem;
			width: 1.3rem;
			color: #fff;
			font-size: 0.18rem;
			background: #20BCFF;
			float: left;
			text-align: center;
</style>