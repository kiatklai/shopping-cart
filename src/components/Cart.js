import CartData from '../data/CartData'
import CartItem from './CartItem'

const Cart=()=>{
  return(
    <div className="shopping-cart">
      <div className="title">カート内の商品</div>
      {CartData.map((data)=>{
        return <CartItem key={data.id}/>
      })}
      <div className="footer">合計 5 円</div>
    </div>
  )
}

export default Cart