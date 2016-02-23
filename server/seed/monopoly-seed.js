Monopoly.remove({});
if(Monopoly.find().count() === 0){
	Monopoly.insert({
		category: 'player', 
		name: "Arun", 
		balance: 300, 
		position: 0, 
		bankrupt: false
	});
	Monopoly.insert({
		category: 'player', 
		name: "Shawn", 
		balance: 300, 
		position: 0, 
		bankrupt: false
	});
	Monopoly.insert({
		category: 'player', 
		name: "Javier", 
		balance: 300, 
		position: 0, 
		bankrupt: false
	});
	Monopoly.insert({
		category: 'player', 
		name: "Shwetha", 
		balance: 300, 
		position: 0, 
		bankrupt: false
	});
}