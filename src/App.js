import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import AddProduct from './components/AddProduct/AddProduct';


function App() {

  return (
    <div className="App">
 <h1>Electronics Shop</h1>

<Router>
  <Header></Header>

  <Switch>
     <Route path='/home'> 
    <Home></Home>
    </Route>

    <Route path='/order'>
    <Order></Order>
    </Route>

    <Route path="/admin">
    <Admin></Admin>
    </Route>

    <Route path="/login">
    <Login></Login>
   </Route>
   
   <Route exact path='/'>
    <Home></Home>
    </Route> 

    <Route path="/addProduct">
    <AddProduct></AddProduct>
    </Route>
  
    <Route path="*">
           <NoMatch></NoMatch>
     </Route>

  </Switch>
</Router>
      
    </div>
  );
}

export default App;
