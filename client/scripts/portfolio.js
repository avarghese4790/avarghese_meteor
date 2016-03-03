Template.portfolio.events({
	'click .filter' : function(e){
		var filtered = [];
		if($(e.target).attr('data-filter') == 'all'){
			filtered = Portfolio.find({}, {sort: {date: -1}}).fetch();
		} else {
			filtered = Portfolio.find({category: $(e.target).attr('data-filter')}, {sort: {date: -1}}).fetch();
		}
		Session.set('portfolio-items', filtered);
		$('html, body').stop().animate({
	        scrollTop: ($('#portfolio').offset().top)
	    }, 600, 'easeInOutExpo');
	}
});

Template.portfolio.helpers({
    'portfolio': function(){
        if(Session.get('portfolio-items')) {
         	return Session.get('portfolio-items');
        }
        return Portfolio.find({}, {sort: {date: -1}});
    }
});