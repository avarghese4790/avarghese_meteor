Template.monopolySimulator.events({
	'click #results-clear-btn' : function(){
		console.clear();
		$('#m-results').empty();
	},
	'click #update-params-btn' : function(){
		console.log(Simulator);
	}
});

Template.monopolySimulator.helpers({
	'players': function(){
		return Simulator.players;
	}
});