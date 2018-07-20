<template>
	<div class="product_list">
		<swiper
			:options="swiperOption"
			ref="mySwiper" >
		    <swiper-slide
		    	v-for="(item,index) in num"
		    	:key="index">
		    	<list-li :num ="index"></list-li>
		    </swiper-slide>
	  </swiper>
	</div>
</template>
<script>
	import axios from 'axios'
	import ListLi from './list_li.vue'
	import { mapState,mapMutations } from 'vuex'
	export default{
		name:'index-list',
		components:{
			ListLi
		},
	    data() {
	      return {
	      	swiperIndex:0,
	      	header:'',
	        swiperOption: {
	          pagination: {
	            el: '.swiper-pagination'
	          },
	          on:{
			    slideChange: ()=> {
			      console.log(this.swiper.activeIndex);
			      this.swiperIndex=this.swiper.activeIndex
			      this.changeTab(this.swiperIndex)
			      console.log(this.header)
			      console.log(this.header[this.swiperIndex].goodsTypeId)

			      this.changId(this.header[this.swiperIndex].goodsTypeId)
			    },
			  },
	        },
	        num:''
	      }
	    },
	    computed: {
	      ...mapState({
		      tab:'tab',
		      cid:'cid'
		    }),
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      },
	      cId:function(){
				return this.$route.query.cid
		}
	    },
	    mounted() {
	      // current swiper instance
	      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	      this.swiper.slideTo(this.tab, 0, false)
	      this.getIndexData()
	    },
	    methods:{
	    	...mapMutations(['changeTab','changId']),
	    	getIndexData(){
	    		axios.get('/ds-app/home/goodsType?landlordId='+this.cId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res.data.data)
		  		this.header = res.data.data
		  		this.num=res.data.data.length
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
	    },
	    watch:{
	    	tab(){
	    		this.swiper.slideTo(this.tab, 0, false)
	    		console.log(this.tab)
	    	}
	    }
	}
</script>
<style lang="stylus" scoped>
	.product_list
		flex:1;
		width: 100%;
		// background:pink;
		margin-top: 0.46rem;
		.swiper-slide
			height:5.7rem;
			.list_li
				height:100%;
				width: 100%;
				background:yellowgreen;
</style>







