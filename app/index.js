'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <p>Hello, World!</p>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'));

