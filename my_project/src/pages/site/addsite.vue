<template>
	<div>
		<router-link to="/Changesite/*">
			<div class="button">新增地址</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name:'site-addsite'
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.button
		position:fixed;
		bottom: 0;
		height: 0.5rem;
		width: 100%;
		background:$bgColor;
		color:#fff;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.14rem;
</style>