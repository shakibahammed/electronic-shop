import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Home = () => {
    const [products,setProducts] =useState([])

    useEffect( () => {
        fetch('https://aqueous-lake-37138.herokuapp.com/products')
        .then( res => res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div className="row ">
            {
                products.map( pd => <Product pd={pd}></Product>)
            }
        </div>
       
    );
};

export default Home;