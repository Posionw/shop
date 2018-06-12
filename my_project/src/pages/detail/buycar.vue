<template>
	<div>
		<mt-popup v-model="popupVisible"
		  style="background:0"
		  position="bottom">
		  <div class="kuang">
		  	<div class="kuang_w">
		  		<div class="kuang_t">
		  			<div class="top_pic">
		  				<img src="@/assets/images/Group6@2x.png" alt="">
		  			</div>
		  			<div class="top_title">
		  				<div class="top_title_t">{{list.title}}</div>
		  				<div class="top_price">¥{{list.price}}</div>
		  			</div>
		  		</div>
		  		<div class="kuang_c">
		  			<div class="select">
		  				<div class="select_name">颜色</div>
		  				<ul class="select_li">
		  					<li :class="{active:index==selectIndex}"
		  					    @click="handleSelect(index)"
								v-for="(item,index) in list.color">
		  						{{item}}
		  						<input type="radio" v-model="picked" :value="item" name="a">
		  					</li>
		  					<!-- <li :class="{active:'1'==selectIndex}" @click="handleSelect(1)">
		  					蓝色
		  						<input type="radio" v-model="picked" value="蓝色" name="a">
		  					</li>
		  					<li :class="{active:'2'==selectIndex}" @click="handleSelect(2)">
		  					灰色
		  						<input type="radio" v-model="picked" value="灰色" name="a">
		  					</li>
		  					<li :class="{active:'3'==selectIndex}" @click="handleSelect(3)">
		  					黄色
		  						<input type="radio" v-model="picked" value="黄色" name="a">
		  					</li> -->
		  				</ul>
		  			</div>
		  			<div class="select">
		  				<div class="select_name">尺码</div>
		  				<ul class="select_li">
		  					<li :class="{active:index==selectIndex2}"
		  					    @click="handleSelect2(index)"
		  					     v-for="(item,index) in list.size">
		  						{{item}}
		  						<input type="radio" v-model="size" :value="item" name="b">
		  					</li>
		  					<!-- <li :class="{active:'1'==selectIndex2}" @click="handleSelect2(1)">
		  					S
							<input type="radio" v-model="size" value="s" name="b">
		  					</li>
		  					<li :class="{active:'2'==selectIndex2}" @click="handleSelect2(2)">
		  					L
							<input type="radio" v-model="size" value="s" name="b">
		  					</li> -->
		  				</ul>
		  			</div>
		  		</div>
		  		<div class="number">
		  			<div class="number_l">数量</div>
		  			<div class="number_r">
		  				<div class="number_r_l"  @click="handleJian">
		  					-
		  				</div>
		  				<div class="number_r_c">
		  					{{num}}
		  				</div>
		  				<div class="number_r_r" @click="handleAdd">
		  					+
		  				</div>
		  			</div>
		  		</div>
		  		<div class="kuang_b" @click="buyNow()">
		  			<div class="footer_l">
						加入购物车
					</div>
					<div class="footer_r">
						<img src="@/assets/images/gouwuche1@2x.png" alt="">
					</div>
		  		</div>
		  	</div>
		  </div>
		</mt-popup>
		<div class="footer" @click="tan">
			<div class="footer_l">
				加入购物车
			</div>
			<div class="footer_r">
				<img src="@/assets/images/gouwuche1@2x.png" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import { Popup,Toast } from 'mint-ui';
	import { mapState,mapMutations } from 'vuex'
	export default{
		name:'detail-buycar',
		components:{
			Popup,
			Toast
		},
		props:{
    		list:{}
    	},
		data(){
			return{
				popupVisible:false,
				picked:'冰灰',
				size:'xs',
				selectIndex:0,
				selectIndex2:0,
				num:0
			}
		},
		computed:{
		    // ...mapState({
		    //   num:'num'
		    // }),
		    goods(){
		    	return {"picked":this.picked,"size":this.size,"id":this.list.id,"num":this.num,"name":this.list.title,"price":this.list.price}
		    }
		},
		methods:{
			...mapMutations(['addNum','jianNum', 'add']),
			tan(){
				this.popupVisible=true
			},
			handleAdd(){
				// this.addNum()
				this.num+=1
			},
			handleJian(){
				// this.jianNum()
				this.num-=1
			},
			handleSelect(index){
				this.selectIndex=index
			},
			handleSelect2(index){
				this.selectIndex2=index
			},
			buyNow(){

				if(this.goods.num>0){
					Toast({
					  message: '填加成功',
					  className:'tan1',
					});
					this.add(this.goods)
					console.log(this.goods)
				}else{
					Toast({
					  message: '请选择数量',
					  className:'tan1',
					});
				}
			}
		},
		watch:{
			picked(){
				console.log('变化了')
			}
		},
		mounted(){
			console.log(this.list)
		}
	}
