---
layout: post
title:  "Class Reunion Pt. 1"
subtitle: "or how 3 words by Tantek Celik shaped CSS structure permanently."
date:   2016-05-10
hasCode: true
regenerate: true
---

Open up any web page and take a look at the CSS under the hood. More than likely you'll see CSS structured something like the following:

<pre data-language="CSS"><code>.nav li a {
  background-color: blue;
}

blockquote p {
    font-size: 1em;
}</code></pre>

That CSS looks good, right? But how did that structure get so popular given how open and malleable CSS with classes is?

It turns out that a particular style of CSS encouraged by a few influencers in the field, the connection of semantic HTML to the class attribute, and a few websites encouraging more experimentation with CSS were the primary reason for that style taking such a strong hold.

## In the beginning...

In 2002, Tantek Celik wrote the most influential essay that shaped how web developers write CSS titled A Touch of Class[^1]. Tantek argued that instead of using class names to indicate semantics in HTML to first look for a tag more appropriate than a div or a span. Instead of `<div class='posttitle'>Today's news</div>` to do `<h2>Today's news</h2>`. Adopting this approach made the HTML more semantically rich. Many other influencers in the field were also writing on the topic of Semantic HTML and how that related to writing good classes and CSS styles. In 2004 Eric Meyer in particular with the essay Competent Classing[^2], wrote how some classes are useless and simply bloat the page weight (because the elements can be styled through the hierarchy in place instead). Tantek left a comment[^3] on Eric Meyer's essay that would formalize those ideas and forever leave an imprint on CSS structure.

## Context before class

Three words that beautifully captured the popular ideas of how to write CSS at the time. Context before class says that before using a class name to connect an element to a CSS rule to use the element's context (parent) to construct a selector. Instead of `.nav-link{}` to use `.nav li{}`. Both Tantek and Eric Meyer argued that this approach would reduce page weight by removing unnecessary classes.

<pre data-language="html">
    <code data-language="html">{% capture my_include %}{% include posts/class-reunion/css-example-with-class.html %}{% endcapture %}{{ my_include | xml_escape }}</code>
</pre>

could then become the following:

<pre data-language="html">
    <code data-language="html">{% capture my_include %}{% include posts/class-reunion/css-example-without-classes.html %}{% endcapture %}{{ my_include | xml_escape }}</code>
</pre>

## How did it come to life?

Tantek word's beautifully captured the idea, but how did it come into life? These ideas about CSS were obvious backlashes against the popular table movement just a few years before it. This new movement ushered in by Tantek Celik and Eric Meyer was to bring the web back to its structural roots and guiding principles.

## The guiding principals of the web

The web, created by Tim Berners-Lee, was originally created for structure. It was a science project designed for information organization.[^4] There's a lot of benefits to the structural approach. You have machine readability which leads to better accessibility, better indexing and search engines, and portability to all devices.

<figure><img src="/img/posts/class-reunion/This-is-for-everyone.jpg" alt="A photo of the London Olympics showcasing Tim Berners-Lee's This is for everyone."></figure>

However, that structural purity wasn't what the web was destined for. The web, as was so famously captured in the London Olympics, was given for everyone to use. And it turns out that the best practices for computer scientists aren't necessarily the same for regular people.

## The Table Movement

People wanted the web to be a visual medium. Pretty sites, animated gifs, and places to post photos. Catering to normal people was seen as a competitive advantage for browsers because there's a lot more normal people than there are computer scientists.

Besides browser incompatibility and lack of developer inertia, CSS just wasn't powerful enough to achieve the layouts that designers wanted. It was just good enough for a few text effects and changing colors. The only way to achieve this visual nature was to abuse HTML structure at the time. Hence font tags and inline formatting. The mid 90's HTML was all about presentation.

<figure><img src="/img/posts/class-reunion/creating-killer-websites.jpg"></figure>

The book Creating Killer Web Sites by David Siegel was extremely popular because it helped people achieve that visual medium. It got designers excited about the web. The most important concept expressed in the book was how to use tables and transparent gifs to achieve a grid-based layout that was close to print.

