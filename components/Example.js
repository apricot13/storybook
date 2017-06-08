import React from 'react';

class Example extends React.Component {
  render() {
    // Any where else
    return <div>
      <input id="increment" value="0" />
      <button class="btn-increment">Increment</button>
      <button class="btn-decrement">Decrement</button>
    </div>
  }
} 

export default Example;