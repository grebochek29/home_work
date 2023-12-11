import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

class ParentComponent extends React.Component {
  render() {
    
    const dataForChild1 = {
      Child1: 1,
      
    };

    const dataForChild2 = {
      Child2: 2,
    };

    return (
      <div>
        <Child1 data={dataForChild1} />
        <Child2 data={dataForChild2} />
      </div>
    );
  }
}

export default ParentComponent;