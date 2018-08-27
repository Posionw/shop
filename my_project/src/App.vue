<template>
	<div class="app">
    <keep-alive>
    	<router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>

</template>
<script>
export default {
  name: 'App',
  components:{
  },

}
</script>

<style>
	#app{
		height: 100%;
	}
  /*.tan1{
      z-index: 999999;
      width: 1.2rem;
    }*/

</style>
