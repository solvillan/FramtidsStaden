var currentActive = '#staden';
var oldHead = 0;
var oldTitle = {};

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()));
    return this;
};

function placeNavBar() {
    var pos = 0;
    if ($('#head').innerHeight() - $(window).scrollTop() >= 0) {
        pos = $('#head').innerHeight() - $(window).scrollTop();
    } else {
        pos = 0;
    }
    $('#nav').css('top', pos+'px');
    $('#selBar').css('top', (pos+$('#nav').outerHeight()-4));
}

$(document).ready(function() {
	//$('#navContent').center();
    oldHead = $('#head').innerHeight()-50;
    $('#head').css('height', $(window).outerHeight());
    $('#imgBg').css('height', $(window).outerHeight());

    oldTitle = $('#titleBar').position();

    $('#titleBar').center().css('top', $(window).outerHeight()/5);

    $('#openBtn').center().css('top', $(window).outerHeight() - $('#openBtn').outerHeight() - 50);
	placeNavBar();
	$('#content').css('margin-top', $('#nav').outerHeight() + 5);
	$('#selBar').css({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()});
    $('body').css('overflow', 'hidden');
});

$(window).scroll(function() {
	placeNavBar();
});

$('#openBtn').click(function() {
    $('#openBtn').hide();
    $('#titleBar').animate(oldTitle, 150, function() {
        $('#imgBg').show();
        $('#imgBg').animate({'opacity':1}, 250, function() {
            $('#vidBg').hide();
            $('#imgBg').animate({'height':oldHead+20}, 250, 'linear');
            $('#head').animate({'height':oldHead+20}, 250, 'linear', function() {
                placeNavBar();
                $('body').css('overflow', 'auto');
            });
        });
    });
});

$('#stadenBtn').click(function() {
	var old = currentActive;
	currentActive = '#staden';
	$('#selBar').animate({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()}, 250);
	$(old).fadeOut(125, function() {
		$('#staden').fadeIn(125);
	});
});

$('#specBtn').click(function() {
	var old = currentActive;
	currentActive = '#spec';
	$('#selBar').animate({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()}, 250);
	$(old).fadeOut(125, function() {
		$('#spec').fadeIn(125);
	});
});

$('#omProjBtn').click(function() {
	var old = currentActive;
	currentActive = '#omProj';
	$('#selBar').animate({'left':$(currentActive+'Btn').offset().left, 'width':$(currentActive+'Btn').outerWidth()}, 250);
	$(old).fadeOut(125, function() {
		$('#omProj').fadeIn(125);
	});
});
