---
layout: post
title: "Using modelFor correctly in Ember.js"
date:   2016-08-28
hasCode: true
regenerate: true
---

The modelFor method needs the route defined according to its hierarchy. So if router.js looks like the following:

<pre data-language="Javascript"><code data-language="Javascript">Router.map(function() {
  this.route('org', {path: 'org/:id'}, function() {
    this.route('repos');
    this.route('repo', {path: ':repoid'}, function() {
      this.route('issues');
    });
  });
});</code></pre>

Here's how to access repo's model in the `issues` route:

<pre data-language="Javascript"><code data-language="Javascript">model() {
  let repoId = this.modelFor('org.repo').repoid;</code></pre>
<p>The first parameter needs the route according to its position in the hierarchy separated by a period.</p>

Just writing `this.modelFor('repo')` will return undefined because that's not a route specified in the upper most level of the router. It's a child route and must be written out as so.