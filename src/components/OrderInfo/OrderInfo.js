import React from 'react';

const OrderInfo = (props) => {
    console.log(props)
    const {name,price,quantity,email,orderTime}=props.buyPd
    return (
        <div> 
            <table class="table">
        
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{price} $</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>{(new Date(orderTime).toDateString('dd/MM/yyyy'))} </td>
          </tr>
        </tbody>
      </table>
            
   
        </div>
    );
};

export default OrderInfo;