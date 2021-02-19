---
title: Home
layout: default
---

<div class="home">

  <h1 class="heading-1 page-heading">Lauren Alyssa Ames is a Writer, Copyeditor and Producer in NYC.</h1>

  <!-- <div class="post-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:</p>
    <ul>
      <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
    </ul>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur:</p>
    <ul>
      <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
    </ul>

    <p>ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div> -->

  {% assign posts = site.posts %}

  {% assign essays = site.posts | where: "categories","Essays" %}
  {% assign humor = site.posts | where: "categories","Humor" %}
  {% assign producing = site.posts | where: "categories","Producing" %}
  {% assign copywriting = site.posts | where: "categories","Copywriting" %}

  <div class="filter-bar">
    <hr>
    <h4 class="heading-4">
      <span class="filter-bar__name filter-bar--active" data="everything">
        Everything<span class="filter-bar__count heading-6">{{posts.size}}</span>
      </span>
      <span class="filter-bar__slash">/</span>
      <span class="filter-bar__name" data="essays">
        Essays<span class="filter-bar__count heading-6">{{essays.size}}</span>
      </span>
      <span class="filter-bar__slash">/</span>
      <span class="filter-bar__name" data="humor">
        Humor<span class="filter-bar__count heading-6">{{humor.size}}</span>
      </span>
      <span class="filter-bar__slash">/</span>
      <span class="filter-bar__name" data="copywriting">
        Copywriting<span class="filter-bar__count heading-6">{{copywriting.size}}</span>
      </span>
      <span class="filter-bar__slash">/</span>
      <span class="filter-bar__name" data="producing">
        Producing<span class="filter-bar__count heading-6">{{producing.size}}</span>
      </span>
    </h4>
    <hr>
  </div>

  {% include post-list.html id="everything" %}

  {% assign posts = essays %}
  {% include post-list.html id="essays" %}

  {% assign posts = humor %}
  {% include post-list.html id="humor" %}
  
  {% assign posts = copywriting %}
  {% include post-list.html id="copywriting" %}
  
  {% assign posts = producing %}
  {% include post-list.html id="producing" %}

</div>
