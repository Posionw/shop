<template>
	<div class="head">
		<template v-if="userPic!=''">
		<div class="name_pic">
			<img :src="userPic" alt="">
		</div>
		</template>
		<template v-else>
			<div class="name_pic">
			<img src="@/assets/images/wde1@2x.png" alt="">
		</div>
		</template>
		<div class="name">{{userName}}</div>
	</div>
</template>
<script>
	export default{
		name:'user-index',
		props:{
			userPic:'',
			userName:''
		}
	}
</script>
<style lang="stylus" scoped>
	.head
		height:2.75rem;
		width: 100%;
		background:url('../../../static/grzxbg@1x.png') no-repeat;
		background-size: 100% 100%;
		overflow:hidden;
		.name_pic
			height:1rem;
			width: 1rem;
			margin: 0 auto;
			margin-top: 0.6rem;
			border-radius: 50%;
			margin-bottom: 0.1rem;
			img
				height:1rem;
				width: 1rem;
				border-radius: 50%;
		.name
			height:0.2rem;
			line-height: 0.2rem;
			font-size: 0.18rem;
			width:100%;
			color: #fff;
			text-align: center;

</style>