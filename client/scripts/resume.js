Template.resume.events({
	'click #resume-expand' : function(){
		$('#resume-text-container .collapse').collapse("show");
	},
	'click #resume-collapse' : function(){
		$('#resume-text-container .collapse').collapse("hide")
	}
});

