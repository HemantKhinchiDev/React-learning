// src/Day7.jsx
import React, { useState } from "react";
import { ShoppingList } from "./ShoppingList";
import { CheckoutCounter } from "./CheckoutCounter";

export const Day7 = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return; // Added simple validation to prevent adding empty items

    const newItem = {
      id: Date.now(),
      name: newItemName,
      isPurchased: false,
    };
    setShoppingList([...shoppingList, newItem]);
    setNewItemName("");
  };

  const handleItemToggle = (id) => {
    setShoppingList(
      shoppingList.map((item) => {
        if (item.id === id) {
          return { ...item, isPurchased: !item.isPurchased };
        }
        return item;
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Shopping List App
        </h1>
        <form
          onSubmit={handleAddItem}
          className="flex items-center space-x-2 mb-6"
        >
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add a new item..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </form>
        <ShoppingList items={shoppingList} onItemToggle={handleItemToggle} />
        <CheckoutCounter />
      </div>
    </div>
  );
};
