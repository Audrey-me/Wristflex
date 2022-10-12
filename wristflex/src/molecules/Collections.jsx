import React from 'react'
import Featured from '../components/Featured'
import Festivalsale from '../components/Festivalsale'
import Filter from '../components/Filter'
import Newproduct from '../components/Newproduct'
import Products from '../components/Products'
import Shopbycategories from '../components/Shopbycategories'
import SpecialProduct from '../components/SpecialProduct'
import {watch} from '../data'


const Collections = () => {
  const {heading,subtitle1, subtitle2,image} = watch
  return (
    <div className='container mx-auto mt-20'>
      <div className='flex lg:gap-[2rem] lg:flex-row flex-col-reverse '>
        <div>
          <Shopbycategories />
          <Filter />
          <Newproduct/>
          <Festivalsale />
          <SpecialProduct/>
        </div>
        <div className='lg:w-[73%] mb-8 lg:mb-0'>
          <h1 className='text-[25px] font-[600]'>{heading }</h1>
          <p className='text-black/60 text-[13px]  lg:text-[15px] mb-4 leading-7'>{subtitle1}</p>
          <p className='text-black/60 text-[13px] lg:text-[15px] mb-4 leading-7'>{subtitle2}</p>
          <img src={image.type} alt="arrivalimage" />
          <Featured/>
          <Products/>
        </div>
      </div>
    </div>
  )
}

export default Collections