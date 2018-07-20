export default{
	orderIndexGet(state){
		return state.orderIndex
	},
	// 计算总价
	totalPrice:(state) => {
		console.log(state.added)
		let total = 0;
		state.added.forEach((n,i)=>{
			n.goods.sp.forEach((m,j)=>{
				if(m.selected == true){
					total += m.price * m.num
				}
			})
		})
		return total;
	},
	// 计算总数量
	totalNum:(state) => {
		let znum = 0;
		state.added.forEach((n,i)=>{
			n.goods.sp.forEach((m,j)=>{
				if(m.selected == true){
					znum +=  m.num
				}
			})
		})
		return znum;
	},
	// 判断全选
	seleall:(state) => {
		console.log(state.added)
		var arr=[]
		var a;
		state.added.forEach((n,i)=>{
			console.log(n)
			n.goods.sp.forEach((m,j)=>{
				console.log(m.selected)
				arr.push(m.selected)
			})
		})
	    if(arr.indexOf(false)== -1){
	    	state.selectedAl=true
	    }else{
	    	state.selectedAl=false
	    }
	    return state.selectedAl
	},
	// 订单循环
	order:(state) => {
		var arr2 = JSON.parse(JSON.stringify(state.added)) //深拷贝数组
		arr2.forEach((o,j)=>{
			o.goods.sp.forEach((h,l)=>{
				if(h.selected==false){
					o.goods.sp.splice(l,1)
				}
			})
			if(o.goods.sp.length==0){
            	arr2.splice(j,1)
          	}
		})
		return arr2
	}
}








