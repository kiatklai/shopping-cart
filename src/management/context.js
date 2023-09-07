import {createContext,useReducer,useContext} from "react"
import CartData from "../data/CartData"
import reducer from "./reducer"

const initState={
  cart:CartData,
  total:0,
  amount:0
}
const CartContext = createContext()

export const MyCartContext=()=>{
  return useContext(CartContext)
}

const CartProvider=({children})=>{
  const [state,dispatch] = useReducer(reducer,initState)

  const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM",payload:id})
  }

  const toggleQuantity=(id,type)=>{
    if(type == "increment"){
      console.log("add",id)
    }else{
      console.log("reduce ",id)
    }
  }
  return(
    <CartContext.Provider value={{...state,removeItem,toggleQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartContext,CartProvider}