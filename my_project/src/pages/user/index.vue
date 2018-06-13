<template>
	<div>
		<user-head></user-head>
		<user-list></user-list>
	</div>
</template>
<script>
	import userHead from './head.vue'
	import userList from './list.vue'
	export default{
		name:'user',
		components:{
			userHead,
			userList
		}
	}
</script>
<style lang="stylus" scoped>
</style>