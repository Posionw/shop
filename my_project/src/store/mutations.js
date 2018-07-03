export default {
    // 记录点击下标
	  changeTab(state,tab){
  		state.tab= tab
  		console.log(tab)
  	},
    // 记录id
    changId(state,id){
      state.id = id
      console.log(id)
    },
    // 改变订单页index
    changeOrderTab(state,index){
      state.orderIndex=index
      console.log(index)
    },
  	addNum(state,num){
  		state.num +=1
  	},
  	jianNum(state,num){
  		state.num -=1
  		if(state.num<=0){
  			state.num=0
  		}
  	},
    // 添加购物车
    add(state,goods){
      console.log(goods)
      let record = state.added.find(n=>n.goods.id == goods.id&&n.goods.size == goods.size && n.goods.picked == goods.picked);
      console.log(record)
        if(!record){
          state.added.push({
             goods
          })
        }else{
          record.goods.num+=goods.num
        }
        console.log(state.added)
    },
    // 删除当前项
    del(state,product){
      console.log(product)
      state.added.forEach((n,i)=>{
          if(n.goods.id == product.goods.id&&n.goods.size == product.goods.size&& n.goods.picked == product.goods.picked){
              //console.info(11,n)
              //找到index的下标值
              state.added.splice(i,1)
          }
      })
    },
    // 点击加号
    carAdd(state,product){
      state.added.forEach((n,i)=>{
          if(n.goods.id == product.goods.id&&n.goods.size == product.goods.size&& n.goods.picked == product.goods.picked){
              //console.info(11,n)
              //找到index的下标值
              n.goods.num+=1
          }
      })
    },
    // 点击减号
    carJian(state,product){
      state.added.forEach((n,i)=>{
          if(n.goods.id == product.goods.id&&n.goods.size == product.goods.size&& n.goods.picked == product.goods.picked){
              n.goods.num-=1
              if(n.goods.num<=1){
                n.goods.num=1
                // state.added.splice(i,1)
              }
          }
      })
    }
}











