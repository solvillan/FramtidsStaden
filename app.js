var currentActive = '#staden';

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

placeNavBar = function() {
  var pos = 0;
  if ($('#head').innerHeight() - $(window).scrollTop() >= 0) {
    pos = $('#head').innerHeight() - $(window).scrollTop();
  } else {
    pos = 0;
  }
  $('#nav').css('top', pos+'px');
}

$(document).load(function() {
	$('#navContent').center();
	placeNavBar();
});

$(window).scroll(function() {
	placeNavBar();
});

$('#stadBtn').click(function() {
	$(currentActive).fadeOut(125, function() {
		$('#staden').fadeIn(125);
		currentActive = '#staden';
	});
});

$('#specBtn').click(function() {
	$(currentActive).fadeOut(125, function() {
		$('#spec').fadeIn(125);
		currentActive = '#spec';
	});
});

$('#omBtn').click(function() {
	$(currentActive).fadeOut(125, function() {
		$('#omProj').fadeIn(125);
		currentActive = '#omProj';
	});
});