import React, { Component } from 'react';


class SmartQuotes extends Component {

  constructor(props) {
    super(props);

    if (this.props.root) {
      this._smartQuoteReplace(this.props.root);
    }
  }

  _smartQuoteReplace(item) {
    if (!item.getAttribute('smart-quotes')) {
      const str = item.innerText;

      const smartQuoted = str
      .replace(/'\b/g, "\u2019") // Opening singles
      .replace(/"\b/g, "\u201c") // Opening doubles
      .replace(/\b"/g, "\u201d"); // Closing doubles
  
      item.innerText = smartQuoted;
      item.setAttribute('smartQuotes', true);
    }
  }

  render() {
    return null
  }
}

export default SmartQuotes;
