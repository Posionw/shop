export default {
    // 记录用户id
    changeUserId(state,id){
      state.userId = id
      localStorage.userId = id
    },
    // 记录房东id
    changeCid(state,id){
      state.cid = id
      localStorage.cid = id
    },
    // 记录点击下标
	  changeTab(state,tab){
  		state.tab= tab
  	},
    // 记录id
    changId(state,id){
      state.id = id
      console.log(id)
    },
    // 记录tabbar
    changeTabbar(state,id){
      state.tabbarIndex = id
      localStorage.tabbarIndex = id
    },
    // 改变订单页index
    changeOrderTab(state,index){
      state.orderIndex=index
    },
    // 添加购物车
    add(state,goods){

      // 新写法》》》》》》》》》》》》》》》
      let shopId = state.added.find(n=>n.goods.landlordId == goods.landlordId)
      console.log(shopId)
      if(!shopId){
        state.added.push({
          goods
        })
      }else{
        let record =shopId.goods.sp.find(n=>n.id==goods.sp[0].id&&n.size==goods.sp[0].size&&n.picked == goods.sp[0].picked)
        console.log(record)
        if(!record){
          shopId.goods.sp.push(
            goods.sp[0]
          )
        }else{
          record.num+=goods.sp[0].num
        }
      }

      var data = JSON.stringify(state.added)
      localStorage.setItem("car", data);
      //新写法结束》》》》》》》》》》》》》》》
    },
    // 删除当前项
    del(state,product){
      console.log('删除*******************')
      state.added.forEach((n,i)=>{
        if(n.goods.landlordId == product.a){
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
              console.log('*********')
              // m.num+=1
              n.goods.sp.splice(j,1)
              console.log(n.goods.sp)
              if(n.goods.sp.length==0){
                state.added.splice(i,1)
              }
            }
          })
        }
      })
      var data = JSON.stringify(state.added)
      localStorage.setItem("car", data);
    },
    // 点击加号
    carAdd(state,product){
      console.log(product)
      state.added.forEach((n,i)=>{
        if(n.goods.landlordId == product.a){
          console.log('111122323323')
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
              console.log('*********')
              m.num+=1
            }
          })
        }
      })
      var data = JSON.stringify(state.added)
      localStorage.setItem("car", data);
    },
    // 点击减号
    carJian(state,product){
       state.added.forEach((n,i)=>{
        if(n.goods.landlordId == product.a){
          console.log('111122323323')
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
              console.log('*********')
              m.num-=1
              if(m.num<=1){
                m.num=1
              }
            }
          })
        }
      })
      var data = JSON.stringify(state.added)
      localStorage.setItem("car", data);
    },
    // 点击选择
    selectList(state,product) {
      state.added.forEach((n,i)=>{
        if(n.goods.landlordId == product.a){
          console.log(n.goods.sp)
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
              console.log('*********')
              m.selected=!m.selected
            }
          })
        }
      })
     var data = JSON.stringify(state.added)
      localStorage.setItem("car", data);
    },
    // 全选事件
    selectAll(state){
      let selected = state.selectedAl;
      selected = !state.selectedAl;
      state.selectedAl = !state.selectedAl;
      state.added.forEach((n,i)=>{
        n.goods.sp.forEach((m,j)=>{
          m.selected = selected
        })
      })

      var data = JSON.stringify(state.added)
      localStorage.setItem("car", data);
    }
}











