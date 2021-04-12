import React, { Component } from 'react';

class FilterBar extends Component {

  constructor(props) {
    super(props);

    this.filterBar = document.querySelectorAll('.filter-bar')[0];

    if (this.filterBar) {
      this._gradientOnSticky();
      this._filterItemClick();
    }
  }

  _gradientOnSticky() {
    const options = { threshold: [1] };
    
    const observer = new IntersectionObserver( 
      ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1 && e.boundingClientRect.top < 0),
      options
    );

    observer.observe(this.filterBar);
  }

  _filterItemClick() {
    const filterBarItems = document.querySelectorAll('.filter-bar__name');
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

  _itemClick(e) {
    console.log(e);
  }

  render() {
    return null
  }
}

export default FilterBar;
