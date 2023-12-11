import React from 'react';

class Child1 extends React.Component {
  render() {
   const { Child1 } = this.props.data;

    return (
      <div>
        <h2>Child 1</h2>
        <p>{Child1}</p>
      </div>
    );
  }
}

export default Child1;