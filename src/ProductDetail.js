import React from 'react';
import Title from './Title';
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import productList from './ProductList';
import QuantityBtn from './QuantityBtn';
export default function ProductDetail() {
  let params = useParams();
  let [ProductDetail,setProductDetail] = useState([]);
  useEffect(
    ()=>{fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
    .then(response => response.json())
      .then(data => {
        let productInfo = data.find((element)=>{
          return element.id === parseInt(params.id)
        })
        setProductDetail(productInfo)
      })
    }
  ,[])  
  return (
    <div>
      <Title mainTitle={ProductDetail.name+"產品資料"}/>
      {ProductDetail.id}<br/>
      {ProductDetail.price}<br/>
      {ProductDetail.description}<br/>
      <QuantityBtn Info={ProductDetail}/>
    </div>
  )
}
