<template>
	<div class="index">
		<index-header></index-header>
		<index-list></index-list>
	</div>
</template>
<script>
	import IndexHeader from './header.vue'
	import IndexList from './list.vue'
	import { mapActions,mapState,mapMutations } from 'vuex'
	export default{
		name: 'index',
		components:{
			IndexHeader,
			IndexList
		},
		computed:{
			 ...mapState(['userId','cid']),

		},
		methods:{
			...mapActions(['changUser','changCi']),
			...mapMutations(['changeCid'])
			// userId:function(){
			// 	return this.$route.query.id
			// }
		},
		mounted(){
			this.changUser(this.$route.query.id)
			this.changCi(this.$route.query.cid)
			// this.changeCid(this.$route.query.cid)
		},
		watch:{
			userId(){
				console.log(this.userId)
				console.log(this.cid)
			},
			$route(){
				console.log(this.$route)
				// this.changUser(this.$route.query.id)
				// this.changCi(this.$route.query.cid)
			}
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
