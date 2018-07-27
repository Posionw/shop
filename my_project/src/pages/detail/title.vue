<template>
	<div>
		<div class="title">
			<div class="title_t">{{title}}</div>
			<div class="title_b">
				<span class="price_m">¥{{price}}</span>
				<span class="price_y">¥{{oldPrice}}</span>
				<div class="zan_number">{{zan}}人说好</div>
				<div v-if="zan_state==false"
					 class="zan"
					 @click="handleClick">
					<img src="@/assets/images/zan@2x.png" alt="">
				</div>
				<div v-else
					 class="zan"
					 @click="handleClick">
					<img src="@/assets/images/zan.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default{
		name:"detail-title",
		props:{
    		title:'',
    		price:'',
    		oldPrice:'',
    		dzan:'',
    		zan_number:'',
    		goodsId:''
    	},
    	data(){
    		return {
    			zan:'',
    			zan_state:'',
    		}
    	},
    	computed:{
			 ...mapState(['userId']),
		},
    	methods:{
    		handleClick(){
    			if(this.zan_state==false){
    				this.zan+=1
    			}else{
    				this.zan-=1
    			}
    			this.zan_state=!this.zan_state
    			this.getIndexData()
    		},
    		getIndexData(){
	    		axios.get('/ds-app/home/praiseGoods?goodsId='+this.goodsId+'&praiseStatus='+this.zan_state+'&userId='+this.userId)
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
    		dzan(){
    			this.zan_state=this.dzan
    		},
    		zan_number(){
    			this.zan = Number(this.zan_number)
    		}
    	}
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.title
		height:0.9rem;
		// width: 100%;
		background:pink;
		overflow: hidden;
		background: #FFFFFF;
		box-shadow: 0px 4px 12px 0px rgba(174,201,205,0.30);
		.title_t
			font-size: 0.18rem;
			height:0.2rem;
			line-height: 0.21rem;
			width:3.05rem;
			margin: 0 auto;
			margin-top: 0.19rem;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			display: -webkit-box;
		    color: #353535;
		    // background:red;
		    white-space: normal !important;
		.title_b
			height:0.2rem;
			line-height: 0.2rem;
			width:3.05rem;
			font-family: AvenirNext-DemiBold;
			font-size: 0.2rem;
			color: #FB596B;
			margin: 0 auto;
			margin-top: 0.11rem;
			.price_m
				font-family: AvenirNext-DemiBold;
				font-size: 0.2rem;
				color: #FB596B;
			.price_y
				font-family: AvenirNext-DemiBold;
				font-size: 0.12rem;
				color:#999;
				text-decoration:line-through;
			.zan_number
				float:right;
				color:$fontColor;
				font-size: 0.13rem;
				font-family: '.PingFang-SC-Regular';
			.zan
				height:0.15rem;
				width: 0.15rem;
				float: right;
				// background:pink;
				margin-right: 0.05rem;
				img
					height:0.15rem;
					width: 0.15rem;

</style>









