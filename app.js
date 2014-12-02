var currentActive = '#staden';
var oldHead = 0;
var oldTitle = {};
var oldSlogan = {};

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
};

placeNavBar = function() {
  var pos = 0;
  if ($('#head').innerHeight() - $(window).scrollTop() >= 0) {
    pos = $('#head').innerHeight() - $(window).scrollTop();
  } else {
    pos = 0;
  }
  $('#nav').css('top', pos+'px');
  $('#selBar').css('top', (pos+$('#nav').outerHeight()-4)+'px');
};

$(document).ready(function() {
	//$('#navContent').center();
    oldHead = $('#head').innerHeight();
    $('#head').css('height', $(window).outerHeight());

    oldTitle = $('#title').position();
    oldSlogan = $('#slogan').position();

    $('#title').center().css('top', $(window).outerHeight()/5);
    $('#slogan').center().css('top', $(window).outerHeight()/5+$('#title').outerHeight());

    $('#openBtn').center().css('top', $(window).outerHeight() - $('#openBtn').outerHeight() - 50);
	$(currentActive+'Btn').css('border-width', '4px');
	placeNavBar();
	$('#content').css('margin-top', $('#nav').outerHeight() + 5 + 'px');
	$('#selBar').css({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()});
    $('body').css('overflow', 'hidden');
});

$(window).scroll(function() {
	placeNavBar();
});

$('#openBtn').click(function() {
    $('#openBtn').hide();
    $('#slogan').animate(oldSlogan, 125);
    $('#title').animate(oldTitle, 125, function() {
        $('#head').animate({'height':oldHead}, 175, 'linear', function() {
            placeNavBar();
            $('body').css('overflow', 'auto');
        });
    });
});

$('#stadenBtn').click(function() {
	old = currentActive;
	currentActive = '#staden';
	$('#selBar').animate({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()}, 250);
	$(old).fadeOut(125, function() {
		$('#staden').fadeIn(125);
	});
});

$('#specBtn').click(function() {
	old = currentActive;
	currentActive = '#spec';
	$('#selBar').animate({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()}, 250);
	$(old).fadeOut(125, function() {
		$('#spec').fadeIn(125);
	});
});

$('#omProjBtn').click(function() {
	old = currentActive;
	currentActive = '#omProj';
	$('#selBar').animate({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()}, 250);
	$(old).fadeOut(125, function() {
		$('#omProj').fadeIn(125);
	});
});
