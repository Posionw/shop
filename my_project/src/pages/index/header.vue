<template>
		<ul class="homeNav">
	        <li v-for="(item,index) in navbar"
	        	:class="{active:item.id == tabIndex}"
	        	@click="selectSort(item.id)"
	            :key="index" class="navBarLi">
		        	{{item.text}}
	        </li>
	    </ul>
</template>
<script>
	export default{
		name:'index-header',
		data() {
	      return {
	      	tabIndex:'0',
	        navbar: [{
	        		id:'0',
                    text: '推荐',
                    url: '/home/all',
                    type: '__all__'
                },
                {
                	id:'1',
                    text: '热点',
                    url: '/home/hot',
                    type: 'news_hot'
                },
                {
                	id:'2',
                    text: '社会',
                    url: '/home/society',
                    type: 'news_society'
                },
                {
                	id:'3',
                    text: '娱乐',
                    url: '/home/entertainment',
                    type: 'news_entertainment'
                },
                {
                	id:'4',
                    text: '科技',
                    url: '/home/tech',
                    type: 'news_tech'
                },
                {
                	id:'5',
                    text: '汽车',
                    url: '/home/car',
                    type: 'news_car'
                },
                {
                	id:'6',
                    text: '体育',
                    url: '/home/sports',
                    type: 'news_sports'
                },
                {
                	id:'7',
                    text: '财经',
                    url: '/home/finance',
                    type: 'news_finance'
                },
                {
                	id:'8',
                    text: '军事',
                    url: '/home/military',
                    type: 'news_military'
                },
                {
                	id:'9',
                    text: '国际',
                    url: '/home/world',
                    type: 'news_world'
                },
                {
                	id:'10',
                    text: '时尚',
                    url: '/home/fashion',
                    type: 'news_fashion'
                },
            ],
	      }
	    },
	    methods:{
	    	selectSort(id){
	    		this.tabIndex=id;
	    		console.log(id)
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











