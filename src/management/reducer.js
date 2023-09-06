const reducer=(state,action)=>{
  if(action.type==="REMOVE_ITEM"){
    return{
      ...state,
      cart:state.cart.filter((item)=>item.id !== action.payload)
    }
  }
}

export default reducer