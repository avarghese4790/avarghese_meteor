Template.contact.events({
  'click #submit-msg-btn' : function (e) {
  	if($('#submit-msg-btn').hasClass('submitted')){ return; }
  	if(!validated()){ return;}
    e.preventDefault();
     $('.contact-field').prop( 'disabled', true);
	 Messages.insert({
	 	name: $('#contact-name').val(),
	 	email: $('#contact-email').val(),
	 	phone: $('#contact-phone').val(),
	 	message: $('#contact-message').val(),
	 	date: new Date()
	 });
	 $('.contact-field').val('');
	 $('#submit-msg-btn').addClass('bounceIn submitted');
	 $('#submit-msg-btn').text('Message Submitted!');
	}
});

Template.contact.onRendered(function(){
    $('#contact-form').validate();
});

function validated() {
	return true;
}