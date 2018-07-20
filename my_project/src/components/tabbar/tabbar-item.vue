<template>
	<a class="m-tabbar-item" :class="{'is-active':isActive}" @click="handelclick(id)" >
		<span class="m-tabbar-item-icon" v-show="!isActive">
			<slot name="icon-normal"></slot>
		</span>
		<span class="m-tabbar-item-icon" v-show="isActive">
			<slot name="icon-active"></slot>
		</span>
		<span class="m-tabbar-item-text">
			<slot></slot>
		</span>
	</a>
</template>
<script>
	import { mapState,mapMutations } from 'vuex'
	export default{
		name:'tabbar-item',
		props: ['id'],
		data(){
			return{
				idIndex:'tab1'
			}
		},
        computed: {
        	...mapState(['tabbarIndex']),
           isActive(){
               if(this.tabbarIndex===this.id){
                   return true;
               }
           }
        },
        methods:{
        	...mapMutations(['changeTabbar']),
        	handelclick(a){
        		this.changeTabbar(a)
        	}
        }
	}
	// @click="$parent.$parent.$emit('input',id)"
</script>
<style lang="stylus" scoped>
	.m-tabbar-item{
	    flex: 1;
	    text-align: center;
	    .m-tabbar-item-icon{
	        display: block;
	        padding-top: 0.04rem;
	        img{
	            width: 0.24rem;
	            height: 0.24rem;
	        }

	    }
	    .m-tabbar-item-text{
	        display: block;
	        font-size: 0.12rem;
	        color:#949494;
	    }
	    &.is-active{
	        .m-tabbar-item-text{
	            color: #3792EB;
	        }
	    }
	}
</style>