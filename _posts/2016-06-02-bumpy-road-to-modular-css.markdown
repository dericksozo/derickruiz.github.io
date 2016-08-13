---
layout: post
title: "The bumpy road to modular CSS"
date:   2016-06-02
hasCode: true
regenerate: true
---

The [context before class][class-reunion] style of CSS first conceived by Tantek Celik worked great for static documents that didn't change frequently. But there is a difference between styling a document, a glorified word document, to styling a web application. As the Internet was becoming more of an application platform instead of a document sharing platform, the same methods were no longer up to par and the community began to take note.

Along with trouble in the browsers and the stubborness in the CSS specification writers, the following years would prove to be a bumpy road for CSS that would ultimately lead to something better overall.

## Other problems and CSS gets the blame

After popularization by advocates and websites like CSS Zen Garden, In 2005 CSS began to look like a viable technology to start building websites with. Developers were not trying to experiment with CSS for experimentations sake, they wanted to create websites that worked. They were lured in from tables by the promise that it made creating layouts easier but it seems that promise wasn't living up, at least at first.

After attempting to use CSS for a while in real environments the cracks began to show. Many developers began to post articles about the problems they were experiencing. The blame for this seemed to bounce back and forth between two different things. First, the browsers were blamed for not correctly implementing CSS. Secondly, CSS would be get the blame as a language and how it wasn't up to par.

## The angst against the browsers

Bloggers argued that tables generally had good browser support and it took a lot more work to get things to render correctly with CSS. Those that were in favor of tables weren't against the semantic web, they just wanted something that worked. While developers were ecstatic about CSS at first because it promised to rid tables, global site modification, and gifs for positioning, in reality they realized that CSS doesn't behave the same on the different browsers.

Dave Slusher of the Evil Genius Chronicles[^2] in a short article titled I Hate CSS accurately puts into words the angst that many CSS developers were feeling at the time.

> It’s official, I am fucking sick of CSS and the support thereof of various common web browsers. [...] Guess what, sunshine, when you use tables it actually works and even sometimes across browsers. I’m about this close to backing up entirely to a table driven layout like it used to be and forgetting about the goddamn CSS thing once and for all.

In another post that same year, Franklin Einspruch from artblog.net wrote a blog post with the same name where he said that CSS was a lousy language. He argued that in trying to convert tables to only support tabular data, it made it extremely difficult for developers to create even the simplest of layouts.

> At this point, I've had it with web design. I can script object-oriented PHP to execute a three-table equi-join in MySQL, but I can't make the chicken-plucking right edges line up in a navigation bar in CSS, at least not universally. I have decided that this is not entirely my fault or Bill Gates's. Part of it is that CSS is a lousy language.

One of the biggest things stopping the full adoption of CSS was the lack of browser support. Franklin was partly right about the language being lousy, but that was also because of the browsers.

## The solutions to buggy browsers

The biggest issue driving layouts to render incorrectly was how different browsers interpreted the box model, specifically Internet Explorer. The standard suggests that the width, padding, and border combined be an element's rendered width. The final rendered width of an element could be different than what was specified on the width property if there was padding and a border. Internet Explorer's box model, on the other hand, counted the defined width as the element's rendered width and the padding and border would then be cut into the width instead of expanding the box. Elements in a layout would be wrong width and therefore drop to the bottom if they were floated left and completely break layouts.

The solution to this problem was CSS hacks and they ironically enough became the first shared patterns for the language. Tantek Celik himself, who developed Internet Explorer for Mac, was one of the first to post a solution. His solution took advantage of an error in Internet Explorer's CSS parser. Because CSS parsers just skip declarations they don't understand instead of throwing an exception like most languages, by writing a few characters that the parser couldn't interpret it allowed developers to exploit different parsers to have more control over their websites. The control that should have been given from the first place if the parsers were all implemented according to the standard.

This is how developers dealt with cross-browser CSS for many years. But the thing about CSS hacks though is that once a browser eventually did fix the parsing bug it would cause the CSS to bug out in a different way. Stylesheets had to constantly be maintained as the browsers released fixes.

## The problems of CSS at scale

As early as 2005 Dave Shea himself, the creator of CSS Zen Garden, began to write about the scalability issues with CSS he was running into. In one of the first posts concerning itself with scalability, it marks the first concerns with scalable CSS. In the article Redundancy vs. Dependency[^1], Dave said that eventually CSS forces you to choose between two different styles. In the redundant style, you end up repeating the same styles for similar elements. 3 similar forms on 3 different pages for example would all have their own styles. In the dependent style, the forms would pick up the differences through the cascade. By putting a custom class on a parent or just targeting a custom parent element on that page you could make the necessary changes to that element.

These problems stemmed from styling those elements using the context before class style. The context before class encouraged an extremely defensive style of writing CSS. Developers using it were petrified of other CSS overwriting their styles all the time. To counter this they would scope all of their CSS within an id and call it a module. Also important started being abused.

<pre data-language="CSS"><code data-language="CSS">#myModule #saleModule h3 { }</code></pre>

