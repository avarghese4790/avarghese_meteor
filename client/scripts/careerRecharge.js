Template.careerRecharge.onRendered(function(){
	new WOW().init();	  	
	$(function(){
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
        $(document).scrollTop(0);
	});
});