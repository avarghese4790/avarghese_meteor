Template.user.events({
  'click #logout-btn' : function (e) {
  		e.preventDefault();
  		Meteor.logout();
      	Router.go('/');
	}
});

