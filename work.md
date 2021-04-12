---
title: Work
date: 2021-02-12 01:56:00 -05:00
permalink: "/work/"
layout: default
---

<div class="work">

  <h1 class="heading-1 page-heading">My Work</h1>

  {% assign posts = site.posts %}

  {% assign essays = site.posts | where: "categories", "Essays" %}
  {% assign humor = site.posts | where: "categories", "Humor" %}
  {% assign producing = site.posts | where: "categories", "Producing" %}
  {% assign copywriting = site.posts | where: "categories", "Copywriting" %}

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
