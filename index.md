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
      Everything<span class="heading-6">{{posts.size}}</span> / 
      Essays<span class="heading-6">{{essays.size}}</span> /
      Humor<span class="heading-6">{{humor.size}}</span> /
      Copywriting<span class="heading-6">{{copywriting.size}}</span> /
      Producing<span class="heading-6">{{producing.size}}</span>
    </h4>
  </div>

  {% include post-list.html %}

</div>
