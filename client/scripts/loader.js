Template.loader.onRendered(function(){
	setTimeout(function(){
	   $('#loader').addClass('loader-hidden');
	   $('#page-wrap').removeClass('page-wrap-hidden');
	}, 500);
	setTimeout(function(){
		$('#loader').addClass('display-none');
	}, 800);
});