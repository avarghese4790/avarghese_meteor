Template.resume.helpers({
	'showText' : function(){
		return Session.get('showText');
	}
});

Template.resume.events({
	'click #resume-type' : function(){
		Session.set('showText', !Session.get('showText'));
	},
	'click #resume-expand' : function(){
		$('#resume-text-container .collapse').collapse("show");
	},
	'click #resume-collapse' : function(){
		$('#resume-text-container .collapse').collapse("hide")
	}
});