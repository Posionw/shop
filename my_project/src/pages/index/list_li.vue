<template>
	<div style="height:5.7rem;overflow: scroll;">
		<mt-loadmore  :top-method="loadTop" :autoFill="autoFill" :bottom-method="loadBottom"  ref="loadmore">
		  <ul class="list">
		    <li class="list_card" v-for="(item,index) in z_list" :key="index">
		    	<router-link :to="'/Detail/'+item.id">
			    	<div class="card_t">
			    		<img src="@/assets/images/Group6@2x.png" alt="">
			    	</div>
			    	<div class="card_b">
			    		<div class="card_title">{{item.title}}</div>
			    		<div class="card_price">¥{{item.price}}</div>
			    	</div>
		    	</router-link>
		    </li>
		  </ul>
		</mt-loadmore>
	</div>
</template>
<script>
	import axios from 'axios'
	import { Loadmore } from 'mint-ui';
	export default{
		name:'list-li',
		components:{
			Loadmore,
		},
		data(){
			return{
				z_list:[],
				autoFill:false,
				autoLoaded:false,
				page:1,
			}
		},
		methods:{
			loadTop() {
			  // load more data
			  this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {
			  this.page+=1
			  this.getIndexData()
			  console.log('加载')
			  this.allLoaded = true;// if all data are loaded
			  this.$refs.loadmore.onBottomLoaded();
			},
			getIndexData(){
		      axios.get('/api/index.json?page='+this.page)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		// this.z_list = res.data.list
		  		console.log(this.z_list)
		  		this.z_list= res.data.list.concat(this.z_list)
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
		},
		mounted(){
			this.getIndexData()
		}
	}
</script>
<style lang="stylus" scoped>
	.list
		flex:1;
		.list_card
			height:4.3rem;
			width: 3.38rem;
			margin: 0 auto;
			margin-top: 0.14rem;
			box-shadow: 0px 4px 12px 0px rgba(174,201,205,0.70);
			border-radius:0.05rem;
			.card_t
				height:3.4rem;
				width: 3.38rem;
				img
					height:3.4rem;
					width: 3.38rem;
			.card_b
				height:0.522rem;
				width: 3.066rem;
				border-radius: 0 0 5px 5px;
				padding: 0.189rem 0.157rem;
				.card_title
					font-family: PingFangSC-Semibold;
					font-size: 0.18rem;
					color: #353535;
					line-height: 0.2rem;
					height:0.2rem;
					display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
				    overflow: hidden;
				    white-space: normal !important;
				    text-overflow: ellipsis;
				    word-wrap: break-word;
				    -webkit-line-clamp: 1; /*限制在一个块元素显示的文本的行数*/
				    -webkit-box-orient: vertical;
				.card_price
					height:0.2rem;
					line-height: 0.2rem;
					color: #FB596B;
					font-size: 0.2rem;
					margin-top: 0.11rem;
</style>









