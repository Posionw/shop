export default {
	changeTab(state,tab){
  		// localStorage.city = city
  		state.tab= tab
  		console.log(tab)
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
    add(state,id){
      let record = state.added.find(n=>n.id == id);
        if(!record){
          state.added.push({
             id,
             num:1
          })
        }else{
          record.num++
        }
        console.log(state.added)
    }
}