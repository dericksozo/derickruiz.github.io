---
title: Volunteer Odyssey
role: [Design, HTML, CSS, Javascript]
devices: true
description: >
  I developed and designed a responsive calendar solution for Volunteer Odyssey during GiveCamp Memphis 2015, a weekend-long volunteer coding event for charities.
index: 1
---

![gif of the calendar][calendar-gif]

During GiveCamp Memphis 2015, a weekend-long event where creators donate their time to nonprofit organizations, I helped design and develop a responsive calendar for Volunteer Odyssey. Sarah Petschonek, the director of Volunteer Odyssey, pitched that she needed a new calendar because the one currently in use wasn't mobile friendly. I jumped on the opportunity to help immediately.

GiveCamp works by having teams do standup meetings every few hours to discuss the status of the project, and where it’s going next. We all chose which organization we wanted to help, formed teams, and headed for the first standup meeting.

![A photo of the first standup meeting at GiveCamp Memphis 2015][givecamp-meeting]

A group of Ruby on Rails programmers and I got together and immediately got to work after the meeting finished. I remember a feeling of bond and happiness between all of us. We were working together for a higher purpose. To create a great calendar that could be accessed on any device by volunteers and organizations alike. It felt refreshing.

![A photo of the team and I at GiveCamp Memphis 2015][givecamp-team]

### The Calendar

We forked a repository on Github named [calagator](https://github.com/calagator/calagator) that already had most of the calendar functionality implemented but was missing a few important features that Sarah needed.

- Recurring Events
- The ability for organizations to log in privately through a URL
- A calendar view

Taking care of the design and implementation of the calendar view was my role.

### The Approach

I chose to start with the table view traditionally associated with calendars for desktop and tablet, and then use CSS to break that table view down into a list for mobile devices while still containing all the necessary information. I chose a list for mobile because I thought volunteers checking the calendar on mobile were probably looking for events happening right now or in the very near future. The list view provides just that.

### The Code and Future

You can see the original website [here][original-website]. You can view all the code that went into the project on Github [here](https://github.com/VolunteerOdyssey/calagator). I am actively working on a redesign for the calendar with Sarah. Below is a gif of the redesign's current status. You can keep up with my efforts on the `css-restructure-and-redesign` branch [here](https://github.com/VolunteerOdyssey/calagator/tree/css-restructure-and-redesign).

![A gif of the redesign of Volunteer Odyssey's calendar][calendar-redesign]

[givecamp-meeting]: /img/work/volunteer-odyssey/givecamp-meeting.jpg
[givecamp-team]: /img/work/volunteer-odyssey/givecamp-team.jpg
[calendar-gif]: /img/work/volunteer-odyssey/calendar.gif
[calendar-redesign]: /img/work/volunteer-odyssey/redesign.gif
[original-website]: http://calendar.volunteerodyssey.com/