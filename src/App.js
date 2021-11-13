
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';


import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Review from './Pages/Dashboard/Review/Review';

import Home from './Pages/Home/Home/Home';
import ExploreProduct from './Pages/Home/Products/ExploreProducts';

import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import PayNow from './PurchasePage/PayNow/PayNow';
import PurchaseNow from './PurchasePage/PurchaseNow/PurchaseNow';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>


            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/purchasenow/:productId">
              <PurchaseNow />
            </PrivateRoute>
            <PrivateRoute path="/paynow">
              <PayNow />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/exploreproducts">
              <ExploreProduct></ExploreProduct>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
