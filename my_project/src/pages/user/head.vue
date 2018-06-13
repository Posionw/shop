<template>
	<div class="head">
		<div class="name_pic">
			<img src="@/assets/images/rx@1x.png" alt="">
		</div>
	</div>
</template>
<script>
	export default{
		name:'user-index'
	}
</script>
<style lang="stylus" scoped>
	.head
		height:2.75rem;
		width: 100%;
		background:url(../../assets/images/grzxbg@1x.png) no-repeat;
		background-size: 100% 100%;
		overflow:hidden;
		.name_pic
			height:1rem;
			width: 1rem;
			background:pink;
			margin: 0 auto;
			margin-top: 0.83rem;
			border-radius: 50%;
			img
				height:1rem;
				width: 1rem;
				border-radius: 50%;

</style>