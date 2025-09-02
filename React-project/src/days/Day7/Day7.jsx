// src/Day7.jsx
import React, { useState } from "react";
import { ShoppingList } from "./ShoppingList"; // Sudhaar 1: No curly braces
import { CheckoutCounter } from "./CheckoutCounter"; // Sudhaar 1: No curly braces

export const Day7 = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const handleAddItem = (e) => {
    e.preventDefault();
    const newItemList = {
      id: Date.now(),
      name: newItemName,
      isPurchased: false,
    };
    setShoppingList([...shoppingList, newItemList]);
    setNewItemName("");
  };
  const handleItemToggle = (id) => {
    setShoppingList(
      shoppingList.map((item) => {
        if (item.id === id) {
          return { ...item, isPurchased: !item.isPurchased };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <>
      <h1>My Shopping List App</h1>
      <form onSubmit={handleAddItem}>
        {/* Sudhaar 2: Form ke andar input aur button */}
        <input
          type="text"
          value={newItemName}
          onChange={(e) => {
            // Sudhaar 3 & 4: Sirf setNewItemName ko call karein aur value pass karein
            setNewItemName(e.target.value);
          }}
          placeholder="Add a new item..."
        />
        <button type="submit">Add Item</button>
      </form>
      {/* Sudhaar 5: Logical order mein render */}
      <ShoppingList items={shoppingList} onItemToggle={handleItemToggle} />
      <CheckoutCounter />
    </>
  );
};
