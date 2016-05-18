Template.about.onRendered(function(){
	var aboutmeSummary = "I'm a full stack developer with a passion for design, coding, and creating tangible deliverables through problem solving and creative thinking!";
	if (Modernizr.touch){
		$('#aboutme-summary').append(aboutmeSummary)	
	} else {
		$('#aboutme-summary').typed({
		    strings: [aboutmeSummary],
		    typeSpeed: 0,
		    loop: false,
		    showCursor: false,
		    startDelay: 3000
		});
	}
});

Template.about.events({
	'click #show-email-btn' : function(){
		$('#my-email').toggleClass('my-email-hidden');
	}
});