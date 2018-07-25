export default {
	// 点击selected
	selected(context,index){
		context.commit("selectList",index)
    },
    // 点击全选
    selectedAll(context){
    	context.commit("selectAll")
    },
    // 修改用户id
    changUser(context,id){
    	context.commit("changeUserId",id)
    },
    // 修改房东id
    changCi(context,id){
        context.commit("changeCid",id)
    },
    //提交订单
    zSubmit(context){
        context.commit("cleanTrue")
    }
}