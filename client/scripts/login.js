Template.login.events({
  'submit #login-form' : function (e) {
  		e.preventDefault();
	  	var username = $('#login-username').val();
	    var password = $('#login-password').val();
	    Meteor.loginWithPassword(username, password, function(err) {            
            if (Meteor.user()) {
                var notification = new Notification('Hello', { 
                  body: 'Thanks for logging in '+ Meteor.user().username +'!',
                  icon: 'http://i.imgur.com/teXwGBWh.jpg'
                }); 
                setTimeout(function(){notification.close}, 5000);
               $('.modal-close-btn').click();
                Router.go('/admin');
            } else {
              $('#login-message').html("There was an error logging in: <strong>" + err.reason + "</strong>");
              $('#login-submit-btn').addClass('bounceIn');
    			    $('.login-field').val('');
    			    return false;
          }            
	    });
	},
	'keydown #login-username, keydown #login-password': function() { 
        $('#login-submit-btn').removeClass('bounceIn');
        $('#register-submit-btn').removeClass('bounceIn');
        $('#login-message').html('');
  },
  'click #register-submit-btn' : function(){
      $('#login-message').html('');
      $('#register-submit-btn').removeClass('bounceIn');
      var username = $('#login-username').val();
      var password = $('#login-password').val();
      Accounts.createUser({
            username: username,
            password: password,
            roles:['guest']
      }, function(e1){
        if(e1){
          $('#register-submit-btn').addClass('bounceIn');
          $('#login-message').html("Error registering: <strong>" + e1.reason + "</strong>");
        } else {
          Meteor.loginWithPassword(username, password, function(e2) { 
            if (Meteor.user()) {
              var notification = new Notification('Hello', { 
                body: 'Thanks for registering '+ Meteor.user().username +'!',
                icon: 'http://i.imgur.com/teXwGBWh.jpg'
              }); 
              setTimeout(function(){notification.close}, 5000);
              $('.modal-close-btn').click();
            } else {
                $('#register-submit-btn').addClass('bounceIn');
                $('#login-message').html("There was an error logging in: <strong>" + e2.reason + "</strong>");
            }
          });
        }
      });
  }
});

