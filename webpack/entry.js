import React, { Component } from 'react';
import {render} from 'react-dom';
import FilterBar from './components/FilterBar';

class App extends Component {
  render() {
    return (
      <FilterBar/>
    )
  }
}

render(<App />, document.getElementById('root'));
