<template>
	<div class="zan">
		<div @click="handleClick(true)"
			 class="abc"
			 :class="{active:tabIndex==true}">
			<img  src="@/assets/images/sc@3x.png" alt="">
		</div>
		<div @click="handleClick(false)"
			 class="abc"
			 :class="{active:tabIndex==false}">
			<img  src="@/assets/images/sc2@3x.png" alt="">
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default{
		name:'detail-zan',
		props:{
			aid:'',
			goodsId:''
		},
		data(){
			return{
				tabIndex:false
			}
		},
		computed:{
			 ...mapState(['userId']),
		},
		methods:{
			handleClick(tab){
				if(this.tabIndex!=tab){
					this.tabIndex=tab
				}
				console.log(tab)
				console.log(this.tabIndex)
				this.getIndexData()
			},
			getIndexData(){
	    		axios.get('/ds-app/home/collectGoods?goodsId='+this.goodsId+'&collectStatus='+this.tabIndex+'&userId='+this.userId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
		},
		mounted(){
		},
		watch:{
			aid(){
				this.tabIndex=this.aid
			},
			userId(){
				console.log(this.userId)
			}
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