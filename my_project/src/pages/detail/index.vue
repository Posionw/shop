<template>
	<div class="detail">
		<component :is="type" list="123" :swiper="swiper"></component>
		<detail-button
			class="btn"
			@tabVideo="tab"
			@tabPic="tab"></detail-button>
		<detail-zan :aid="id"></detail-zan>
		<detail-title :title="title" :price="price"></detail-title>
		<detail-buycar></detail-buycar>
	</div>
</template>
<script>
	import axios from 'axios'
	import DetailSwiper from './swiper.vue'
	import DetailVideo from './video.vue'
	import DetailButton from './button.vue'
	import DetailZan from './zan.vue'
	import DetailTitle from './title.vue'
	import DetailBuycar from './buycar.vue'
	export default{
		name:'detail',
		components:{
			DetailSwiper,
			DetailVideo,
			DetailButton,
			DetailZan,
			DetailTitle,
			DetailBuycar
		},
		data(){
			return{
				type:"DetailSwiper",
				id:'',
				swiper:[],
				z_detail:[],
				title:'',
				price:''
			}
		},
		methods:{
			tab:function (tab) {
				if(tab==0){
					this.type="DetailVideo"
				}else{
					this.type="DetailSwiper"
				}
			},
			getIndexData(){
		      axios.get('/api/index_list.json?page='+this.id)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		// this.z_list= res.data.list.concat(this.z_list)
		  		this.z_detail = res.data.list_li
		  		console.log(this.z_detail)
		  		console.log(this.id)
		  		let item = this.z_detail.find(n=>n.id == this.id);
		  		console.log(item)
		  		this.swiper = item.swiper//轮播图数据
		  		console.log(this.swiper)
		  		this.title = item.title
		  		console.log(this.title)
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
		},
		mounted(){
			this.id=this.$route.params.id
			console.log(this.id)
			this.getIndexData()
		}
	}
</script>
<style lang="stylus" scoped>
	.detail
		position:relative;
		.btn
			position:absolute;
			top:3.45rem;
			right: 0.18rem;
			z-index: 9;
</style>










