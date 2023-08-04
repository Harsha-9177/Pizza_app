import React from 'react'
import Product from './Product'
 import { useState, useEffect,useContext } from 'react'
 import {CartContext} from '../pages/CartContext';
 import {getAllPizzas,getPizzaById} from '../helper';
 const Products = () => {
  // const {name} = useContext(CartContext);
 const [Products1, setProducts] = useState([]);
useEffect(() => {
    setProducts(getAllPizzas())
},[]);
  return (
    <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Products </h1>
        <div className="grid grid-cols-5 my-8 gap-24">
           {
              Products1?.map(Produc => <Product key={Produc._id} Productp={Produc}/>)
           }
            
        </div>
    </div>
  )
}

export default Products;