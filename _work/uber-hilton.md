---
title: Uber & Hilton Partnership
role: [HTML, CSS, Javascript]
devices: true
hasCode: true
description: >
  I developed the website showcasing the partnership between Hilton Hotels and Uber.
index: 4
---

During my time as a front-end web developer at Hilton Worldwide, I was assigned as the lead user interface developer for the partnership website between Uber & Hilton.

The website is a one-pager and it had two different functions to take of. If someone went to the website directly it displayed general information about the partnership and links to download the Hilton HHonors App. If someone reached the website through a promotional email, a form popped up and prompted for arrival details at the hotel. An uber would then pick the person up and take them to the hotel.

### The approach

This website was designed mobile first. When I began development I also approached it with mobile first in mind and the CSS reflects that. One of the more interesting parts of this page is the dynamic script that I implemented for responsive images. Some images on the page have a few other attributes that represent the correct image for tablet and desktop. Once the page loaded it would load the correct image in place.

<pre data-language="html"><code><img src="/resources/media/hh/en_US/d3/uber/app-store-desktop.png" data-src-tablet="/resources/media/hh/en_US/d3/uber/app-store-tablet.png" data-src-desktop="/resources/media/hh/en_US/d3/uber/app-store-desktop.png" alt="Download on the App Store"></code></pre>

<pre data-language="javascript"><code>// Param - device:String - Either "desktop" or "tablet"
function replaceImages(device) {
   function capitalizeFirstLetter(string) {
       return string.charAt(0).toUpperCase() + string.slice(1);
   }
   var capitalizedDevice = capitalizeFirstLetter(device);
   [].forEach.call(document.getElementsByTagName('img'), function(image, index) {
       if (!image.dataset) { // IE8, 9, and 10 don't support dataset. Get the attributes directly.
           if (image.getAttribute("data-src-" + device)) {
               image.src = image.getAttribute("data-src-" + device);
           }
       } else if (image.dataset["src" + capitalizedDevice]) { // Every other browser supports dataset.
           image.src = image.dataset["src" + capitalizedDevice];
       }
   });
}

if (window.matchMedia("(min-width:" + desktopSize + ")")) {
   replaceImages("desktop");
} else if (window.matchMedia("(min-width:" + tabletSize + ")")) {
   replaceImages("tablet");
}</code></pre>

Lastly, this page had to dynamically switch views (Info, Form, or Thank you) based on what the back-end passed in a variable in the front-end.

<pre data-language="javascript"><code><script type="text/javascript">var uberInfo = {"viewType":""};</script></code></pre>

And based on that variable and the properties it had, the views were dynamically switched on the load time.