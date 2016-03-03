Template.resumeInteractive.events({
	'click .expand-point' : function(e){
		if(!this._id) {return;}
		Session.set('tl-point-details', Resume.findOne({_id:this._id}));
		$('#tl-point-details').toggleClass('display-none');
		$('#tl-points-container').toggleClass('tl-point-hidden');
		setTimeout(function(){
			$('#tl-points-container').toggleClass('display-none');
			$('#tl-point-details').toggleClass('tl-point-details-hidden');
		}, 500);
		$('html, body').stop().animate({
	        scrollTop: ($('#resume').offset().top)
	    }, 600, 'easeInOutExpo');
	},
	'click .tl-point-rtn' : function(){
		Session.set('tl-point-details', '');
		$('#tl-point-details').toggleClass('tl-point-details-hidden');
		setTimeout(function(){
			$('#tl-points-container').toggleClass('tl-point-hidden display-none');
			$('#tl-point-details').toggleClass('display-none');
		}, 500);
		$('html, body').stop().animate({
	        scrollTop: ($('#resume').offset().top)
	    }, 600, 'easeInOutExpo');
	},
	'click #tl-point-current' : function(){
		Session.set('tl-point-details', '');
		$('#tl-points-container').toggleClass('tl-point-hidden');
		$('#tl-point-current-details').toggleClass('display-none')
		setTimeout(function(){
			$('#tl-points-container').toggleClass('display-none');
			$('#tl-point-current-details').toggleClass('tl-point-current-details-hidden');
		}, 500);
		$('html, body').stop().animate({
	        scrollTop: ($('#resume').offset().top)
	    }, 600, 'easeInOutExpo');
	},
	'click .tl-point-current-rtn' : function(){
		Session.set('tl-point-details', '');
		$('#tl-point-current-details').toggleClass('tl-point-current-details-hidden');
		setTimeout(function(){
			$('#tl-points-container').toggleClass('tl-point-hidden display-none');
			$('#tl-point-current-details').toggleClass('display-none');
		}, 500);
		$('html, body').stop().animate({
	        scrollTop: ($('#resume').offset().top)
	    }, 600, 'easeInOutExpo');
	},
});

Template.resumeInteractive.helpers({
	'education' : function(){
		return Resume.find({category:'education'}, {sort: {from: 1}})
	},
	'timeline' : function(){
		return Resume.find({category:'work'}, {sort: {from: 1}});		
	},
	'isEducation' : function(category){
		return (category == 'education');
	},
	'qualificationHighlights' : function(){
		if(Resume.find({category: 'qualificationHighlights'}).fetch()[0]) {
			return Resume.find({category: 'qualificationHighlights'}).fetch()[0].highlights;	
		}
		return [];
	},
	'technicalSkills' : function(skillCategory){
		if(Resume.find({skillCategory: skillCategory}).fetch()[0]) {
			return Resume.find({skillCategory: skillCategory}).fetch()[0].skills;	
		}
		return [];
	},
	'technicalSkillCategories' : function(){
		if(Resume.find({category: 'technicalSkillCategories'}).fetch()[0]) {
			return Resume.find({category: 'technicalSkillCategories'}).fetch()[0].categories;	
		}
		return [];
	},
	'_from' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').from;}
	},
	'_to' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').to;}
	},
	'_role' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').role;}
	},
	'_company' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').company;}
	},
	'_location' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').location;}
	},
	'_projects' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').projects;}
	},
	'_environment' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').environment;}
	},
	'_highlights' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').highlights;}
	},
	'_imgUrl' : function() {
		if(Session.get('tl-point-details')){return Session.get('tl-point-details').imgUrl;}
	}
});
