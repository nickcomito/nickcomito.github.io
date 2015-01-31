// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
	// Setting the background angle (home page) with a little trig and window size calculation
	// Found a handy JS Fiddle on Stack Overflow: http://bit.ly/1yhjDBA
	var angle = Math.atan2($(window).width(), $(window).height());
  $('.triangle-top-left').css('transform', 'skew(-' + angle + 'rad)');

  $('#menu-toggle').click(function() {
  	$('.primary-nav').toggleClass('show');
  	$(this).toggleClass('show');
	  $(".primary-nav li").velocity("transition.perspectiveDownIn", {stagger: 50, duration: 300});
  });

  $("img.lazy").lazyload({
    effect: "fadeIn"
  });

  $(".trigger-grid-view").click(function() {
    $("figure").addClass("medium");
    $(this).addClass("active");
    $(".trigger-full-view").removeClass("active");
    $("figcaption").hide();
  });

  $(".trigger-full-view").click(function() {
    $("figure").removeClass("medium");
    $(this).addClass("active");
    $(".trigger-grid-view").removeClass("active");
    $("figcaption").show();
  });
})