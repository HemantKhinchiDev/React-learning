export const ShoppingList = ({ items, onItemToggle  }) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => onItemToggle (item.id)}
              style={{
                textDecoration: item.isPurchased ? "line-through" : "none",
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};
