<template>
	<div>
		<site-list></site-list>
		<site-addsite></site-addsite>
	</div>
</template>
<script>
	import siteAddsite from './addsite.vue'
	import siteList from './list.vue'
	export default {
		name:'site',
		components:{
			siteList,
			siteAddsite
		}
	}
</script>
<style lang="stylus" scoped>

</style>