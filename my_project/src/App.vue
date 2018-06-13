<template>
	<div class="app">
    	<router-view/>
    	<!-- <z-tabbar></z-tabbar> -->
    </div>

</template>
<script>
import zTabbar from '@/components/tabbar/z-tabber.vue'
export default {
  name: 'App',
  components:{
	zTabbar
  }
}
</script>

<style>
	#app{
		height: 100%;
	}
  .tan1{
    z-index: 999999;
    width: 1.2rem;
  }
</style>
