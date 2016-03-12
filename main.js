'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <p>Hello, World!</p>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('container'));

