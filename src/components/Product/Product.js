import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name,imageUrl,price} = props.pd

    const history= useHistory()
    const handleBuyProduct = (name) =>{
        console.log(name)
        history.push(`/checkOut/${name}`)

    }


    return (

        <div className="col-md-4 col-sm-12 products  " >

            <img style={{height: '100px'}} src= {imageUrl} alt=""/>
            <h3>Product :{name}</h3>
            <p> Price:{price}</p>
            <button onClick={ () => handleBuyProduct(name)}>Buy Now</button>
        </div>
    );
};

export default Product;