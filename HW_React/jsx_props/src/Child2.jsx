import React from 'react';

class Child2 extends React.Component {
  render() {
    const { Child2 } = this.props.data;

    return (
      <div>
        <h2>Child 2</h2>
        <p>{Child2}</p>
      </div>
    );
  }
}

export default Child2;