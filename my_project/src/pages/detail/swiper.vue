<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for="(item,index) in list" :key="index">
		    	<div class="banner">
		    		<img src="@/assets/images/Group6@2x.png" alt="">
		    	</div>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		   <!--  <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div> -->
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
    	console.log(this.swiper)
    	// console.log(this.list)
    }
  }
</script>
<style lang="stylus" scoped>
	.banner
		height:3.8rem;
		width: 3.75rem;
		background: pink;
		img
			height:3.8rem;
			width: 3.75rem;
</style>