import React from 'react';

const JSX = () => {
  const myNumber = 1007;
  const myString = 'чото что может быть строкой';

  return (
    <div>
      <h1>React компонент</h1>
      <ul>
        <li>Элемент </li>
      </ul>
      <div>
        <p>данные</p>
        <p>Число: {myNumber}</p>
        <p>Строка: {myString}</p>
      </div>
    </div>
  );
};

export default JSX;