<template>
<div style="height: 100%;background:#fff;">
	<div class="fan iconfont" @click="handleReturnClick">&#xe720;</div>
	<div class="detail">
		<component
			:is="type"
			list="123"
			:swiper="swiper">
		</component>
		<detail-button
			class="btn"
			@tabVideo="tab"
			@tabPic="tab">
		</detail-button>
		<detail-zan
			:goodsId="id"
			:aid="can">
		</detail-zan>
		<detail-title
			:title="title"
			:dzan="zan"
			:zan_number="zan_number"
			:goodsId="id"
			:price="price"
			:oldPrice="oldPrice">
		</detail-title>
		<detail-discounts
			:discounts="discounts">
		</detail-discounts>
		<detail-details></detail-details>
		<detail-buycar
			:price="price"
			:title="title"
			:goodsId="id"
			:imgUrl="imgUrl"
			:goodsFormats1="goodsFormats1"
			:goodsFormats2="goodsFormats2"
			:goodsFormats1data="goodsFormats1data"
			:goodsFormats2data="goodsFormats2data"
			:landlordId="landlordId"
			:shopName="shopName"
			@infoFormatId1="handleSelect1"
			@infoFormatId2="handleSelect2"
			:list="z_detail">
		</detail-buycar>
	</div>
</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex'
	import DetailSwiper from './swiper.vue'
	import DetailVideo from './video.vue'
	import DetailButton from './button.vue'
	import DetailZan from './zan.vue'
	import DetailTitle from './title.vue'
	import DetailDiscounts from './discounts.vue'
	import DetailDetails from './details.vue'
	import DetailBuycar from './buycar.vue'
	export default{
		name:'detail',
		components:{
			DetailSwiper,
			DetailVideo,
			DetailButton,
			DetailZan,
			DetailTitle,
			DetailDiscounts,
			DetailDetails,
			DetailBuycar,
		},
		data(){
			return{
				type:"DetailSwiper",//判断视频还是图片
				id:'',				//获取商品id
				swiper:[],			//轮播图数据
				z_detail:[],		//总数据
				title:'',			//商品名称
				price:'',			//商品价格
				oldPrice:'',			//原价
				carlist:{},
				can:2,				//收藏
				zan:false,			//点赞
				zan_number:'',		//点赞数
				discounts:'',		//优惠券
				size:'',			//尺码
				goodsFormats1:'',	//选项1
				goodsFormats2:'',	//选项2
				goodsFormats1data:'',//筛选1数据
				goodsFormats2data:'',//筛选2数据
				imgUrl:'',			 //默认图片
				landlordId:'',		//房东id
				shopName:''			//店铺名
			}
		},
		computed:{
			 ...mapState(['userId']),
		},
		methods:{
			tab:function (tab) { 	//判断加载视频组件还是轮播图组件
				if(tab==0){
					this.type="DetailVideo"
				}else{
					this.type="DetailSwiper"
				}
			},
			handleReturnClick(){
				this.$router.go('-1')
			},
			getShopName(landlordId){
				axios.get('/ds-app/shop/getShop?landlordId='+landlordId)
		  		  .then(this.handleGetNameDataSucc.bind(this))
		  		  .catch(this.handleGetNameDataErr.bind(this))
			},
			handleGetNameDataSucc(res){
				this.shopName = res.data.data.shopName
			},
			handleGetNameDataErr(res){
				console.log(res)
			},
			getIndexData(){		//获取详情数据
		       axios.get('/ds-app/goods/goodsInfo?goodsId='+this.id+'&userId='+this.userId)
		      // axios.get('/api/detail.json?id='+this.id+'&userId=1')//本地接口
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		this.z_detail = res.data.data
		  		console.log(this.z_detail)
		  		this.swiper = this.z_detail.goodsImgUrl			//轮播图数据
		  		this.title = this.z_detail.goodsName			//标题
		  		this.price = this.z_detail.goodsSalePrice		//卖价
		  		this.oldPrice = this.z_detail.goodsPrice		//原价
		  		this.zan = this.z_detail.praiseStatus			//点赞
		  		this.can = this.z_detail.collectStatus			//收藏
		  		this.zan_number = this.z_detail.praiseNum		//点赞数
		  		this.discounts = this.z_detail.couponList		//优惠券
		  		this.goodsFormats1 = this.z_detail.goodsFormats1//筛选1
		  		this.goodsFormats2 = this.z_detail.goodsFormats2//筛选2
		  		this.landlordId = this.z_detail.landlordId		//房东id
		  		this.goodsFormats1data = this.z_detail.goodsFormats1.formatsInfoList//筛选1数据
		  		if(this.z_detail.goodsFormats2==null){
		  			this.goodsFormats2data=[]
		  		}else{
		  			this.goodsFormats2data = this.z_detail.goodsFormats2.formatsInfoList//筛选2数据
		  		}
		  		this.imgUrl = this.z_detail.imgUrls
		  		this.getShopName(this.z_detail.landlordId)
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	},
		  	handleSelect1(infoFormatId1){ 						   //点击筛选1按钮
		  		console.log(infoFormatId1.id)
		  		console.log(infoFormatId1.state)
		  		console.log(infoFormatId1.img)
		  		if(infoFormatId1.img==null){

		  		}else{
		  			this.imgUrl = infoFormatId1.img 				//判断有图片图片赋值
		  		}
		  		console.log(this.id)
		  		this.getSelect1(infoFormatId1.id,infoFormatId1.state)
		  	},
		  	handleSelect2(infoFormatId2){ 						    //点击筛选2按钮
		  		console.log(infoFormatId2)
		  		if(infoFormatId2.img==null){

		  		}else{
		  			this.imgUrl = infoFormatId2.img 				//判断有图片图片赋值
		  		}
		  		this.getSelect2(infoFormatId2.id,infoFormatId2.state)
		  	},
		  	getSelect1(a,b){ 										//获取筛选1数据
		  		axios.get('/ds-app/goods/getFormatsById?goodsId='+this.id+'&infoFormatId1='+a+'&infoFormatStatus1='+b)
		  		  .then(this.handleGetDataSucc1.bind(this))
		  		  .catch(this.handleGetDataErr1.bind(this))
		  	},
		  	handleGetDataSucc1(res){
		  		console.log(res)
		  		this.goodsFormats2data  = res.data.data
		  	},
		  	handleGetDataErr1(res){
		  		console.log(res)
		  	},
		  	getSelect2(a,b){
		  		axios.get('/ds-app/goods/getFormatsById?goodsId='+this.id+'&infoFormatId2='+a+'&infoFormatStatus2='+b)
		  		  .then(this.handleGetDataSucc2.bind(this))
		  		  .catch(this.handleGetDataErr2.bind(this))
		  	},
		  	handleGetDataSucc2(res){
		  		console.log(res)
		  		this.goodsFormats1data  = res.data.data
		  	},
		  	handleGetDataErr2(res){
		  		console.log(res)
		  	},
		},
		mounted(){
			this.id=this.$route.params.id
			console.log(this.id)
			this.getIndexData()
		}
	}
</script>
<style lang="stylus" scoped>
	.mint-header
		background:#20bcff;
		height:20px;
	.fan
		position:absolute;
		top:0;
		left: 0;
		z-index:10;
		font-size:0.28rem;
		color: #949494;
	.detail
		position:relative;
		.btn
			position:absolute;
			top:3.45rem;
			right: 0.18rem;
			z-index: 9;
</style>
	<!-- // handleGetDataSucc(res){
		  	// 	console.log(res)
		  		// this.z_detail = res.data.list_li
		  	// 	console.log(this.z_detail)
		  	// 	console.log(this.id)
		  	// 	let item = this.z_detail.find(n=>n.id == this.id);
		  	// 	console.log(item)
		  	// 	this.swiper = item.swiper//轮播图数据
		  	// 	this.title = item.title//标题
		  	// 	this.price = item.price//价格
		  	// 	this.carlist = item//商品详细数据
		  	// }, -->









