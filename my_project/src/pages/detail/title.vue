<template>
	<div>
		<div class="title">
			<div class="title_t">{{title}}</div>
			<div class="title_b">¥{{price}}</div>
		</div>
		<div class="xqxx">
			<div class="xqxx_l"></div>
			<div class="xqxx_r">
				详情信息
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"detail-title",
		props:{
    		title:'',
    		price:''
    	},
    	mounted(){
    	console.log(this.title)
    	console.log(this.price)
    	}
	}
</script>
<style lang="stylus" scoped>
	.title
		height:0.9rem;
		width: 100%;
		// background:pink;
		overflow: hidden;
		background: #FFFFFF;
		box-shadow: 0px 4px 12px 0px rgba(174,201,205,0.30);
		.title_t
			height:0.2rem;
			line-height: 0.2rem;
			width:3.05rem
			font-size: 0.18rem;
			color: #353535;
			margin: 0 auto;
			margin-top: 0.19rem;
			display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
		    overflow: hidden;
		    white-space: normal !important;
		    text-overflow: ellipsis;
		    word-wrap: break-word;
		    -webkit-line-clamp: 1; /*限制在一个块元素显示的文本的行数*/
		    -webkit-box-orient: vertical;
		.title_b
			height:0.2rem;
			line-height: 0.2rem;
			width:3.05rem;
			font-family: AvenirNext-DemiBold;
			font-size: 0.2rem;
			color: #FB596B;
			margin: 0 auto;
			margin-top: 0.11rem;
	.xqxx
		height:0.25rem;
		width: 100%;
		margin-top: 0.31rem;
		.xqxx_l
			height:0.2rem;
			width: 0.04rem;
			background: #20BCFF;
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
</style>









