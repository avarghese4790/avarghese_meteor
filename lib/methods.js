if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
		removeMessage: function(doc){
			if (!Meteor.userId()) {
		      throw new Meteor.Error("not-authorized");
		    }
			Messages.remove(doc);
		}
    });
  });
}