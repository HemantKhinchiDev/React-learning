import { useState } from "react";

export const ProductCatalog = (props) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ]);
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setProducts(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{props.title}</h3>
      <ul className="space-y-4 mb-6">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
            >
              <span className="text-lg font-medium text-gray-700">
                {product.name}
              </span>
              <span className="text-lg font-bold text-blue-600">
                ₹{product.price}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleSort}
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sort by {isAscending ? "Descending" : "Ascending"} Price
      </button>
    </div>
  );
};
