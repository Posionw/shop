<template>
	<div style="height:100%;overflow: scroll;-webkit-overflow-scrolling: touch;" ref="ui">
		<mt-loadmore
			:autoFill="autoFill"
			:bottom-method="loadBottom"
			:bottom-all-loaded="allLoaded"
			ref="loadmore">
		  	<ul class="list">
		  		<template v-if="z_list.length > 0">
			    	<li class="list_card" v-for="(item,index) in z_list" :key="index">
			    		<router-link :to="'/Detail/'+item.goodsId">
				    		<div class="card_t">
				    			<img v-lazy="item.imgUrls" alt="">
				    		</div>
				    		<div class="card_b">
				    			<div class="card_title">{{item.goodsName}}</div>
				    			<div class="card_price">¥{{item.goodsSalePrice}}</div>
				    		</div>
			    		</router-link>
			   		</li>
		   		</template>
		    	<template v-else>
			   		<li class="loading">
			    		<div class="loading_t">
			    			<img src="@/assets/images/Group.png" alt="">
			    		</div>
			    		<div class="loading_b">正在努力加载中，请稍候...</div>
			    	</li>
		    	</template>
		  </ul>
		</mt-loadmore>
	</div>
</template>
<script>
	import axios from 'axios'
	import { Loadmore,Indicator} from 'mint-ui';
	import { mapState} from 'vuex'
	export default{
		name:'list-li',
		components:{
			Loadmore,
			Indicator,
		},
		props:['num'],
		data(){
			return{
				z_list:[],
				autoFill:false,
				autoLoaded:false,
				page:1,
				loading:true,
				top:0,
				allLoaded:false,
			}
		},
		computed:{
		    ...mapState({
		      id:'id',
		      tab:'tab',
		      cid:'cid',
		    }),
		 },
		methods:{
			loadTop() {
			  // load more data
			  this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {
			  this.page+=1
			  this.getIndexData(this.id)
			  console.log('加载')
			  this.$refs.loadmore.onBottomLoaded();
			},
			getIndexData(id){
			axios.get('/ds-app/home/goodsList?page='+this.page+'&goodsTypeId='+id+'&landlordId='+this.cid)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		// this.z_list= res.data.data.concat(this.z_list)
		  		if(res.data.hasMore==0){
		  			this.allLoaded = true; //if all data are loaded
		  		}
		  		this.z_list=this.z_list.concat(res.data.data)
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
		},
		mounted(){
			if(this.tab==this.num){
				// console.log(this.id)
				this.getIndexData(this.id)
			}
		},
		watch:{
	    	tab(){
	    		if(this.tab==this.num){
	    			if(this.z_list.length<1){                  //判断左滑的时候不加载数据

	    				this.getIndexData(this.id)
	    			}
	    		}
	    	},

	     },
	}
</script>
<style lang="stylus" scoped>
	.list
		flex:1;
		margin-bottom: 0.1rem;
		.loading
			width:100%;
			color:red;
			position: fixed;
			// background:pink;
			// margin-left: 50%;
			height: 1.6rem;
			z-index: 9;
			top:1.6rem;
			.loading_t
				height:1.12rem;
				width: 1.2rem;
				// background:yellow;
				margin:0 auto;
				img
					height: 1.12rem;
					width: 1.2rem;
			.loading_b
				height:0.19rem;
				width: 100%;
				text-align: center;
				color: #000;
				font-size: 0.14rem;
				margin-top: 0.28rem;
		.list_card
			height:4.3rem;
			width: 3.38rem;
			margin: 0 auto;
			margin-top: 0.14rem;
			background:#fff;
			box-shadow: 0px 4px 12px 0px rgba(174,201,205,0.70);
			border-radius:0.05rem;
			.card_t
				height:3.4rem;
				width: 3.38rem;
				border-radius:0.05rem 0.05rem 0 0;
				background:url(../../assets/images/dtmr.png);
				img
					height:3.4rem;
					width: 3.38rem;
					border-radius:0.05rem 0.05rem 0 0;
			.card_b
				height:0.522rem;
				width: 3.066rem;
				border-radius: 0 0 0.05rem 0.05rem;
				padding: 0.189rem 0.157rem;
				.card_title
					font-family: PingFangSC-Semibold;
					font-size: 0.18rem;
					color: #353535;
					line-height: 0.2rem;
					height:0.2rem;
					overflow: hidden;
					text-overflow: ellipsis;
					word-wrap: break-word;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
				    white-space: normal !important;
				.card_price
					height:0.2rem;
					line-height: 0.2rem;
					color: #FB596B;
					font-size: 0.2rem;
					margin-top: 0.11rem;
</style>









