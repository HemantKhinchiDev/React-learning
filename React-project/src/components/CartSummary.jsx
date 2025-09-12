import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const CartSummary = () => {
  // `useContext` से आए ऑब्जेक्ट में से `shoppingCart` को बाहर निकालें
  const { shoppingCart } = useContext(DataContext);

  return (
    <>
      <p>Cart में कुल आइटम्स: {shoppingCart.length}</p>
    </>
  );
};
