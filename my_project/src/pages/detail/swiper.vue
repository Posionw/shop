<template>
	<div class="swiper_k">
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide v-for="(item,index) in swiper" :key="index">
		    	<div class="banner">
		    		<img :src="item" alt="">
		    	</div>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>
<script>
	export default {
    name:'detail-swiper',
    props:{
    	swiper:'',
    	list:''
    },
    data() {
      return {
        swiperOption: {
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true
        }
      }
    },
    mounted(){
    	// console.log(this.swiper)
    },
    watch:{
      swiper(){
        // console.log(this.swiper)
      }
    }
  }
</script>
<style lang="stylus" scoped>
.swiper_k
  height:3.8rem;
	.banner
		height:3.8rem;
		width: 3.75rem;
		img
			height:3.8rem;
			width: 3.75rem;
</style>