Back in the days of the table each page was basically an island onto itself. You could style the page however you wanted and it would have no impact on any other pages. After CSS came along people started building their websites with the same mentality. Instead of pages being separate islands, the module id's acted as those islands. Developers wrote CSS like a caniblistic tribe on a sole island defending itself from itself.

## The beginnings of CSS architecture

One important point brought up multiple times in the comments of Dave's Redundancy vs. Dependency article is Object Oriented programming. A lot of the commenters were hinting at extra planning needing to take place for a project and using multiple class names. It was beginning to enter the public conciousness that for developing websites with CSS a new methodolgy was needed. The defensive of island way of writing CSS was no longer working.

The first group to capture and document object oriented principles within CSS was the Russian company Yandex. In 2005, the engineers at Yandex were also beginning to run into CSS scalability issues[^4] similar to the ones Dave Shea wrote about. By the middle of 2006 they were deep into the development of the first version of Yandex.Music. It was a music application that consisted of multiple pages each unlike the other. While at first they following the context before class approach to writing their styles, soon enough they noticed long cascading rules mixing id's and tag name selectors. It ultimately resulted in the code "losing control on so many levels."

The developers at Yandex knew that they needed a different approach to their CSS and so began researching a new methodology to writing CSS that embodied object oriented principles. They called it BEM. BEM stands for Block, Element, Modifier. The most important part of BEM was the block. A block was a part of a page design or layout whose specific and unique meaning was defined either semantically or visually.

By 2007 they presented a polished version of BEM at the ClientSide conference in Moscow, Russia. BEM established a few important rules. Only class names (no ids) should be used for CSS, each block's class name should have a namespace (prefix), and every css rule must belong to a block.

Some developers couldn't get over the aesthetics of the language, but it highlighted extremely important points. Prefixing classes for examples was a way to namespace. BEM used CSS naming conventions as a way to capture the object oriented principles in such a loose and vulnerable language like CSS.

Later Nicole Sullivan with OOCSS as well began advocating a more object oriented approach to building web pages similar to BEM. In her Yahoo Talk in 2008 Nicole suggested starting from styling smallest elements (headers, lists, etc) first before proceeding on to the design the entire page. Even before Brad Frost's Atomic Design, Nicole Sullivan had already suggested something extremely similar.

## Transpilers and making CSS more object oriented.

Although methods like BEM and OOCSS could technically capture object oriented principles due to the nature of CSS it was still very cumbersome and inconvenient. Developers began more loudly calling out for features in the CSS language that would make the language more object oriented.

As early as 2005 developers were already asking for more programming constructs like if-else statements and macros. They were even building CSS preprocessors with PHP for things like colors[^5]. In 2007 David Gauer of ratfactor.com argued that CSS should at least have constants because the constant repetition of things like colors led to hard to read stylesheets.

Many in the W3 had already written a few comments on their mailing list as to why CSS having more programming features is a bad idea. Bert Bos in particular, one of the original creators of CSS, wrote an entire essay in 2008 stating his counter arguments.

Bert Bos' main argument was that adding macros, more programming ability, or constants weren't just redundant, but would also change CSS in ways that would make it unsuitable for its intended audience. Bos didn't want to bring CSS closer to a programming language. He wanted to stricly keep it a visual styling language. He said that although it is possible to implement (Webkit had already implemented an experimental, non-standardized version) that it was best kept out of CSS by implementing it with another language like PHP. So eventually that's what developers turned to.

If you're reading this then CSS variables have already been implemented in CSS4. In the end though, it was transpiling that would provide the features developers desperately wanted. Sass, created in 2007, would go on to be the dominant of them all. In 2011 Sass was included by default with the release of Ruby on Rails 3.1, one of the dominant frameworks for creating the back-end of websites at the time. That helped popularize the framework and raise its status as one of the top CSS transpilers.

## Not yet convinced (CSS Architecture vs Context before Class)

In 2012 Nicolas Gallagher, creator of Normalize.css, posted an essay titled About HTML semantics and front-end architecture to further push against the context before class style that was still quite popular. Nicolas argued that not all semantics need to be content-derived and that developers can leverage the "global" semantics of HTML without confusing their purpose with "local" application-specific semantics that are usually contained in the values of attributes like the class attribute.

Using a CSS architecture like BEM, OOCSS, SMACSS or SuitCSS allows developers to move fast, stay dry, and easily update the website under conditions of uncertainty. That’s a key phrase: conditions of uncertainty. Web applications are always changing due to user feedback, new features, new designs, and new technologies, whereas documents are more likely to stay the same.

## End

CSS went through a huge transition from developers using the context before class style to the modular style, but it in the end it improved the language and websites for everyone.

[class-reunion]: /class-reunion
[^1]: http://mezzoblue.com/archives/2005/01/20/redundancy_v/
[^2]: http://www.evilgeniuschronicles.org/2005/06/12/i-hate-css/
[^3]: http://tech.gaeatimes.com/index.php/archive/i-hate-css-i-hate-hacking-php-hacks/
[^4]: https://www.smashingmagazine.com/2013/02/the-history-of-the-bem-methodology/
[^5]: http://www.barelyfitz.com/projects/csscolor/