</script>
<style lang="stylus" scoped>
	.footer
	   height:0.6rem;
	   width: 100%;
	   // background: #FFFFFF;
	   box-shadow: 0px -4px 12px 0px #EDF3F4;
	   position: fixed;
	   bottom:0;
	   .footer_l
	   		line-height:0.6rem;
	   		font-size:0.18rem;
	   		color: #21283E;
	   		margin-left: 1.26rem;
	   		float: left;
	   	.footer_r
	   		height:0.23rem;
	   		width: 0.23rem;
	   		float: left;
	   		margin-top: 0.18rem;
	   		margin-left: 0.1rem;
	   		img
	   			height:0.23rem;
	   			width: 0.23rem;
	.kuang
		height:3.71rem;
		width: 3.75rem;
		// background:#fff;
		position:relative;
		z-index: 9999;
		overflow: hidden;
		.kuang_w
			height:3.41rem;
			width: 3.75rem;
			background:#fff;
			margin-top: 0.3rem;
			// overflow: hidden;
			.kuang_t
				height:0.9rem;
				width: 100%;
				// background:yellow;
				margin-top: -0.3rem;
				float: left;
				display: flex;
				.top_pic
					height:0.9rem;
					width: 0.9rem;
					// background:yellowgreen;
					margin-left: 0.18rem;
					float:left;
					img
						height:0.9rem;
						width: 0.9rem;
				.top_title
					height:0.6rem;
					flex:1;
					// background:yellowgreen;
					margin-top: 0.3rem;
					.top_title_t
						font-family: '.PingFang-SC-Regular';
						font-size: 14px;
						color: #353535;
						height: 0.2rem;
						line-height: 0.2rem;
						margin-top: 0.14rem;
						margin-left: 0.15rem;
						width: 2.52rem;
					.top_price
						height:0.2rem;
						width: 2.52rem;
						line-height: 0.2rem;
						float: left;
						margin-left: 0.15rem;
						margin-top: 0.06rem;
						font-family: AvenirNext-Medium;
						font-size: 0.18rem;
						color: #FB596B;
						line-height: 0.2rem;
			.kuang_c
				height:1.59rem;
				width: 3.38rem;
				// background: yellowgreen;
				margin-top: 0.17rem;
				margin-left: 0.2rem;
				float: left;
				.select
					min-height:0.6rem;
					width: 3.38rem;
					// background:pink;
					margin-bottom: 0.13rem;
					.select_name
						height:0.22rem;
						width: 100%;
						// background:red;
						font-family: '.PingFang-SC-Regular';
						font-size: 0.16rem;
						color: #333333;
					.select_li
						min-height:0.26rem;
						width: 100%;
						// background:yellow;
						margin-top: 0.12rem;
						li
							height: 0.24rem;
							width: 0.38rem;
							// background:red;
							float: left;
							border: 1px solid #D5D5DB;
							border-radius: 2px;
							line-height: 0.26rem;
							text-align: center;
							margin-right: 0.12rem;
							position:relative;
						.active
							background: #20BCFF;
							border: 1px solid #20BCFF;
							border-radius: 2px;
							color: #fff;
						input
							height: 0.24rem;
							width: 0.38rem;
							position:absolute;
							top:0;
							left: 0;
							opacity: 0;
			.number
				height:0.26rem;
				width: 3.38rem;
				// background: red;
				float: left;
				margin-left: 0.2rem;
				.number_l
					font-family: '.PingFang-SC-Regular';
					font-size: 0.16rem;
					color: #333333;
					// background: yellow;
					float: left;
					line-height: 0.26rem;
				.number_r
					width:0.94rem;
					height: 0.26rem;
					// background: yellow;
					float: right;
					.number_r_l
						height:0.24rem;
						width: 0.24rem;
						background:  #EDEDED;
						line-height: 0.26rem;
						text-align: center;
						border: 0.01rem solid #C9C9C9;
						float: left;
					.number_r_c
						height:0.24rem;
						width: 0.42rem;
						border-top: 0.01rem solid #C9C9C9;
						border-bottom: 0.01rem solid #C9C9C9;
						background: #fff;
						line-height: 0.24rem;
						text-align: center;
						float: left;
					.number_r_r
						height:0.24rem;
						width: 0.24rem;
						background:  #EDEDED;
						line-height: 0.26rem;
						text-align: center;
						border: 0.01rem solid #C9C9C9;
						float: left;
			.kuang_b
			   height:0.6rem;
			   width: 100%;
			   background: #20BCFF;
			   // box-shadow: 0px -4px 12px 0px #EDF3F4;
			   position: fixed;
			   bottom:0;
			   .footer_l
			   		line-height:0.6rem;
			   		font-size:0.18rem;
			   		color: #21283E;
			   		margin-left: 1.26rem;
			   		float: left;
			   		color: #fff;
			   	.footer_r
			   		height:0.23rem;
			   		width: 0.23rem;
			   		float: left;
			   		margin-top: 0.18rem;
			   		margin-left: 0.1rem;
			   		img
			   			height:0.23rem;
			   			width: 0.23rem;
</style>













