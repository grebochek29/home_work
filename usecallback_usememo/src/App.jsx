import React, { useCallback, useMemo } from 'react';

const ItemList = ({ items }) => {
  const handleItemClick = useCallback((index) => {
    console.log(`Clicked on item with index: ${index}`);
  }, []);

  const filteredItems = useMemo(() => items.filter(item => item % 2 === 0), [items]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1>Filtered Item List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;
