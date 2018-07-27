<template>
	<div class="index">
		<index-head :shopName="shopName"></index-head>
		<index-header></index-header>
		<index-list></index-list>
	</div>
</template>
<script>
	import axios from 'axios'
	import IndexHead from './head.vue'
	import IndexHeader from './header.vue'
	import IndexList from './list.vue'
	import { mapActions,mapState,mapMutations } from 'vuex'
	export default{
		name: 'index',
		components:{
			IndexHeader,
			IndexList,
			IndexHead
		},
		data(){
			return {
				shopName:'',
				fdid:''
			}
		},
		computed:{
			 ...mapState(['userId','cid']),

		},
		methods:{
			...mapActions(['changUser','changCi']),
			...mapMutations(['changeCid']),
			getShopName(landlordId){
				axios.get('/ds-app/shop/getShop?landlordId='+landlordId)
		  		  .then(this.handleGetNameDataSucc.bind(this))
		  		  .catch(this.handleGetNameDataErr.bind(this))
			},
			handleGetNameDataSucc(res){
				console.log(res)
				this.shopName = res.data.data.shopName 				//商铺名赋值
			},
			handleGetNameDataErr(res){
				console.log(res)
			}
		},
		mounted(){
			this.changUser(this.$route.query.id)
			this.changCi(this.$route.query.cid)
			this.getShopName(this.$route.query.cid)
			// this.changeCid(this.$route.query.cid)
		},
		watch:{
			// '$route' (to) {
   //               if (to.name === 'Index') {
   //                      console.log(this.$route.query.cid)
   //                      this.getShopName(this.$route.query.cid)
   //                      this.changCi(this.$route.query.cid)
   //                      this.changUser(this.$route.query.id)
   //                }
   //         }
		}
	}
</script>
<style>
	.index{
		height: 6.18rem;
		display: flex;
		flex-direction:row;
	}
</style>
