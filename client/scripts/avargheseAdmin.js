Template.avargheseAdmin.events({
	'click, mousewheel' : function(){
		if($('#bs-navbar').hasClass('in')){
			$('#bs-navbar').collapse('hide');
		}
	}
});