<template>
	<div class="m-tabbar">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name:'tabbar',
	}
</script>
<style lang="stylus" scoped>
	.m-tabbar{
		display: flex;
		flex-direction:row;
		position: fixed;
		bottom:0;
		left: 0;
		right: 0;
		background-color: #fff;
		width: 100%;
		overflow: hidden;
		height: 0.5rem;
		border-top:0.01rem solid #e4e4e4;
		// justify-content:space-around;
	}
</style>