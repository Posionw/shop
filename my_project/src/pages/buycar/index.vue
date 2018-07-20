<template>
	<div id="gwc" style="padding-bottom: 1.1rem;">
		<div class="kong" v-if="!added.length">
			<div class="pic">
				<img src="@/assets/images/gouwuche1@2x.png" alt="">
			</div>
		您的购物车空空如也...</div>
		<div v-else>
			<div v-for="(item,index) in added">
			<div class="car_head">
				<div class="car_head_l">
					<img src="@/assets/images/sp.png" alt="">
				</div>
				<div class="car_head_r">{{item.goods.shopName}}</div>
			</div>
			<mt-cell-swipe
			  :right="[
			    {
			      content: '删除',
			      style: { background: '#20bcff', color: '#fff' },
			      handler: () => deleteSection(item.goods.landlordId
,ite)
			    }
			  ]"
			   v-for="(ite,index) in item.goods.sp"
			   :key="index"
			>
			  	<div class="kuang">
			  		<template  v-if="ite.selected==true">
			  			<div class="kuang_l" @click="handlerSelectClick(item.goods.landlordId
,ite)">
			  				<img src="@/assets/images/zhufu-choose3@2x.png" alt="" />
			  			</div>
			  		</template>
			  		<template v-else>
			  			<div class="kuang_l" @click="handlerSelectClick(item.goods.landlordId
,ite)">
			  				<img src="@/assets/images/zhufu-choose@2x.png" alt="" />
			  			</div>
			  		</template>
			  		<!-- <input class="kuang_l" type="checkbox" id="one" :value="index" name="a" v-model="picked"> -->
			  		<router-link :to="'/Detail/'+item.id">
				  		<div class="kuang_c">
				  			<img :src="ite.imgUrl" alt="">
				  		</div>
			  		</router-link>
			  		<div class="kuang_r">
			  			<div class="title">{{ite.name}}</div>
			  			<div class="size">
			  				<div class="size_l">{{ite.picked}}</div>
			  				<div class="size_r">{{ite.size}}</div>
			  			</div>
			  			<div class="price">
			  				<div class="price_l">¥{{ite.price}}</div>
			  				<div class="price_r">
			  					<div class="price_r_l" @click.prevent="handlerJianClick(item.goods.landlordId
,ite)">-</div>
			  					<div class="price_r_c">{{ite.num}}</div>
			  					<div class="price_r_r" @click.prevent="handlerAddClick(item.goods.landlordId
,ite)">+</div>
			  				</div>
			  			</div>
			  		</div>
			  	</div>
			</mt-cell-swipe>
			</div>
			<div class="footer">
				<div class="quan" v-if="seleall==true" @click="handlerSelectAllClick">
					<img src="@/assets/images/zhufu-choose3@2x.png" alt="" />
				</div>
				<div class="quan" v-else @click="handlerSelectAllClick">
					<img src="@/assets/images/zhufu-choose@2x.png" alt="" />
				</div>
				<!-- <input class="quan" type="checkbox" @click="checkAll($event)"> -->
				<div class="quanx">全选</div>
				<div class="heji">合计：¥{{this.totalPrice}}</div>
				<router-link to="Submit">
					<div class="jiesuan" @click="handlePostClick">结算({{this.totalNum}})</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
	import { CellSwipe } from 'mint-ui';
	export default{
		name:'buycar',
		components:{
			CellSwipe
		},
		data(){
			return{
				picked: [],
				num:1,
				carList:[],
				dingdan:'',
			}
		},
		computed:{
		    ...mapState(['added','selectedAl','userId']),
		    ...mapGetters(['totalPrice','totalNum','seleall','order'])
		},
		methods:{
			...mapMutations(['del', 'carAdd','carJian','selectList']),
			...mapActions(['selected','selectedAll']),
			handlerJianClick(a,b){
				this.carJian({a,b})
			},
			handlerAddClick(a,b){
				console.log(a)
				console.log(b)
				 this.carAdd({a,b})
			},
			deleteSection(a,b){
				console.log(a)
				this.del({a,b})
			},
			handlerSelectClick(a,b){
				this.selected({a,b})
			},
			handlerSelectAllClick(){
				this.selectedAll()
			},
			handlePostClick(){
				
			}
		},
		mounted(){
			// console.log(JSON.parse(this.added))
			console.log(this.added)
			console.log(this.dingDan)
			// console.log(this.carList)
		},
		watch:{
			picked(){
				console.log(this.picked)
			},
			order(){
				console.log(this.order)
			}
		}
	}
