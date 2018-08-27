
export default {
	tab:0,													//首页index
	id:'',
	selectedAl:true,										//全选默认为true
	added:JSON.parse(localStorage.getItem("car")) || [],	//购物车值
	orderIndex:'',											//订单tab
	tabbarIndex:localStorage.tabbarIndex || 'tab1',			//tabbar数据
	userId:localStorage.userId||'',							//用户id
	cid:localStorage.cid||'',								//房东id
	oid:localStorage.oid||'',								//判断安卓还收ios 0安卓 1ios
	recruitScrollY: 0,										//检测滚动高度
}