---
layout: post
title:  "Codekit Refresh w/ Sass in Drupal"
date:   2012-12-11
categories: code
---

I had a hell of a time getting CodeKit to run smoothly with Sass and Drupal. I finally figured out a solution and wanted to post — hopefully it'll help others.The problem happens because css is being run through Drupal's template engine and is hidden from CodeKit. More specifically, the refreshing is being blocked because of the $styles variable bring printed in the tag of html.tpl.php. I actually don't know the technical details here, but I did find a solution.

My Solution which, by the way, I don't recommended for production is to hard code the full path of compiled CSS in the tag of your html.tpl.php (Drupal 7) or page.tpl.php (Drupal 6). Be sure to keep your $styles variable in the template so the other core stylesheets are included. You may need to clear your cache or refresh your browser, but you should be able to go to your Sass file, make a change, save it and watch the browser (Chrome or Safari – CodeKit doesn't work in Firefox) refresh itself via CodeKit.

You need to turn off CSS caching for this to work. You can keep or remove your stylesheet in your .info file. Both options seemed to refresh properly for me. Before you deploy your site to a live environment, you'll want to be sure to include your css in your .info file and remove the hardcoded CSS from your template file.