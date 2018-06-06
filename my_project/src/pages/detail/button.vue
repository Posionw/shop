<template>
	<div class="button">
		<div class="btn" @click="handlePic" :class="{active:tab == 1}" >
			图片
		</div>
		<div class="btn" @click="handleVideo" :class="{active:tab == 0}">
			视频
		</div>
	</div>
</template>
<script>
	export default{
		name:'detail-button',
		data(){
			return{
				tab:'1',
			}
		},
		methods:{
			handleVideo(){
				this.tab = 0
				this.$emit('tabVideo',this.tab)
				console.log(this.tab)
			},
			handlePic(){
				this.tab = 1
				this.$emit('tabPic',this.tab)
				console.log(this.tab)
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.button
		height:0.26rem;
		width:1.02rem;
		display:flex;
		justify-content: space-between;
		.btn
			height:0.26rem
			width:0.46rem
			background:#fff;
			border-radius: 100px;
			text-align: center;
			line-height: 0.26rem;
		.active
			background: #FFE173;
			color: #fff
</style>