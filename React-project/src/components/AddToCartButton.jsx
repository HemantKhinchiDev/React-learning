import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const AddToCartButton = () => {
  const { shoppingCart, setShoppingCart } = useContext(DataContext);
  // myProduct को यहां परिभाषित करें ताकि onClick इसे एक्सेस कर सके
  const myProduct = {
    id: "p1",
    name: "Sample T-Shirt",
    price: 20,
  };
  const addToCart = (product) => {
    const existingItem = shoppingCart.find((item) => item.id === product.id);
    if (existingItem) {
      // अगर आइटम मौजूद है, तो उसकी मात्रा बढ़ाएं
      const updatedCart = shoppingCart.map((item) =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ); // अब नया एरे स्टेट में सेट करें
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([
        ...shoppingCart,
        { ...product, quantity: 1 }, // यहां पुराने आइटम्स और नया आइटम जोड़ें
      ]);
    }
  };
  return (
    <>
      <button
        onClick={() => addToCart(myProduct)}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
      >
        कार्ट में जोड़ें
      </button>
    </>
  );
};
