<template>
	<div>
		<myorder-header></myorder-header>
		<myorder-list></myorder-list>
	</div>
</template>
<script>
	import MyorderHeader from './header.vue'
	import MyorderList from './list.vue'
	export default{
		name:'myorder',
		components:{
			MyorderHeader,
			MyorderList
		}
	}
</script>
<style lang="stylus" scoped>

</style>