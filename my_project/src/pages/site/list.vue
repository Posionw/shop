<template>
	<div>
		<mt-cell-swipe
		  :right="[
		    {
		      content: 'Delete',
		      style: { background: 'red', color: '#fff' },
		      handler: () => deleteSection(item)
		    }
		  ]"
		   v-for="(item,index) in 2"
		   :key="index"
		>
			<div class="list_li">
				<div class="list_li_name">
					<span class="name">asdfas</span>
					<span class="number">13823231212</span>
				</div>
				<div class="list_li_site">北京经济技术开发区 荣华中路5号员依据国际</div>
				<div class="list_li_compile">
					<input class="select" type="radio" id="one" value="1" name="a" v-model="picked">
					<span class="moren">默认地址</span>
						<router-link to="Changesite">
							<div class="bianji">
								<img src="@/assets/images/bj@2x.png" alt="">
								<div class="bianji_r">编辑</div>
							</div>
						</router-link>
				</div>
			</div>
		</mt-cell-swipe>
	</div>
</template>
<script>
	import { CellSwipe } from 'mint-ui';
	export default{
		name:'site-list',
		components:{
			CellSwipe
		},
		data(){
			return{
				picked: 1,
			}
		}
	}
</script>
<style lang="stylus" scoped>
.mint-cell
	margin-bottom:10px;
	.list_li
		padding: 0.18rem;
		width: 3.39rem;
		background:#fff;
		color:#3792EB;
		// margin-bottom: 0.1rem;
		.list_li_name
			height:0.14rem;
			line-height: 0.14rem;
			// background:red;
			margin-bottom: 0.1rem;
			.name
				margin-right:0.1rem;
		.list_li_site
			margin-bottom:0.1rem;
			color:#000;
		.list_li_compile
			height:0.24rem;
			width: 100%;
			// background:yellow;
			.select
				margin-top:0.05rem;
				float: left;
			.moren
				line-height:0.24rem;
				color:#000;
				float: left;
				margin-left: 0.01rem;
			.bianji
				height:0.24rem;
				width:0.49rem;
				line-height: 0.24rem;
				// background:red;
				float: right;
				img
					height:0.174rem;
					width:0.174rem;
					margin-top: 0.03rem;
					float: left;
				.bianji_r
					height:0.24rem;
					line-height: 0.24rem;
					float:left;
					color:#000;
					margin-left: 0.05rem;
</style>














