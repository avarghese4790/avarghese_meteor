Template.portfolio.events({
	'click .filter' : function(e){
		$('#mix-container').toggleClass('portfolio-items-hidden');
		setTimeout(function(){
			$('#mix-container,.portfolio-items-placeholder').toggleClass('display-none');
		}, 500);
		if($(e.target).attr('data-filter') == 'all'){
			Session.set('portfolio-items','');
		} else {
			var filtered = [];
			Portfolio.find({category: $(e.target).attr('data-filter')}, {sort: {date: -1}}).forEach(function(item){
				filtered.push(item);
			});
			Session.set('portfolio-items', filtered);			
		}
		$('#mix-container,.portfolio-items-placeholder').toggleClass('display-none');
		$('#mix-container').toggleClass('portfolio-items-hidden');
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


Template.portfolio.rendered=function() {
  $('#mix-container').mixItUp();
}
Template.portfolio.destroyed=function() {
  $('#mix-container').mixItUp('destroy',true);
}