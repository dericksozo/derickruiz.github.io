---
layout: post
title:  "Custom dots with Owl Carousel 2"
date:   2015-10-07
hasCode: true
regenerate: true
---

Here is how you can get custom dot navigation in with **Owl Carousel 2**.

First create your dots container.

<pre data-language="html">
    <code data-language="html">{% capture my_include %}{% include posts/owl-carousel-custom-dots/1.html %}{% endcapture %}{{ my_include | xml_escape }}</code>
</pre>

Next include this inside of your options object.

<pre data-language="javascript"><code data-language="javascript">owl.owlCarousel({
    dotsContainer: '#carousel-custom-dots'
});
</code></pre>

The following tells Owl Carousel 2 to go to a slide based on the index of the dot that was clicked.

<pre data-language="javascript"><code data-language="javascript">$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});
</code></pre>

That should be all you need to get custom dots up and going with Owl Carousel 2.