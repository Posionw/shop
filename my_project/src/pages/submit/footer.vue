<template>
	<div>
		<div class="model" :class="{'active':show}">
			<router-link :to="'/Myorder/'">
				<div class="model_guan">
					<img src="@/assets/images/guan.png" alt="">
				</div>
			</router-link>
			<div class="model_t">
				<img src="@/assets/images/jz.png" alt="">
			</div>
			<div class="model_b">正在加载请稍后...</div>
		</div>
		<div class="footer">
			<div class="footer_left">合计:¥{{zzlist.total}}</div>
			<!-- <router-link to="Success"> -->
				<div class="footer_right" @click="handleClick">提交订单({{zzlist.num}})</div>
			<!-- </router-link> -->
		</div>
	</div>
</template>
<script>
	import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
	export default {
		name:'submit-footer',
		props:{
			list:'',
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
			zzlist:function(){
				let total = 0
				let num = 0
				if(this.zlist!=''){
					this.zlist.forEach((item,i)=>{
						total+=item.goods.shopGoodsPrice
						num+=item.goods.shopGoodsNum
					})
				}
				return {total:total,num:num};
			}
		},
		methods:{
			handleClick(){
				this.show = true
				this.$emit('pay',this.zzlist.total)
			}
		},
		watch:{
			list(){
				console.log(this.list)
			},
			zlist(){
				console.log(this.zlist)
			}
		}
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
</style>