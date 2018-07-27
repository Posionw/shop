<template>
	<div class="head">
		<div class="head_l iconfont">&#xe720;</div>
		<!-- <div class="head_l">店铺一</div> -->
		<div class="head_c">{{shopName}}</div>
		<router-link :to="{path:'/Index',query:{id:userId,cid:''}}">
			<div class="head_r" @click="handleGetAllData">
				<img src="@/assets/images/ssp.png" alt="">
			</div>
		</router-link>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default{
		name:'index-head',
		props:{
			shopName:''
		},
		methods:{
			handleGetAllData(){
				 window.location.reload();
			}
		},
		computed:{
			...mapState(['userId','cid']),
		},
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.head
		height:0.46rem;
		width: 100%;
		background:$bgColor;
		position: fixed;
		top: 0;
		z-index: 9999;
		display:flex;
		.head_l
			height:0.46rem;
			line-height: 0.46rem;
			width: 0.24rem;
			// background:yellow;
			float:left;
			margin-left: 0.1rem;
			color: #000;
			font-size: 0.24rem;
			color: #fff;
		.head_c
			// width:2rem;
			flex:1;
			height:100%;
			float:left;
			font-size: 0.16rem;
			color: #fff;
			// background:yellowgreen;
			text-align: center;
			line-height: 0.46rem;
		.head_r
			height:0.46rem;
			width:0.24rem;
			float: right;
			// background:pink;
			margin-right: 0.1rem;
			img
				height:0.24rem;
				width:0.24rem;
				margin-top: 0.11rem;
</style>









