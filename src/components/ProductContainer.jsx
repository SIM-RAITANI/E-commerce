import React from 'react'
import { NavLink } from 'react-router-dom';

function ProductContainer(props) {
  
  
  const p=props.product;
  
  return (
    <div className=' overflow-hidden rounded-xl'>
      <NavLink to={`/product/${p.type}/${p.id}`}><img src={p.prodimage} alt="" className=' w-[250px] h-[250px] cursor-pointer hover:scale-[1.2] hover:animation-scale'/></NavLink>
      
    </div>
  )
}

export default ProductContainer
