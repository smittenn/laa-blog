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

    if (this.props.root) {
      this.state = {
        text: this.props.root.innerText
      }

      this._widontReplace(this.props.root);
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._widontReplace(this.props.root));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._widontReplace(this.props.root));
  }

  _widontReplace(item) {
    if (!item.getAttribute('widont') && window.innerWidth > 760) {
      const str = this.state.text;

      const replaced = str.replace(WIDONT_REGEX, function replacer(str, lead, word) {
        // Prefer replacing hyphens inside last word if present
        if (word.indexOf('-') >= 0) {
          return lead + ' ' + word.replace(DASH_REGEX, REPLACEMENT.hyphen)
        }
        return lead + REPLACEMENT.space + word
      });
  
      item.innerText = replaced;
      item.setAttribute('widont', true);
    }
  }

  render() {
    return null
  }
}

export default Widont;
