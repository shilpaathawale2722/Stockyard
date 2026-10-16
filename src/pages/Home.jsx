import React from 'react'
import {Link} from 'react-router'

const Home = () => {
  return (
    <>
      <div >
        <div className='p-5 mt-5 text-center font-bold text-2xl'>StockYard</div>
        <div className='text-xl p-7 bg-gray-100 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium natus minus, architecto aliquam amet ducimus beatae. Voluptatibus, nam? Perferendis corporis omnis ab id incidunt, commodi repudiandae in eum ipsam nobis sunt repellendus dignissimos ratione. Qui quod earum optio nobis cum rerum enim placeat assumenda officiis adipisci? Dicta, fuga aspernatur.</div>
        <div className='text-center'>
          <Link to="/products"> <button className='bg-gray-500 text-xl p-5'>Explore Products</button></Link>

        </div>
      </div>
    </>
  )
}

export default Home