import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import Fooditem from '../components/Fooditem'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <CategoryMenu/>
    <Fooditem/>
    <Cart/>
    </div>
  )
}

export default Home
