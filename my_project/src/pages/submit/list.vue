<template>
	<div style="overflow: hidden">
		<div class="list" v-for="(item,index) in zlist">
			<div class="list_li">
				<div class="car_head">
					<div class="car_head_l">
						<img src="@/assets/images/sp.png" alt="">
					</div>
					<div class="car_head_r">{{item.goods.shopName}}</div>
				</div>
				<div class="ll_c"  v-for="(ite,index) in item.goods.sp">
					<router-link :to="'/Detail/'+ite.id">
					<div class="con_l">
						<img :src="ite.imgUrl" alt="">
					</div>
					</router-link>
					<div class="con_r">
						<div class="name">{{ite.name}}</div>
						<div class="xinghao">
							<span>{{ite.picked}}</span>
							<span>{{ite.size}}</span>
							<span>{{ite.num}}</span>
						</div>
						<div class="price">¥{{ite.price}}</div>
					</div>
				</div>
				<div class="huq" v-for="(ii,index) in item.goods.couponList">
					<div class="yh_name">{{ii.rules}}</div>
					<!-- <div class="wxzf_r" v-if="select==true"  @click="handleSelectClick">
						<img src="@/assets/images/zhufu-choose3@2x.png" alt="" />
					</div> -->
					<div class="yh_selet" v-if="ii.selected==true"  @click="handleClick(item.goods.landlordId,ii.couponId)">
						<img src="@/assets/images/zhufu-choose3@2x.png" alt="" />
					</div>
					<div class="yh_selet" v-else @click="handleClick(item.goods.landlordId,ii.couponId)">
						<img src="@/assets/images/zhufu-choose@2x.png" alt="" />
					</div>
				</div>
				<div class="ll_b">
					<div class="zong">
						<span class="num">共{{item.goods.shopGoodsNum}}件商品</span>
						<span class="toggle">实付：¥{{item.goods.shopGoodsPrice}}</span>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
	export default {
		name:'submit-list',
		props:{
			list:'',
			totalPrice:'',
			totalNum:''
		},
		data(){
			return {
				yu:0,
				xid:'',
				item1:''
			}
		},
		computed:{
			...mapState(['userId']),
			zlist:function(){
				return this.list
			},
			// zzlist:function(){
			// 	let total = 0
			// 	this.zlist.forEach((item,i)=>{
			// 		console.log(item.goods.landlordId)
			// 		if(item.goods.landlordId==id){
			// 			item.goods.couponList.forEach((m,j)=>{
			// 				console.log(m)
			// 				if(m.couponId==hid){
			// 					// this.item[1] = m.couponMoney
			// 					item.goods.couponList.find(n=>{
			// 						console.log(n)
			// 						if(n.selected==true){
			// 							n.selected=false
			// 						}
			// 					})
			// 					m.selected=true
			// 					// if(m.selected==true){
			// 					// 	if(item.goods.shopGoodsPrice>m.couponMoney){
			// 					// 		let a=item.goods.shopGoodsPrice-m.couponMoney
			// 					// 		item.goods.shopGoodsPrice=a
			// 					// 	}
			// 					// }
			// 				}
			// 				var a=item.goods.couponList.find(n=>n.selected==true)
			// 			})
			// 		}
			// 		total+=item.goods.shopGoodsPrice
			// 	})
			// 	return total;
			// },
			goods(){
		    	return {
		    		userId:this.userId,
		    		sp:this.zlist
		    	}
		    }

		},
		methods:{
			handleClick(id,hid){
				if(this.xid!==hid){
				// console.log(id,hid)
				this.zlist.forEach((item,i)=>{
					// console.log(item.goods.landlordId)
					if(item.goods.landlordId==id){
						item.goods.couponList.forEach((m,j)=>{
							// console.log(m)
							if(m.couponId==hid){
								// this.item[1] = m.couponMoney
								item.goods.couponList.find(n=>{
									// console.log(n)
									if(n.selected==true){
										n.selected=false
									}
								})
								m.selected=true
								// if(m.selected==true){
								// 	if(item.goods.shopGoodsPrice>m.couponMoney){
								// 		let a=item.goods.shopGoodsPrice-m.couponMoney
								// 		item.goods.shopGoodsPrice=a
								// 	}
								// }
							}
							var a=item.goods.couponList.find(n=>n.selected==true)
						})
					}
				})
				this.xid = hid
				}
				var good = JSON.stringify(this.goods)
				// console.log(good)
				// console.log(good)
				this.$emit('yhq',good)
			}
		},
		mounted(){
			// console.log(this.list)
			// console.log(this.zlist)
		},
		watch:{
			list(){
				// console.log(this.list)
			},
			zlist(){
				// console.log(this.zlist)
				var good = JSON.stringify(this.zlist)
				// console.log(good)
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.list
		width:100%;
		background:#fff;
		float:left;
		// margin-top:0.15rem;
		.list_li
			min-height:1.7rem;
			width: 100%;
			background:#fff;
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

			.ll_t
				height:0.45rem;
				width: 3.45rem;
				padding: 0 0.15rem;
				border-bottom: 0.01rem solid rgb(213,213,219);
				img
					height: 0.175rem;
					width: 0.175rem;
					float: left;
					margin-top: 0.14rem;
				.time
					height:0.45rem;
					line-height: 0.45rem;
					float: left;
					font-size: 0.12rem;
					margin-left: 0.08rem;
			.ll_c
				min-height:1.24rem;
				width: 3.45rem;
				padding: 0 0.15rem;
				border-bottom: 0.01rem solid #f7f7f7;
				.con_l
					height:1rem;
					width: 1rem;
					float: left;
					margin-top: 0.125rem;
					// background:red;
					img
						height: 1rem;
						width: 1rem;
				.con_r
					width:2.3rem;
					height: 1rem;
					margin-top: 0.125rem;
					float: right;
					// background:red;
					.name
						width:100%;
						height: 0.3rem;
						line-height: 0.15rem;
						margin-top: 0.06rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						word-wrap: break-word;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						font-size: 0.13rem;
						// float: left;
						// background:yellow;
						white-space: normal !important;
					.xinghao
						height:0.12rem;
						line-height: 0.12rem;
						width: 100%;
						color: rgb(162,162,169);
						margin-top: 0.13rem;
						font-size: 0.12rem;
						span
							// background:pink;
					.price
						height:0.14rem;
						line-height: 0.14rem;
						width: 100%;
						font-size: 0.14rem;
						margin-top: 0.16rem;
			.huq
				height:0.3rem;
				line-height: 0.3rem;
				// background:#f7f7f7;
				border-bottom: 0.01rem solid #f7f7f7;
				.yh_name
					float:left;
					margin-left: 0.1rem;
				.yh_selet
					height:0.17rem;
					width: 0.17rem;
					margin:0.06rem 0.14rem;
					float:right;
					margin-right: 0.1rem;
					// background:red
					img
						height:0.17rem;
						width: 0.17rem;
			.ll_b
				height:0.44rem;
				padding: 0 0.15rem;
				.zong
					height:0.44rem;
					// width: 100%;
					line-height:0.44rem;
					float:left;
					font-size: 0.12rem;
					float:right;
					.num
						margin-right:0.13rem;
					.toggle
						float:right


</style>