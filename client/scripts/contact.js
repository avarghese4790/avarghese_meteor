Template.contact.events({
  'click #submitMessageBtn' : function (e) {
  	if($('#submitMessageBtn').hasClass('submitted')){ return; }
  	if(!validated()){ return;}
    e.preventDefault();
     $('.contact-field').prop( "disabled", true);
	 Messages.insert({
	 	name: $("#contact-name").val(),
	 	email: $("#contact-email").val(),
	 	phone: $("#contact-phone").val(),
	 	message: $("#contact-message").val()
	 });
	 $('.contact-field').val("");
	 $('#submitMessageBtn').addClass('bounceIn submitted');
	 $('#submitMessageBtn').text('Message Submitted!');
	}
});

Template.contact.onRendered(function(){
    $('#contact-form').validate();
});

function validated() {
	console.log("validating");
	return true;
}