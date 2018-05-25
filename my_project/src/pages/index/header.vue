<template>
		<ul class="homeNav" ref="homeNav">
      <li v-for="(item,index) in navbar"
      	:class="{active:item.id == tabIndex}"
      	@click="selectSort(item.id,index)"
          :key="index" class="navBarLi">
        	{{item.text}}
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
	      	tabIndex:'0',
	      	s3_width:0,
	      	scroll_left:0,
	        navbar: [],
	      }
	    },
	    computed:{
		    ...mapState({
		      tab:'tab'
		    })
		  },
	    methods:{
	    	...mapMutations(['changeTab']),
	    	selectSort(id,index){
	    		this.tabIndex=id;
	    		var crash_current=index
	    		var s = 0;
	    		if (crash_current != 0 && crash_current != 1 && crash_current != 2) {
			      s = parseInt(crash_current - 1) * this.s3_width;
			    }
			    this.scroll_left=s
			    this.$refs.homeNav.scrollTo(s, this.$refs.homeNav.scrollTop);
			    this.changeTab(index)
	    	},
	    	getIndexData(){
		      axios.get('/api/index.json')
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		this.navbar=res.data.navbar;
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
	    },
	    mounted(){
	    	this.s3_width=document.documentElement.clientWidth/8;
	    	this.getIndexData()
	    	console.log(this.tab)
	    },
	     watch:{
	     	tab(){
	    		this.selectSort(1,this.tab)
	    		this.tabIndex=this.tab
	    	}
	     }
	}
</script>
<style lang="stylus" scoped>
	.homeNav {
	    width: 100%;
	    overflow: hidden;
	    overflow-x: auto;
	    text-align: center;
	    position: fixed;
	    left: 0;
	    font-size: 0;
	    background: #f4f5f6;
	    font-family: '微软雅黑';
	    white-space: nowrap;
	    z-index: 999;
	    height:0.46rem;
	    transition: all 5s ease;
	    .navBarLi {
	        display: inline-block;
	        height: 0.46rem;
	        line-height: 0.46rem;
	        width: 0.68rem;
	        font-size: 16px;
	        a {
	            color: #000;
	        }
	        .router-link-active {
	            color: #d43d3d;
	            font-size: 17px;
	            font-weight: bold;
	        }
	    }
	    .active{
	    	height:0.44rem;
	    	border-bottom:0.02rem solid #3792eb;
	    	color:#3792eb;
	    }
}
::-webkit-scrollbar {
    display: none;
}
</style>











