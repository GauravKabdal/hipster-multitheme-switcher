import React from 'react'
import type { Product } from '../types/product'

interface ProductCardProps{
    key : number
    product : Product
}

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col">
       <img
    src={product.image}
    alt={product.title}
    className="w-full h-40 object-contain mb-2"
  />
  <h2 className="text-base sm:text-lg font-semibold line-clamp-2">
    {product.title}
  </h2>
  <p className="text-sm text-gray-600 mt-auto">${product.price}</p>
        
    </div>
  )
}

export default ProductCard