import React from 'react'
import '../index.css';
import Flex from './ResusableComponents/Flex'
import Column from './ResusableComponents/Column3';

export const Card = () => {
  return (
    <div className='container'>

        <Flex className='flex'>
            <Column> 
            <p> Text 1</p>
            </Column>
            <Column> 
            <p> Text 2</p>
            </Column>
       
            <Column> 
            <p> Text 3</p>
            </Column>

        </Flex>
    </div>
  )
}
export default Card