import { useState } from "react";
import { DataContext } from "./DataContext";

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    // 'provider' का पहला अक्षर बड़ा करें
    <DataContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </DataContext.Provider>
  );
};
