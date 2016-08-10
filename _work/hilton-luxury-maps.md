---
title: Hilton Luxury Maps
role: [HTML, CSS, Javascript]
devices: true
hasCode: true
description: >
  I developed the interactive maps app to search for Hilton's Conrad and Waldorf Astoria hotels.
index: 5
---

During my time at Hilton Hotels I upgraded the maps for the luxury brands (Conrad and Waldorf Astoria) from a static image based version to a modern version based on Javascript and the Bing Maps API.

### Previous Map

<figure><img src="/img/work/hilton-luxury-maps/old-map.jpg" alt="Photo of the old luxury maps app."></figure>

The old version of the luxury maps was based on images and image maps. It was really inconvenient for the content team because they had to manually place the position of the dot every single time and update the image if something changed. It was really static and involved a lot of labor.

### The new map

<figure><img src="/img/work/hilton-luxury-maps/new-map.jpg" alt="Photo of the new luxury maps I developed."></figure>

I was tasked to be the lead front-end engineer in transforming the old image map based map into a new modern map based on the Bing Maps API. A lot of Hilton's web properties already use the Bing Maps API so we decided to continue using it instead of switching over the Google Maps API specifically for this project.

### Javascript techniques

There are a lot of modern techniques in this app with the CSS and Javascript. Each part of the app from the full navigation, the navigation items (for the different hotel properties), and the popup boxes that show information about a property, are all rendered through templates. I ended up having to create a custom templating language `[[#= #]]` because there were a few conflicts on the server side with using the traditional `<%= %>`.

<pre data-language="html"><code><script class="tmpl ListViewRegionCityTmpl" id="ListViewRegionCityTmpl" type="text/template">
  <li class="ListView--regionCity js-region-city">[[#=locality#]]</li>
</script></code></pre>

This method provided a leaner solution compared to the last one. If there was any new information needed for any parts of the app, the only thing that needed to be updated would be the individual template.

### CSS Techniques

<pre data-language="CSS"><code>.ListViewContainer {
	overflow: auto;
}

.ListView {
	width: 90%;
	margin: 0 auto;
	overflow: hidden;
	padding: 14px 0;
	margin-bottom: 0;
}

.ListView--region {
	margin-bottom: 5px;
	user-select: none;
}</code></pre>

The CSS was just as modular as the Javascript and I based it on modular and scalable techniques. I even [wrote about it](http://google.com/) a while ago. Targeting elements in Javascript is enevitable but to keep things as separated as possible I put custom `.js-` class names on different parts of the app. I used that to target the elements just in case the class names used for styling ever changed.

<pre data-language="HTML"><code><ul class="ListView js-list-view">
  <li class="ListView--region js-list-view-region" data-state="open">
    <span class="ListView--regionName js-region-name">North America</span>
  </li>
</ul>
</code></pre>

### End

This app was completely run on on the front-end and all that was some initial data that would be passed in by the back-end. Ultimately with modern CSS and Javascript techinques and the Bing Maps API, it resulted in a much cleaner app for the people looking for a hotel. Also, the content creators would now only need to enter in structured JSON data instead of having to edit a lot of images (much more room for error).