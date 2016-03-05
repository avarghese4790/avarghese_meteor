Template.avargheseAdmin.onRendered(function(){
	new WOW().init();	  	
	$(window).stellar();
	$(function(){
		$(window).stellar('refresh');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		$(document).scrollTop(0);
		setTimeout(function(){
		   $('#loader').addClass('loader-hidden');
		}, 500);
		setTimeout(function(){
			$('#loader').addClass('display-none');
		}, 800);
	});
});

Template.avargheseAdmin.events({
	'click, mousewheel' : function(){
		if($('#bs-navbar').hasClass('in')){
			$('#bs-navbar').collapse('hide');
		}
	}
});