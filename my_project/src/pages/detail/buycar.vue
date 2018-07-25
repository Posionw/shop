<template>
	<div>
		<mt-popup v-model="popupVisible"
		  		  style="background:0"
		 		  position="bottom">
		  <div class="kuang">
		  	<div class="kuang_w">
		  		<div class="kuang_t">
		  			<div class="top_pic">
		  				<img :src="imgUrl" alt="">
		  			</div>
		  			<div class="top_title">
		  				<div class="top_title_t">{{title}}<span style="margin-left:0.05rem">({{kucunnum}})</span></div>
		  				<div class="top_price">¥{{price}}</div>
		  			</div>
		  		</div>
		  		<div class="kuang_c">
					<div class="select">
		  				<div class="select_name">
		  					{{goodsFormats1.formatName}}
		  				</div>
		  				<ul class="select_li">
		  					<li :class="[{active:item.infoFormatId==selectIndex},{act:item.status!==1}]"
		  					    @click="handleSelect(index,item.infoFormatId,item.status,item.img)"
								v-for="(item,index) in goodsFormats1data">
		  						{{item.infoName}}
		  						<input type="radio"
		  							   v-model="picked"
		  							   :value="item.infoName"
		  							   v-if="item.status==1"
		  							   name="a">
		  					</li>
		  				</ul>
		  			</div>
		  			<template v-if="goodsFormats2data.length==0">

		  			</template>
		  			<template v-else>
		  			 <div class="select">
		  				<div class="select_name">{{goodsFormats2.formatName}}</div>
		  				<ul class="select_li">
		  					<li :class="[{active:item.infoFormatId==selectIndex2},{act:item.status!==1}]"
		  					    @click="handleSelect2(index,item.infoFormatId,item.status,item.img)"
		  					    v-for="(item,index) in goodsFormats2data">
		  						{{item.infoName}}
		  						<input type="radio"
		  							   v-model="size"
		  							   :value="item.infoName"
		  							   v-if="item.status==1"
		  							   name="b">
		  					</li>
		  				</ul>
		  			</div>
		  			</template>
		  			<!-- <div class="select">
		  				<div class="select_name">颜色</div>
		  				<ul class="select_li">
		  					<li :class="{active:index==selectIndex}"
		  					    @click="handleSelect(index)"
								v-for="(item,index) in list.color">
		  						{{item}}
		  						<input type="radio" v-model="picked" :value="item" name="a">
		  					</li>
		  				</ul>
		  			</div> -->
		  			<!-- <div class="select">
		  				<div class="select_name">尺码</div>
		  				<ul class="select_li">
		  					<li :class="{active:index==selectIndex2}"
		  					    @click="handleSelect2(index)"
		  					     v-for="(item,index) in list.size">
		  						{{item}}
		  						<input type="radio" v-model="size" :value="item" name="b">
		  					</li>
		  					<li :class="{active:'1'==selectIndex2}" @click="handleSelect2(1)">
		  					S
							<input type="radio" v-model="size" value="s" name="b">
		  					</li>
		  					<li :class="{active:'2'==selectIndex2}" @click="handleSelect2(2)">
		  					L
							<input type="radio" v-model="size" value="s" name="b">
		  					</li>
		  				</ul>
		  			</div> -->
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
    		list:{},
    		price:'',					//价格
    		title:'',					//名字
    		goodsId:'',					//商品id
    		goodsFormats1:'',			//筛选1总数据
    		goodsFormats2:'',			//筛选2总数据
    		goodsFormats1data:'',		//筛选1选项
    		goodsFormats2data:'',		//筛选2选项
    		imgUrl:'',					//默认图片
    		landlordId:'',				//房东id
    		shopName:'',				//店铺名
    		kucunnum:''					//库存
    	},
		data(){
			return{
				popupVisible:false,		//是否展示购物车
				picked:'',				//筛选1的值
				size:'',				//筛选2的值
				selectIndex:'',		//筛选1下标
				selectIndex2:'',		//筛选2下标
				num:0,					//数量
			}
		},
		computed:{
		    goods(){
		    	return {landlordId:this.landlordId,shopName:this.shopName,sp:[{"picked":this.picked,"size":this.size,"id":this.goodsId,"num":this.num,"name":this.title,"price":this.price,imgUrl:this.imgUrl,selected:true}]}
		    }
		},
		methods:{
			...mapMutations(['add']),					//添加购物车
			tan(){										//点击显示详情选项
				this.popupVisible=true
			},
			handleAdd(){								//点击加号
				this.num+=1
			},
			handleJian(){								//点击减号
				this.num-=1
				if(this.num<=0){
  					this.num=0
  				}
			},
			handleSelect(index,id,state,img){						//点击筛选1
				if(state == 1){
					if(this.selectIndex==id){           			//此处判断为取消
						this.selectIndex=''						//删除选中
						this.picked = ''							//取消重新赋值
						this.$emit('infoFormatId1',{id:id,state:0}) //传给父级id及取消事件
					}else{
						this.selectIndex=id 						//重新赋值id选中状态
						this.$emit('infoFormatId1',{id:id,state:1,img:img}) //传给父级id及点击事件
						console.log(img)

					}
					this.$emit('kucun',{selectIndex2:this.selectIndex2,selectIndex:this.selectIndex,goodsId:this.goodsId})
				}
				// console.log(id)
			},
			handleSelect2(index,id,state,img){				//点击筛选2
				if(state==1){										//判断是否有货state=1有货
					if(this.selectIndex2==id){						//判断是否取消
						this.selectIndex2=''						//取消重新赋值
						this.size = ''								//选中状态重新赋值
						this.$emit('infoFormatId2',{id:id,state:0}) //传给父级id及取消事件
					}else{
						this.selectIndex2=id 						       //点击赋值id选中状态
						this.$emit('infoFormatId2',{id:id,state:1,img:img}) //传给父级id及点击事件
					}
				}
				if(this.picked!=''){
				this.$emit('kucun',{selectIndex2:this.selectIndex2,selectIndex:this.selectIndex,goodsId:this.goodsId})
				}
				// console.log(id)
			},
			buyNow(){
				console.log(this.goods)
				if(this.goodsFormats2data.length==0){					//判断如果只有选项1的情况
					console.log(this.goods.sp[0].num)
					if(this.goods.sp[0].num>0 && this.picked!=''){
						console.log(this.picked,this.size,this.num)
						if(this.num>this.kucunnum){
							Toast({
							  message: '库存不足',
							  className:'tan1',
							  duration: 1000,
							  iconClass: 'iconfont icon-right'
							});
						}else{
							Toast({
							  message: '填加成功',
							  className:'tan1',
							  duration: 1000,
							  iconClass: 'iconfont icon-right'
							});
							this.add(this.goods)
						}
					}else{
						Toast({
						  message: '请完善选项',
						  className:'tan1',
						  duration: 1000
						});
					}

				}else{
					if(this.goods.sp[0].num>0 && this.picked!=''&&this.size!='' ){//判断数量选项1选项2不为空
						if(this.num>this.kucunnum){
							Toast({
							  message: '库存不足',
							  className:'tan1',
							  duration: 1000,
							  iconClass: 'iconfont icon-right'
							});
						}else{
							Toast({
							  message: '填加成功',
							  className:'tan1',
							  duration: 1000,
							  iconClass: 'iconfont icon-right'
							});
							this.add(this.goods)
						}
					}else{
						Toast({
						  message: '请完善选项',
						  className:'tan1',
						  duration: 1000
						});
					}
				}
			}
		},
		watch:{
			picked(){
				console.log(this.goods.picked)
			},
			popupVisible(){								//显示弹框滚动条禁止滚动
				if(this.popupVisible == true){
					document.documentElement.style.overflowY = 'hidden';
				}else{
					document.documentElement.style.overflowY = 'scroll';
				}
			},
			goodsFormats2data(){
				// console.log(this.goodsFormats2data)
				let item = this.goodsFormats2data.find(n=>n.status == 0);
				if(item){
					var a = item.infoFormatId
					console.log(a)
					if(this.selectIndex2==a){
							this.size = ''
							this.selectIndex2='999'
					}
				}
			},
			goodsFormats1data(){
				// console.log(this.goodsFormats1data)
				let item = this.goodsFormats1data.find(n=>n.status == 0);
				if(item){
					var a = item.infoFormatId
					if(this.selectIndex==a){
							this.picked = ''
							this.selectIndex='999'
					}
				}
			}
		},
		mounted(){
			// console.log(this.list)
		}
	}
