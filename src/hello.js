import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello, World one zero six</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
export default Hello;