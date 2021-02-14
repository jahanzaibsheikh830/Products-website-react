import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/home'
import About from './components/about'
import Product from './components/product'
import ProductItems from './components/productsItems'
import Navbar from "./components/navbar";
 function RoutesConfig(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/product" component={Product}/>
                    <Route path="/product/:id" component={ProductItems}/>
                    <Route path="*" component={()=><h1>404 Page Not Found</h1>}/>
                </Switch>
            </Router>
        </div>
    );
}
export default RoutesConfig