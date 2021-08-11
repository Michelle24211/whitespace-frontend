import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import FashionPage from './pages/FashionPage';
import TentPage from './pages/TentPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ItemPage from './pages/ItemPage';
import ItemDetailPage from './pages/ItemDetailPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import CreateListingPage from './pages/CreateListingPage';

import UserContext from './context/UserContext';
import auth from './models/AuthModel';
import CartPage from './pages/CartPage';
import CartProvider from './context/CartProvider';

import './style/whitespaceLogo.css';
import './style/app.css';

const App: React.FC = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function findUser() {
      await auth
        .isUserLoggedIn()
        .then((resUser) => {
          if (resUser) {
            setUser(resUser);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    findUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <CartProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/item" component={ItemPage} />
            <PrivateRoute
              exact
              path="/item/create-item"
              component={CreateListingPage}
            />
            <Route path="/cart" component={CartPage} />
            <Route path="/accessories" component={AccessoriesPage} />
            <Route path="/fashion" component={FashionPage} />
            <Route path="/tent" component={TentPage} />
            <Route
              exact
              path="/item-detail/:productId"
              component={ItemDetailPage}
            />
            <Route path="/login" component={RegistrationPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </CartProvider>
    </UserContext.Provider>
  );
};

export default App;
