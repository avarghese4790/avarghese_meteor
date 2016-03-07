Template.login.events({
  'submit #login-form' : function (e) {
  		e.preventDefault();
	  	var username = $('#login-username').val();
	    var password = $('#login-password').val();
	    Meteor.loginWithPassword(username, password, function(err) {            
            if (Meteor.user()) {
               $('.modal-close-btn').click();
                Router.go('/admin');
            } else {
              var message = "There was an error logging in: <strong>" + err.reason + "</strong>";
              $('#login-message').html(message);
              $('#login-submit-btn').addClass('bounceIn');
    			    $('#login-submit-btn').text('I dont know you...');
    			    $('.login-field').val('');
    			    return false;
          }            
	    });
	},
	'keydown #login-username, keydown #login-password': function() { 
        $('#login-submit-btn').text('Submit');
        $('#login-submit-btn').removeClass('bounceIn');
        $('#login-message').html('');
    }
});

