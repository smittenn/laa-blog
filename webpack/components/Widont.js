import React, { Component } from 'react';

// Re-use regular expressions
const WIDONT_REGEX = /([^\s])\s+([^\s]+)\s*$/
const DASH_REGEX = /-/g

// Predefined replacement options
const REPLACEMENT = {
  space: '\u00a0',
  hyphen: '\u2011'
};

class Widont extends Component {

  constructor(props) {
    super(props);

    this.widonts = document.querySelectorAll('.widont');

    if (this.widonts) {
     this.widonts.forEach(item => {
        this._widontReplace(item);
      });
    }
  }

  _widontReplace(item) {
    if (!item.getAttribute('widont')) {
      // console.log(item.getAttribute('widont'));
      const str = item.innerText;

      const widonted = str.replace(WIDONT_REGEX, function replacer(str, lead, word) {
        // Prefer replacing hyphens inside last word if present
        if (word.indexOf('-') >= 0) {
          return lead + ' ' + word.replace(DASH_REGEX, REPLACEMENT.hyphen)
        }
        return lead + REPLACEMENT.space + word
      });
  
      item.innerText = widonted;
      item.setAttribute('widont', true);
    }
  }

  render() {
    return null
  }
}

export default Widont;
