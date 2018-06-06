<template>
	<div class="product_list">

		<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide>
	    	<list-li></list-li>
	    </swiper-slide>
	    <swiper-slide>
	    	<list-li></list-li>
	    </swiper-slide>
	    <swiper-slide>I'm Slide 3</swiper-slide>
	    <swiper-slide>I'm Slide 4</swiper-slide>
	    <swiper-slide>I'm Slide 5</swiper-slide>
	    <swiper-slide>I'm Slide 6</swiper-slide>
	    <swiper-slide>I'm Slide 7</swiper-slide>

	  </swiper>
	</div>
</template>
<script>
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
	        swiperOption: {
	          // loop:true,
	          pagination: {
	            el: '.swiper-pagination'
	          },
	          on:{
			    touchEnd: (event)=>{
			      this.swiperIndex=this.swiper.activeIndex
			    }
			  },
	        },
	      }
	    },
	    computed: {
	      ...mapState({
		      tab:'tab'
		    }),
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    },
	    mounted() {
	      // current swiper instance
	      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	      console.log('this is current swiper instance object', this.swiper)
	      this.swiper.slideTo(this.tab, 1000, false)
	      console.log(this.tab)
	    },
	    methods:{
	    	...mapMutations(['changeTab']),
	    },
	    watch:{
	    	swiperIndex(){
	    		console.log('变化了')
	    		console.log(this.swiperIndex)
	    		 this.changeTab(this.swiperIndex)
	    	},
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







