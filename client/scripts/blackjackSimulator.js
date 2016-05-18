Template.blackjackSimulator.onRendered(function(){
	BlackJack.deal();
});

Template.blackjackSimulator.events({
	'click #bs-deal' : function(){
		BlackJack.deal();
	},
	'click #bs-hit' : function(){
		BlackJack.hit('player');
	},
	'click #bs-stand' : function(){
		BlackJack.stand();
	}
});