</script>
<style lang="stylus" scoped>
.car_head
	height:0.3rem;
	background:#f7f7f7;
	.car_head_l
		height:0.15rem;
		width: 0.15rem;
		margin-top: 0.07rem;
		margin-left: 0.1rem;
		// background:blue;
		float: left;
		img
			height: 0.15rem;
			width: 0.15rem;
	.car_head_r
		height:0.3rem;
		line-height:0.3rem;
		width: 3rem;
		color:#000;
		float: left;
		font-size: 0.14rem;
		margin-left: 0.1rem;
.mint-cell
	border-bottom:0.01rem solid #E5E5E5;
	// .mint-cell-right
	// 	.mint-cell-swipe-button
	// 			line-height:128px!important;
	.kuang
		height:1rem;
		width: 3.75rem;
		// background:pink;
		padding: 0.2rem 0.18rem 0.2rem 0;
		.kuang_l
			height:0.16rem;
			width: 0.16rem;
			margin-top: 0.4rem;
			float: left;
			img
				height:0.16rem;
				width: 0.16rem;
		.kuang_c
			height:1rem;
			width: 1rem;
			// background:yellowgreen;
			float: left;
			margin-left: 0.11rem;
			img
				height: 1rem;
				width: 1rem;
		.kuang_r
			height:1rem;
			width: 1.97rem;
			// background:yellowgreen;
			float: left;
			margin-left: 0.12rem;
			.title
				height:0.3rem;
				width: 1.97rem;
				// background:blue;
				font-family: PingFangSC-Regular;
				font-size: 0.13rem;
				color: #454553;
			.size
				height:0.2rem;
				width: 1.97rem;
				// background:pink;
				margin-top: 0.03rem;
				.size_l
					font-family: '.HelveticaNeueDeskInterface-Regular';
					font-size: 0.14rem;
					color: #000023;
					line-height: 0.2rem;
					// background:red;
					float: left;
					margin-right: 0.1rem;
				.size_r
					font-family: '.HelveticaNeueDeskInterface-Regular';
					font-size: 0.14rem;
					color: #000023;
					line-height: 0.2rem;
					// background:red;
					float: left;
			.price
				width:1.97rem;
				height: 0.26rem;
				// background:pink;
				float: left;
				margin-top: 0.2rem;
				line-height: 0.26rem;
				.price_l
					font-family:'.HelveticaNeueDeskInterface-Bold';
					font-size: 0.18rem;
					color: #FB596B;
					float: left;
				.price_r
					height:0.26rem;
					width: 0.96rem;
					// background:red;
					float: right;
					.price_r_l
						height:0.25rem;
						width: 0.24rem;
						background:#C9C9C9;
						float: left;
						text-align: center;
						line-height: 0.22rem;
						font-size: 0.24rem;
						border: 0.01rem solid #C9C9C9;
					.price_r_c
						height:0.25rem;
						width: 0.44rem;
						border-top: 0.01rem solid #C9C9C9;
						border-bottom: 0.01rem solid #C9C9C9;
						background:#fff;
						float: left;
						text-align: center;
					.price_r_r
						height:0.25rem;
						width: 0.24rem;
						background:#C9C9C9;
						float: left;
						text-align: center;
						line-height: 0.25rem;
						font-size: 0.16rem;
						border: 0.01rem solid #C9C9C9;
.kong
	color:#C9C9C9;
	height: 0.3rem;
	font-size: 0.18rem;
	width: 100%;
	text-align: center;
	margin-top: 1.5rem;
	.pic
		height:1.2rem;
		width: 1rem;
		// background:pink;
		margin: 0 auto;
		img
			height:1rem;
			width: 1rem;
.footer
	height:0.6rem;
	width: 100%;
	position:fixed;
	bottom:0.5rem;
	background:#fff;
	.quan
		height:0.16rem;
		width: 0.16rem;
		border-radius: 50%;
		margin:0.21rem 0.1rem;
		float: left;
		img
			height:0.16rem;
			width: 0.16rem;
	.quanx
		height:0.6rem;
		line-height: 0.6rem;
		float: left;
		// background:pink;
		font-size: 0.14rem;
		color: #21283E;
	.heji
		height:0.6rem;
		line-height: 0.6rem;
		float: left;
		// background:pink;
		font-size: 0.14rem;
		color: #21283E;
		margin-left:0.32rem;
	.jiesuan
		height:0.6rem;
		width: 1.3rem;
		background:#20BCFF;
		float: right;
		line-height: 0.6rem;
		text-align: center;
		color:#fff;
		font-size: 0.16rem;
</style>











