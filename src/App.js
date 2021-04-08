import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import AddProduct from "./components/AddProduct/AddProduct";
import { createContext, useState } from "react";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageProduct from "./components/ManageProduct/ManageProduct";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "yellowgreen",
          padding: "5px",
          color: "whitesmoke",
        }}
      >
        Electronics Shop
      </h1>

      <Router>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/checkOut/:name">
            <CheckOut></CheckOut>
          </PrivateRoute>

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/deals">
            <Home></Home>
          </Route>

          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>

          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
