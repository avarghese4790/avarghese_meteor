if (Meteor.users.find({}).count() === 0) {    	
		Accounts.createUser({username:"avarghese", password:"password", image:"http://i.imgur.com/teXwGBW.jpg", email:"arunv4700@gmail.com"});
		Accounts.createUser({username:"guest", password:"password", image:"", email:""});
}