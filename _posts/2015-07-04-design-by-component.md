---
layout: post
title:  "Designing by component"
date:   2015-07-04
categories: code
---

<p><strong>"Once upon a time there were these things called books</strong>. They were heavy and awkward and you'd turn the page and it cuts your fingers. It was like an awful invention, I'm so glad they're not around anymore. They're miserable things... Ugh. But this idea: 'the page' has been with us for ages and we carry that into the web and we talk about this on all of our projects: 'how many pages is this site', 'how long is the home page going to take you?', 'We're a university and we have 15 thousand pages' and really this has been our mental model of the web since its inception." —Brad Frost, "Building design systems from Atomic elements" at the 2014 UX immersion conference.</p>
<p>That's Brad Frost introducing atomic design. He then shows this image to the audience:</p>
<figure><img src="https://pbs.twimg.com/media/BwxaMg6CYAAupoH.jpg" alt="" /></p>
<figcaption>(https://twitter.com/lukew/status/507880029737328640)</figcaption>
</figure>
<p>&nbsp;</p>
<p>He goes on to talk about the reality of the web today: tons of devices, all different screen sizes, different input types, different form factors, and he says this idea of a static web page just isn't practical anymore. I completely agree.</p>
<p>So, how are designers currently working around this multi-device reality? How are we communicating this to stakeholders and team members? We're designing mockups of a large home page on a desktop, a medium-sized home page on a desktop, an iPad version in landscape format, an iPad version in portrait mode, a small or mobile version... you get the idea. It's totally inefficient and it's not scalable. This is why atomic design is becoming increasingly important.</p>
<p>Before I go into the details I want to explain what atomic design is because there are different terms being used to describe the same concept. 'Atomic design', the term Brad Frost uses is essentially the process of building a digital product or website in pieces (e.g. the header, the search form, the sidebar call to action). Think about it in terms of legos where you're able to construct things with a box of common and consistent pieces. Here is an <a href="http://ggw-prototype.goalgorilla.com/components/blocks.html" target="_blank&quot;">example of component design</a>.</p>
<p>Personally, I've been eager to design this way for a while now. Conceptually, the process of designing a system with components to assemble a website made perfect sense but I didn't know where to start. It turns out it's pretty hard to shift thinking from designing a web <em>page</em> to its individual parts... Hard, but not impossible. After some extensive research and updating to current systems I recently started designing and coding in this way and the benefits are huge.</p>
<h2>Benefits of component design</h2>
<ul>
<li>Developers have a reliable set of building blocks with which to use to create digital products and time is saved by having styling code clean and organized.</li>
<li>Designers save time by reducing the amount of mockups they have to create in Photoshop or Sketch. They also have the option to design in parts, getting approval on designs quickly and iteratively.</li>
<li>Clients get a front-end <em>system</em> that can scale as their businesses grow.</li>
<li>Everyone experiences products that are faster, more consistent, and enjoyable.</li>
</ul>
<h2>So, what does this process (designing by component) look like?</h2>
<p>At the moment, there are two processes or workflows for designing by component. Certainly there'll be other approaches in the future.</p>
<p>1) The traditional approach: A visual mockup of a page or pages is designed and handed off to a front end developer. The front end developer then reviews those designs and identifies all of the components, the legos that make up the website: the calls to action, the side bar blocks, the navigation, the input fields, etc. She then writes code that creates those components at their most basic elements first and continues until all of the components are complete. She can then assemble and arrange them in a grid to form different layouts and pages.</p>
<p>2) The iterative approach: A designer can create and receive client approval on the components rather than the entire "page". For example, he can simply design a header (logo, navigation, etc.) and then present that component's design to get approval before coding. Once the component's design is approved he can code it himself or pass it along to another developer while he starts designing a new one, say the footer or the home page hero. This process is repeated until all the pieces are finished and "pages" can be assembled.</p>
<h2>You're probably skeptical</h2>
<p>I have explained (roughly) what this process, component design, looks like from an implementation standpoint and I've touted its benefits but I haven't talked much about the challenges or hurdles. I'll explain those now.</p>
<p><strong>Clients</strong>, it's probably daunting to think about how designing a system like this will impact time and therefore budget. The majority of the budget goes to back end development, server architecture, content creation, etc. It sounds nice but it just doesn't seem feasable to spend money on this. Building a product through component design does take more time and therefore more money but, depending on the designer and their familiarity with doing this, it's low.</p>
<p><strong>Agencies</strong>, you'll have the biggest challenge. Building by component is pretty straightfoward; Building the system and workflow around this idea is an investment. Front end developers and designers are going to have to do some research and figure out how they want to set up their system, what they want to call things (sometimes the most challenging), how they want to organize their files and code, and how this fits into their processes.</p>
<p><strong>Production teams</strong>, atomic design is a learning curve. It was for me, at least. We've been building pages for so long so there was a bit of fumbling at the outset. The good news is that the learning curve is pretty short.</p>
<h2>Rest assured</h2>
<p>Building interfaces this way empowers teams and clients to build better and more scalable products and I'm convinced that it'll be the standard way to build user interfaces sooner than later.</p>
<h2>Common questions to component design</h2>
<h4>What is the deliverable?</h4>
<p>Visually, the deliverable is the same as it was before: a website, a digital product, but in the background there's an organized system that is built to last so that products are able to flex and grow. Front end code is organized and built holistically.</p>
<h4>Does component design take more time?</h4>
<p>Yes, but the time can be short depending on the developer. When the design is translated and delivered as an interactive user interface, so is its accompanying front-end style guide–the library of components that make up your digital product. That style guide takes some time to manage and update as the pieces get built but again, it's a short amount of time.</p>
<h4>Can my site still be responsive?</h4>
<p>Absolutely. One of the primary reasons for component design is flexibility. We want to be thinking about how components flex or stretch individually so they fit well when put together.</p>
<h2>Resources &amp; Learning</h2>
<p>I love this stuff. If you have more questions, please give me a shout on the Twitters @nickvcomito or via email at nickcomito at gmail. If you want to do this yourself and don't know where to start, Brad Frost and Anna Debenham (and many others) have put together a bunch of resources for this <a href="http://styleguides.io" target="_blank">here</a>.</p>
