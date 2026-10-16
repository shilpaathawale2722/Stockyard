import React from 'react'
import { useParams } from 'react-router'
import products from '../data/products'

const ProductDetails = () => {
const {id} =  useParams();
  const pId = products[id - 1];

  return (
    <div className='flex m-3 gap-4'>
      <div><img className='h-120 w-120' src={pId.image} alt="" /></div>
      <div>
        <h3 className='text-xl'>{pId.name}</h3>
        <h5 className='font-bold'>{pId.brand}</h5>
        <p className='font-extralight'>Rating : <span className='font-bold'> {pId.rating}</span></p>

        <hr className='font-light'/>
        <p className='font-bold mt-5'>Price : <span className='font-medium'>{pId.price} INR</span></p>
        <p className='font-bold'>Category : <span className='text-yellow-700'>{pId.category}</span></p>
        <p className='font-bold'>Description : </p>
        <p>{pId.description}</p>
        <p className="text-l font-semibold">Sepcial Features:</p>
        <p>{pId.specialFeature}</p>
        <div className=' mt-3'><button className='py-3 px-10 bg-yellow-500 rounded-xl '>Add to Cart</button>
          
        </div>

      </div>
    </div>
  )
}

export default ProductDetails