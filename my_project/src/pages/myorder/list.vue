<template>
	<div>
		<mt-tab-container class="list" v-model="active" :swipeable="swipeable">
		  <mt-tab-container-item id="0">
		   	<div>1234</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="1">
		    <div>5678</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <div>78910</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <div>1012312</div>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
	import {TabContainer, TabContainerItem} from 'mint-ui';
	import { mapState,mapMutations } from 'vuex';
	export default{
		name:'myorder-list',
		components:{
			TabContainer,
			TabContainerItem
		},
		data(){
			return{
				active:'0',
				swipeable:true
			}
		},
		computed:{
			...mapState(['orderIndex'])
		},
		watch:{
			orderIndex(){
				this.active=this.orderIndex
			}
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>