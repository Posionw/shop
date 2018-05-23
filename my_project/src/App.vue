<template>
	<div>
    	<router-view/>
    	<z-tabbar></z-tabbar>
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

</style>
