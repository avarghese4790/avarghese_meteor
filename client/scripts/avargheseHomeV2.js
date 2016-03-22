Template.avargheseHomeV2.onRendered(function(){
	Notification.requestPermission(function(status) {});
	new WOW().init();
	$(function(){
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		// $('ul').on('mousemove', function(e){ 
		// 	$(this).children('li').css({'transition': '0s', 'transform: scale(1.1)',
		// 		'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 90 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 90 +'%'
		// 	});
		// });
	});
});

Template.avargheseHome.events({});