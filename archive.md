---
layout: default
title: George Leontiev
---


# All Posts #

<ul class="post-list">
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <span class="date">( {{ post.date | date: "%b %Y" }} )</span></li>
{% endfor %}
</ul>

<script src="http://coderwall.com/javascripts/jquery.coderwall.js"></script>
<section class="coderwall" data-coderwall-username="folone" data-coderwall-orientation="horizontal"></section>
