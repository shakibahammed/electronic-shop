import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Home = () => {
    const [products,setProducts] =useState([])

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then( res => res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div className="row">
            {
                products.map( pd => <Product pd={pd}></Product>)
            }
        </div>
       
    );
};

export default Home;