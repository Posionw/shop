<template>
	<div class="page">
		<z-header>我的地址</z-header>
		<div class="input_box">
			<div class="input_l">收货人</div>
			<input v-model="name" placeholder="请填写收货人" type="text" />
		</div>
		<div class="input_box">
			<div class="input_l">联系电话</div>
			<input v-model="phone" placeholder="请填写联系电话" type="text" />
		</div>
		<div class="input_box">
			<div class="input_l">所在地区</div>
			<div class="site" @click="handleClick">
				<p>{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p>
			</div>
		</div>
		<div class="input_box">
			<div class="input_l">详细地址</div>
			<input v-model="xsite" placeholder="请填写详细地址" type="text" />
		</div>
		<div class="button" @click="handleClickSave">保存</div>
		<mt-popup
		  v-model="popupVisible"
		  position="bottom">
		  <div class="select_site">
		  	<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
		  </div>
		</mt-popup>
	</div>
</template>
<script>
	import axios from 'axios'
	import { mapState } from 'vuex';
	import zHeader from '../../components/header/index.vue'
	import qs from 'qs';
	import { Popup,Picker,Toast } from 'mint-ui';
	import myaddress from './myaddress.json';
	export default{
		name:'changesite',
		components:{
			Popup,
			Picker,
			zHeader
		},
		data(){
			return {
				id:'',
				name:'',
				phone:'',
				site:'',
				xsite:'',
				popupVisible:false,
				myAddressSlots: [
                    {
                        flex: 1,
                        defaultIndex: 1,
                        values: Object.keys(myaddress),    //省份数组
                        className: 'slot1',
                        textAlign: 'center'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: [],
                        className: 'slot3',
                        textAlign: 'center'
                    },
                    {
                        divider: true,
                        content: '-',
                        className: 'slot4'
                    },
                    {
                        flex: 1,
                        values: [],
                        className: 'slot5',
                        textAlign: 'center'
                    }
                ],
                myAddressProvince:'省',
                myAddressCity:'市',
                myAddresscounty:'区/县',
            }

		},
		computed:{
			...mapState(['userId']),
		},
		methods:{
			handleClick(){
				this.popupVisible=true
			},
			isPoneAvailable(phone){ //判断是否为正确的手机号
				var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
	            if (!myreg.test(phone)) {
	                return false;
	            } else {
	                return true;
	            }

			},
			handleClickSave(){	//点击保存按钮
				if(this.name!=''&& this.phone!='' && this.xsite!='' ){
					if(this.isPoneAvailable(this.phone)!=false){
						this.getIndexData()
					}else{
						alert('请输入正确的电话号')
					}
				}else{
					alert('填写完整信息')
				}
			},
			onMyAddressChange(picker, values) {
              if(myaddress[values[0]]){    //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
                    picker.setSlotValues(1,Object.keys(myaddress[values[0]])); //  Object.keys()会返回一个数组，当前省的数组
                    picker.setSlotValues(2,myaddress[values[0]][values[1]]); //  区/县数据就是一个数组
                    this.myAddressProvince = values[0];
                    this.myAddressCity = values[1];
                    this.myAddresscounty = values[2];
                }
            },
            getIndexData(){
	    		axios.post('/ds-app/address/createAddress',qs.stringify({
	    				consignee:this.name,
	    				phone:this.phone,
	    				area:this.myAddressProvince+this.myAddressCity+this.myAddresscounty,
	    				address:this.xsite,
	    				userId:this.userId,
	    				addressId:this.id
	    		}))
		  		  .then(this.handleGetDataSucc.bind(this))
		  		  .catch(this.handleGetDataErr.bind(this))
		  	},
		  	handleGetDataSucc(res){
		  		console.log(res)
		  		Toast({
					  message: res.data.msg,
					  className:'tan1',
					  duration: 1000,
					  iconClass: 'iconfont icon-right'
				});
		  	},
		  	handleGetDataErr(){
		  		console.log("失败了")
		  	}
		},
		mounted(){
			this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
		　　　　　　this.myAddressSlots[0].defaultIndex = 0
		　　　　　　// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
		　　　　　　//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
		　　　　});
			if(this.$route.params.id=='*'){
				this.id=''
			}else{
				this.id=this.$route.params.id
			}
			console.log(this.id)
		}
	}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl"
.page
	margin-top:0.4rem;
	height:100%;
	background:#fff;
	box-sizing: border-box;
	.button
		position:fixed;
		bottom: 0;
		height: 0.5rem;
		width: 100%;
		background:$bgColor;
		color:#fff;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.14rem;
	.input_box
		height:0.66rem;
		width: 3.39rem;
		margin: 0 0.18rem;
		// background: pink;
		border-bottom: 0.01rem solid #C9C9C9;
		.input_l
			width:0.8rem;
			line-height:0.66rem;
			float: left;
			// background: red;
			font-size: 0.15rem;
			color:#333;
		input
			width: 2.5rem;
			height: 0.62rem;
			font-size: 0.15rem;
			color: #999;
		.site
			p
				height:0.66rem;
				line-height: 0.66rem;
				font-size: 0.15rem;
				color:#333;
	.mint-popup
		.select_site
			height:2rem;
			width: 3.75rem;
</style>














