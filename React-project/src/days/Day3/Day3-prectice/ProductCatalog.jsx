import { useState } from "react";

export const ProductCatalog = () => {
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
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}
              {product.price}
            </li>
          );
        })}
      </ul>
      <button onClick={handleSort}>
        Sort by {isAscending ? "Descending" : "Ascending"} Price
      </button>
      ;
    </>
  );
};
