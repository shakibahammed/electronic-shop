import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/order">
            Order
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/home">
            Deals
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            to="/admin"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Admin
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <Link class="dropdown-item" to="/manageProduct">
                Manage Product
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/addProduct">
                Add Product
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
