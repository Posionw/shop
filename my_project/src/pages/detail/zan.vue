<template>
	<div class="zan">
		<div @click="handleClick(2)" class="abc" :class="{active:tabIndex==2}">
			<img  src="@/assets/images/sc@3x.png" alt="">
		</div>
		<div @click="handleClick(1)" class="abc" :class="{active:tabIndex==1}">
			<img  src="@/assets/images/sc2@3x.png" alt="">
		</div>
	</div>
</template>
<script>
	export default{
		name:'detail-zan',
		props:{
			aid:''
		},
		data(){
			return{
				tabIndex:1
			}
		},
		methods:{
			handleClick(tab){
				if(this.tabIndex!=tab){
					this.tabIndex=tab
				}
				console.log(tab)
				console.log(this.aid)
			}
		},
		mounted(){
			this.tabIndex=this.aid
			console.log(this.aid)
		}
	}
</script>
<style lang="stylus" scoped>
	.zan
		height:0.18rem;
		width: 0.2rem;
		// background: pink;
		position: absolute;
		top:0.11rem;
		right: 0.18rem;
		z-index: 9;
		.active
			display:none;
		img
			height:0.18rem;
			width: 0.2rem;
</style>