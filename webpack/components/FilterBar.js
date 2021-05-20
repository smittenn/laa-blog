import React, { Component } from 'react';

import { HEADER_BAR_SELECTOR, HEADER_BAR_HIDDEN } from '../constants';

class FilterBar extends Component {

  constructor(props) {
    super(props);

    this.filterBar = this.props.root;

    this.headerBar = document.querySelectorAll(`.${HEADER_BAR_SELECTOR}`)[0];

    if (this.filterBar) {
      this._gradientOnSticky();
      this._filterItemClick();
      this._onScroll();
      document.addEventListener('scroll', () => this._onScroll());
    }
  }

  _gradientOnSticky() {
    const options = { threshold: [1] };
    
    const observer = new IntersectionObserver( 
      ([e]) => {
        const isSticking = e.intersectionRatio < 1 && e.boundingClientRect.top < 0;
        e.target.toggleAttribute('stuck', isSticking)
      }, options
    );

    observer.observe(this.filterBar);
  }

  _onScroll() {
    if (this.filterBar.getBoundingClientRect().top - this.filterBar.offsetHeight < 0) {
      // this.headerBar.setAttribute('disabled', "");
      this.headerBar.classList.add(HEADER_BAR_HIDDEN);
    } else {
      // this.headerBar.removeAttribute('disabled');
      this.headerBar.classList.remove(HEADER_BAR_HIDDEN);
    }
  }

  _filterItemClick() {
    const filterBarItems = this.props.root.querySelectorAll('.filter-bar__name');
    const postLists = document.querySelectorAll('.post-list');

    Array.prototype.slice.call(postLists).slice(1).forEach(list => { list.style.display = 'none'; })

    filterBarItems.forEach(item => {
      item.onclick = () => {
        this.filterBar.scrollIntoView({ 
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });

        filterBarItems.forEach(item => { item.classList.remove('filter-bar--active') });
        item.classList.add('filter-bar--active');
        const id = item.getAttribute('data');

        Array.prototype.slice.call(postLists).forEach(list => { list.style.display = 'none'; })
        document.getElementById(id).style.display = 'block';
      }
    });
  }

  render() {
    return null
  }
}

export default FilterBar;
