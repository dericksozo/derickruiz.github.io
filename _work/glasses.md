---
title: Glasses.com
role: [HTML, CSS, Javascript]
devices: true
hasCode: true
description: >
  I developed the user interface of Glasses.com's mobile website.
index: 3
---

<figure><img src="/img/work/glasses/home.jpg" alt="A photo of the mobile Glasses.com home page."></figure>

In late 2014 during my time at Lokion, a software agency in Memphis, Glasses.com got in contact with us to develop their mobile website. I was assigned as one of two front-end developers on the project.

### The approach

When Glasses.com contacted us they already had a well established website. They had a fully operational website that was optimized for desktop. Instead of going responsive they decided they wanted an adaptive approach. We decided to build upon what was already there with the desktop version of the website and use Mobify to adapt the website to mobile devices.

### Mobify

<figure><img src="/img/work/glasses/mobify.jpg" alt="A photo of the mobile Glasses.com home page."></figure>

Mobify is a company located in Vancouver, Canada that provides a variety of products focused on mobile and commerce. One of the products they offer is called Progressive Mobile. That product allows websites to adapt themselves to mobile by using the generated DOM that comes from the desktop website, and use it as an API to build the mobile version of the website. The mobile version required entirely different CSS and Javascript to the original desktop site. Using Mobify we were able to separate the desktop and the mobile versions and still use the original data without developing an entirely new API. Win win.

### The website

I was assigned to focus on the home page, cart page, after purchase page, carousels, and the menus.

Since this project was still a traditional web app (in the sense that the pages did a full refresh after clicking a link) we went with jQuery as our library of choice for the user interface. There wasn't a lot of reinventing the wheel for the different UI elements. Mobify themselves already provided a few libraries to use with jQuery. [Bellows](https://github.com/mobify/bellows), for example, is a library that provides a toggleable accordian element.

It was a pretty straightforward project for the most part. The CSS was the part that took the most time. Also, the CSS that we wrote for the mobile version of the website would serve as a foundation for the upcoming desktop redesign that would come later.