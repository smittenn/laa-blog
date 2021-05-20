import React, { Component, Fragment } from 'react';
import {render} from 'react-dom';

import { WIDONT_SELECTOR, TAKEOVER_SELECTOR, SMART_QUOTES_SELECTOR, FILTER_BAR_SELECTOR } from './constants';

import FilterBar from './components/FilterBar';
import Widont from './components/Widont';
import SmartQuotes from './components/SmartQuotes';
import Takeover from './components/Takeover';

class App extends Component {
  render() {
    return (
      <Fragment>
        {[...document.querySelectorAll(`.${WIDONT_SELECTOR}`)].map(e => ( <Widont root={e}/> ))}
        {[...document.querySelectorAll(`.${TAKEOVER_SELECTOR}`)].map(e => ( <Takeover root={e}/> ))}
        {[...document.querySelectorAll(`.${SMART_QUOTES_SELECTOR}`)].map(e => ( <SmartQuotes root={e}/> ))}
        {[...document.querySelectorAll(`.${FILTER_BAR_SELECTOR}`)].map(e => ( <FilterBar root={e}/> ))}
      </Fragment>
    )
  }
}

render(<App/>, document.getElementById('root'));
