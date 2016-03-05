Template.contact.events({
  	'submit form' : function (e) {
  		e.preventDefault();
	  	if($('#submit-msg-btn').hasClass('submitted')){ return; }
	  	$('#submit-msg-btn').removeClass('animated bounceIn');	    
	    if($('#contact-name').valid() && $('#contact-email').valid() && $('#contact-message').valid()){
		    $('.contact-field').prop( 'disabled', true);
			Meteor.call('insertMessage', {
			 	name: $('#contact-name').val(),
			 	email: $('#contact-email').val(),
				message: $('#contact-message').val(),
				date: new Date(),
				read: false
			});
			Session.set('newMessages', true);
			$('#new-message-count').removeClass('animated flipInX').addClass('animated flipInX');
			$('.contact-field').val('');
			$('#submit-msg-btn').addClass('animated bounceIn submitted');
			$('#submit-msg-btn').text('Message Submitted!');
		}
	}
});

Template.contact.onRendered(function(){
    $('#contact-form').validate();
});