Template.avargheseHome.onRendered(function(){
	Notification.requestPermission(function(status) {});
	new WOW().init();
	$(window).stellar();	
	$(function(){
		$(window).stellar('refresh');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
	});
	$(document).ready(function(){
		if ($.cookie(Router.current().route.path()+"scroll") !== null) {
    		$(document).scrollTop($.cookie(Router.current().route.path()+"scroll"));
		}
		$(window).on("scroll", function() {
        	$.cookie(Router.current().route.path()+"scroll", $(document).scrollTop());
		});    			
	});

	$('a.scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top)
        }, 600, 'easeInOutExpo');
        event.preventDefault();
	});

    $('.navbar-collapse ul li a').click(function() {       
        $('.navbar-toggle:visible').click();
    });

	$('#login-btn,#login>button.close-btn').click(function(){
		$('.login-field').val('');		
	}); 
});

Template.avargheseHome.events({
	'click, mousewheel' : function(){
		if($('#bs-navbar').hasClass('in')){
			$('#bs-navbar').collapse('hide');
		}
	}
});