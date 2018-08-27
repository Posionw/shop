<template>
	<div>
		<user-head
			:userPic="userPic"
			:userName="userName"></user-head>
		<user-list></user-list>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
	import userHead from './head.vue'
	import userList from './list.vue'
	export default{
		name:'user',
		components:{
			userHead,
			userList
		},
		data(){
			return {
				userPic:'',
				userName:''
			}
		},
		computed:{
			 ...mapState(['userId']),
		},
		methods:{
			...mapMutations(['changeTabbar']),
			getIndexData(){ 													//获取收获地址数据
		  		axios.get('/ds-app/user/getUserInfo?userId='+this.userId)
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		this.userPic = res.data.data.userImgUrl
		  		this.userName = res.data.data.userNickName
		  	},
		  	handleGetDataErr(res){
		  		console.log(res)
		  	}
		},
		mounted(){
			this.getIndexData()
			this.changeTabbar('tab4')
		}
	}
</script>
<style lang="stylus" scoped>
</style>