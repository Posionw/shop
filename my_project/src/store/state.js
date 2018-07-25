
export default {
	tab:0,													//首页index
	id:'',
	// num:0,
	selectedAl:true,										//全选默认为true
	added:JSON.parse(localStorage.getItem("car")) || [],	//购物车值
	// added2:JSON.parse(localStorage.getItem("car")) || [],
	orderIndex:'',											//订单tab
	tabbarIndex:localStorage.tabbarIndex || 'tab1',			//tabbar数据
	userId:localStorage.userId||'',							//用户id
	cid:localStorage.cid||'',								//房东id

}