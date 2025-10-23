import React, { useEffect } from 'react'
import { useState } from 'react'
import FoodData from "../data/FoodData"
import { useDispatch,useSelector } from 'react-redux'
import { setCatagory } from '../redux/Slices/CategorySlice'
const CategoryMenu = () => {

const [categories, setCategories] = useState([]);

const listUniqueCategories = () => {
  const uniqueCategories = [...new Set(FoodData.map((food)=>food.category))];
  setCategories(uniqueCategories);
  
};

useEffect(()=>{
  listUniqueCategories();
}, [])

const dispatch = useDispatch();

const selectedCategory = useSelector((state)=> state.category.category);

  return (
    <div className='mx-6 my-4'>
        <h3 className='font-semibold'>Find The Best Food</h3>
        <div className='my-3 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button onClick={()=>dispatch(setCatagory("All"))}  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory==="All" && "bg-green-500 text-white"} `}>All</button>
            {
              categories.map((category,index)=>{
                return (
                  <button onClick={()=>dispatch(setCatagory(category))} key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory===category && "bg-green-500 text-white"} `}>{category}</button>

                )
              })
            }
        </div>
      
    </div>
  )
}

export default CategoryMenu
