import React, {Component} from "react";
import './components/index.css';
import{
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact'
import Login from './components/Login';
import Product from './components/Product';

class App extends Component{
    render(){
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Product" component={Product} />
                </Switch>
            </Router>
        );
    }
}
export default App;