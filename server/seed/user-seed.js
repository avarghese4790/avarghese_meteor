if (Meteor.users.find({}).count() === 0) {    	
	var user = {username:"avarghese", password:"password", email:"arunv4700@gmail.com", roles:['admin']};
	var id = Accounts.createUser(user);
	Roles.addUsersToRoles(id, user.roles, 'default-group');
}