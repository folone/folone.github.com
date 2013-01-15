---
layout: default
title: George Leontiev
---


# All Posts #

## Posts in English ##
<ul class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "en" %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> <span class="date">( {{ post.date | date: "%b %Y" }} )</span></li>
  {% endif %}
{% endfor %}
</ul>

## Posts in Russian ##
<ul class="post-list">
{% for post in site.posts %}
  {% unless post.categories contains "en" %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> <span class="date">( {{ post.date | date: "%b %Y" }} )</span></li>
  {% endunless %}
{% endfor %}
</ul>

<script src="http://coderwall.com/javascripts/jquery.coderwall.js"></script>
<section class="coderwall" data-coderwall-username="folone" data-coderwall-orientation="horizontal"></section>
