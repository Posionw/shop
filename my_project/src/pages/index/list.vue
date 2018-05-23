<template>
	<div class="product_list">

		<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide>
	    	<div class="list_li">
	    		I'm Slide 1
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class="list_li">
	    		I'm Slide 2
	    	</div>
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
	export default{
		name:'index-list',
		name: 'carrousel',
	    data() {
	      return {
	      	swiperIndex:0,
	        swiperOption: {
	          loop:true,
	          pagination: {
	            el: '.swiper-pagination'
	          },
	          autoplay: true,
	          on:{
			    touchEnd: function(event){
			      console.log(this.activeIndex)
			      this.swiperIndex=this.activeIndex
			      console.log(this.swiperIndex)
			    },
			  },
	          onSlideChangeEnd: swiper => {  
            		this.page = swiper.realIndex+1;
               }
	        },
	      }
	    },
	    computed: {
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    },
	    mounted() {
	      // current swiper instance
	      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	      console.log('this is current swiper instance object', this.swiper)
	      this.swiper.slideTo(7, 1000, false)	      
	    },
	    watch:{
	    	swiperIndex(val, oldVal){
	    		console.log('变化了')
	    		console.log("a: "+val, oldVal);
	    	}
	    }
	}
</script>
<style lang="stylus" scoped>
	.product_list
		flex:1;
		width: 100%;
		background:pink;
		margin-top: 0.46rem;
		.swiper-slide
			height:5.7rem;
			.list_li
				height:100%;
				width: 100%;
				background:yellowgreen;
</style>







