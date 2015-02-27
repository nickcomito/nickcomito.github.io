---
layout: post
title:  "Working with multiple backgrounds"
date:   2015-02-26
categories: code
---

CSS3 makes it easy for us to add mutiple backgrounds on an element. For example, if you want to add a graphic in front of a background gradient—assuming you're running compass—you can do it like this:

~~~
@include background-image(url('path-to-img.jpg'), linear-gradient(top, #fff, #000));
~~~

Cake. But what if you need to have the background size of the image set to 'cover' and the gradient set to 'contain'? And what if you want the background image position horizontally centered but the gradient somewhere else?

Turns out, all you have to do is specify these rules (separated by commas) in the same order of your background images:

~~~
@include background-size(cover, contain);
@include background-attachment(scroll, fixed);
~~~

The trick is to set any background property in the same order of your multiple background rule.

[This Stack Overflow post](http://stackoverflow.com/questions/11468604/multiple-backgrounds-with-background-size) explains this better.