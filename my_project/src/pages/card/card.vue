<template>
	<ul>
		<template v-if="list.length!=0">
		<li class="card_k" v-for="(item,index) in list" :key="index">
			<div class="card_l">
				<div class="card_l_t">¥{{item.couponMoney}}</div>
				<div class="card_l_b">{{item.rules}}}</div>
				<div class="card_l_date">使用期限:{{item.startTime}}-{{item.endTime}}</div>
			</div>
			<div class="card_r">
				 <div class="card_r_t">快快选购吧</div>
				<!--<div class="card_r_c">2018年3月15号</div> -->
				<router-link to="Index">
					<div class="card_r_b">立即使用</div>
				</router-link>
			</div>
		</li>
		</template>
		<template v-else>
			<div class="moren">
				<img src="@/assets/images/wu.png" alt="">
			</div>
		</template>
	</ul>
</template>
<script>
	import { Indicator } from 'mint-ui';
	export default {
		name:'card-card',
		props:{
			list:''
		}
	}
</script>
<style lang="stylus" scoped>
ul
	margin-top:0.4rem;
	box-sizing: border-box;
	overflow:hidden;
	.moren
		width:100%;
		text-align: center;
		margin-top: 1rem;
	.card_k
		height:1.16rem;
		width: 3.40rem;
		background: url('../../../static/youhuiquan@2x.png') no-repeat;
		background-size: 3.40rem 1.16rem;
		margin: 0 auto;
		margin-top: 0.13rem;
		.card_l
			width:1.88rem;
			height:0.992rem;
			float: left;
			margin-right: 0.06rem;
			// background:pink;
			margin: 0.08rem 0 0 0.07rem;
			padding: 0 0.09rem;
			.card_l_t
				height:0.33rem;
				width: 100%;
				// background:yellow;
				margin-top: 0.14rem;
				color: #fff;
				font-size: 0.24rem;
				display: -webkit-box;
				overflow: hidden;
			    white-space: normal !important;
			    text-overflow: ellipsis;
			    word-wrap: break-word;
			    -webkit-line-clamp: 1;
			    -webkit-box-orient: vertical;
			.card_l_b
				font-size: 0.12rem;
				height:0.18rem;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				word-wrap: break-word;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				// background: red;
				margin-top: 0.094rem;
				line-height: 0.18rem;
				color: #fff;
				white-space: normal !important;
			.card_l_date
				height:0.18rem;
				width: 100%;
				// background:pink;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				word-wrap: break-word;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				// margin-top: 0.094rem;
				line-height: 0.18rem;
				color: #fff;
				white-space: normal !important;
		.card_r
			height:0.992rem;
			width: 1.14rem;
			// background: pink;
			float: right;
			margin: 0.08rem 0.07rem 0 0;
			.card_r_t
				font-size:0.12rem;
				color: #333;
				width: 100%;
				text-align: center;
				margin-top: 0.204rem;
				// background: red;
			.card_r_c
				height:0.2rem;
				line-height: 0.2rem;
				font-size: 0.14rem;
				color: #333;
				margin-top: 0.066rem;
				text-align: center;
				// background: green;
			.card_r_b
				height:0.21rem;
				width: 0.651rem;
				line-height: 0.21rem;
				text-align: center;
				color: #fff;
				background: #E31313;
				margin: 0 auto;
				margin-top: 0.15rem;

</style>















