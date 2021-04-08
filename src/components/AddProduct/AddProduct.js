import axios from 'axios';
import React, { useState } from 'react';

import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageUrl,setImageUrl] =useState(null)

    

    // handleImageUpload
    const handleImageUpload = event => {
      console.log(event.target.files[0])
      const imageData = new FormData();
      imageData.set('key','d2b7cc31100497b623f3b21690ff6b96');
      imageData.append('image', event.target.files[0]);
      
      axios.post('https://api.imgbb.com/1/upload',imageData)
      .then(function (response) {
         setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const onSubmit = data =>{
      console.log(data)
      const productDetails = {
          name:data.name,
          imageUrl:imageUrl ,
          price: data.productPrice ,
          quantity: data.productWeight
      }
      const url =`https://aqueous-lake-37138.herokuapp.com/addProduct`
      // console.log(productDetails)
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(productDetails)
      })
      .then(res => console.log('server side response', res))
  
    };

    return (
        <div>
            <h1>this is addProduct</h1>
            
      <form onSubmit={handleSubmit(onSubmit)}>
        
      <input name="name" placeholder="Product Name" ref={register} />
      <br/>
      <input name="productPrice" defaultValue="$" placeholder="Price" type="number" ref={register} />
      <br/>
      <input name="productQuantity" placeholder="quantity" ref={register} />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;