<template>
	<div>
		<div class="xqxx">
			<div class="xqxx_l"></div>
			<div class="xqxx_r">
				详情信息
			</div>
		</div>
		<div class="xqcon">
			{{goodsContent}}
		</div>
	</div>
</template>
<script>
	export default {
		name:'detail-details',
		props:{
			goodsContent:''
		}
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.xqxx
		height:0.25rem;
		width: 100%;
		margin-top: 0.31rem;
		.xqxx_l
			height:0.2rem;
			width: 0.04rem;
			background: $fontColor;
			border-radius: 100px;
			float: left;
			margin-top: 0.025rem;
			margin-left: 0.18rem;
		.xqxx_r
			font-family: '.PingFang-SC-Regular';
			font-size: 0.18rem;
			color: #21283E;
			float: left;
			margin-left: 0.08rem;
	.xqcon
		margin-top:0.1rem;
		background:#fff;
		height:3rem;
		width:100%;
		box-sizing:border-box;
		padding: 0.1rem 0.1rem;
</style>










