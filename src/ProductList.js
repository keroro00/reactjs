import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import QuantityBtn from './QuantityBtn';
import Title from './Title';
import './index.css';

export default function ProductList() {
  let [productList, setProductList] = useState([]);


  useEffect(
    ()=>{fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    .then(response => response.json())
      .then(data => setProductList(data))
    }
  ,[])  

  return (
    <div>
        <Title mainTitle="請選擇要購買的水果"/>


        <img src={process.env.PUBLIC_URL+'/img/think.gif'} alt="Win"/>
        <div >
          {
            productList.map(product=>(
              <div key={product.id} class="Product"> 
                {product.name}<br/>
                {product.price}<br/>
                <Link to={/Product/+product.id}>
                  {product.image}
                </Link>
                <br/>
                {product.description}<br/>
                <QuantityBtn Info={product}/>
              </div> 
            ))
          }
        </div>
    </div>
  )
}
