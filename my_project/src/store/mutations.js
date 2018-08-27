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
    // 记录安卓还是ios
    changeOid(state,id){
      console.log(id)
      state.oid = id
      localStorage.oid = id
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
    // 检测高度
    changeRecruitScrollY(state,recruitScrollY) {
      console.log(recruitScrollY)
      state.recruitScrollY = recruitScrollY
      // localStorage.setItem("recruitScrollY", recruitScrollY);
    },
    // 添加购物车
    add(state,goods){
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
    },
    // 删除当前项
    del(state,product){
      state.added.forEach((n,i)=>{
        if(n.goods.landlordId == product.a){
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
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
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
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
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
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
          n.goods.sp.forEach((m,j) => {
            if(m.id == product.b.id&&m.size==product.b.size&&m.picked==product.b.picked){
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
    },
    // 清购物车
    cleanTrue(state,a){

    var arr = []
    state.added.forEach((n,i) => {
      console.log(n)
      n.goods.sp.forEach((m,j)=>{
        console.log(m)
        if(m.selected==false){
          console.log(arr[0])
          // console.log(arr)
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
    state.added = arr
    var data = JSON.stringify(state.added)
    localStorage.setItem("car", data);
    }
}


      // 清空购物车
      // if(a==1){
      //    console.log(state.added)
      //   console.log('对')
      // var arr = state.added
      // arr.forEach((n,i)=>{
      //   console.log(n)
      //   n.goods.sp.forEach((m,j) => {
      //     console.log(m)
      //     if(m.selected == true){
      //       console.log('当前j'+j)
      //        n.goods.sp.splice(j,1)
      //     }
      //    //  if(n.goods.sp.length==0){
      //    //    arr.splice(i,1)
      //    // }
      //   })
      // })
      // }

      // // var data = JSON.stringify(state.added)
      // // localStorage.setItem("car", data);
      // console.log(state.added)








