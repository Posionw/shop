<template>
	<div id="gwc">
		<mt-cell-swipe
		  :right="[
		    {
		      content: 'Delete',
		      style: { background: 'red', color: '#fff' },
		      handler: () => deleteSection(item)
		    }
		  ]"
		   v-for="(item,index) in added"
		   :key="index"
		>
		  	<div class="kuang">
		  		<input class="kuang_l" type="radio" id="one" value="One" name="a" v-model="picked">
		  		<div class="kuang_c">
		  			<img src="@/assets/images/Group6@2x.png" alt="">
		  		</div>
		  		<div class="kuang_r">
		  			<div class="title">{{item.goods.name}}</div>
		  			<div class="size">
		  				<div class="size_l">{{item.goods.picked}}</div>
		  				<div class="size_r">{{item.goods.size}}</div>
		  			</div>
		  			<div class="price">
		  				<div class="price_l">¥{{item.goods.price}}</div>
		  				<div class="price_r">
		  					<div class="price_r_l" @click.prevent="handlerJianClick(item)">-</div>
		  					<div class="price_r_c">{{item.goods.num}}</div>
		  					<div class="price_r_r" @click.prevent="handlerAddClick(item)">+</div>
		  				</div>
		  			</div>
		  		</div>
		  	</div>
		</mt-cell-swipe>
		<div class="kong" v-if="!added.length">
			<div class="pic">
				<img src="@/assets/images/gouwuche1@2x.png" alt="">
			</div>
		您的购物车空空如也...</div>
	</div>
</template>
<script>
	import { mapState,mapMutations } from 'vuex'
	import { CellSwipe } from 'mint-ui';
	export default{
		name:'buycar',
		components:{
			CellSwipe
		},
		data(){
			return{
				picked: '',
				num:1,
				carList:[]
			}
		},
		computed:{
			...mapState({
		      added:'added'
		    })
		},
		watch:{
			picked(){
				console.log('1')
			}
		},
		methods:{
			...mapMutations(['del', 'carAdd','carJian']),
			handlerJianClick(a){
				this.carJian(a)
			},
			handlerAddClick(a){
				 this.carAdd(a)
			},
			deleteSection(a){
				console.log(a)
				this.del(a)
			}
		},
		mounted(){
			// console.log(JSON.parse(this.added))
			console.log(this.added)
			console.log(this.added.length)
			// console.log(this.carList)
			// 
		}
	}
</script>
<style lang="stylus" scoped>
.mint-cell
	border-bottom:0.01rem solid #E5E5E5;
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
</style>











