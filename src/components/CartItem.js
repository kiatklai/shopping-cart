const CartItem=({id,name,image_url,price,quantity})=>{
  return(
    <div className="item">
      <div className="product_image">
        <img src={image_url} alt=""/>
      </div>
      <div className="description">
        <span>{name}</span>
        <span>値段 {price} 円</span>
      </div>
    </div>
  )
}

export default CartItem