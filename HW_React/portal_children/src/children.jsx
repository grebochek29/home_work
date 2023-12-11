import React from 'react';

const ParentComponent = (props) => {
  return (
    <div>
      <h1>Родительский компонент</h1>
      <p>Содержимое props.children:</p>
      {props.children}
    </div>
  );
};

// Дочерние компоненты
const ChildComponent1 = () => <p>Дочерний компонент 1</p>;
const ChildComponent2 = () => <p>Дочерний компонент 2</p>;
const ChildComponent3 = () => <p>Дочерний компонент 3</p>;

// Использование
const App = () => {
  return (
    <div>
      <ParentComponent>
        <ChildComponent1 />
        <ChildComponent2 />
        <ChildComponent3 />
      </ParentComponent>
    </div>
  );
};

export default App;