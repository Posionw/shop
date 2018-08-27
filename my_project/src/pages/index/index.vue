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
	import { mapActions,mapState,mapMutations,mapGetters } from 'vuex'
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
			 ...mapState(['userId','cid','recruitScrollY']),
			 ...mapGetters(['recruitScrollY']),

		},
		methods:{
			...mapActions(['changUser','changCi','changOi']),
			...mapMutations(['changeCid','changeRecruitScrollY','changeTabbar']),
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
			},
		},
		mounted(){
			this.changUser(this.$route.query.id)
			this.changCi(this.$route.query.cid)
			this.changOi(this.$route.query.oid)
			this.getShopName(this.$route.query.cid)
			// this.changeCid(this.$route.query.cid)
		},
		beforeRouteLeave(to, from, next) {							//记录页面离开的高度
			let position1 = this.$children[2].$refs.listli[0].$refs.ui.scrollTop
		    if (position1 == null) position1 = 0 //记录离开页面的位置
			this.changeRecruitScrollY(position1) //离开路由时把位置存起来

		    next()
		},
		watch:{
			'$route' (to, from) {									//重新赋值页面高度
			    if (to.name === 'Index') {//跳转的的页面的名称是"NewRecruit",这里就相当于我们listview页面，或者原始页面
			        let recruitScrollY = this.recruitScrollY
			        this.$children[2].$refs.listli[0].$refs.ui.scroll(0, recruitScrollY)
			        this.changeTabbar('tab1')
			    }
		    }
		}
	}
</script>
<style>
	.index{
		height: 6.18rem;
		display: flex;
		flex-direction:row;
		overflow: hidden;
	}
</style>
