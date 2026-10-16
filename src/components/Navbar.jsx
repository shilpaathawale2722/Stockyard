import React from 'react'
import { Link } from 'react-router';
import { useSelector } from 'react-redux'


const Navbar = () => {
  
  const cart = useSelector((store) => {
    console.log(store);

    return store.cartCounter.count;
  })

  const navbarItems = [
    {
      href: "/", label: "Home"
    },
    {
      href: "/products", label: "Products"
    },
    {
      href: "/cart", label: `Cart ${cart}`
    },
    {
      href: "/about", label: "About"
    }
  ]

  return (
    <>
      <div className='flex justify-between m-2 bg-gray-200 rounded'>
        <div className='bg-black p-4 m-3 text-white'>Stockyard</div>
        <div className='flex'>
          {navbarItems.map((item) => (
            <Link to={item.href} key={item.label}><div className='p-4 bg-gray-300 m-3 rounded-2xl'>{item.label}</div></Link>
          )
          )}
        </div>
      </div>

    </>
  )
}

export default Navbar
