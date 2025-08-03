import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import type { Product } from '../types/product';

import HomeLayout1 from '../components/layouts/HomeLayout1';
import HomeLayout2 from '../components/layouts/HomeLayout2';
import HomeLayout3 from '../components/layouts/HomeLayout3';

const Home = () => {
  const {theme} = useContext(ThemeContext);
  const [products , setProducts] = useState<Product[]>([]);

  useEffect(() => {
  const fetchData =async ()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  fetchData();
  }, [])
  
  if (theme === "Theme1") return <HomeLayout1 products={products} />
  if (theme === "Theme2") return <HomeLayout2 products={products} />
  return <HomeLayout3 products={products}/>
}

export default Home