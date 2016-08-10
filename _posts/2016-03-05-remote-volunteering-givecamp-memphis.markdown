---
layout: post
title:  "Remote Volunteering at GiveCamp Memphis"
date:   2016-03-05
hasCode: true
regenerate: true
headerImage: "/img/posts/remote-volunteering-givecamp-memphis/cover-photo.jpg"
---

Back in 2015 I participated locally at GiveCamp Memphis, a weekend-long event where creators donate their time to nonprofit organizations. I volunteered my web design and front-end web development skills for a local volunteer organization in Memphis called [Volunteer Odyssey](http://volunteerodyssey.com/). I, along with an awesome team of Ruby programmers, built a responsive calendar for them to organize their events. I wrote all about that experience right [here][volunteer-odyssey-work-link].

## How I became a remote volunteer

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/derick-in-japan.jpg" alt="A photo of me in Japan with my friend Ayana."></figure>

That was last year and at this point in February I was traveling around Japan and working remotely as a front-end web developer for Hilton Worldwide. The GiveCamp Memphis event is usually held around late February. I definitely wasn't consciously thinking about participating again because I was traveling and I knew the event was more focused on local participation. I wasn't sure if they'd allow remote volunteers. But, it turns out GiveCamp Memphis was completely cool with it.

One of the Ruby programmers who I worked with last year, Dounan Hu, contacted me and asked if I'd be interested in participating again. Of course I was. And I vlogged the entire experience and put it up on Youtube too.

<a class="SpecialLink" href="https://youtu.be/vJhOHpR680I">Watch Part 1 on Youtube</a>

## The story

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/sarah.jpg" alt="A photo of Sarah Petschonek"></figure>

It turns out that Sarah Petschonek, the founder of Volunteer Odyssey, was participating in the event again. She contacted Josh Lewis, one of the programmers on last year's team, and asked him if it was possible to get the ol' gang back together. He wasn't sure. Two of us weren't even in the country anymore. Dounan Hu was in China working with an educational startup on lessons for high school students, and I was in Japan working remotely for Hilton Worldwide and casually traveling. A digital nomad.

So Josh contacted Dounan and because it fell on a weekend he said he could spare some time. Dounan then contacted me and I also had some time. Honestly, I was actively looking forward to hearing all about the project after a year of it being in production.

## The goal

<figure><img src="/img/work/volunteer-odyssey/givecamp-team.jpg" alt="A photo of the team and I at GiveCamp Memphis 2015"></figure>

After a year of the [calendar][volunteer-odyssey-work-link] we built for Volunteer Odyssey being in production, Sarah noted some bugs that needed to be fixed, usability issues that could be addressed, and new features that she and the community wanted.

As for the features, Sarah wanted a couple of new views on the calandar to make consumption of the information easier. She wanted updates like an indicator on whether an entry had an attachment or not, a week view (which we didn't get to unfortunately), and updates to the month view.

There were a few non-critical bugs like not being able to submit the form without all the fields being filled in. We made some of the more obscure ones optional. Also besides bugs and new features we addressed a lot of usability issues. Some things we fixed include making the entire div clickable on mobile instead of just the link, improved the edit experience for the volunteer organizations that use the app, improved the editor for the form, and more relevant google analytics tracking.

Ultimately I decided that there was enough to tie all of the new features and usability fixes with a new design. I also secretly wanted to design something new, haha.

## How I kept up with the team

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/appear-in.jpg" alt="A photo of the team communicating through appear.in, a video chat web app."></figure>

At this point I was working remotely as a front-end web developer for a while so I was used to a remote environment. For the most part the team kept up with each other on a Slack channel that we created. We also used appear.in, a video chat web app. Despite the fact that I was in Japan and the team was in Memphis, there were no lag issues at all. I very much recommend [appear.in](http://appear.in/) for quick video chats. It's a well built and easy to use web app.

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/periscope.jpg" alt="A photo of the team recording the event using Periscope."></figure>

Things got very interesting when the team decided to stream the main events with Periscope. I was watching live on my iPhone (even though Japan is 14 hours ahead) and it felt like I was right there in the room. Periscope really made the difference in keeping remote volunteering fresh and it created interesting opportunities to engage with the team in more human ways.

<a class="SpecialLink" href="https://youtu.be/Cdhuj_3OyHk">Watch Part 2 on Youtube</a>

## The process

Besides vlogging the time that I was volunteering and working on the web app, I thought it would be a good opportunity for me to document my design process. After I figured out that I would be needing a new design to tie everything together I got to work on the initial mockups.

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/design-process-mockup.jpg" alt="A photo of my approach to mocking up the new design."></figure>

When it comes to designing a user interface I love starting with paper first. I'm the kind of person that can get really obsessive about small details so using paper and a big sharpie marker forces me to focus on the most important parts first. A little thing I learned from one of my favorite books, Getting Real by 37 Signals.

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/design-process-sketch.jpg" alt="A photo of the new design sketched out using the Sketch app."></figure>

After I had a good idea of the main elements I wanted on paper I went directly to Sketch and began mocking everything up. I choose the font Fira Sans as the main font for the project because I thought the open source nature of the font really matched the objectives of Volunteer Odyssey. I spent a bit of time here getting the colors, font spacing, and font sizes right before finally jumping into CSS. Having everything clearly defined in Sketch really made it easy to define sizes in terms of rems.

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/new-design-mobile-optimized.jpg" alt="A photo of the final mobile design in the browser."></figure>

So that's how the final design looks in the browser. One feature that I'm particularly proud of is search. When the search button is clicked it defaults to searching on the type of page you were on (events, organizations, or venues). But you can also click the radio buttons and dynamically switch the form link to search something else. It's something simple, but definitely a usability improvement for the people using the app and trying to find stuff to volunteer for.

<figure><img src="/img/posts/remote-volunteering-givecamp-memphis/search-feature.jpg" alt="A photo of the search feature in a mobile browser."></figure>

<a class="SpecialLink" href="https://youtu.be/pYJ64QEfi6Y">Watch Part 3 on Youtube</a>

## End

Volunteering remotely for GiveCamp Memphis was super fun. I'm really glad that Sarah got the team together and that Dounan and I were able to participate despite the fact that we were half way around the world.

I was already used to working remotely but GiveCamp Memphis' 3 day deadline and using Periscope really spiced things up. The experience definitely wouldn't have been the same if the team wasn't periscoping everything.

Documenting my experience and process with video was really fun too and gave me a third person look at how I like to approach designing user interfaces. I'm looking forward to next year's event.

Thank you for reading.

[volunteer-odyssey-work-link]: http://derickruiz.com/work/volunteer-odyssey
[youtube-part-1]: https://youtu.be/vJhOHpR680I
[youtube-part-2]: https://youtu.be/Cdhuj_3OyHk
[youtube-part-3]: https://youtu.be/pYJ64QEfi6Y
[cover-photo]: /img/posts/remote-volunteering-givecamp-memphis/cover-photo.jpg
[appear-in]: /img/posts/remote-volunteering-givecamp-memphis/appear-in.jpg
[periscope]: /img/posts/remote-volunteering-givecamp-memphis/periscope.jpg
[design-process-sketch]: /img/posts/remote-volunteering-givecamp-memphis/design-process-sketch.jpg
[design-process-mockup]: /img/posts/remote-volunteering-givecamp-memphis/design-process-mockup.jpg
[design-mobile]: /img/posts/remote-volunteering-givecamp-memphis/new-design-mobile-optimized.jpg
[design-tablet]: /img/posts/remote-volunteering-givecamp-memphis/new-design-tablet-optmized.jpg