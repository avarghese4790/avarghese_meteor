Meteor.methods({
	exportAllMessages: function() {		
		var fields = [
			"Name",
			"Email",
			"Message",
			"Date"			
		];
		var data = [];		
		var messages = Messages.find({}).fetch();
		_.each(messages, function(msg) {
			data.push([
				msg.name,
				msg.email,				
				moment(msg.date).format("MM/DD/YY H:mm:ss"),
				msg.message
			]);
		});
		return {fields: fields, data: data};
	},
	removeMessage: function(doc){
		if (!Meteor.userId()) {
	      throw new Meteor.Error("not-authorized");
	    }
		Messages.remove(doc);
	}
});