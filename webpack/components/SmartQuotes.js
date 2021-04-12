import React, { Component } from 'react';


class SmartQuotes extends Component {

  constructor(props) {
    super(props);

    this.smartQuotes = document.querySelectorAll('.smart-quotes');

    if (this.smartQuotes) {
     this.smartQuotes.forEach(item => {
        this._smartQuoteReplace(item);
      });
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
