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