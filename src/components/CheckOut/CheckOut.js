import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {

    const {name} =useParams()

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    const [ product , setProduct] =useState([])
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])
    const productItem = product.find(pd => pd.name === name);

// console.log(productItem)

const handelOrder = ()=> {

  const completeOrder ={...loggedInUser,...productItem,_id:Math.random(), orderTime: new Date()}
console.log(completeOrder)

  fetch('http://localhost:5000/addedOrder', {
    method: 'POST', 
    headers: {'content-Type':'application/json'},
    body:JSON.stringify(completeOrder)
  })
  .then(res => res.json())
  .then(data =>{
    if(data){
      alert('Your Order Done')
    }
  });

}

    return (
        
        <div>
            <h1>this is checkOut</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Quantity</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{name}</td>
      <td>{productItem && productItem.price}</td>
      <td>{productItem && productItem.quantity}</td>
    </tr>
  </tbody>
</table>

   <button onClick={handelOrder}>Order Confirm</button>

        </div>
    );
};

export default CheckOut;