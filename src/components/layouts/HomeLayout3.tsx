import React, { useContext } from 'react';
import type { Product } from '../../types/product';
import { motion , AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeProvider';
interface Props {
  products: Product[];
}

const HomeLayout3: React.FC<Props> = ({ products }) => {
     const {theme} = useContext(ThemeContext);
  return (
    
    <AnimatePresence mode="wait">
    <motion.div
       key={theme}
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
        transition={{ duration: 0.3, ease: "easeOut" }} 
    className="min-h-screen p-6 bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 text-purple-800 font-pacifico">
      <h1 className="text-3xl mb-8 text-center">Colorful Product Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105"
          >
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl">{product.title}</h3>
            <p className="text-base">{product.description}</p>
            <p className="mt-2 text-pink-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default HomeLayout3;