</script>
<style lang="stylus" scoped>
	.footer
	   height:0.6rem;
	   width: 100%;
	   background: #FFFFFF;
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
		// height:3.71rem;
		height: 5.7rem;
		width: 3.75rem;
		// background:#fff;
		position:relative;
		z-index: 9999;
		overflow: hidden;
		.kuang_w
			// height:3.41rem;
			height:5.41rem;
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
					border-radius: 0.05rem;
					float:left;
					img
						height:0.9rem;
						width: 0.9rem;
						border-radius: 0.05rem;
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
				max-height:3.59rem;
				width: 3.38rem;
				// background: yellowgreen;
				margin-top: 0.17rem;
				margin-left: 0.2rem;
				float: left;
				overflow-y: scroll;
				.select
					min-height:0.6rem;
					width: 3.38rem;
					// background:pink;
					// margin-bottom: 0.13rem;
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
						overflow:hidden;
						li
							height: 0.24rem;
							min-width: 0.28rem;
							// background:red;
							float: left;
							border: 1px solid #D5D5DB;
							border-radius: 2px;
							line-height: 0.26rem;
							text-align: center;
							margin-right: 0.12rem;
							position:relative;
							padding: 0 0.08rem;
							margin-bottom: 0.1rem;
						.active
							background: #20BCFF;
							border: 1px solid #20BCFF;
							border-radius: 2px;
							color: #fff;
						.act
							background:#ededed;
							color: #c9c9c9;
						input
							height: 0.24rem;
							width: 100%;
							position:absolute;
							top:0;
							left: 0;
							opacity: 0;
							padding: 0 0.08rem;
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













