import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Admin = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    return (
        <div>
            <h1>this is admin</h1>
        </div>
    );
};

export default Admin;