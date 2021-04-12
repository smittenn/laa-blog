import React, { Component, Fragment } from 'react';
import {render} from 'react-dom';
import FilterBar from './components/FilterBar';
import Widont from './components/Widont';
import SmartQuotes from './components/SmartQuotes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Widont/>
        <SmartQuotes/>
        <FilterBar/>
      </Fragment>
    )
  }
}

render(<App/>, document.getElementById('root'));
