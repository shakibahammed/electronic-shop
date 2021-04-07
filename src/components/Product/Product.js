import React from 'react';

const Product = (props) => {
    console.log(props)
    const {name,imageUrl,price} = props.pd
    return (
        <div className="col-md-4 col-sm-12" >
            <img style={{height: '100px'}} src= {imageUrl} alt=""/>
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Product;