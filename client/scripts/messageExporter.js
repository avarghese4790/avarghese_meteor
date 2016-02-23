MessageExporter = {
	exportAllMessages: function() {
		var self = this;
		Meteor.call("exportAllMessages", function(error, data) {
		if ( error ) {
			alert(error); 
			return false;
		}
		var csv = Papa.unparse(data);
		self.downloadCSV(csv);
		});
	},
 
	downloadCSV: function(csv) {
		var blob = new Blob([csv]);
		var a = window.document.createElement("a");
	    a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
	    a.download = "messages_"+moment(new Date()).format("YYYY-MM-DD")+".csv";
	    document.body.appendChild(a);
	    a.click();
	    document.body.removeChild(a);
	}
}