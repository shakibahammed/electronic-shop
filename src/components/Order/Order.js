import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderInfo from '../OrderInfo/OrderInfo';

const Order = () => {

    const [buyProduct , setBuyProduct] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://aqueous-lake-37138.herokuapp.com/OrderCard?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setBuyProduct(data));
    }, [])

    // useEffect( () =>{
    //     fetch('https://aqueous-lake-37138.herokuapp.com/OrderCard?email='+loggedInUser.email)
    //     .then(res => res.json())
    //     .then(data => setBuyProduct(data))

    // },[loggedInUser.email] )

    return (
        <div>
            <h1>Hi {loggedInUser.displayName} ! You bought {buyProduct.length} product</h1>
            
            {
                buyProduct.map(buyPd => <OrderInfo buyPd={buyPd}></OrderInfo>)
            }

        </div>
    );
};

export default Order;