Template.user.events({
  'click #logout-btn' : function (e) {
  		e.preventDefault();
  		Meteor.logout();
  		$('#user-modal').modal('hide');
      	Router.go('/');
	}
});

