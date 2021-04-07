import React from 'react';


const Header = () => {
    return (
        
        <div className="container-fluid">
            <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/order">Order</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#"  >Deals</a>
  </li>
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/admin" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/manageProduct">Manage Product</a></li>
            <li><a class="dropdown-item" href="/addProduct">Add Product</a></li>
            
          </ul>
        </li>
</ul>
          
     
        </div>
    );
};

export default Header;