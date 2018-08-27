<template>
		<ul class="homeNav" ref="homeNav">
	      	<li v-for="(item,index) in navbar"
	      		:class="{active:index == tabIndex}"
	      		@click="selectSort(item.goodsTypeId,index)"
	        	:key="index" class="navBarLi">
	        	{{item.goodsTypeName}}
	      	</li>
	   </ul>
</template>
<script>
	import axios from 'axios'
	import { mapState,mapMutations } from 'vuex'
	export default{
		name:'index-header',
		data() {
	      return {
	      	tabIndex:'0',//当前下标
	      	s3_width:0,
	      	scroll_left:0,
	        navbar: [],
	      }
	    },
	    computed:{
		    ...mapState({
		      tab:'tab',
		      id:'id',
		      cid:'cid'
		    }),
		    cId:function(){
				return this.$route.query.cid
			}
		  },
	    methods:{
	    	...mapMutations(['changeTab','changId']),
	    	selectSort(id,index){
	    		this.tabIndex=index;
	    		var crash_current=index
	    		var s = 0;
	    		if (crash_current != 0 && crash_current != 1 && crash_current != 2) {
			      s = parseInt(crash_current - 1) * this.s3_width;
			    }
			    this.scroll_left=s
			    this.$refs.homeNav.scrollTo(s, this.$refs.homeNav.scrollTop);
			    this.changeTab(index)
			    this.changId(id)
	    	},
	    	getIndexData(){
	    		console.log('**********************'+this.cid)
	    		axios.get('/ds-app/home/goodsType?landlordId='+this.cId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		this.navbar=res.data.data;
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
	    },
	    mounted(){
	    	this.s3_width=document.documentElement.clientWidth/8;
	    	this.getIndexData()
	    	this.tabIndex=this.tab
	    },
	     watch:{
	     	tab(val,oldVal){
	    		this.selectSort(this.id,this.tab)
	    		this.tabIndex=this.tab
	    	},
	     },
	}
</script>
<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl"
	.homeNav {
	    width: 100%;
	    overflow: hidden;
	    overflow-x: auto;
	    text-align: center;
	    position: fixed;
	    top: 0.46rem;
	    left: 0;
	    font-size: 0;
	    background: #f4f5f6;
	    font-family: '微软雅黑';
	    white-space: nowrap;
	    z-index: 999;
	    background:#fff;
	    height:0.46rem;
	    transition: all 5s ease;
	    .navBarLi {
	        display: inline-block;
	        height: 0.46rem;
	        line-height: 0.46rem;
	        width: 0.68rem;
	        font-size: 0.16rem;
	        a {
	            color: #000;
	        }
	        .router-link-active {
	            color: #d43d3d;
	            font-size: 0.17rem;
	            font-weight: bold;
	        }
	    }
	    .active{
	    	height:0.44rem;
	    	border-bottom:0.02rem solid $fontColor;
	    	color:$fontColor;
	    }
}
::-webkit-scrollbar {
    display: none;
}
</style>











