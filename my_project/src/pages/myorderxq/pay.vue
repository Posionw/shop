<template>
	<div>
		<div class="zffs">
			<p>支付方式</p>
		</div>
		<div class="wxzf">
			<div class="wxzf_l">
				<img src="@/assets/images/wexinzhifu@2x.png" alt="" />
			</div>
			<div class="wxzf_c">微信支付</div>
			<div class="wxzf_r"
				 v-if="select==true"
				 @click="handleSelectClick">
				<img src="@/assets/images/zhufu-choose3@2x.png" alt="" />
			</div>
			<div class="wxzf_r2"
				 v-else
				 @click="handleSelectClick">
				<img src="@/assets/images/zhufu-choose@2x.png" alt="" />
			</div>
		</div>
		<div class="wxzf">
			<div class="wxzf_l">
				<img src="@/assets/images/hdfk@2x.png" alt="" />
			</div>
			<div class="wxzf_c">支付宝支付</div>
			<div class="wxzf_r"
				 v-if="select==false"
				 @click="handleSelectClick">
				<img src="@/assets/images/zhufu-choose3@2x.png" alt="" />
			</div>
			<div class="wxzf_r2"
				 v-else
				 @click="handleSelectClick">
				<img src="@/assets/images/zhufu-choose@2x.png" alt="" />
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'submit-pay',
		data(){
			return {
				// picked:''
				select:true,
			}
		},
		methods:{
			handleSelectClick(){
				this.select=!this.select
				console.log(this.select)
				this.$emit("payState",this.select)
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.zffs
		height:0.3rem;
		width: 100%;
		line-height: 0.3rem;
		background:#f7f7f7;
		p
			font-family: PingFangSC-Regular;
			font-size:0.14rem;
			color:#333;
			margin-left:0.14rem;
	.wxzf
		height:0.4rem;
		width: 100%;
		background:#fff;
		border-bottom: 0.01rem solid #e5e5e5;
		.wxzf_l
			height:0.17rem;
			width: 0.2rem;
			// background:red;
			float:left;
			margin:0.1rem 0.07rem 0.1rem 0.14rem;
			img
				height:0.17rem;
				width: 0.2rem;
		.wxzf_c
			height:0.4rem;
			line-height:0.4rem;
			font-family: PingFangSC-Regular;
			font-size:0.14rem;
			float:left;
		.wxzf_r
			height:0.17rem;
			width: 0.17rem;
			// background:pink;
			float:right;
			margin:0.11rem 0.14rem;
			img
				height:0.17rem;
				width: 0.17rem;
		.wxzf_r2
			height:0.17rem;
			width: 0.17rem;
			// background:red;
			float:right;
			margin:0.11rem 0.14rem;
			img
				height:0.17rem;
				width: 0.17rem;
</style>







