import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App () {
  const [ products ] = useState( data );
  const [ cart, setCart ] = useState( [] );

  const addItem = item => {
    // Step 1 - Add item functionality. Add given item to cart
    console.log( "item", item );
    setCart( [ ...cart, item ] );
  };
  const removeItem = toBeRemoved => {
    // Stretch - Create a removeItem function with a click of a button
    setCart( cart.filter( item => item.id !== toBeRemoved ) );
  };

  return (
    // Step 3 - Wrap Provider w value and simplify Products route
    <ProductContext.Provider value={ { products, addItem } }>
      <CartContext.Provider value={ { cart, removeItem } }>
        <div className="App">

          <Navigation />
          <Route
            exact path="/"
            component={ Products }
          />
          <Route
            path="/cart"
            component={ ShoppingCart }
          />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}
export default App;
