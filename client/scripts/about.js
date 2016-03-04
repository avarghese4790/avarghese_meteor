Template.about.onRendered(function(){
	$('#aboutme-summary').typed({
	    strings: ["I'm a full stack developer with a passion for design, coding, and creating tangible deliverables through problem solving and creative thinking!"],
	    typeSpeed: 0,
	    loop: false,
	    showCursor: false,
	    startDelay: 3000
	});
});

Template.about.events({
	'click #show-email-btn' : function(){
		$('#my-email').toggleClass('my-email-hidden');
	}
});