import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import QuantityBtn from './QuantityBtn';
import Title from './Title';
export default function Checkout() {
  let {cartItems}=useContext(CartContext)

  let cartEmpty = cartItems.length<=0 ? true : false;
  let grandTotal = cartItems.reduce((total, product)=>{
      return total += total+product.price*product.quantity
  },0)
  const freeShipping = 99;
  return ( 
    <div>
      <Title mainTitle="你的購物車"/>
      {
        !cartEmpty&&
        <div>
          <div id="cartSection">
            {cartItems.map(product=>(
              <div key={product.id}>
                {product.name}<br/>
                {product.price}<br/>
                  {product.image}<br/>
                {product.description}<br/>
                {product.quantity}<br/>
                <QuantityBtn Info={product}/>
              </div>
            ))}
          </div>
          <div id="checkOutSection">
            <div>全部貨品總共</div>
            <div>{grandTotal}元</div>
            {
              grandTotal >= freeShipping ?
              <div>我們免費送貨</div>:
              <div>滿${freeShipping}免費送貨<br/>
              還差${freeShipping-grandTotal}</div>
            }
          </div>
        </div>
      }
      {
        cartEmpty&&
        <div>
          <div id="cartSection">
            現在沒有任何商品<br/>
            <Link to="/">立即看看</Link>
          </div>
          <div id="checkOutSection">
            {}
          </div>
        </div>

      }
    </div>
  )
}
