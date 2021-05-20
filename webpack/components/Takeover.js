import React, { Component } from 'react';

import { TAKEOVER_TRIGGER_SELECTOR, TAKEOVER_TRIGGER_CLOSE, TAKEOVER_OPEN } from '../constants';

class Takeover extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      open: false
    }

    if (this.props.root) {
      this._trigger = document.querySelectorAll(`.${TAKEOVER_TRIGGER_SELECTOR}`)[0];
      this._trigger.addEventListener('click', () => this._toggleOpen());
    }
  }

  _toggleOpen() {
    if (this.state.open) {
      this.setState({ open: false });
      this.props.root.classList.remove(TAKEOVER_OPEN);
      this._trigger.classList.remove(TAKEOVER_TRIGGER_CLOSE);
      // document.body.style.overflow = 'visible';
    } else {
      this.setState({ open: true });
      this.props.root.classList.add(TAKEOVER_OPEN);
      this._trigger.classList.add(TAKEOVER_TRIGGER_CLOSE);
      // document.body.style.overflow = 'hidden';
    }
  }

  render() {
    return null
  }
}

export default Takeover;
