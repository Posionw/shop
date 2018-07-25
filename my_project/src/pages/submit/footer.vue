<template>
	<div>
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
			// ...mapMutations(['submitOrder']),
			// ...mapActions(['zSubmit']),
			handleClick(){
				this.$emit('pay',this.zzlist.total)
				// this.submitOrder()
				// this.zSubmit()
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
			background: #20BCFF;
			float: left;
			text-align: center;
</style>