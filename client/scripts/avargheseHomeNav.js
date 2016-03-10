Template.avargheseHomeNav.onRendered(function(){
	Session.set('newMessages', (Messages.find({read:false}).count() > 0));
});

Template.avargheseHomeNav.helpers({
	'newMessages': function(){
		return Session.get('newMessages');
	},
	'newMessageCount': function(){
		var count = Messages.find({read:false}).count();
		if(count > 0){ return count;}
	}
});