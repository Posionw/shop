<template>
	<div class="head">
		<div class="fan iconfont" @click="handleReturnClick">&#xe720;</div>
		<div class="cen">
			商品详情
		</div>
	</div>
</template>
<script>
	export default{
		name:'detail-header',
		methods:{
			handleReturnClick(){
				this.$router.go('-1')
			},
		}
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.head
		height:0.38rem;
		width: 100%;
		// background:pink;
		position: fixed;
		top: 0;
		z-index: 999;
		.fan
			position:absolute;
			top:0.05rem;
			left: 0;
			z-index:10;
			font-size:0.28rem;
			color: #fff;
		.cen
			width:100%;
			height:0.38rem;
			line-height: 0.38rem;
			font-size: 0.16rem;
			background:$bgColor;
			color: #fff;
			text-align: center;
	.active
		display:none;
		
</style>