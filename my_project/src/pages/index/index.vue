<template>
	<div class="index">
		<index-header></index-header>
		<index-list></index-list>
	</div>
</template>
<script>
	import IndexHeader from './header.vue'
	import IndexList from './list.vue'
	export default{
		name: 'index',
		components:{
			IndexHeader,
			IndexList
		}
	}
</script>
<style>
	.index{
		height: 6.18rem;
		display: flex;
		flex-direction:row;
	}
</style>
