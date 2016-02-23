Template.blocksControl.events({
	'click #b-ctrl-min-btn' : function(){
		if(!$('#b-ctrl-min-btn i').hasClass('fa-times')){
			$('#b-ctrl').removeClass('b-ctrl-min');
			$('#b-ctrl-min-btn i').removeClass('fa-times').removeClass('fa-plus').addClass('fa-times');
			$('#b-ctrl-min-btn').removeClass('b-ctrl-btn-min');
			$('#b-ctrl-container').removeClass('hide');
		} else {
			$('#b-ctrl').removeClass('b-ctrl-min').addClass('b-ctrl-min');
			$('#b-ctrl-min-btn i').removeClass('fa-times').removeClass('fa-plus');
			$('#b-ctrl-container').removeClass('hide').addClass('hide');
		}
	},
	'keyup input' : function() {
			var blockColor = $('#b-input-blk-color').val();
			var borderRadius = $('#b-input-brdr-radius').val();
			var transition = $('#b-input-trans-time').val();
			blockColor ? $('.b-block').css('background', blockColor) : '';
			borderRadius ? $('.b-block').css('border-radius', borderRadius + 'px') : '';
			transition ? $('.b-block').css('transition', transition + 's') : '';
	}
});