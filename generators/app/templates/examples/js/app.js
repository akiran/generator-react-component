import React from 'react';
import ReactDOM from 'react-dom';
import ReactComponent from '../../src';

class Example extends React.Component {
  render() {
    return (
      <ReactComponent />
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));