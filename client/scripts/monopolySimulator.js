Template.monopolySimulator.rendered = function() {
	$('.m-draggable').draggable({ containment: "#m-game-details", scroll: false });
};

Template.monopolySimulator.helpers({
	'players' : function() {
		return Monopoly.find({category:'player'});
	},
	'active' : function() {
		return Monopoly.find({category:'player'});
	}

});