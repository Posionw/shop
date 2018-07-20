<template>
	<div>
		<router-link to="/Site">
			<div class="site">
				<div class="site_t">
					<span class="site_t_l">{{address.consignee}}</span>
					<span class="site_t_r">{{address.phone}}</span>
				</div>
				<div class="site_b">
					{{address.area}} {{address.address}}
				</div>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name:'submit-site',
		props:{
			address:''
		}

	}
</script>
<style lang="stylus" scoped>
	.site
		min-height:1rem;
		width: 100%;
		background: url('../../assets/images/dizhi@2x.png') no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		margin-top: 0.4rem;
		box-sizing: border-box;
		.site_t
			height:0.25rem;
			line-height: 0.25rem;
			width: 3.38rem;
			// background: red;
			margin: 0 auto;
			margin-top: 0.192rem;
			color: #999;
			.site_t_l
				margin-right:0.1rem;
				font-size: 0.18rem;
			.site_t_r
				font-size: 0.18rem;
		.site_b
			width: 3.18rem;
			color: #333;
			font-size: 0.12rem;
			margin: 0 auto;
			margin-top: 0.12rem;
			padding-bottom: 0.2rem;
			float: left;
			margin-left: 0.2rem;


</style>







