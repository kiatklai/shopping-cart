
import { MyCartContext } from '../management/context'
import CartItem from './CartItem'

const Cart=()=>{
  const {cart,total,formatNumber} = MyCartContext()
  if(cart.length === 0){
    return(
      <div className="shopping-cart">
        <div className='empty'>There is no product in Cart</div>
      </div>
    )
  }else{
    return(
      <div className="shopping-cart">
        <div className="title">カート内の商品</div>
        {cart.map((data)=>{
          return <CartItem key={data.id} {...data}/>
        })}
        <div className="footer">合計 {formatNumber(total)} 円</div>
      </div>
    )
  }
}

export default Cart