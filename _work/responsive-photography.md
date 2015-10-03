---
title: Responsive Photography
role: [Design, HTML, CSS, Javascript]
devices: true
hasCode: true
languages: [html]
description: >
  I created a photo blog where the loaded images are just as responsive as the layout.
index: 2
---
![A gif of the responsive layout.][site]

### A backstory
I have a penchant for photography. It's a hobby that I picked up during my year abroad in Tokyo, Japan and I've been in love with it ever since. I wanted to capture the people and my experiences in the city so I picked up a Nikon D5200 at a local electronics store named Yodobashi Camera. I even started my own [street fashion account on instagram](http://instagram.com/misphis) that picked up a few followers.

![A photo of me in Japan holding my camera by the sea.][in-japan-with-camera]

The website came about because I wanted a place to host my best images. But, the web developer inside of me *had* to make this responsive. I needed *responsive* photography.

### What do I mean by responsive photography?

In the gif above I was refreshing the page to get the correctly-sized images to load, but look at what happens when I don't refresh.

![A gif of the correct image sizes loading on mobile, but not desktop or tablet.][images]

The images look bloated and stretched on bigger devices. That's because the browser loads the smallest images it can based on the browser width and pixel density. It saves a lot of bandwith on mobile devices that don't need those extra pixels. Now that's *responsible* responsive design.

### The technique

I am using the new HTML5 picture element to set different images based on media queries. In the layout, there are three total points of reassembly. The first is mobile that lasts until about 768 pixels. From there the tablet layout assembles, and finally the desktop layout starts at around 992 pixels. Since the picture element also supports checking for pixel density, each point of reassemlby had two images to check for. A normal image if the pixel density of the device was one, and a retina image if the pixel density was 2 or higher. Not all browsers support the picture element yet so I also used `picturefill.js` as a polyfill. 

<pre data-language="HTML">
	<code data-language="HTML">
&lt;picture&gt;
    &lt;source srcset="assets/img/cropped-images/vancouver-fashion-week-lg-2x.jpg 2x,
                    assets/img/cropped-images/vancouver-fashion-week-lg.jpg 1x" 
            media="(min-width: 992px)"&gt;
    &lt;source srcset="assets/img/cropped-images/vancouver-fashion-week-sm-2x.jpg 2x,
                    assets/img/cropped-images/vancouver-fashion-week-sm.jpg 1x" 
            media="(min-width: 768px)"&gt;
    &lt;source srcset="assets/img/cropped-images/vancouver-fashion-week-xs-2x.jpg 2x,
                    assets/img/cropped-images/vancouver-fashion-week-xs.jpg 1x" 
            media="(max-width: 767px)"&gt;
    &lt;img srcset="assets/img/cropped-images/vancouver-fashion-week-xs.jpg" alt="Vancouver Fashion Week"&gt;
&lt;picture&gt;
	</code>
</pre>

The images were automatically generated using `grunt` and the `grunt-responsive-images` plugin. Also, in order to get the slick rounded look of the images, I set them to be background-images of the container and hid the image itself once it loaded using a bit of Javascript.

### The code

View the original website [here][original-website], and checkout the Github repository [here][github-repository] for all of the HTML, CSS, and Javascript that went into the project.

[site]: /img/work/responsive-photography/site.gif
[images]: /img/work/responsive-photography/images.gif
[in-japan-with-camera]: /img/work/responsive-photography/in-japan-with-camera.jpg
[github-repository]: https://github.com/itsderick/photography/tree/gh-pages
[original-website]: http://derickruiz.com/photography/