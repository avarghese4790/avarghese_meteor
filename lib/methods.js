Meteor.methods({
	exportMessages: function() {
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
		var blob = new Blob([Papa.unparse({fields: fields, data: data})]);
		var a = window.document.createElement("a");
	    a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
	    a.download = "messages_"+moment(new Date()).format("YYYY-MM-DD")+".csv";
	    document.body.appendChild(a);
	    a.click();
	    document.body.removeChild(a);
	},
	removeMessage: function(doc){
		if (!Meteor.userId()) {
	      throw new Meteor.Error("not-authorized");
	    }
		Messages.remove(doc);
	},
	insertMessage: function(doc){
		Messages.insert(doc);
	},
	updateMessage: function(id, doc){
		Messages.update(id, doc);
	},
	insertChecklistItem: function(doc){
		Checklist.insert(doc);
	},
	removeChecklistItem: function(id){
		Checklist.remove({_id:id});
	},
	updateChecklistItem: function(id, doc){
		Checklist.update(id, doc);
	}
});