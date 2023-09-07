const reducer=(state,action)=>{
  if(action.type==="REMOVE_ITEM"){
    return{
      ...state,
      cart:state.cart.filter((item)=>item.id !== action.payload)
    }
  }
  if(action.type==="TOGGLE_QUANTITY"){
    let newCart=state.cart.map((item)=>{
      if(item.id === action.payload.id ){
        if(action.payload.type === "increment"){
          return{
            ...item,
            quantity:item.quantity<5 ?item.quantity+1 : item.quantity
          }
        }
      if(action.payload.type === "decrement"){
        return{
          ...item,
          quantity:item.quantity-1
        }
      }
      }
      return item
    }).filter((item)=>item.quantity !== 0)
    return{
      ...state,cart:newCart
    }
  }
}

export default reducer