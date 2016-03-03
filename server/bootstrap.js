if (Meteor.isServer) {
	Meteor.publish("checklist", function () { return Checklist.find({}); });
	Meteor.publish("locations", function () { return Locations.find({}); });
	Meteor.publish("messages", function () { return Messages.find({}); });
	Meteor.publish("portfolio", function () { return Portfolio.find({}); });
	Meteor.publish("resume", function () { return Resume.find({}); });
}