import React from 'react'
import banner1 from './assets/Python-01.jpg'
import Flex from './ResusableComponents/Flex'

export const Banner = () => {
  return (
    <div className='container'>
    <Flex className='flex'>
      <div className='box1'>
        <div className='image_container'>
        <h1>suraod</h1>
        <img src = {banner1}></img>
          
      </div>
      </div>
      <div className='box2'>
        <div className='text-container'>
        <h1>text </h1>
        </div>
      </div>
    </Flex>
  </div>
  )
}
export default Banner