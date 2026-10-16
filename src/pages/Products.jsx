import React from 'react'
import { useState } from 'react';
import products from '../data/products'
import ProductCard from '../components/ProductCard';

const Products = () => {

  // const [products, setProducts] = useState([])

  return (
    <>
      <div className='m-2'>Products</div>
      <div className='flex flex-wrap'>
      {products.map((product)=>{
       
       return <ProductCard 
        key={product.id} 
        value={product} />
       })} 
      </div>
      
    </>
  )
}

export default Products;