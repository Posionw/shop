export default{
	orderIndexGet(state){
		return state.orderIndex
	},
	// 计算总价
	totalPrice:(state) => {
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
		var arr=[]
		var a;
		state.added.forEach((n,i)=>{
			n.goods.sp.forEach((m,j)=>{
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
		var arr = []
		state.added.forEach((n,i) => {
			n.goods.sp.forEach((m,j)=>{
				if(m.selected==true){
					if(arr.length == 0){
						arr.push({
							goods:{
								landlordId:n.goods.landlordId,
								shopName:n.goods.shopName,
								sp:[
									m
								]
							}
						})
					}else{
						console.log(arr)
						var a = 0;
						arr.forEach((o,l)=>{
							if(o.goods.landlordId == n.goods.landlordId){
								a++
								o.goods.sp.push(m)
							}

						})
						if(a==0){
							arr.push({
								goods:{
									landlordId:n.goods.landlordId,
									shopName:n.goods.shopName,
									sp:[
										m
									]
								}
							})
						}
					}
				}
			})
		})

		return arr
	},
	// 计算高度
	recruitScrollY:state => state.recruitScrollY
}








