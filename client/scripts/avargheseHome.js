Template.avargheseHome.onRendered(function(){
	new WOW().init();
	$(window).stellar();	
	$(function(){
		$(window).stellar('refresh');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		setTimeout(function(){
		   $('#loader').addClass('loader-hidden');
		   $('#av-page-wrap').removeClass('av-page-wrap-hidden');
		}, 500);
		setTimeout(function(){
			$('#loader').addClass('display-none');
		}, 800);
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
	},
	'click #copyright-name h4' : function(){
		$('.color-variable').toggleClass('color-primary').toggleClass('color-secondary');
	}
});