## The meaningless class attribute

In direct contrast to the table movement which abused HTML tags to achieve layout, Ian Hickson, another early web influencer, created a post titled Why Semantic Markup is so Important[^5]. Ian argued that because classes are meaningless (just a space separated list of author defined tokens) they shouldn't be used in the markup at all. Markup was supposed to be pure and since classes didn't mean anything then they shouldn’t be in the markup. It was from this idea that Tantek's Context before Class was birthed. This style of writing HTML and CSS was seen as extremely semantic and on course with the original vision of the web created by Tim Berners-Lee.

## Success but CSS not being adopted yet?

The context before class style of writing CSS and classes was seen as an extreme positive. It maintained the best of the table movement because CSS2 was now as powerful as tables to create the layouts that designers wanted. Also, it was semantic as the original guiding principals of the web had intended.

Despite CSS2 finally achieving the power necessary to create modern layouts the developer inertia still wasn't there and developers were reluctant to hop on the CSS train.

## The road CSS took to prove itself

<figure><img src="/img/posts/class-reunion/daily-css-fun.jpg"></figure>

In late 2001 Chris Casciano posted an influential transitionary post from using tables to taking advantage of the new power of CSS titled Your CSS Bores Me[^6]. He argued that CSS was just as powerful as tables and wondered why designers still weren't taking advantage of it. In response, a lot of designers said they still weren't sure if CSS could do what Chris was claiming. As a result, he created a project called Daily CSS Fun[^7] in 2002 in which every day in the month of February he would post a new redesign of his website by only changing the stylesheet.

In the table movement a few years before, redesigns were extremely tedious. Because the design was very much tied into the markup it required designers to go into the HTML and manually update all the values on every page. By only changing the stylesheet and not any of the markup to achieve his redesigns, Chris was essentially marketing to web developers, "No need to change the markup for presentational changes, just use CSS!". It was to reassure them that they would no longer have to face the great pains of big redesigns.

Because the design was only changed through the stylesheet, consequently the style and structure of the CSS very much resembled Tantek Celik's Context before Class. This would help to further enforce and solidify that style of writing CSS.

## Solidification of style with CSS Zen Garden

<figure><img src="/img/posts/class-reunion/css-zen-garden.jpg"></figure>

In 2003 Dave Shea, the creator of CSS Zen Garden was inspired by Chris Casciano's Daily CSS Fun project and Your CSS Bores Me post to create CSS Zen Garden[^8]. Instead of Dave doing all of the redesigns, as Chris did, he opened it up to the community as a contest. This was huge because many web designers got their start around this period. They learned CSS by experimenting with the layouts presented in the contests and through reading the CSS source code created by other developers.

CSS Zen Garden convinced a lot of developers that CSS was a serious language. It was fun. It was experimental. Just by changing the CSS you could go to a completely different look and feel.

## End

Ultimately Tantek's context before class, the connection of classes to semantic HTML, and CSS proving itself came together to create a system to style pages that worked very well for developers. It finally just began to spread and it became commonplace.

This style of CSS works great for static documents. But there is a difference between styling a document, a glorified word document, to styling a web application. As the internet was becoming more of an application platform instead of a document sharing platform, the same methods were no longer up to par. Except they are still being used as we can see.

<a class="SpecialLink" href="/class-reunion-2">Read Part 2</a>

Thank you for reading.

[^1]: http://tantek.com/log/2002/12.html
[^2]: http://meyerweb.com/eric/thoughts/2004/07/18/competent-classing/
[^3]: http://meyerweb.com/eric/thoughts/2004/07/18/competent-classing/#comment-529
[^4]: https://www.w3.org/Consortium/mission#principles
[^5]: http://ln.hixie.ch/?start=1038263537&order=-1&count=10
[^6]: http://www.chunkysoup.net/opinion/boringcss/
[^7]: https://placenamehere.com/neuralustmirror/200202/
[^8]: http://mezzoblue.com/archives/2003/05/07/css_zen_gard/