import React, { useContext } from 'react';
import type { Product } from '../../types/product';
import { motion , AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeProvider';


interface Props {
  products: Product[];
}

const HomeLayout2: React.FC<Props> = ({ products }) => {

    const {theme} = useContext(ThemeContext);
  return (
    <AnimatePresence mode="wait">
    <motion.div
       key={theme}
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
        transition={{ duration: 0.3, ease: "easeOut" }} 
    className="flex min-h-screen bg-gray-900 text-white font-serif font-bold">
      <aside className="w-64 p-6 bg-gray-800 hidden md:block">
        <h2 className="text-xl mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Categories</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-700 p-4 rounded shadow hover:shadow-lg transition"
            >
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-lg">{product.title}</h3>
              <p className="text-sm text-gray-300">{product.description}</p>
              <p className="mt-2 text-yellow-400 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </motion.div>
    </AnimatePresence>
  );
};

export default HomeLayout2;