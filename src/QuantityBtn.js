import{ useState, useContext } from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({Info}) {
    const {cartItems,setCartItems} = useContext(CartContext)

    //check prduct in cart or not
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === Info.id
    })
    //find index
    //cart found the product => back to index
    //if not => return -1

    let [numInCart,setNumInCart] = useState(
        (productIndexInCart===-1) ? 0 : cartItems[productIndexInCart].quantity
    )
    const handleAdd =() =>{
       if (productIndexInCart===-1)
        {
            //not in cart, then add new object
            setCartItems(
                [
                {
                    id: Info.id,
                    name: Info.name,
                    image:Info.image,
                    price:Info.price,
                    description:Info.description,
                    quantity:1
                }, ...cartItems]
            )
        }
        else
        {
            //just edit quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }
        setNumInCart(numInCart+1)
    }
    const handleSub =() =>{
        
        if(cartItems[productIndexInCart].quantity===1){
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else{
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }
        setNumInCart(numInCart-1)
    }
  return (
    <div>
        {
        (numInCart===0) ?
        <div onClick={handleAdd}>加入購物車</div>:
        <div>
            <span onClick={handleSub}>-</span>
            {numInCart}件
            <span onClick={handleAdd}>+</span>
        </div>
        }
    </div>
  )
}
