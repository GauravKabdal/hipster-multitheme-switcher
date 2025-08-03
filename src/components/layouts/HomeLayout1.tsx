import React, { useContext } from 'react'
import type { Product } from '../../types/product'
import { ThemeContext } from '../../context/ThemeProvider';
import { themes } from '../../themes/themes';
import ProductCard from '../ProductCard';
import { motion , AnimatePresence } from 'framer-motion';

interface Props {
  products: Product[];
}

const HomeLayout1:React.FC<Props>= ({products}) => {

  const {theme} = useContext(ThemeContext);
  const themeStyles = themes[theme];
  return (
    // <div className={`min-h-screen p-4 sm:p-6 ${themeStyles.background} ${themeStyles.text} ${themeStyles.font}`}>
      <AnimatePresence mode="wait">
      <motion.div
       key={theme}
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`min-h-screen p-6 transition-all duration-500 ${themeStyles.background} ${themeStyles.text} ${themeStyles.font}`}
      >
      <h1 className='text-2xl sm:text-3xl text-center mb-4 sm:mb-6'>
        Minimalist Theme
      </h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product)=>(
          <ProductCard key={product.id} product ={product}/>
        ))}
       </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default HomeLayout1