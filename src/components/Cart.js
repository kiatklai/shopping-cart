
import { MyCartContext } from '../management/context'
import CartItem from './CartItem'

const Cart=()=>{
  const {cart} = MyCartContext()
  return(
    <div className="shopping-cart">
      <div className="title">カート内の商品</div>
      {cart.map((data)=>{
        return <CartItem key={data.id} {...data}/>
      })}
      <div className="footer">合計 5 円</div>
    </div>
  )
}

export default Cart