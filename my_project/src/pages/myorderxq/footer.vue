<template>
	<div>
		<div class="model"
			 :class="{'active':show}">
				<div class="model_guan"
					 @click="handelGuanClick">
					 <img src="@/assets/images/guan.png" alt="">
				</div>
			<div class="model_t">
				<img src="@/assets/images/jz.png" alt="">
			</div>
			<div class="model_b">正在加载请稍后...</div>
		</div>
		<div class="footer">
			<div class="footer_left">合计:¥{{price}}</div>
				<div class="footer_right"
					 v-if="orderStatus==1"
					 @click="handleClick">支付</div>
				<div class="footer_right2"
					 v-else-if="orderStatus==2">已取消</div>
				<div class="footer_right2"
					 v-else-if="orderStatus==3">已完成</div>
		</div>
	</div>
</template>
<script>
	import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
	export default {
		name:'submit-footer',
		props:{
			price:'',
			orderStatus:''
		},
		data(){
			return {
				show:false
			}
		},
		computed:{
			zlist:function(){
				return this.list
			},
		},
		methods:{
			handleClick(){
				this.show = true
				this.$emit('pay',this.price)
			},
			handelGuanClick(){
				this.show = false
			}
		},
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.model
		height:100%;
		width:100%;
		background:rgba(0,0,0,.6);
		position: fixed;
		top: 0;
		left:0;
		z-index: 99999;
		display:none;
		text-align: center;
		color: #fff;
		// line-height: 3.31rem;
		font-size: 0.13rem;
		// background:pink;
		.model_t
			height:0.6rem;
			width: 0.6rem;
			margin: 0 auto;
			margin-top: 2rem;
			// background:red;
			img
				height: 0.6rem;
				width: 0.6rem;
		.model_guan
			height:0.2rem;
			width: 0.2rem;
			// background:pink;
			float: right;
			margin: 0.1rem 0.1rem 0 0;
			img
				height: 0.2rem;
				width: 0.2rem;
		.model_b
			width:100%;
			height: 0.15rem;
			margin-top: 0.1rem;
			// background:yellowgreen;
			line-height: 0.15rem;
	.active
		display:block;
	.footer
		height:0.6rem;
		width: 100%;
		position: fixed;
		bottom:0;
		background:#fff;
		border-top: 0.01rem solid #f7f7f7;
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
			background: $bgColor;
			float: left;
			text-align: center;
		.footer_right2
			height:100%;
			line-height: 0.6rem;
			width: 1.3rem;
			color: #fff;
			font-size: 0.18rem;
			background: #666;
			float: left;
			text-align: center;
</style>