<template>
	<div class="head">
		<div class="fan iconfont" @click="handleReturnClick">&#xe720;</div>
		<div class="title">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name:'z-header',
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
		height:0.4rem;
		line-height: 0.4rem;
		width: 100%;
		background: $bgColor;
		box-sizing: border-box;
		padding: 0 0.1rem;
		position:fixed;
		top: 0;
		z-index: 9;
		// margin-bottom: 0.1rem;
		.fan
			font-size:0.2rem;
			float: left;
			color: #fff;
			// background: red;
		.title
			height:0.4rem;
			width:3.15rem;
			text-align: center;
			font-size: 0.16rem;
			float: left;
			color: #fff;
			// background: yellow;
</style>