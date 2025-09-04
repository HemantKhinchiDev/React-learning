export const FruitList = ({ fruits }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Fruit List</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {fruits.map((fruit, index) => (
          <li key={index} className="pl-2">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};
