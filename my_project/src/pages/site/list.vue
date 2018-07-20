<template>
	<div>
		<template v-if="list.length!=0">
		<mt-cell-swipe
		  :right="[
		    {
		      content: 'Delete',
		      style: { background: 'red', color: '#fff' },
		      handler: () => getIndexData(item.addressId)
		    }
		  ]"
		   v-for="(item,index) in z_list"
		   :key="index"
		>
			<div class="list_li">
				<div class="list_li_name">
					<span class="name">{{item.consignee}}</span>
					<span class="number">{{item.phone}}</span>
				</div>
				<div class="list_li_site">{{item.area}}{{item.address}}</div>
				<div class="list_li_compile">
					<input class="select" @click="handlerMoren(item.addressId)" type="radio" id="one" :value="item.addressId" name="a" v-model="picked">
					<span class="moren">默认地址</span>
						<router-link :to="'/Changesite/'+item.addressId">
							<div class="bianji">
								<img src="@/assets/images/bj@2x.png" alt="">
								<div class="bianji_r">编辑</div>
							</div>
						</router-link>
				</div>
			</div>
		</mt-cell-swipe>
		</template>
		<template v-else>
			<div class="moren" style="margin-top:1rem;width:100%;text-align: center;">
				<img src="@/assets/images/wu.png" alt="">
			</div>
		</template>
	</div>
</template>
<script>
	import axios from 'axios'
	import { CellSwipe } from 'mint-ui';
	export default{
		name:'site-list',
		props:{
			list:'',
			morenId:'',
			hasMore:''
		},
		components:{
			CellSwipe
		},
		data(){
			return{
				picked: '',
				z_list:''
			}
		},
		methods:{
			getIndexData(id){
				this.z_list.forEach((n,i)=>{
		          	if(i==id){
		              this.z_list.splice(i,1)
		          	}
      			})
      			this.$emit('increase',id)
		  	},
		  	handlerMoren(id){
		  		this.$emit('ewewew',id)
		  	}
		},
		watch:{
			list(){
				console.log(this.list)
				this.z_list = this.list
			},
			hasMore(){
				console.log(this.hasMore)
			},
			morenId(){
				this.picked=this.morenId
			}
		}
	}
</script>
<style lang="stylus" scoped>
.mint-cell
	margin-bottom:0.1rem;
	.list_li
		padding: 0.18rem;
		width: 3.39rem;
		background:#fff;
		color:#3792EB;
		// margin-bottom: 0.1rem;
		.list_li_name
			height:0.14rem;
			line-height: 0.14rem;
			// background:red;
			margin-bottom: 0.1rem;
			.name
				margin-right:0.1rem;
		.list_li_site
			margin-bottom:0.1rem;
			color:#000;
		.list_li_compile
			height:0.24rem;
			width: 100%;
			// background:yellow;
			.select
				margin-top:0.05rem;
				float: left;
				margin-left:0;
			.moren
				line-height:0.24rem;
				color:#000;
				float: left;
				margin-left: 0.01rem;
			.bianji
				height:0.24rem;
				width:0.49rem;
				line-height: 0.24rem;
				// background:red;
				float: right;
				img
					height:0.174rem;
					width:0.174rem;
					margin-top: 0.03rem;
					float: left;
				.bianji_r
					height:0.24rem;
					line-height: 0.24rem;
					float:left;
					color:#000;
					margin-left: 0.05rem;
</style>














